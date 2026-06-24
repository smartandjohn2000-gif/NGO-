import type { Metadata } from "next";
import { Lock } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { DONATION_OPTIONS, SITE_CONFIG, TESTIMONIALS } from "@/lib/constants";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support change that lasts through one-time or monthly donations via Charitable Impact.",
  alternates: { canonical: "/donate" },
};

export default function DonatePage() {
  return (
    <>
      <PageHero
        title={SITE_CONFIG.donationHeadline}
        subtitle="Support community-driven programs that protect children, empower youth, and strengthen resilience."
        image="/images/donate-hero-gift.jpg"
        mono
      />

      <div className="container-shell space-y-12 py-12 md:space-y-16 md:py-16">
        <section className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <article className="surface-card p-6 md:p-8">
            <SectionHeading
              eyebrow="Donation Platform"
              title="Give securely through Charitable Impact"
              description="Choose one-time or monthly giving and receive transparent impact updates."
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink
                href="https://charitableimpact.com/"
                variant="primary"
                size="lg"
                className="w-fit"
              >
                Donate via Charitable Impact
              </ButtonLink>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {DONATION_OPTIONS.map((option) => (
                <article key={option.name} className="rounded-xl border border-[#0F4C81]/10 bg-[#F7F9FC] p-4">
                  <h3 className="text-base font-semibold text-[#0F4C81]">{option.name}</h3>
                  <p className="mt-2 text-sm text-slate-600">{option.description}</p>
                </article>
              ))}
            </div>
            <div className="mt-8 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
              <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-800">
                <Lock size={16} /> Secure Donation Banner
              </p>
              <p className="mt-1 text-sm text-emerald-700">
                Your donation is processed through a trusted, secure platform.
              </p>
            </div>
          </article>

          <article className="surface-card p-6">
            <h3 className="text-xl font-semibold text-[#0F4C81]">Impact Statements</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>• Every $50 helps deliver child protection and family support services.</li>
              <li>• Every $100 supports youth technical skills training pathways.</li>
              <li>• Monthly giving sustains inclusive health and education support.</li>
            </ul>
            <h4 className="mt-7 text-lg font-semibold text-[#0F4C81]">Donor Testimonials</h4>
            <div className="mt-3 space-y-3">
              {TESTIMONIALS.map((testimonial) => (
                <blockquote key={testimonial.name} className="rounded-xl border border-slate-200 bg-[#F7F9FC] p-4">
                  <p className="text-sm text-slate-700">“{testimonial.quote}”</p>
                  <footer className="mt-2 text-xs font-semibold uppercase tracking-wide text-[#0F4C81]/70">
                    {testimonial.name} · {testimonial.role}
                  </footer>
                </blockquote>
              ))}
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
