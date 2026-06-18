# World Impact Initiative — Website

A professional, modern, fully responsive Canadian nonprofit NGO website for **World Impact Initiative** (worldimpactinitiative.org), built with Next.js 16, TypeScript, Tailwind CSS v4, Framer Motion, and Supabase.

## Tech stack

- **Next.js 16** (App Router, React 19, Turbopack build)
- **TypeScript**
- **Tailwind CSS v4** (with custom brand palette in `globals.css`)
- **Framer Motion** for accessible reveals/staggers
- **Lucide React** for icons (with custom social SVGs)
- **Supabase** (`@supabase/ssr`) for auth + database
- **Zod** for server-side input validation

## Features

### Marketing site
- Home, About (founder story + inspirations timeline + values), Programs landing + 6 program detail pages, Gallery (filters + lightbox + pagination), Blog/News (search + categories + newsletter signup), Blog post pages, Events (upcoming + past + RSVP form), Volunteer (full registration form), Donate (CharitableImpact integration), Contact (form, map, socials).
- Sticky responsive header with mobile hamburger menu, animated transitions, skip-to-content, accessible focus rings.

### Membership portal
- Register, login, dashboard, member directory, resource center.
- Powered by Supabase Auth (email + password). Falls back to a clean demo mode when env vars aren't configured.

### Admin console (`/admin`)
- Dashboard, Beneficiary database, Volunteer submissions, Programs, Events, Users & Roles, Settings.
- Roles enum: `super_admin`, `program_manager`, `content_editor`, `volunteer_coordinator`, `volunteer`, `donor`, `partner`, `alumni`.

### SEO
- Per-page metadata, Open Graph, Twitter cards.
- `sitemap.ts` and `robots.ts`.
- NGO Organization JSON-LD (root layout) + per-article NewsArticle JSON-LD.

### Backend
- API routes: `/api/volunteer`, `/api/contact`, `/api/newsletter`, `/api/events/rsvp` — all validated with Zod.
- Forms gracefully degrade to console logging when Supabase isn't configured, so you can preview the site without setting anything up.
- Full Postgres schema with RLS policies in `supabase/schema.sql`:
  - `profiles`, `volunteer_submissions`, `contact_messages`, `newsletter_subscribers`, `event_rsvps`, `beneficiaries`, `program_assignments`, `case_notes`, `donations`, `audit_log`.

## Getting started

```bash
npm install
cp .env.example .env.local      # then fill in NEXT_PUBLIC_SUPABASE_URL + NEXT_PUBLIC_SUPABASE_ANON_KEY
npm run dev
```

Visit `http://localhost:3000`.

### Provisioning Supabase

1. Create a new project at [supabase.com](https://supabase.com).
2. Copy the project URL and `anon` public key into `.env.local`.
3. Open the SQL editor and run `supabase/schema.sql` (creates all tables, the `wii_role` enum, RLS policies, and an auth-trigger that auto-creates a profile on signup).
4. (Optional) Promote your first super admin from the Supabase SQL editor:

```sql
update public.profiles set role = 'super_admin' where id = '<your-user-id>';
```

## Brand system

Defined in `src/app/globals.css`:

- Deep Blue `#0F4C81` — `bg-brand-800`
- Gold accent `#F4B400` — `bg-gold-400`
- Light gray `#F7F9FC` — `bg-ink-50`
- Display font: **Plus Jakarta Sans**; body: **Inter**

## Scripts

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run start` — run prod build
- `npm run lint` — eslint

## Project structure

```
src/
  app/                 — App Router pages, layouts, route handlers
    api/               — Server-side endpoints
    admin/             — Admin console (sidebar layout)
    membership/        — Member portal (login, register, dashboard, etc.)
    programs/          — Program landing + dynamic detail
    blog/              — Blog index + post detail
    ...
  components/
    home/              — Hero, ImpactAreas, WhoWeAre, MissionVision, CallToAction
    layout/            — Header, Footer, Logo
    ui/                — Button, PageHero, SectionHeading, Container
    motion/            — Reveal helpers
    icons/             — Custom social SVGs
    forms/             — VolunteerForm, ContactForm, AuthForm
    gallery/           — GalleryGrid + Lightbox
    blog/              — BlogList
  lib/                 — site config, programs, events, blog, gallery, utils
  lib/supabase/        — server + browser Supabase clients
supabase/schema.sql    — DB schema with RLS
public/images/         — Hero, who-we-are, and program imagery
```

## Accessibility

- Skip-to-content link, semantic landmarks (`header`/`main`/`footer`/`nav`), ARIA labels.
- Visible focus rings (gold) on all interactive elements.
- `prefers-reduced-motion` honored — animations are disabled.
- Color contrast checked against WCAG AA on primary surfaces.
