# World Impact Initiative Website

Production-ready NGO platform for **World Impact Initiative** built with:

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Framer Motion
- Supabase authentication and database integration

## Features

- Premium responsive NGO website pages:
  - Home, About, Programs, Gallery, Blog/News, Events, Volunteer, Donate, Contact
- Dedicated program detail pages (6 impact areas)
- Membership portal:
  - Registration, Login, Dashboard, Profile, Directory, Resource Center
- Multi-user admin system:
  - Super Admin
  - Program Manager
  - Content Editor
  - Volunteer Coordinator
- Beneficiary database (admin-only) with:
  - Program assignment visibility
  - Case notes panel
  - Search + reporting dashboard
- Form and API integrations:
  - Volunteer registration
  - Contact form
  - Event RSVP
- SEO stack:
  - Metadata
  - Open Graph
  - Schema markup
  - `sitemap.xml` (`app/sitemap.ts`)
  - `robots.txt` (`app/robots.ts`)

## Setup

1. Install dependencies:

   `npm install`

2. Configure environment variables:

   `cp .env.example .env.local`

3. Add Supabase credentials to `.env.local`:

   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`

4. Apply the SQL schema in your Supabase project:

   - Run `supabase/schema.sql` in the Supabase SQL editor.

5. Run the development server:

   `npm run dev`

## Scripts

- `npm run dev` — start development server
- `npm run lint` — run ESLint
- `npm run build` — create production build
- `npm run start` — run production server
