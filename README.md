# World Impact Initiative Website

Production-ready Next.js website for **World Impact Initiative** (`worldimpactinitiative.org`), a Canadian nonprofit organization.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Supabase

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Supabase

Create the database objects in `supabase/schema.sql`, then configure:

```bash
NEXT_PUBLIC_SUPABASE_URL=...
SUPABASE_SERVICE_ROLE_KEY=...
```

Public forms are wired to server actions and store records when Supabase credentials are available. Without credentials, submissions return a demo-mode success message so the site remains previewable.

## Production

```bash
npm run build
npm run start
```

The site includes Open Graph metadata, schema markup, `sitemap.xml`, `robots.txt`, accessible navigation, responsive layouts, donation CTAs, volunteer signup, membership portal pages, admin dashboard, and beneficiary database UI.