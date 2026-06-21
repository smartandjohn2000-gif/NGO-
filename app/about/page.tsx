import type { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { PageHero } from "@/components/sections/page-hero";
import {
  ABOUT_STORY_PLACEHOLDER,
  CORE_VALUES,
  INSPIRATIONS,
  SITE_CONFIG,
  TIMELINE,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn why World Impact Initiative was founded, our inspiration, mission, vision, and core values.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About World Impact Initiative"
        subtitle="A Canadian nonprofit dedicated to human dignity, inclusion, and sustainable community impact."
        image="/images/gallery-8.jpg"
      />

      <div className="container-shell space-y-14 py-14 md:space-y-20 md:py-20">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Why World Impact Initiative Was Founded"
            title="Founder story"
            description="Replace this section with the approved founder narrative exactly as provided by organization leadership."
          />
          <div className="mt-5 rounded-2xl border border-[#0F4C81]/10 bg-white p-6 text-sm leading-relaxed text-slate-700 shadow-md">
            {ABOUT_STORY_PLACEHOLDER}
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <SectionHeading
            eyebrow="Our Inspiration"
            title="Leaders whose courage shaped our values"
          />
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {INSPIRATIONS.map((person) => (
              <article key={person.name} className="surface-card p-6">
                <h3 className="text-lg font-semibold text-[#0F4C81]">{person.name}</h3>
                <p className="mt-2 text-sm text-slate-600">{person.focus}</p>
              </article>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <SectionHeading eyebrow="Timeline" title="Our journey" />
          <div className="mt-7 space-y-6">
            {TIMELINE.map((item) => (
              <div key={item.title} className="grid gap-4 rounded-2xl bg-white p-6 shadow-md md:grid-cols-[160px_1fr]">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#F4B400]">
                  {item.year}
                </p>
                <div>
                  <h3 className="text-lg font-semibold text-[#0F4C81]">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection className="grid gap-6 lg:grid-cols-2">
          <article className="surface-card p-6">
            <h3 className="text-xl font-semibold text-[#0F4C81]">Mission</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{SITE_CONFIG.mission}</p>
          </article>
          <article className="surface-card p-6">
            <h3 className="text-xl font-semibold text-[#0F4C81]">Vision</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{SITE_CONFIG.vision}</p>
          </article>
        </AnimatedSection>

        <AnimatedSection>
          <SectionHeading eyebrow="Core Values" title="What guides our decisions" />
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {CORE_VALUES.map((value) => (
              <p
                key={value}
                className="rounded-xl border border-[#0F4C81]/15 bg-white px-4 py-3 text-sm font-semibold text-[#0F4C81]"
              >
                {value}
              </p>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </>
  );
}
