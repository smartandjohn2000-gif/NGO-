import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Award, Compass, Eye, Heart, Quote, Sparkles, Star, Users } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { inspirations } from "@/lib/inspirations";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn why World Impact Initiative was founded, the people who inspire our work, and the mission, vision, and values that guide everything we do.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: Heart,
    title: "Compassion",
    text: "We lead with humanity—every program, partnership, and decision begins with the dignity of the people we serve.",
  },
  {
    icon: Sparkles,
    title: "Inclusion",
    text: "We design for everyone—gender, age, ability, and background. Belonging is non-negotiable.",
  },
  {
    icon: Users,
    title: "Partnership",
    text: "We are stronger together. We co-create with communities and trust local leadership.",
  },
  {
    icon: Award,
    title: "Integrity",
    text: "We are accountable to those we serve and those who support us. Transparency is our default.",
  },
  {
    icon: Star,
    title: "Excellence",
    text: "We pursue programs that are rigorous, evidence-informed, and continuously improving.",
  },
  {
    icon: Compass,
    title: "Hope",
    text: "We choose hope as a discipline, not a feeling—because hope, organized, becomes change.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A Canadian nonprofit building a world of dignity, safety, and equal opportunity."
        description="We are humanitarians, educators, organizers, and neighbors—working alongside communities to advance human rights and unlock opportunity."
        crumbs={[{ label: "About" }]}
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/programs" variant="gold" size="md">
            Explore Our Programs
          </ButtonLink>
          <ButtonLink href="/contact" variant="outline" size="md">
            Get in Touch
          </ButtonLink>
        </div>
      </PageHero>

      {/* Founder story */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] ring-1 ring-ink-100 shadow-xl">
              <Image
                src="/images/about/founder.jpg"
                alt="Founder of World Impact Initiative"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
              Why We Were Founded
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-brand-900 text-balance">
              Born from witnessing what happens when communities are left behind—and what becomes possible when they are not.
            </h2>
            <div className="mt-6 space-y-5 text-base md:text-lg leading-relaxed text-ink-700">
              <p>
                World Impact Initiative was founded by a group of humanitarian
                practitioners, educators, and community organizers who shared a
                conviction: that no person should be excluded from opportunity
                because of where they were born, the body they live in, or the
                hardship they have endured.
              </p>
              <p>
                Across decades of work in classrooms, clinics, refugee
                settlements, and villages, our founders had witnessed the same
                truth in many languages—that lasting change does not arrive
                from the outside. It rises from inside communities when they
                are protected, equipped, and trusted to lead.
              </p>
              <p>
                We were founded in Canada because Canada is our home, and
                because Canada's pluralism, generosity, and tradition of public
                service offer a foundation for principled global action. From
                that base, we set out to build something different: a nonprofit
                that puts protection at the center, that designs with—not
                for—the people we serve, and that holds itself accountable to
                the long arc of dignity.
              </p>
              <p>
                The name we chose is the work we set: <strong className="text-brand-900">World Impact Initiative</strong>. World, because human dignity is universal. Impact, because intention is not enough. Initiative, because change requires courage to begin and the discipline to keep going.
              </p>
              <p>
                Today, that founding conviction guides every program. We protect children and women from harm. We open doors of education and economic opportunity for youth. We make accessibility a starting point, not an afterthought. We meet crisis with rapid relief and patient recovery. And we do all of this with partners who know their communities better than we ever will.
              </p>
              <p className="text-brand-900 font-semibold">
                This is why we were founded—and why we will not stop.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Inspirations timeline */}
      <section className="py-20 md:py-28 bg-ink-50">
        <div className="container-page">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
                Our Inspiration
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl lg:text-[2.6rem] font-bold leading-tight text-brand-900 text-balance">
                Six lives that shape ours—and remind us what's possible.
              </h2>
              <p className="mt-4 text-base md:text-lg text-ink-600">
                We draw inspiration from people whose courage, kindness, and
                clarity of purpose lit a path for others to follow.
              </p>
            </div>
          </Reveal>

          <div className="relative mt-14">
            <div
              aria-hidden="true"
              className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-200 via-brand-300 to-brand-200"
            />
            <StaggerContainer className="space-y-12">
              {inspirations.map((p, idx) => {
                const left = idx % 2 === 0;
                return (
                  <StaggerItem key={p.name}>
                    <div
                      className={`relative grid md:grid-cols-2 md:gap-12 ${
                        left ? "" : "md:[&>*:first-child]:order-2"
                      }`}
                    >
                      <div
                        className={`relative pl-12 md:pl-0 ${
                          left ? "md:pr-12 md:text-right" : "md:pl-12"
                        }`}
                      >
                        <span
                          aria-hidden="true"
                          className="absolute top-2 left-1.5 md:left-auto md:right-auto md:top-2 h-5 w-5 rounded-full bg-gold-400 ring-4 ring-ink-50 shadow"
                          style={
                            left
                              ? { left: "auto", right: "-12px" }
                              : { left: "-12px" }
                          }
                        />
                        <p className="text-xs font-semibold uppercase tracking-widest text-brand-700">
                          {p.years} · {p.origin}
                        </p>
                        <h3 className="mt-1 text-2xl font-bold text-brand-900">
                          {p.name}
                        </h3>
                        <p className="mt-3 text-ink-600 leading-relaxed">
                          {p.legacy}
                        </p>
                        <blockquote
                          className={`mt-4 inline-flex gap-2 text-brand-800 italic ${
                            left ? "md:justify-end" : ""
                          }`}
                        >
                          <Quote className="h-4 w-4 text-gold-500 mt-1 shrink-0" aria-hidden="true" />
                          "{p.quote}"
                        </blockquote>
                      </div>
                      <div className="hidden md:block" />
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          <Reveal>
            <article className="rounded-3xl bg-brand-900 p-8 md:p-10 text-white h-full">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-400/20 text-gold-300 ring-1 ring-gold-300/30">
                <Compass className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="mt-6 text-2xl md:text-3xl font-bold">Mission</h2>
              <p className="mt-4 text-lg leading-relaxed text-white/85">
                To advance human dignity, equality, and opportunity by
                supporting vulnerable and underserved communities through
                sustainable, community-driven programs.
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.1}>
            <article className="rounded-3xl bg-brand-800 p-8 md:p-10 text-white h-full">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-400/20 text-gold-300 ring-1 ring-gold-300/30">
                <Eye className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="mt-6 text-2xl md:text-3xl font-bold">Vision</h2>
              <p className="mt-4 text-lg leading-relaxed text-white/85">
                A world where every person lives with dignity, safety, and
                equal opportunity, regardless of their circumstances.
              </p>
            </article>
          </Reveal>
        </div>

        <div className="container-page mt-16">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
                Core Values
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-brand-900 text-balance">
                Six values we hold ourselves to—every day, in every program.
              </h2>
            </div>
          </Reveal>

          <StaggerContainer className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="h-full rounded-2xl bg-ink-50 p-6 ring-1 ring-ink-100">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white text-brand-700 ring-1 ring-brand-100">
                    <v.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-brand-900">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">
                    {v.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 md:py-24 bg-ink-50">
        <div className="container-page">
          <div className="rounded-3xl bg-gradient-to-br from-brand-800 to-brand-950 p-10 md:p-14 text-white">
            <div className="grid items-center gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h2 className="text-2xl md:text-3xl font-bold text-balance">
                  We can't do this alone—and that's the point.
                </h2>
                <p className="mt-3 text-white/85 max-w-2xl">
                  Whether you're a donor, a volunteer, or a future partner,
                  there's a place for you here.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <ButtonLink href="/donate" variant="gold" size="md">
                  Donate
                </ButtonLink>
                <Link
                  href="/volunteer"
                  className="inline-flex items-center justify-center rounded-full px-5 py-2.5 ring-1 ring-white/40 hover:bg-white/10"
                >
                  Volunteer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
