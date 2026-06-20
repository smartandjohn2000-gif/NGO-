import type { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { PageHero } from "@/components/sections/page-hero";
import { ProgramsStackedSections } from "@/components/sections/programs-stacked-sections";
import { PROGRAMS } from "@/lib/constants";

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
            title="Six strategic impact areas for inclusive community impact"
            description="Our programs are presented as people-centered sections with clear objectives, actions, and impact pathways."
            align="center"
          />
          <div className="mt-10">
            <ProgramsStackedSections programs={PROGRAMS} />
          </div>
        </AnimatedSection>
      </div>
    </>
  );
}
