import Image from "next/image";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { CtaBanner } from "@/components/sections/cta-banner";
import { ProgramsCarousel } from "@/components/sections/programs-carousel";
import { IMPACT_AREAS, PROGRAMS, SITE_CONFIG } from "@/lib/constants";

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
  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#0F4C81] text-white">
        <Image
          src="/images/home-hero.jpg"
          alt="Volunteers supporting families through humanitarian programs."
          fill
          priority
          className="object-cover opacity-68"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F4C81]/68 via-[#0F4C81]/52 to-[#0F4C81]/44" />
        <div className="container-shell relative py-24 md:py-36">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#F4B400]">
            Canadian Nonprofit Organization
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            {SITE_CONFIG.heroHeadline}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/90 md:text-xl">
            {SITE_CONFIG.heroSubheadline}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink href="/donate" variant="primary" size="lg">
              Donate Now
            </ButtonLink>
            <ButtonLink href="/volunteer" variant="ghost" size="lg" className="text-white">
              Become a Volunteer
            </ButtonLink>
          </div>
        </div>
      </section>

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
        <div className="mt-8 flex flex-wrap justify-center gap-2 text-center">
          {IMPACT_AREAS.map((area) => (
            <span
              key={area.slug}
              className="rounded-full border border-[#0F4C81]/12 bg-white px-3 py-1 text-xs font-semibold text-[#0F4C81]"
            >
              {area.title}
            </span>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-shell py-4 md:py-10">
        <div className="grid gap-6 rounded-3xl bg-white p-8 shadow-lg md:grid-cols-2 md:p-12">
          <div className="space-y-4">
            <SectionHeading
              eyebrow="Who We Are"
              title="A trusted partner for inclusive community development"
              description="World Impact Initiative is a Canadian nonprofit organization committed to empowering individuals and communities facing social, economic, and humanitarian challenges."
            />
            <p className="text-slate-600">
              We believe lasting change begins with people and is strengthened
              through partnership, inclusion, opportunity, and volunteerism.
              Our work focuses on protecting human rights, supporting vulnerable
              children and families, promoting equitable access to education and
              health resources, and fostering opportunities for youth and
              persons with disabilities.
            </p>
          </div>
          <div className="space-y-6">
            <div className="rounded-2xl border border-[#0F4C81]/10 bg-[#F7F9FC] p-6">
              <h3 className="text-lg font-semibold text-[#0F4C81]">Mission</h3>
              <p className="mt-2 text-sm text-slate-600">{SITE_CONFIG.mission}</p>
            </div>
            <div className="rounded-2xl border border-[#0F4C81]/10 bg-[#F7F9FC] p-6">
              <h3 className="text-lg font-semibold text-[#0F4C81]">Vision</h3>
              <p className="mt-2 text-sm text-slate-600">{SITE_CONFIG.vision}</p>
            </div>
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
