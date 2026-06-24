import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { CtaBanner } from "@/components/sections/cta-banner";
import { HomeHeroSlideshow } from "@/components/sections/home-hero-slideshow";
import { ProgramsStackedSections } from "@/components/sections/programs-stacked-sections";
import { IMPACT_THEMES, PROGRAMS, SITE_CONFIG, TESTIMONIALS } from "@/lib/constants";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.url,
  email: SITE_CONFIG.email,
  areaServed: "Global",
  address: {
    "@type": "PostalAddress",
    addressCountry: "CA",
  },
  sameAs: ["https://linktr.ee/worldimpactinitiative.org"],
};

export default function HomePage() {
  const sampleStats = PROGRAMS.flatMap((program) =>
    program.impactStats.slice(0, 1).map((stat) => ({
      ...stat,
      programTitle: program.title,
      slug: program.slug,
      theme: IMPACT_THEMES[program.slug],
    })),
  ).slice(0, 6);

  return (
    <>
      <HomeHeroSlideshow />

      <AnimatedSection className="container-shell py-4 md:py-10">
        <div className="grid gap-6 rounded-3xl border border-[#CFE4FF] bg-gradient-to-br from-[#FFFFFF] to-[#EAF3FF] p-8 shadow-sm md:grid-cols-2 md:p-12">
          <div className="space-y-4">
            <p className="text-base font-semibold uppercase tracking-[0.14em] text-[#0B57D0]/80">
              Who We Are
            </p>
            <p className="text-lg leading-relaxed text-slate-700 md:text-xl">
              Our work focuses on protecting human rights, supporting vulnerable
              children and families, promoting equitable access to education,
              health resources, fostering opportunities for youth and persons
              with disabilities/special needs.
            </p>
          </div>
          <div className="space-y-6">
            <div className="rounded-2xl border border-[#CFE4FF] bg-white p-6">
              <h3 className="text-lg font-semibold text-slate-900">Mission</h3>
              <p className="mt-2 text-lg text-slate-700">{SITE_CONFIG.mission}</p>
            </div>
            <div className="rounded-2xl border border-[#CFE4FF] bg-white p-6">
              <h3 className="text-lg font-semibold text-slate-900">Vision</h3>
              <p className="mt-2 text-lg text-slate-700">{SITE_CONFIG.vision}</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <section id="impact-areas" className="container-shell py-10 md:py-16">
        <SectionHeading
          eyebrow="Our Impact Areas"
          title="Programs and initiatives centered on people and communities"
          description="Each impact area is presented with clear goals, real stories, and practical actions."
          align="center"
        />
        <div className="mt-8">
          <ProgramsStackedSections programs={PROGRAMS} />
        </div>
      </section>

      <AnimatedSection className="container-shell py-8 md:py-14">
        <SectionHeading
          eyebrow="Impact Statistics"
          title="Data-backed progress across every impact area"
          description="Our programs combine measurable outcomes with dignity-centered delivery."
          align="center"
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sampleStats.map((stat) => (
            <article
              key={`${stat.slug}-${stat.label}`}
              className="rounded-2xl border bg-white p-5 shadow-sm"
              style={{ borderColor: stat.theme.ring, backgroundColor: stat.theme.soft }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.1em]" style={{ color: stat.theme.strong }}>
                {stat.programTitle}
              </p>
              <p className="mt-3 text-3xl font-bold" style={{ color: stat.theme.accent }}>
                {stat.value}
              </p>
              <p className="mt-2 text-lg text-slate-700">{stat.label}</p>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-shell py-8 md:py-14">
        <SectionHeading
          eyebrow="Beneficiary Stories"
          title="Human stories behind measurable impact"
          description="Each story reflects resilience, dignity, and community-driven change."
          align="center"
        />
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {PROGRAMS.slice(0, 3).map((program) => {
            const theme = IMPACT_THEMES[program.slug];
            return (
              <article
                key={program.slug}
                className="rounded-2xl border bg-white p-6 shadow-md"
                style={{ borderColor: theme.ring }}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.14em]" style={{ color: theme.strong }}>
                  {program.title}
                </p>
                <p className="mt-3 text-lg leading-relaxed text-slate-700">
                  “{program.beneficiaryStory.quote}”
                </p>
                <p className="mt-4 text-base font-semibold text-slate-900">
                  {program.beneficiaryStory.name}
                </p>
                <p className="text-base text-slate-600">{program.beneficiaryStory.location}</p>
              </article>
            );
          })}
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-shell py-8 md:py-14">
        <SectionHeading
          eyebrow="Partners & Supporters"
          title="Collaboration powers lasting transformation"
          description="We work with community groups, institutions, and supporters committed to equitable impact."
          align="center"
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {TESTIMONIALS.map((testimonial) => (
            <article key={testimonial.name} className="rounded-2xl border border-[#CFE4FF] bg-[#F3F9FF] p-6 shadow-sm">
              <p className="text-lg leading-relaxed text-slate-700">“{testimonial.quote}”</p>
              <p className="mt-4 text-base font-semibold text-[#083EA0]">{testimonial.name}</p>
              <p className="text-base text-slate-600">{testimonial.role}</p>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-shell py-8 md:py-14">
        <div className="rounded-3xl border border-[#CFE4FF] bg-[#F3F9FF] p-8 shadow-sm md:p-12">
          <SectionHeading
            eyebrow="Volunteer Opportunities"
            title="Join our mission with your skills and time"
            description="Support safe, inclusive, and resilient communities by volunteering with World Impact Initiative."
          />
          <div className="mt-6">
            <ButtonLink href="/volunteer" variant="secondary" size="lg">
              Become a Volunteer
            </ButtonLink>
          </div>
        </div>
      </AnimatedSection>

      <section className="container-shell py-14 md:py-20">
        <CtaBanner
          title="Partner with us to scale impact."
          description="Join as a donor, strategic partner, or volunteer to help communities move from vulnerability to opportunity."
          primaryLabel="Donate Now"
          primaryHref="/donate"
          secondaryLabel="Become a Volunteer"
          secondaryHref="/volunteer"
        />
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
}
