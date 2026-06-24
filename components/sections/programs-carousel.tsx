"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { gsap } from "gsap";
import { ButtonLink } from "@/components/ui/button";
import { IMPACT_THEMES, type ProgramContent } from "@/lib/constants";

type ProgramsCarouselProps = {
  programs: ProgramContent[];
  autoplayMs?: number;
};

export function ProgramsCarousel({ programs, autoplayMs = 5500 }: ProgramsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const touchStartXRef = useRef<number | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);
    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  const goToSlide = useCallback(
    (nextIndex: number) => {
      const normalizedIndex = (nextIndex + programs.length) % programs.length;
      setActiveIndex(normalizedIndex);
    },
    [programs.length],
  );

  const goToPrevious = useCallback(() => goToSlide(activeIndex - 1), [activeIndex, goToSlide]);
  const goToNext = useCallback(() => goToSlide(activeIndex + 1), [activeIndex, goToSlide]);

  useEffect(() => {
    if (!trackRef.current) return;
    if (prefersReducedMotion) {
      gsap.set(trackRef.current, { xPercent: -activeIndex * 100 });
      return;
    }
    gsap.to(trackRef.current, {
      xPercent: -activeIndex * 100,
      duration: 0.8,
      ease: "power3.out",
    });
  }, [activeIndex, prefersReducedMotion]);

  useEffect(() => {
    if (isPaused || programs.length < 2 || prefersReducedMotion) return;
    const timer = window.setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % programs.length);
    }, autoplayMs);
    return () => window.clearInterval(timer);
  }, [autoplayMs, isPaused, prefersReducedMotion, programs.length]);

  const handleTouchStart: React.TouchEventHandler<HTMLDivElement> = (event) => {
    touchStartXRef.current = event.changedTouches[0]?.clientX ?? null;
  };

  const handleTouchEnd: React.TouchEventHandler<HTMLDivElement> = (event) => {
    const startX = touchStartXRef.current;
    const endX = event.changedTouches[0]?.clientX;
    if (startX === null || endX === undefined) return;
    const delta = startX - endX;
    if (Math.abs(delta) < 45) return;
    if (delta > 0) goToNext();
    if (delta < 0) goToPrevious();
  };

  return (
    <section
      className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-[#0F4C81] shadow-2xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Programs carousel"
    >
      <div ref={trackRef} className="flex will-change-transform">
        {programs.map((program) => {
          const theme = IMPACT_THEMES[program.slug];
          return (
            <article key={program.slug} className="relative min-w-full">
              <div className="relative h-[27rem] w-full sm:h-[30rem]">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority={program.slug === programs[0]?.slug}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0F4C81]/85 via-[#0F4C81]/62 to-[#0F4C81]/40" />
                <div className="absolute inset-0 flex items-end p-4 sm:p-8 md:p-10">
                  <div
                    className="max-w-2xl rounded-3xl border p-6 text-white shadow-xl backdrop-blur-md sm:p-8"
                    style={{ borderColor: theme.ring, backgroundColor: "rgba(255,255,255,0.14)" }}
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.18em]" style={{ color: theme.soft }}>
                      Featured Program
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold leading-tight sm:text-3xl">
                      {program.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-white/95 sm:text-[1.1rem]">
                      {program.heroSummary}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <ButtonLink href={`/programs/${program.slug}`} variant="primary" size="md">
                        Learn More
                      </ButtonLink>
                      <ButtonLink href="/donate" variant="ghost" size="md" className="text-white">
                        Donate
                      </ButtonLink>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <button
        type="button"
        onClick={goToPrevious}
        className="absolute left-3 top-1/2 z-10 inline-flex min-h-11 min-w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/25 text-white transition hover:bg-black/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4B400]"
        aria-label="Previous program slide"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        type="button"
        onClick={goToNext}
        className="absolute right-3 top-1/2 z-10 inline-flex min-h-11 min-w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/25 text-white transition hover:bg-black/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4B400]"
        aria-label="Next program slide"
      >
        <ChevronRight size={20} />
      </button>

      <div className="absolute inset-x-0 bottom-4 z-10 flex items-center justify-center gap-2 px-4">
        {programs.map((program, index) => (
          <button
            key={program.slug}
            type="button"
            onClick={() => goToSlide(index)}
            className="group"
            aria-label={`Go to ${program.title}`}
            aria-current={index === activeIndex}
          >
            <span
              className={[
                "block h-2.5 rounded-full transition-all duration-300",
                index === activeIndex ? "w-10 bg-[#F4B400]" : "w-2.5 bg-white/60 group-hover:bg-white",
              ].join(" ")}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
