-- World Impact Initiative — Supabase schema
-- Run with: supabase db reset --linked
--
-- This schema covers:
--   * Roles / profiles (volunteer, donor, partner, super_admin, program_manager,
--     content_editor, volunteer_coordinator)
--   * Volunteer submissions
--   * Contact messages
--   * Event RSVPs
--   * Newsletter subscribers
--   * Beneficiaries (admin-only)
--   * Program assignments + case notes
--   * Donations log
--   * Audit log
--
-- Row-Level Security (RLS) is enabled. Service role can bypass RLS server-side
-- if needed for admin operations.

-- ====================================================================
-- 1. Roles enum + profiles
-- ====================================================================
do $$ begin
  create type wii_role as enum (
    'guest',
    'volunteer',
    'donor',
    'partner',
    'alumni',
    'volunteer_coordinator',
    'content_editor',
    'program_manager',
    'super_admin'
  );
exception when duplicate_object then null; end $$;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  avatar_url text,
  country text default 'Canada',
  bio text,
  visibility boolean not null default true,
  role wii_role not null default 'guest',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, role)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', null),
    'volunteer'::wii_role
  )
  on conflict (id) do nothing;
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

alter table public.profiles enable row level security;

drop policy if exists "Profiles are viewable by everyone (when visible)" on public.profiles;
create policy "Profiles are viewable by everyone (when visible)"
  on public.profiles for select using (visibility = true);

drop policy if exists "Users can view their own profile" on public.profiles;
create policy "Users can view their own profile"
  on public.profiles for select using (auth.uid() = id);

drop policy if exists "Users can update their own profile" on public.profiles;
create policy "Users can update their own profile"
  on public.profiles for update using (auth.uid() = id);

-- Helper: check if current user has any of given roles
create or replace function public.has_role(roles wii_role[])
returns boolean as $$
  select exists(
    select 1 from public.profiles
    where id = auth.uid() and role = any(roles)
  );
$$ language sql stable security definer;

-- ====================================================================
-- 2. Volunteer submissions
-- ====================================================================
create table if not exists public.volunteer_submissions (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  phone text,
  country text not null,
  skills text,
  interests text[],
  availability text not null,
  motivation text not null,
  consent boolean not null default false,
  status text not null default 'pending',
  created_at timestamptz not null default now()
);

alter table public.volunteer_submissions enable row level security;

drop policy if exists "Anyone can submit a volunteer application" on public.volunteer_submissions;
create policy "Anyone can submit a volunteer application"
  on public.volunteer_submissions for insert with check (true);

drop policy if exists "Coordinators and admins can read volunteer submissions" on public.volunteer_submissions;
create policy "Coordinators and admins can read volunteer submissions"
  on public.volunteer_submissions for select using (
    public.has_role(array['volunteer_coordinator','program_manager','super_admin']::wii_role[])
  );

drop policy if exists "Coordinators and admins can update volunteer submissions" on public.volunteer_submissions;
create policy "Coordinators and admins can update volunteer submissions"
  on public.volunteer_submissions for update using (
    public.has_role(array['volunteer_coordinator','program_manager','super_admin']::wii_role[])
  );

-- ====================================================================
-- 3. Contact messages
-- ====================================================================
create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  organization text,
  subject text not null,
  message text not null,
  status text default 'new',
  created_at timestamptz not null default now()
);

alter table public.contact_messages enable row level security;

drop policy if exists "Anyone can submit contact messages" on public.contact_messages;
create policy "Anyone can submit contact messages"
  on public.contact_messages for insert with check (true);

drop policy if exists "Admins can read contact messages" on public.contact_messages;
create policy "Admins can read contact messages"
  on public.contact_messages for select using (
    public.has_role(array['program_manager','super_admin']::wii_role[])
  );

-- ====================================================================
-- 4. Event RSVPs
-- ====================================================================
create table if not exists public.event_rsvps (
  id uuid primary key default gen_random_uuid(),
  event_slug text not null,
  name text not null,
  email text not null,
  guests integer not null default 1,
  phone text,
  notes text,
  created_at timestamptz not null default now()
);

alter table public.event_rsvps enable row level security;

drop policy if exists "Anyone can RSVP" on public.event_rsvps;
create policy "Anyone can RSVP"
  on public.event_rsvps for insert with check (true);

drop policy if exists "Admins can view RSVPs" on public.event_rsvps;
create policy "Admins can view RSVPs"
  on public.event_rsvps for select using (
    public.has_role(array['volunteer_coordinator','program_manager','super_admin']::wii_role[])
  );

-- ====================================================================
-- 5. Newsletter subscribers
-- ====================================================================
create table if not exists public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  source text default 'website',
  created_at timestamptz not null default now()
);

alter table public.newsletter_subscribers enable row level security;

drop policy if exists "Anyone can subscribe" on public.newsletter_subscribers;
create policy "Anyone can subscribe"
  on public.newsletter_subscribers for insert with check (true);

drop policy if exists "Admins can read subscribers" on public.newsletter_subscribers;
create policy "Admins can read subscribers"
  on public.newsletter_subscribers for select using (
    public.has_role(array['content_editor','program_manager','super_admin']::wii_role[])
  );

-- ====================================================================
-- 6. Beneficiaries (admin-only)
-- ====================================================================
create table if not exists public.beneficiaries (
  id uuid primary key default gen_random_uuid(),
  reference_code text unique,
  display_name text not null,
  date_of_birth date,
  gender text,
  location text,
  notes text,
  status text default 'active',
  primary_program_slug text,
  consent_on_file boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.beneficiaries enable row level security;

drop policy if exists "Admins can read beneficiaries" on public.beneficiaries;
create policy "Admins can read beneficiaries"
  on public.beneficiaries for select using (
    public.has_role(array['program_manager','super_admin']::wii_role[])
  );

drop policy if exists "Program managers can manage beneficiaries" on public.beneficiaries;
create policy "Program managers can manage beneficiaries"
  on public.beneficiaries for all using (
    public.has_role(array['program_manager','super_admin']::wii_role[])
  );

create table if not exists public.program_assignments (
  id uuid primary key default gen_random_uuid(),
  beneficiary_id uuid not null references public.beneficiaries(id) on delete cascade,
  program_slug text not null,
  enrolled_at timestamptz not null default now(),
  status text default 'active',
  notes text
);

alter table public.program_assignments enable row level security;
drop policy if exists "Program managers can manage assignments" on public.program_assignments;
create policy "Program managers can manage assignments"
  on public.program_assignments for all using (
    public.has_role(array['program_manager','super_admin']::wii_role[])
  );

create table if not exists public.case_notes (
  id uuid primary key default gen_random_uuid(),
  beneficiary_id uuid not null references public.beneficiaries(id) on delete cascade,
  author_id uuid references auth.users(id) on delete set null,
  body text not null,
  visibility text default 'team',
  created_at timestamptz not null default now()
);

alter table public.case_notes enable row level security;
drop policy if exists "Program managers can read case notes" on public.case_notes;
create policy "Program managers can read case notes"
  on public.case_notes for select using (
    public.has_role(array['program_manager','super_admin']::wii_role[])
  );
drop policy if exists "Program managers can write case notes" on public.case_notes;
create policy "Program managers can write case notes"
  on public.case_notes for insert with check (
    public.has_role(array['program_manager','super_admin']::wii_role[])
  );

-- ====================================================================
-- 7. Donations log (mirror from CharitableImpact)
-- ====================================================================
create table if not exists public.donations (
  id uuid primary key default gen_random_uuid(),
  donor_email text,
  donor_name text,
  amount_cents integer not null,
  currency text default 'CAD',
  recurring boolean default false,
  campaign text,
  external_id text,
  created_at timestamptz not null default now()
);

alter table public.donations enable row level security;
drop policy if exists "Admins can read donations" on public.donations;
create policy "Admins can read donations"
  on public.donations for select using (
    public.has_role(array['program_manager','super_admin']::wii_role[])
  );

-- ====================================================================
-- 8. Audit log
-- ====================================================================
create table if not exists public.audit_log (
  id bigserial primary key,
  actor_id uuid references auth.users(id) on delete set null,
  action text not null,
  entity_type text not null,
  entity_id text,
  metadata jsonb,
  created_at timestamptz not null default now()
);

alter table public.audit_log enable row level security;
drop policy if exists "Admins can read audit log" on public.audit_log;
create policy "Admins can read audit log"
  on public.audit_log for select using (
    public.has_role(array['super_admin']::wii_role[])
  );
