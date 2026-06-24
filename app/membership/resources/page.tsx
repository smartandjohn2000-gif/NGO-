import type { Metadata } from "next";
import { BookOpen, FileCheck2, Shield, Users } from "lucide-react";
import { requireAuth } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Resource Center",
  description:
    "Access policy guides, implementation tools, and learning resources in the membership portal.",
  alternates: { canonical: "/membership/resources" },
};

const resources = [
  {
    title: "Program Implementation Toolkit",
    description: "Frameworks for planning, delivery, and monitoring across core impact areas.",
    icon: BookOpen,
  },
  {
    title: "Safeguarding & Child Protection Standards",
    description: "Practical safeguarding checklists and policy templates for teams and partners.",
    icon: Shield,
  },
  {
    title: "Volunteer Operations Guide",
    description: "Volunteer onboarding, role allocation, and coordination best practices.",
    icon: Users,
  },
  {
    title: "Reporting & Accountability Pack",
    description: "Guides for indicators, reporting rhythms, and donor-ready impact narratives.",
    icon: FileCheck2,
  },
];

export default async function MembershipResourcesPage() {
  await requireAuth();

  return (
    <section className="container-shell py-14 md:py-20">
      <h1 className="text-3xl font-bold text-[#0F4C81]">Resource Center</h1>
      <p className="mt-2 text-sm text-slate-600">
        Member-only resources for program quality, safeguarding, and organizational learning.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {resources.map((resource) => {
          const Icon = resource.icon;
          return (
            <article key={resource.title} className="surface-card p-6">
              <div className="inline-flex size-10 items-center justify-center rounded-xl bg-[#0F4C81]/10 text-[#0F4C81]">
                <Icon size={20} />
              </div>
              <h2 className="mt-4 text-lg font-semibold text-[#0F4C81]">{resource.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{resource.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
