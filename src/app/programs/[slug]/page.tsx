import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, Quote, Sparkles } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { programs, getProgram } from "@/lib/programs";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  props: PageProps<"/programs/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const program = getProgram(slug);
  if (!program) return { title: "Program not found" };
  return {
    title: program.title,
    description: program.summary,
    alternates: { canonical: `/programs/${program.slug}` },
    openGraph: {
      title: `${program.title} | ${siteConfig.name}`,
      description: program.summary,
      images: [program.heroImage],
    },
  };
}

export default async function ProgramDetail(
  props: PageProps<"/programs/[slug]">
) {
  const { slug } = await props.params;
  const program = getProgram(slug);
  if (!program) notFound();

  const Icon = program.Icon;
  const otherPrograms = programs.filter((p) => p.slug !== program.slug).slice(0, 3);

  const galleryShots = [1, 2, 3, 4, 5, 6].map((n) => ({
    src: `/images/programs/${program.slug}-${n}.jpg`,
    alt: `${program.galleryAlt} ${n}`,
  }));

  return (
    <>
      <PageHero
        eyebrow={program.shortTitle}
        title={program.title}
        description={program.tagline}
        crumbs={[{ label: "Programs", href: "/programs" }, { label: program.shortTitle }]}
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/donate" variant="gold" size="md">
            Fund This Program
          </ButtonLink>
          <ButtonLink href="/volunteer" variant="outline" size="md">
            Volunteer With Us
          </ButtonLink>
        </div>
      </PageHero>

      {/* Why it matters + summary */}
      <section className="py-20 bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
              Why it matters
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-brand-900 text-balance">
              {program.summary}
            </h2>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-ink-700">
              {program.whyItMatters}
            </p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="rounded-3xl bg-brand-900 text-white p-8 md:p-10">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-400/20 text-gold-300 ring-1 ring-gold-300/30">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-xl font-bold">Our promise</h3>
              <p className="mt-3 text-white/85 leading-relaxed">
                {program.shortTitle} is more than a program—it's a commitment.
                We arrive ready to listen, equipped to act, and prepared to
                stay long after the cameras leave.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Approach + activities */}
      <section className="py-20 bg-ink-50">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
              Our Approach
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-brand-900">
              How we work
            </h2>
            <ul className="mt-6 space-y-4">
              {program.ourApproach.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl bg-white p-4 ring-1 ring-ink-100"
                >
                  <Sparkles className="h-5 w-5 text-gold-500 mt-0.5 shrink-0" aria-hidden="true" />
                  <p className="text-sm md:text-base text-ink-700">{item}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
              Key Activities
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-brand-900">
              What we do
            </h2>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3">
              {program.keyActivities.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 rounded-xl bg-white p-3 ring-1 ring-ink-100 text-sm text-ink-700"
                >
                  <CheckCircle2 className="h-4 w-4 text-brand-700 mt-0.5 shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Expected impact */}
      <section className="py-20 bg-white">
        <div className="container-page">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
                Expected Impact
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-brand-900 text-balance">
                What success looks like
              </h2>
            </div>
          </Reveal>
          <StaggerContainer className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {program.expectedImpact.map((item, i) => (
              <StaggerItem key={item}>
                <div className="h-full rounded-2xl bg-brand-50 p-6 ring-1 ring-brand-100">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-900 text-gold-300 text-sm font-bold">
                    {i + 1}
                  </span>
                  <p className="mt-4 text-sm md:text-base text-ink-800 font-medium leading-snug">
                    {item}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Story + stats */}
      <section className="py-20 bg-brand-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-20">
          <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-gold-400 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-brand-500 blur-3xl" />
        </div>
        <div className="container-page grid gap-10 lg:grid-cols-12 items-center">
          <Reveal className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-300">
              Beneficiary Story
            </p>
            <Quote className="h-10 w-10 text-gold-300 mt-4" aria-hidden="true" />
            <blockquote className="mt-2 text-2xl md:text-3xl font-medium leading-snug text-balance">
              "{program.story.quote}"
            </blockquote>
            <p className="mt-6 text-sm uppercase tracking-widest text-white/70">
              {program.story.name} · {program.story.location}
            </p>
          </Reveal>

          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-300">
                Impact Statistics
              </p>
              <h3 className="mt-3 text-2xl font-bold">By the numbers</h3>
              <dl className="mt-6 grid grid-cols-2 gap-4">
                {program.stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10"
                  >
                    <dt className="text-xs uppercase tracking-widest text-white/60">
                      {s.label}
                    </dt>
                    <dd className="mt-1 text-2xl font-bold text-gold-300">
                      {s.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-white">
        <div className="container-page">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
                  Program Gallery
                </p>
                <h2 className="mt-3 text-3xl md:text-4xl font-bold text-brand-900">
                  Moments from the field
                </h2>
              </div>
              <Link
                href="/gallery"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
              >
                View full gallery
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
          <StaggerContainer className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {galleryShots.map((g, i) => (
              <StaggerItem key={i}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-ink-100 bg-gradient-to-br from-brand-100 to-brand-200">
                  <Image
                    src={g.src}
                    alt={g.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Donation + Partnership CTA */}
      <section className="py-20 bg-ink-50">
        <div className="container-page grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl bg-gradient-to-br from-gold-400 to-gold-300 p-10 text-brand-900">
              <h2 className="text-2xl md:text-3xl font-bold text-balance">
                Power this program with a gift today.
              </h2>
              <p className="mt-3 text-brand-900/85 max-w-md">
                Every donation directly supports {program.shortTitle.toLowerCase()} programming for the people who need it most.
              </p>
              <div className="mt-6">
                <ButtonLink href="/donate" variant="primary" size="lg">
                  Donate Now
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </ButtonLink>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl bg-gradient-to-br from-brand-800 to-brand-950 p-10 text-white">
              <h2 className="text-2xl md:text-3xl font-bold text-balance">
                Partner with us to scale impact.
              </h2>
              <p className="mt-3 text-white/85 max-w-md">
                Foundations, governments, and corporate partners—let's design a program that lasts.
              </p>
              <div className="mt-6">
                <ButtonLink href="/contact?subject=partnership" variant="gold" size="lg">
                  Start the Conversation
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Other programs */}
      <section className="py-20 bg-white">
        <div className="container-page">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-900">
              Explore other programs
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {otherPrograms.map((p) => (
              <Link
                key={p.slug}
                href={`/programs/${p.slug}`}
                className="group block rounded-2xl ring-1 ring-ink-100 p-6 hover:shadow-lg hover:-translate-y-0.5 transition"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-800">
                  <p.Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-brand-900">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-ink-600 line-clamp-3">
                  {p.tagline}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
