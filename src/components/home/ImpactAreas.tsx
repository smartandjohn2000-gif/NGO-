import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { programs } from "@/lib/programs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/motion/Reveal";

export function ImpactAreas() {
  return (
    <section className="relative py-20 md:py-28 bg-ink-50">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Our Impact Areas"
            title="Six interconnected programs, one shared belief: every life matters."
            description="From child protection to crisis response, our programs are designed and delivered with the communities we serve."
          />
        </Reveal>

        <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <StaggerItem key={p.slug}>
              <Link
                href={`/programs/${p.slug}`}
                className="group relative block h-full overflow-hidden rounded-[var(--radius-card)] bg-white p-7 ring-1 ring-ink-100 shadow-[0_2px_24px_rgba(7,34,60,0.05)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(7,34,60,0.12)] transition-all duration-300"
              >
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${p.color} from-gold-400 via-gold-300 to-brand-500`}
                />
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-800 ring-1 ring-brand-100 group-hover:bg-brand-800 group-hover:text-gold-300 transition-colors">
                  <p.Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-brand-900">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">
                  {p.tagline}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 group-hover:text-brand-800">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
