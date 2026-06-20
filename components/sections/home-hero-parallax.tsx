"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ButtonLink } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

export function HomeHeroParallax() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const root = sectionRef.current;
    const bg = bgRef.current;
    const content = contentRef.current;
    if (!root || !bg || !content) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      gsap.set(content, { autoAlpha: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        content,
        { autoAlpha: 0, y: 36 },
        { autoAlpha: 1, y: 0, duration: 0.9, ease: "power2.out" },
      );

      gsap.to(bg, {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate min-h-[calc(100vh-5rem)] overflow-hidden bg-white"
      aria-label="World Impact Initiative hero"
    >
      <div ref={bgRef} className="absolute inset-0">
        <Image
          src="/images/home-hero.jpg"
          alt="Volunteers supporting children and families through humanitarian programs"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#0F4C81]/52 via-[#4DA6FF]/32 to-[#0F4C81]/24" />

      <div className="container-shell relative flex min-h-[calc(100vh-5rem)] items-center py-16 md:py-24">
        <div ref={contentRef} className="max-w-4xl space-y-6 text-white">
          <p className="text-base font-semibold uppercase tracking-[0.14em] text-[#F4C542]">
            Humanitarian Nonprofit Organization
          </p>
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Creating Lasting Impact Through Compassion, Protection, and Opportunity
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-white/95 md:text-[1.3rem]">
            Supporting vulnerable communities through protection, empowerment, inclusion,
            education, and humanitarian action.
          </p>
          <div className="flex flex-wrap gap-4">
            <ButtonLink href="#impact-areas" variant="primary" size="lg">
              Discover Our Work
            </ButtonLink>
            <ButtonLink href="/volunteer" variant="secondary" size="lg">
              Join Our Mission
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
