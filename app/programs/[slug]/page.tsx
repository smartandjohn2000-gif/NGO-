import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { CtaBanner } from "@/components/sections/cta-banner";
import { IMPACT_THEMES, PROGRAMS } from "@/lib/constants";

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
  const theme = IMPACT_THEMES[program.slug];

  return (
    <>
      <section className="relative isolate overflow-hidden text-white" style={{ backgroundColor: theme.strong }}>
        <Image
          src={program.image}
          alt={`${program.title} hero image`}
          fill
          priority
          className="object-cover opacity-72"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(8,30,50,0.8) 0%, rgba(8,30,50,0.58) 52%, rgba(8,30,50,0.35) 100%)",
          }}
        />
        <div className="container-shell relative py-20 md:py-28">
          <p className="text-base font-semibold uppercase tracking-[0.15em]" style={{ color: theme.soft }}>
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
          <p
            className="mt-4 rounded-2xl border bg-white p-6 text-lg text-slate-700 shadow-md"
            style={{ borderColor: theme.ring }}
          >
            {program.whyItMatters}
          </p>
        </AnimatedSection>

        <AnimatedSection className="grid gap-6 lg:grid-cols-2">
          <article className="surface-card border p-6" style={{ borderColor: theme.ring, backgroundColor: theme.soft }}>
            <h2 className="text-2xl font-semibold" style={{ color: theme.strong }}>
              Our Approach
            </h2>
            <ul className="mt-4 space-y-3 text-lg text-slate-700">
              {program.ourApproach.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 size-2 shrink-0 rounded-full" style={{ backgroundColor: theme.accent }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="surface-card border p-6" style={{ borderColor: theme.ring, backgroundColor: theme.soft }}>
            <h2 className="text-2xl font-semibold" style={{ color: theme.strong }}>
              Key Activities
            </h2>
            <ul className="mt-4 space-y-3 text-lg text-slate-700">
              {program.keyActivities.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 size-2 shrink-0 rounded-full" style={{ backgroundColor: theme.accent }} />
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
              <article
                key={item}
                className="surface-card border p-5 text-lg text-slate-700"
                style={{ borderColor: theme.ring, backgroundColor: theme.soft }}
              >
                {item}
              </article>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <article className="surface-card border p-6" style={{ borderColor: theme.ring }}>
            <h2 className="text-2xl font-semibold" style={{ color: theme.strong }}>
              Beneficiary Story
            </h2>
            <blockquote className="mt-4 text-lg leading-relaxed text-slate-700">
              “{program.beneficiaryStory.quote}”
            </blockquote>
            <p className="mt-4 text-sm font-semibold uppercase tracking-wide" style={{ color: theme.strong }}>
              {program.beneficiaryStory.name} — {program.beneficiaryStory.location}
            </p>
          </article>
          <article className="surface-card border p-6" style={{ borderColor: theme.ring }}>
            <h2 className="text-2xl font-semibold" style={{ color: theme.strong }}>
              Impact Statistics
            </h2>
            <dl className="mt-4 space-y-3">
              {program.impactStats.map((stat) => (
                <div key={stat.label} className="rounded-xl border p-3" style={{ borderColor: theme.ring, backgroundColor: theme.soft }}>
                  <dt className="text-sm uppercase tracking-wide text-slate-600">{stat.label}</dt>
                  <dd className="text-2xl font-bold" style={{ color: theme.accent }}>
                    {stat.value}
                  </dd>
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
                  <p className="text-base font-semibold" style={{ color: theme.strong }}>
                    {item.title}
                  </p>
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
