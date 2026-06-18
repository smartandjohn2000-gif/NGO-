import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { programs } from "@/lib/programs";

export const metadata: Metadata = {
  title: "Our Programs",
  description:
    "Explore the six interconnected programs of World Impact Initiative—from gender equality and child protection to youth empowerment, disability inclusion, health and education, and crisis response.",
  alternates: { canonical: "/programs" },
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Programs"
        title="Six programs. One commitment to dignity, opportunity, and protection."
        description="Each program is designed in close partnership with the communities we serve and informed by decades of humanitarian and development practice."
        crumbs={[{ label: "Programs" }]}
      />

      <section className="py-20 md:py-24 bg-white">
        <div className="container-page">
          <StaggerContainer className="grid gap-8 lg:grid-cols-2">
            {programs.map((p) => (
              <StaggerItem key={p.slug}>
                <Link
                  href={`/programs/${p.slug}`}
                  className="group block h-full overflow-hidden rounded-3xl ring-1 ring-ink-100 bg-white shadow-[0_2px_24px_rgba(7,34,60,0.05)] hover:shadow-[0_18px_44px_rgba(7,34,60,0.12)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="grid sm:grid-cols-5 h-full">
                    <div className={`relative sm:col-span-2 aspect-[4/3] sm:aspect-auto bg-gradient-to-br from-brand-700 to-brand-950`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-white/10 ring-1 ring-white/20 text-gold-300">
                          <p.Icon className="h-10 w-10" aria-hidden="true" />
                        </span>
                      </div>
                    </div>
                    <div className="sm:col-span-3 p-7 md:p-8 flex flex-col">
                      <h2 className="text-xl md:text-2xl font-bold text-brand-900">
                        {p.title}
                      </h2>
                      <p className="mt-3 text-sm md:text-base text-ink-600 leading-relaxed">
                        {p.summary}
                      </p>
                      <span className="mt-auto pt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                        Learn more
                        <ArrowRight
                          className="h-4 w-4 transition-transform group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Cross-cutting CTA */}
      <section className="py-16 bg-ink-50">
        <div className="container-page">
          <Reveal>
            <div className="rounded-3xl bg-gradient-to-br from-brand-800 to-brand-950 p-10 md:p-14 text-white">
              <div className="grid items-center gap-8 lg:grid-cols-3">
                <div className="lg:col-span-2">
                  <h2 className="text-2xl md:text-3xl font-bold text-balance">
                    Looking for a program partner?
                  </h2>
                  <p className="mt-3 text-white/85 max-w-2xl">
                    We collaborate with foundations, multilateral agencies, and
                    grassroots organizations to deliver programs that endure.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 lg:justify-end">
                  <ButtonLink href="/contact?subject=partnership" variant="gold" size="md">
                    Start a Partnership
                  </ButtonLink>
                  <ButtonLink href="/donate" variant="outline" size="md">
                    Fund a Program
                  </ButtonLink>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
