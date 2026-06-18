import { Compass, Eye } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

export function MissionVision() {
  return (
    <section className="relative py-20 md:py-28 bg-brand-900 text-white overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-gold-400 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-brand-500 blur-3xl" />
      </div>

      <div className="container-page grid gap-8 md:grid-cols-2">
        <Reveal>
          <article className="rounded-3xl bg-white/5 backdrop-blur p-8 md:p-10 ring-1 ring-white/10 h-full">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-400/20 text-gold-300 ring-1 ring-gold-300/30">
              <Compass className="h-6 w-6" aria-hidden="true" />
            </span>
            <h2 className="mt-6 text-2xl md:text-3xl font-bold text-white">
              Our Mission
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/85">
              The mission of World Impact Initiative is to advance human
              dignity, equality, and opportunity by supporting vulnerable and
              underserved communities through sustainable, community-driven
              programs.
            </p>
          </article>
        </Reveal>
        <Reveal delay={0.1}>
          <article className="rounded-3xl bg-white/5 backdrop-blur p-8 md:p-10 ring-1 ring-white/10 h-full">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-400/20 text-gold-300 ring-1 ring-gold-300/30">
              <Eye className="h-6 w-6" aria-hidden="true" />
            </span>
            <h2 className="mt-6 text-2xl md:text-3xl font-bold text-white">
              Our Vision
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/85">
              World Impact Initiative envisions a world where every person
              lives with dignity, safety, and equal opportunity, regardless of
              their circumstances.
            </p>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
