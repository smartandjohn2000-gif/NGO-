"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ButtonLink } from "@/components/ui/button";
import { IMPACT_THEMES, type ProgramContent } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

type ProgramsStackedSectionsProps = {
  programs: ProgramContent[];
};

export function ProgramsStackedSections({ programs }: ProgramsStackedSectionsProps) {
  const rootRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray<HTMLElement>(".impact-stack-row");
      rows.forEach((row) => {
        const image = row.querySelector<HTMLElement>(".impact-stack-image");
        const content = row.querySelector<HTMLElement>(".impact-stack-content");

        if (image) {
          gsap.fromTo(
            image,
            { autoAlpha: 0, y: 40 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: { trigger: row, start: "top 80%" },
            },
          );

          gsap.to(image, {
            yPercent: -8,
            ease: "none",
            scrollTrigger: {
              trigger: row,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        }

        if (content) {
          gsap.fromTo(
            content,
            { autoAlpha: 0, y: 34 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.85,
              ease: "power2.out",
              scrollTrigger: { trigger: row, start: "top 82%" },
            },
          );
        }
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="space-y-10 md:space-y-14" aria-label="Impact program sections">
      {programs.map((program, index) => {
        const theme = IMPACT_THEMES[program.slug];
        const reverse = index % 2 === 1;
        return (
          <article
            key={program.slug}
            className={[
              "impact-stack-row grid gap-6 rounded-3xl border p-5 md:p-8",
              reverse ? "md:grid-cols-[1fr_1.1fr]" : "md:grid-cols-[1.1fr_1fr]",
            ].join(" ")}
            style={{ borderColor: theme.ring, backgroundColor: theme.soft }}
          >
            <div className={reverse ? "impact-stack-content md:order-2" : "impact-stack-content"}>
              <p className="text-sm font-semibold uppercase tracking-[0.12em]" style={{ color: theme.strong }}>
                {program.title}
              </p>
              <h3 className="mt-3 text-3xl font-bold text-[#0F4C81]">{program.title}</h3>
              <p className="mt-4 text-lg leading-relaxed text-slate-700">{program.heroSummary}</p>
              <p className="mt-4 text-lg leading-relaxed text-slate-700">{program.whyItMatters}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <ButtonLink href={`/programs/${program.slug}`} variant="secondary" size="md">
                  Learn More
                </ButtonLink>
                <ButtonLink href="/donate" variant="primary" size="md">
                  Support This Program
                </ButtonLink>
              </div>
            </div>

            <div className={reverse ? "impact-stack-image md:order-1" : "impact-stack-image"}>
              <div className="relative h-72 overflow-hidden rounded-2xl border border-white/70 bg-white shadow-sm md:h-80">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}
