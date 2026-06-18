import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Search, MapPin, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Member Directory",
  description: "Browse the World Impact Initiative member directory.",
  robots: { index: false, follow: false },
};

const sampleMembers = [
  { name: "Aisha B.", role: "Volunteer · Toronto, ON", skills: "Translation, Events" },
  { name: "Daniel O.", role: "Donor · Vancouver, BC", skills: "Fundraising, Tech" },
  { name: "Priya R.", role: "Partner Org · Montréal, QC", skills: "Education, Research" },
  { name: "Marc L.", role: "Alumni · Calgary, AB", skills: "Carpentry mentoring" },
  { name: "Joy K.", role: "Volunteer · Halifax, NS", skills: "Design, Comms" },
  { name: "Samuel T.", role: "Donor · Ottawa, ON", skills: "Legal, Advocacy" },
];

export default function DirectoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Members"
        title="Member Directory"
        description="Find people across the World Impact Initiative community—volunteers, donors, alumni, and partners."
        crumbs={[
          { label: "Membership", href: "/membership" },
          { label: "Directory" },
        ]}
      />
      <section className="py-14 md:py-20 bg-white">
        <div className="container-page">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <label className="relative flex-1 max-w-md">
              <span className="sr-only">Search members</span>
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-400"
                aria-hidden="true"
              />
              <input
                type="search"
                placeholder="Search by name, skills, or city…"
                className="w-full rounded-full bg-white ring-1 ring-ink-200 pl-9 pr-4 py-2.5 text-sm focus:outline-2 focus:outline-brand-400"
              />
            </label>
            <select className="rounded-full bg-white ring-1 ring-ink-200 px-4 py-2.5 text-sm">
              <option>All roles</option>
              <option>Volunteer</option>
              <option>Donor</option>
              <option>Partner</option>
              <option>Alumni</option>
            </select>
          </div>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sampleMembers.map((m) => (
              <li key={m.name} className="rounded-2xl bg-ink-50 p-6 ring-1 ring-ink-100">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-brand-700 to-brand-900 text-gold-300 inline-flex items-center justify-center font-bold">
                    {m.name.split(" ").map((p) => p[0]).join("")}
                  </div>
                  <div>
                    <p className="font-semibold text-brand-900">{m.name}</p>
                    <p className="text-xs text-ink-500">{m.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-ink-600 inline-flex items-start gap-2">
                  <Award className="h-4 w-4 text-brand-700 mt-0.5" aria-hidden="true" />
                  {m.skills}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-sm text-ink-500 text-center">
            Members can opt in or out of directory visibility from their profile.
          </p>
        </div>
      </section>
    </>
  );
}
