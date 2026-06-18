create extension if not exists "uuid-ossp";

create table if not exists public.contact_messages (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  email text not null,
  subject text not null,
  message text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.newsletter_subscribers (
  id uuid primary key default uuid_generate_v4(),
  email text not null unique,
  created_at timestamptz not null default now()
);

create table if not exists public.volunteer_applications (
  id uuid primary key default uuid_generate_v4(),
  full_name text not null,
  email text not null,
  phone text,
  country text,
  skills text,
  interests text,
  availability text,
  motivation text,
  status text not null default 'new',
  created_at timestamptz not null default now()
);

create table if not exists public.event_rsvps (
  id uuid primary key default uuid_generate_v4(),
  event_title text not null,
  full_name text not null,
  email text not null,
  phone text,
  created_at timestamptz not null default now()
);

create table if not exists public.member_profiles (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references auth.users(id) on delete cascade,
  full_name text not null,
  email text not null unique,
  country text,
  skills text,
  bio text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.admin_roles (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references auth.users(id) on delete cascade,
  role text not null check (role in ('super_admin', 'program_manager', 'content_editor', 'volunteer_coordinator')),
  created_at timestamptz not null default now(),
  unique (user_id, role)
);

create table if not exists public.programs (
  id uuid primary key default uuid_generate_v4(),
  slug text not null unique,
  title text not null,
  summary text,
  created_at timestamptz not null default now()
);

create table if not exists public.beneficiary_records (
  id uuid primary key default uuid_generate_v4(),
  reference_code text not null unique,
  full_name text not null,
  program text not null,
  country text,
  case_status text not null default 'active',
  case_notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.contact_messages enable row level security;
alter table public.newsletter_subscribers enable row level security;
alter table public.volunteer_applications enable row level security;
alter table public.event_rsvps enable row level security;
alter table public.member_profiles enable row level security;
alter table public.admin_roles enable row level security;
alter table public.programs enable row level security;
alter table public.beneficiary_records enable row level security;

create or replace function public.has_admin_role(required_role text)
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.admin_roles
    where user_id = auth.uid()
      and (role = required_role or role = 'super_admin')
  );
$$;

create policy "Members can view own profile"
on public.member_profiles for select
using (auth.uid() = user_id or public.has_admin_role('super_admin'));

create policy "Members can update own profile"
on public.member_profiles for update
using (auth.uid() = user_id or public.has_admin_role('super_admin'));

create policy "Admins can manage contact messages"
on public.contact_messages for all
using (public.has_admin_role('content_editor'));

create policy "Volunteer coordinators can manage applications"
on public.volunteer_applications for all
using (public.has_admin_role('volunteer_coordinator'));

create policy "Program managers can manage beneficiary records"
on public.beneficiary_records for all
using (public.has_admin_role('program_manager'));

create policy "Content editors can manage programs"
on public.programs for all
using (public.has_admin_role('content_editor'));

create policy "Service role can insert public forms"
on public.contact_messages for insert
with check (true);

create policy "Service role can insert newsletter subscribers"
on public.newsletter_subscribers for insert
with check (true);

create policy "Service role can insert volunteer applications"
on public.volunteer_applications for insert
with check (true);

create policy "Service role can insert event rsvps"
on public.event_rsvps for insert
with check (true);
