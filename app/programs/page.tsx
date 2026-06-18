import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { DynamicIcon } from "@/components/ui/icon";
import { PageHero } from "@/components/sections/page-hero";
import { IMPACT_AREAS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore World Impact Initiative programs on gender equality, child protection, youth empowerment, disability inclusion, health equity, and humanitarian relief.",
  alternates: { canonical: "/programs" },
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        title="Programs for protection, empowerment, and resilience"
        subtitle="Our integrated portfolio addresses root causes while strengthening long-term community systems."
        image="/images/programs-hero.jpg"
      />

      <div className="container-shell py-14 md:py-20">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Program Portfolio"
            title="Six strategic impact areas"
            description="Each program combines local leadership, measurable outcomes, and sustainable partnerships."
            align="center"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {IMPACT_AREAS.map((area) => (
              <article key={area.slug} className="surface-card p-6">
                <div className="inline-flex size-10 items-center justify-center rounded-xl bg-[#0F4C81]/10 text-[#0F4C81]">
                  <DynamicIcon name={area.icon} size={20} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#0F4C81]">{area.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{area.description}</p>
                <Link
                  href={`/programs/${area.slug}`}
                  className="mt-5 inline-flex items-center text-sm font-semibold text-[#0F4C81]"
                >
                  View program <ArrowRight size={16} className="ml-2" />
                </Link>
              </article>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </>
  );
}
