import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { CtaBanner } from "@/components/sections/cta-banner";
import { PROGRAMS } from "@/lib/constants";

type ProgramPageProps = {
  params: Promise<{ slug: string }>;
};

function getProgram(slug: string) {
  return PROGRAMS.find((program) => program.slug === slug);
}

export async function generateStaticParams() {
  return PROGRAMS.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata(props: ProgramPageProps): Promise<Metadata> {
  const { slug } = await props.params;
  const program = getProgram(slug);

  if (!program) {
    return { title: "Program Not Found" };
  }

  return {
    title: program.title,
    description: program.heroSummary,
    alternates: { canonical: `/programs/${program.slug}` },
    openGraph: {
      title: `${program.title} | World Impact Initiative`,
      description: program.heroSummary,
      images: [{ url: program.image }],
    },
  };
}

export default async function ProgramDetailPage(props: ProgramPageProps) {
  const { slug } = await props.params;
  const program = getProgram(slug);

  if (!program) {
    notFound();
  }

  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#0F4C81] text-white">
        <Image
          src={program.image}
          alt={`${program.title} hero image`}
          fill
          priority
          className="object-cover opacity-66"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F4C81]/68 via-[#0F4C81]/52 to-[#0F4C81]/44" />
        <div className="container-shell relative py-20 md:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#F4B400]">
            Program
          </p>
          <h1 className="mt-3 max-w-4xl text-3xl font-bold leading-tight md:text-5xl">
            {program.title}
          </h1>
          <p className="mt-5 max-w-3xl text-base text-white/90 md:text-lg">
            {program.heroSummary}
          </p>
        </div>
      </section>

      <div className="container-shell space-y-12 py-12 md:space-y-16 md:py-16">
        <AnimatedSection>
          <SectionHeading title="Why It Matters" />
          <p className="mt-4 rounded-2xl bg-white p-6 text-slate-700 shadow-md">
            {program.whyItMatters}
          </p>
        </AnimatedSection>

        <AnimatedSection className="grid gap-6 lg:grid-cols-2">
          <article className="surface-card p-6">
            <h2 className="text-xl font-semibold text-[#0F4C81]">Our Approach</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {program.ourApproach.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#F4B400]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="surface-card p-6">
            <h2 className="text-xl font-semibold text-[#0F4C81]">Key Activities</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {program.keyActivities.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#F4B400]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </AnimatedSection>

        <AnimatedSection>
          <SectionHeading title="Expected Impact" />
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {program.expectedImpact.map((item) => (
              <article key={item} className="surface-card p-5 text-sm text-slate-600">
                {item}
              </article>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <article className="surface-card p-6">
            <h2 className="text-xl font-semibold text-[#0F4C81]">Beneficiary Story</h2>
            <blockquote className="mt-4 text-sm leading-relaxed text-slate-700">
              “{program.beneficiaryStory.quote}”
            </blockquote>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-[#0F4C81]/75">
              {program.beneficiaryStory.name} — {program.beneficiaryStory.location}
            </p>
          </article>
          <article className="surface-card p-6">
            <h2 className="text-xl font-semibold text-[#0F4C81]">Impact Statistics</h2>
            <dl className="mt-4 space-y-3">
              {program.impactStats.map((stat) => (
                <div key={stat.label} className="rounded-xl border border-[#0F4C81]/10 bg-[#F7F9FC] p-3">
                  <dt className="text-xs uppercase tracking-wide text-slate-500">{stat.label}</dt>
                  <dd className="text-lg font-bold text-[#0F4C81]">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </article>
        </AnimatedSection>

        <AnimatedSection>
          <SectionHeading title="Program Gallery" />
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {program.gallery.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-2xl bg-white shadow-md">
                {item.type === "photo" ? (
                  <div className="relative h-56">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                ) : (
                  <div className="h-56">
                    <iframe
                      title={item.title}
                      src={item.src}
                      className="h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}
                <div className="p-4">
                  <p className="text-sm font-semibold text-[#0F4C81]">{item.title}</p>
                </div>
              </article>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection className="space-y-5">
          <CtaBanner
            title="Partnership CTA"
            description="Collaborate with us through institutional partnerships, grant support, and technical cooperation."
            primaryLabel="Partner With Us"
            primaryHref="/contact"
            secondaryLabel="View Events"
            secondaryHref="/events"
          />
          <CtaBanner
            title="Donation CTA"
            description="Your contribution fuels this program's direct services and long-term outcomes."
            primaryLabel="Donate to this Program"
            primaryHref="/donate"
            secondaryLabel="Become a Volunteer"
            secondaryHref="/volunteer"
          />
        </AnimatedSection>
      </div>
    </>
  );
}
