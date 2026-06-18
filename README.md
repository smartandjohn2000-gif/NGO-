# World Impact Initiative

Professional nonprofit website for [World Impact Initiative](https://worldimpactinitiative.org) — a Canadian NGO advancing human dignity, equality, and opportunity.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS 4**
- **Framer Motion**
- **Supabase** (Auth, Database, RLS)

## Features

- Fully responsive, accessible design
- 6 program pages with detailed content
- Blog, Gallery, Events with filtering & search
- Volunteer & Contact forms (Supabase-backed)
- Donation integration via [Charitable Impact](https://charitableimpact.com/)
- Membership portal (register, login, dashboard, profile, resources)
- Multi-role admin system (Super Admin, Program Manager, Content Editor, Volunteer Coordinator)
- Beneficiary database (admin-only)
- SEO: meta tags, Open Graph, Schema.org, sitemap, robots.txt

## Getting Started

```bash
npm install
cp .env.example .env.local
# Add your Supabase credentials
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Supabase Setup

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Run the SQL in `supabase/schema.sql` in the SQL Editor
3. Add your project URL and anon key to `.env.local`
4. Enable Email auth in Authentication settings

## Admin Roles

| Role | Permissions |
|------|-------------|
| Super Admin | Full access |
| Program Manager | Beneficiaries, programs, reports |
| Content Editor | Blog, gallery, events |
| Volunteer Coordinator | Volunteer applications, events |

Set user roles in the `profiles` table after registration.

## Deployment

Deploy to Vercel:

```bash
npm run build
```

Set environment variables in your hosting dashboard.

## License

© World Impact Initiative. All rights reserved.
