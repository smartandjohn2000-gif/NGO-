import type { Metadata } from "next";
import { programs } from "@/lib/programs";
import { Edit3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Programs Admin",
  robots: { index: false, follow: false },
};

export default function AdminProgramsPage() {
  return (
    <div className="rounded-3xl bg-white ring-1 ring-ink-100 p-7 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold text-brand-900">Programs</h1>
      <p className="mt-1 text-sm text-ink-600">
        Edit content, statistics, and gallery images for each public program page.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {programs.map((p) => (
          <div
            key={p.slug}
            className="rounded-2xl bg-ink-50 p-5 ring-1 ring-ink-100 flex items-start justify-between gap-3"
          >
            <div>
              <p className="font-semibold text-brand-900">{p.title}</p>
              <p className="mt-1 text-xs text-ink-500 font-mono">/programs/{p.slug}</p>
              <p className="mt-2 text-sm text-ink-600 line-clamp-2">{p.tagline}</p>
            </div>
            <button className="inline-flex items-center gap-1.5 rounded-full bg-white ring-1 ring-ink-200 px-3 py-1.5 text-xs font-semibold text-ink-700 hover:bg-brand-50">
              <Edit3 className="h-3.5 w-3.5" aria-hidden="true" /> Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
