import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck, HandHeart, Repeat, Quote, Lock } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Donate — Support Change That Lasts",
  description:
    "Donate one-time or monthly to World Impact Initiative through our secure donation partner CharitableImpact. Your gift powers programs in 37+ communities.",
  alternates: { canonical: "/donate" },
};

const impacts = [
  { amount: "$50", impact: "Provides school supplies for 5 children for a term." },
  { amount: "$120", impact: "Funds a dignity kit for a displaced family of four." },
  { amount: "$250", impact: "Powers one month of mobile clinic visits in a remote village." },
  { amount: "$500", impact: "Sponsors a young woman's vocational training graduation." },
  { amount: "$1,000", impact: "Equips a child-friendly space with materials and trained staff." },
  { amount: "$5,000", impact: "Underwrites a complete community-led emergency response team." },
];

const testimonials = [
  {
    quote:
      "I give monthly because I trust this team. Their reports are honest, their work is rigorous, and the people they serve are at the center.",
    author: "Helen M., monthly donor since 2021",
  },
  {
    quote:
      "Our family foundation has partnered with World Impact Initiative for three years. They are the most accountable nonprofit we work with.",
    author: "James R., Foundation Trustee",
  },
  {
    quote:
      "When we doubled our gift last year, they wrote back with a plan, a timeline, and the names of the families it would reach.",
    author: "Priya S., Sustaining Donor",
  },
];

export default function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="Donate"
        title="Support Change That Lasts."
        description="Your gift fuels programs designed by communities and delivered with integrity. 100% of every dollar is directed to where it is needed most."
        crumbs={[{ label: "Donate" }]}
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink
            href={siteConfig.donationUrl}
            external
            variant="gold"
            size="lg"
          >
            <HandHeart className="h-5 w-5" aria-hidden="true" />
            Give One-Time
          </ButtonLink>
          <ButtonLink
            href={siteConfig.donationUrl}
            external
            variant="outline"
            size="lg"
          >
            <Repeat className="h-5 w-5" aria-hidden="true" />
            Become a Monthly Donor
          </ButtonLink>
        </div>
      </PageHero>

      {/* Secure banner */}
      <div className="bg-emerald-50 border-y border-emerald-100">
        <div className="container-page py-3 flex flex-wrap items-center justify-center gap-3 text-sm text-emerald-900">
          <Lock className="h-4 w-4" aria-hidden="true" />
          <span>
            Donations are processed securely by{" "}
            <strong>CharitableImpact</strong> — a trusted Canadian platform for
            charitable giving. Tax receipts issued for eligible donations.
          </span>
        </div>
      </div>

      {/* One-time vs monthly */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-page grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="h-full rounded-3xl bg-gradient-to-br from-brand-800 to-brand-950 p-10 text-white">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20 text-gold-300">
                <HandHeart className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="mt-5 text-2xl md:text-3xl font-bold">
                One-Time Donation
              </h2>
              <p className="mt-3 text-white/85">
                Make an immediate impact today. Your gift directly supports
                programs in protection, education, and crisis response.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-white/85">
                <li>• Tax receipt issued for eligible amounts</li>
                <li>• Choose a program to direct your gift</li>
                <li>• Honor or memorial giving available</li>
              </ul>
              <div className="mt-7">
                <ButtonLink
                  href={siteConfig.donationUrl}
                  external
                  variant="gold"
                  size="md"
                >
                  Give Now
                </ButtonLink>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.1}>
            <article className="h-full rounded-3xl bg-gradient-to-br from-gold-400 to-gold-300 p-10 text-brand-900 relative overflow-hidden">
              <span className="absolute top-5 right-5 rounded-full bg-brand-900 text-gold-300 text-xs font-bold uppercase tracking-widest px-3 py-1">
                Most Impactful
              </span>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-900 text-gold-300">
                <Repeat className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="mt-5 text-2xl md:text-3xl font-bold">
                Monthly Donation
              </h2>
              <p className="mt-3 text-brand-900/85">
                Sustain our work with a recurring gift. Monthly donors give us
                the predictability to plan, hire, and respond.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-brand-900/85">
                <li>• Cancel or change any time</li>
                <li>• Annual donor impact report</li>
                <li>• Welcome kit and personal contact</li>
              </ul>
              <div className="mt-7">
                <ButtonLink
                  href={siteConfig.donationUrl}
                  external
                  variant="primary"
                  size="md"
                >
                  Become a Monthly Donor
                </ButtonLink>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* Impact statements */}
      <section className="py-16 md:py-20 bg-ink-50">
        <div className="container-page">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-700">
                Your Impact
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-brand-900 text-balance">
                What your gift can do
              </h2>
            </div>
          </Reveal>
          <StaggerContainer className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {impacts.map((i) => (
              <StaggerItem key={i.amount}>
                <div className="rounded-2xl bg-white p-7 ring-1 ring-ink-100 shadow-[0_2px_24px_rgba(7,34,60,0.04)]">
                  <p className="text-3xl font-extrabold text-brand-800">
                    {i.amount}
                  </p>
                  <p className="mt-2 text-sm text-ink-700 leading-relaxed">
                    {i.impact}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-page">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-700">
              Donor Voices
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-brand-900">
              Why our donors give
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <figure className="h-full rounded-3xl bg-ink-50 p-7 ring-1 ring-ink-100">
                  <Quote className="h-7 w-7 text-gold-500" aria-hidden="true" />
                  <blockquote className="mt-4 text-base leading-relaxed text-ink-700">
                    "{t.quote}"
                  </blockquote>
                  <figcaption className="mt-5 text-sm font-semibold text-brand-900">
                    {t.author}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trust + visualization */}
      <section className="py-16 md:py-20 bg-brand-900 text-white relative overflow-hidden">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-gold-300">
              Trust & Transparency
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-balance">
              Every dollar accounted for. Every program rigorously reported.
            </h2>
            <p className="mt-4 text-white/80">
              We publish an annual report, audited financials, and program
              evaluations. We comply with Canadian charity regulations and
              international humanitarian standards.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div>
                <p className="text-3xl font-bold text-gold-300">87¢</p>
                <p className="text-xs text-white/70 uppercase tracking-widest">
                  Of every dollar to programs
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gold-300">A+</p>
                <p className="text-xs text-white/70 uppercase tracking-widest">
                  Charity transparency rating
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gold-300">100%</p>
                <p className="text-xs text-white/70 uppercase tracking-widest">
                  Locally led programs
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl ring-1 ring-white/10">
              <Image
                src="/images/donate-impact.jpg"
                alt="Children at a community program"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 ring-inset ring-white/10" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ teaser */}
      <section className="py-14 bg-ink-50">
        <div className="container-page text-center">
          <ShieldCheck className="h-10 w-10 text-brand-700 mx-auto" aria-hidden="true" />
          <h2 className="mt-3 text-2xl md:text-3xl font-bold text-brand-900">
            Questions about giving?
          </h2>
          <p className="mt-3 text-ink-600">
            Email{" "}
            <a
              className="text-brand-700 underline underline-offset-2"
              href={`mailto:${siteConfig.email}`}
            >
              {siteConfig.email}
            </a>{" "}
            and our donor relations team will be in touch within 24 hours.
          </p>
        </div>
      </section>
    </>
  );
}
