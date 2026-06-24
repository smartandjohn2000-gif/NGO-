-- World Impact Initiative Supabase Schema
-- Run in Supabase SQL editor.

create extension if not exists "pgcrypto";

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null unique,
  full_name text,
  country text,
  profession text,
  bio text,
  role text not null default 'member' check (
    role in ('super_admin', 'program_manager', 'content_editor', 'volunteer_coordinator', 'member')
  ),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.volunteer_applications (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  phone text not null,
  country text not null,
  skills text not null,
  interests text not null,
  availability text not null,
  motivation text not null,
  status text not null default 'new' check (status in ('new', 'reviewing', 'approved', 'archived')),
  created_at timestamptz not null default now()
);

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  inquiry_type text not null check (inquiry_type in ('general', 'donor', 'partnership')),
  routed_email text not null,
  full_name text not null,
  email text not null,
  subject text not null,
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.contact_messages
  add column if not exists inquiry_type text;

alter table public.contact_messages
  add column if not exists routed_email text;

update public.contact_messages
set inquiry_type = coalesce(inquiry_type, 'general'),
    routed_email = coalesce(routed_email, 'info@worldimpactinitiative.org')
where inquiry_type is null
   or routed_email is null;

alter table public.contact_messages
  alter column inquiry_type set default 'general';

alter table public.contact_messages
  alter column routed_email set default 'info@worldimpactinitiative.org';

alter table public.contact_messages
  alter column inquiry_type set not null;

alter table public.contact_messages
  alter column routed_email set not null;

do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'contact_messages_inquiry_type_check'
  ) then
    alter table public.contact_messages
      add constraint contact_messages_inquiry_type_check
      check (inquiry_type in ('general', 'donor', 'partnership'));
  end if;
end
$$;

create table if not exists public.event_rsvps (
  id uuid primary key default gen_random_uuid(),
  event_id text not null,
  full_name text not null,
  email text not null,
  attendees int not null check (attendees > 0 and attendees <= 10),
  notes text,
  created_at timestamptz not null default now()
);

create table if not exists public.newsletter_subscriptions (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  source text not null default 'website',
  created_at timestamptz not null default now()
);

create table if not exists public.member_registrations (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.form_notification_logs (
  id uuid primary key default gen_random_uuid(),
  form_type text not null check (
    form_type in (
      'volunteer_application',
      'contact_message',
      'event_rsvp',
      'newsletter_subscription',
      'member_registration'
    )
  ),
  submission_table text not null,
  submission_id uuid,
  payload jsonb not null,
  delivery_status text not null check (delivery_status in ('sent', 'failed')),
  provider_message_id text,
  error_message text,
  created_at timestamptz not null default now()
);

create table if not exists public.donations (
  id uuid primary key default gen_random_uuid(),
  donor_name text,
  donor_email text not null,
  amount_cents integer not null check (amount_cents > 0),
  currency text not null default 'cad',
  frequency text not null default 'one_time' check (frequency in ('one_time', 'monthly')),
  designation text,
  provider text not null default 'stripe',
  status text not null default 'pending' check (status in ('pending', 'completed', 'failed')),
  stripe_session_id text,
  stripe_payment_intent_id text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.beneficiaries (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  age int,
  gender text,
  location text,
  assigned_program_slug text not null,
  status text not null default 'active',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.beneficiary_case_notes (
  id uuid primary key default gen_random_uuid(),
  beneficiary_id uuid not null references public.beneficiaries(id) on delete cascade,
  note text not null,
  created_by uuid not null references auth.users(id),
  created_at timestamptz not null default now()
);

create or replace function public.handle_profile_update_timestamp()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_profiles_updated_at on public.profiles;
create trigger trg_profiles_updated_at
before update on public.profiles
for each row execute procedure public.handle_profile_update_timestamp();

drop trigger if exists trg_beneficiaries_updated_at on public.beneficiaries;
create trigger trg_beneficiaries_updated_at
before update on public.beneficiaries
for each row execute procedure public.handle_profile_update_timestamp();

drop trigger if exists trg_donations_updated_at on public.donations;
create trigger trg_donations_updated_at
before update on public.donations
for each row execute procedure public.handle_profile_update_timestamp();

create or replace function public.create_profile_for_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name, role)
  values (new.id, new.email, coalesce(new.raw_user_meta_data ->> 'full_name', null), 'member')
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute procedure public.create_profile_for_new_user();

alter table public.profiles enable row level security;
alter table public.volunteer_applications enable row level security;
alter table public.contact_messages enable row level security;
alter table public.event_rsvps enable row level security;
alter table public.newsletter_subscriptions enable row level security;
alter table public.member_registrations enable row level security;
alter table public.form_notification_logs enable row level security;
alter table public.beneficiaries enable row level security;
alter table public.beneficiary_case_notes enable row level security;
alter table public.donations enable row level security;

drop policy if exists "users can read their profile" on public.profiles;
create policy "users can read their profile"
  on public.profiles for select
  using (auth.uid() = id);

drop policy if exists "users can update their profile" on public.profiles;
create policy "users can update their profile"
  on public.profiles for update
  using (auth.uid() = id);

drop policy if exists "service role manages volunteer applications" on public.volunteer_applications;
create policy "service role manages volunteer applications"
  on public.volunteer_applications
  for all
  using (auth.role() = 'service_role')
  with check (auth.role() = 'service_role');

drop policy if exists "service role manages contact messages" on public.contact_messages;
create policy "service role manages contact messages"
  on public.contact_messages
  for all
  using (auth.role() = 'service_role')
  with check (auth.role() = 'service_role');

drop policy if exists "service role manages event rsvps" on public.event_rsvps;
create policy "service role manages event rsvps"
  on public.event_rsvps
  for all
  using (auth.role() = 'service_role')
  with check (auth.role() = 'service_role');

drop policy if exists "service role manages newsletter subscriptions" on public.newsletter_subscriptions;
create policy "service role manages newsletter subscriptions"
  on public.newsletter_subscriptions
  for all
  using (auth.role() = 'service_role')
  with check (auth.role() = 'service_role');

drop policy if exists "service role manages member registrations" on public.member_registrations;
create policy "service role manages member registrations"
  on public.member_registrations
  for all
  using (auth.role() = 'service_role')
  with check (auth.role() = 'service_role');

drop policy if exists "service role manages form notification logs" on public.form_notification_logs;
create policy "service role manages form notification logs"
  on public.form_notification_logs
  for all
  using (auth.role() = 'service_role')
  with check (auth.role() = 'service_role');

drop policy if exists "service role manages donations" on public.donations;
create policy "service role manages donations"
  on public.donations
  for all
  using (auth.role() = 'service_role')
  with check (auth.role() = 'service_role');

drop policy if exists "admin roles manage beneficiaries" on public.beneficiaries;
create policy "admin roles manage beneficiaries"
  on public.beneficiaries
  for all
  using (
    exists (
      select 1 from public.profiles p
      where p.id = auth.uid()
      and p.role in ('super_admin', 'program_manager')
    )
  )
  with check (
    exists (
      select 1 from public.profiles p
      where p.id = auth.uid()
      and p.role in ('super_admin', 'program_manager')
    )
  );

drop policy if exists "admin roles manage beneficiary case notes" on public.beneficiary_case_notes;
create policy "admin roles manage beneficiary case notes"
  on public.beneficiary_case_notes
  for all
  using (
    exists (
      select 1 from public.profiles p
      where p.id = auth.uid()
      and p.role in ('super_admin', 'program_manager', 'volunteer_coordinator')
    )
  )
  with check (
    exists (
      select 1 from public.profiles p
      where p.id = auth.uid()
      and p.role in ('super_admin', 'program_manager', 'volunteer_coordinator')
    )
  );
