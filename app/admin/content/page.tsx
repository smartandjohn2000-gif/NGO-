import type { Metadata } from "next";
import { requireRole } from "@/lib/auth";
import type { UserRole } from "@/types/database";
import { BLOG_POSTS, EVENT_LIST, GALLERY_ITEMS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Content Editor Console",
  description:
    "Role-based content editor workspace for blog/news, events, and gallery updates.",
  alternates: { canonical: "/admin/content" },
};

const allowedRoles: UserRole[] = ["super_admin", "program_manager", "content_editor"];

export default async function AdminContentPage() {
  await requireRole(allowedRoles);

  return (
    <section className="container-shell space-y-8 py-14 md:py-20">
      <div>
        <h1 className="text-3xl font-bold text-[#0F4C81]">Content Management</h1>
        <p className="mt-2 text-sm text-slate-600">
          Manage blog/news publishing, gallery assets, and event page updates.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <article className="surface-card p-6">
          <p className="text-xs uppercase tracking-wide text-slate-500">Blog Posts</p>
          <p className="mt-2 text-2xl font-bold text-[#0F4C81]">{BLOG_POSTS.length}</p>
        </article>
        <article className="surface-card p-6">
          <p className="text-xs uppercase tracking-wide text-slate-500">Events</p>
          <p className="mt-2 text-2xl font-bold text-[#0F4C81]">{EVENT_LIST.length}</p>
        </article>
        <article className="surface-card p-6">
          <p className="text-xs uppercase tracking-wide text-slate-500">Gallery Assets</p>
          <p className="mt-2 text-2xl font-bold text-[#0F4C81]">{GALLERY_ITEMS.length}</p>
        </article>
      </div>

      <article className="surface-card p-6">
        <h2 className="text-xl font-semibold text-[#0F4C81]">Editorial Workflow</h2>
        <ol className="mt-4 space-y-3 text-sm text-slate-600">
          <li>1. Draft content in staging and include SEO keywords + metadata.</li>
          <li>2. Run accessibility and performance checks before publishing.</li>
          <li>3. Add image alt text, structured headings, and internal links.</li>
          <li>4. Validate publication in production and notify stakeholders.</li>
        </ol>
      </article>
    </section>
  );
}
