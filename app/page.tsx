import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { CtaBanner } from "@/components/sections/cta-banner";
import { HeroSlider } from "@/components/sections/hero-slider";
import { ProgramsCarousel } from "@/components/sections/programs-carousel";
import {
  HERO_SLIDES,
  IMPACT_AREAS,
  IMPACT_THEMES,
  PROGRAMS,
  SITE_CONFIG,
  TESTIMONIALS,
} from "@/lib/constants";

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
      <HeroSlider slides={HERO_SLIDES} />

      <section id="impact-areas">
        <AnimatedSection className="container-shell py-16 md:py-24">
          <SectionHeading
            eyebrow="Our Impact Areas"
            title="Programs built for sustainable, community-driven outcomes"
            description="Explore our premium interactive portfolio with swipe navigation, autoplay, and direct actions."
            align="center"
          />
          <div className="mt-10">
            <ProgramsCarousel programs={PROGRAMS} />
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-center">
            {IMPACT_AREAS.map((area) => {
              const theme = IMPACT_THEMES[area.slug];
              return (
                <span
                  key={area.slug}
                  className="rounded-full border px-4 py-2 text-sm font-semibold"
                  style={{
                    borderColor: theme.ring,
                    backgroundColor: theme.soft,
                    color: theme.strong,
                  }}
                >
                  {area.title}
                </span>
              );
            })}
          </div>
        </AnimatedSection>
      </section>

      <AnimatedSection className="container-shell py-4 md:py-10">
        <div className="grid gap-6 rounded-3xl border border-[#BFDBFE] bg-[#EFF6FF] p-8 shadow-lg md:grid-cols-2 md:p-12">
          <div className="space-y-4">
            <SectionHeading
              eyebrow="Who We Are"
              title="A trusted partner for inclusive community development"
              description="World Impact Initiative is a Canadian nonprofit organization committed to empowering individuals and communities facing social, economic, and humanitarian challenges."
            />
            <p className="text-lg text-slate-700">
              We believe lasting change begins with people and is strengthened
              through partnership, inclusion, opportunity, and volunteerism.
              Our work focuses on protecting human rights, supporting vulnerable
              children and families, promoting equitable access to education and
              health resources, and fostering opportunities for youth and
              persons with disabilities.
            </p>
          </div>
          <div className="space-y-6">
            <div className="rounded-2xl border border-[#7DD3FC]/50 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0F4C81]">Mission</h3>
              <p className="mt-2 text-lg text-slate-700">{SITE_CONFIG.mission}</p>
            </div>
            <div className="rounded-2xl border border-[#5EEAD4]/50 bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0F4C81]">Vision</h3>
              <p className="mt-2 text-lg text-slate-700">{SITE_CONFIG.vision}</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

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
            <article key={testimonial.name} className="rounded-2xl border border-[#FDBA74]/45 bg-[#FFF7ED] p-6 shadow-sm">
              <p className="text-lg leading-relaxed text-slate-700">“{testimonial.quote}”</p>
              <p className="mt-4 text-base font-semibold text-[#9A3412]">{testimonial.name}</p>
              <p className="text-base text-slate-600">{testimonial.role}</p>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-shell py-8 md:py-14">
        <div className="rounded-3xl border border-[#86EFAC]/50 bg-[#F0FDF4] p-8 shadow-sm md:p-12">
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
