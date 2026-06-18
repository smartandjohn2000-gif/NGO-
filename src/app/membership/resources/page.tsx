import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Download, BookOpen, FileText, Video, Map } from "lucide-react";

export const metadata: Metadata = {
  title: "Resource Center",
  description:
    "Toolkits, briefings, training, and resources for World Impact Initiative members.",
  robots: { index: false, follow: false },
};

const resources = [
  { icon: BookOpen, title: "Inclusive Programming Toolkit (v2)", type: "PDF · 14MB" },
  { icon: FileText, title: "Volunteer Handbook 2026", type: "PDF · 3.2MB" },
  { icon: FileText, title: "Safeguarding Policy", type: "PDF · 1.1MB" },
  { icon: Video, title: "GBV Response Training (1h 12m)", type: "Video" },
  { icon: Map, title: "Crisis Response Field Guide", type: "PDF · 6.8MB" },
  { icon: BookOpen, title: "Donor Stewardship Playbook", type: "PDF · 4.5MB" },
  { icon: Video, title: "Storytelling for Field Staff (32m)", type: "Video" },
  { icon: FileText, title: "Branding & Communications Guide", type: "PDF · 7.2MB" },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Resource Center"
        description="Curated toolkits, training videos, and policy documents for members and partners."
        crumbs={[
          { label: "Membership", href: "/membership" },
          { label: "Resources" },
        ]}
      />

      <section className="py-14 md:py-20 bg-white">
        <div className="container-page">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((r) => (
              <li
                key={r.title}
                className="rounded-2xl bg-ink-50 p-6 ring-1 ring-ink-100 flex items-start gap-4"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white text-brand-700 ring-1 ring-brand-100">
                  <r.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-brand-900">{r.title}</p>
                  <p className="text-xs text-ink-500 mt-1">{r.type}</p>
                  <button
                    type="button"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
                  >
                    <Download className="h-4 w-4" aria-hidden="true" /> Download
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
