"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { gsap } from "gsap";
import { ButtonLink } from "@/components/ui/button";
import type { HeroSlide } from "@/lib/constants";

type HeroSliderProps = {
  slides: HeroSlide[];
  autoplayMs?: number;
};

export function HeroSlider({ slides, autoplayMs = 6200 }: HeroSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const sliderRef = useRef<HTMLElement | null>(null);
  const slideRefs = useRef<Array<HTMLDivElement | null>>([]);
  const mediaRefs = useRef<Array<HTMLDivElement | null>>([]);
  const contentRefs = useRef<Array<HTMLDivElement | null>>([]);
  const touchStartXRef = useRef<number | null>(null);

  const totalSlides = slides.length;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);
    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  const goToSlide = useCallback(
    (index: number) => {
      setActiveIndex((index + totalSlides) % totalSlides);
    },
    [totalSlides],
  );

  const goToNext = useCallback(() => goToSlide(activeIndex + 1), [activeIndex, goToSlide]);
  const goToPrevious = useCallback(() => goToSlide(activeIndex - 1), [activeIndex, goToSlide]);

  useEffect(() => {
    if (totalSlides < 2 || isPaused || prefersReducedMotion) return;
    const timer = window.setInterval(() => {
      setActiveIndex((previous) => (previous + 1) % totalSlides);
    }, autoplayMs);
    return () => window.clearInterval(timer);
  }, [autoplayMs, isPaused, prefersReducedMotion, totalSlides]);

  useEffect(() => {
    slideRefs.current.forEach((slide, index) => {
      if (!slide) return;
      const isCurrent = index === activeIndex;

      if (prefersReducedMotion) {
        slide.style.opacity = isCurrent ? "1" : "0";
        slide.style.visibility = isCurrent ? "visible" : "hidden";
      } else {
        gsap.to(slide, {
          autoAlpha: isCurrent ? 1 : 0,
          duration: 0.85,
          ease: "power2.out",
        });
      }

      const media = mediaRefs.current[index];
      if (media && !prefersReducedMotion) {
        gsap.fromTo(
          media,
          { scale: isCurrent ? 1.1 : 1.04, yPercent: isCurrent ? 2 : 0 },
          {
            scale: isCurrent ? 1 : 1.05,
            yPercent: isCurrent ? 0 : 1,
            duration: 1.1,
            ease: "power2.out",
          },
        );
      }

      const content = contentRefs.current[index];
      if (content && !prefersReducedMotion && isCurrent) {
        gsap.fromTo(
          content,
          { y: 34, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.8, ease: "power2.out", delay: 0.12 },
        );
      }
    });
  }, [activeIndex, prefersReducedMotion]);

  const handleKeyDown: React.KeyboardEventHandler<HTMLElement> = (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goToNext();
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goToPrevious();
    }
  };

  const handleTouchStart: React.TouchEventHandler<HTMLElement> = (event) => {
    touchStartXRef.current = event.changedTouches[0]?.clientX ?? null;
  };

  const handleTouchEnd: React.TouchEventHandler<HTMLElement> = (event) => {
    const startX = touchStartXRef.current;
    const endX = event.changedTouches[0]?.clientX;
    if (startX === null || endX === undefined) return;
    const deltaX = startX - endX;
    if (Math.abs(deltaX) < 45) return;
    if (deltaX > 0) goToNext();
    if (deltaX < 0) goToPrevious();
  };

  const liveRegionText = useMemo(
    () => `Slide ${activeIndex + 1} of ${totalSlides}: ${slides[activeIndex]?.headline ?? ""}`,
    [activeIndex, slides, totalSlides],
  );

  return (
    <section
      ref={sliderRef}
      className="relative isolate h-[calc(100vh-7rem)] min-h-[36rem] overflow-hidden bg-[#0F4C81] text-white"
      aria-roledescription="carousel"
      aria-label="World Impact Initiative hero highlights"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <p className="sr-only" aria-live="polite">
        {liveRegionText}
      </p>

      {slides.map((slide, index) => {
        const isActive = index === activeIndex;
        const HeadingTag = index === 0 ? "h1" : "h2";
        return (
          <div
            key={slide.id}
            ref={(element) => {
              slideRefs.current[index] = element;
            }}
            className="absolute inset-0"
            style={{ opacity: isActive ? 1 : 0, visibility: isActive ? "visible" : "hidden" }}
            aria-hidden={!isActive}
          >
            <div
              ref={(element) => {
                mediaRefs.current[index] = element;
              }}
              className="absolute inset-0"
            >
              {slide.mediaType === "video" ? (
                <video
                  className="h-full w-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  poster={slide.mediaPoster}
                  aria-hidden="true"
                >
                  <source src={slide.mediaSrc} type="video/mp4" />
                </video>
              ) : (
                <Image src={slide.mediaSrc} alt={slide.headline} fill className="object-cover" sizes="100vw" />
              )}
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A2440]/78 via-[#0F4C81]/56 to-[#0A2440]/38" />

            <div className="container-shell relative flex h-full items-center py-20 md:py-28">
              <div
                ref={(element) => {
                  contentRefs.current[index] = element;
                }}
                className="w-full max-w-5xl rounded-[2rem] border border-white/25 bg-white/12 p-6 shadow-2xl backdrop-blur-md sm:p-8 md:p-12"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#F4B400]">
                  {slide.focus}
                </p>
                <HeadingTag className="mt-4 max-w-4xl text-4xl font-bold leading-tight [text-shadow:0_14px_42px_rgba(4,24,44,0.6)] md:text-6xl">
                  {slide.headline}
                </HeadingTag>
                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/95 md:text-[1.25rem]">
                  {slide.supporting}
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <ButtonLink href={slide.ctaHref} variant="primary" size="lg">
                    {slide.ctaLabel}
                  </ButtonLink>
                  <ButtonLink
                    href="/volunteer"
                    variant="ghost"
                    size="lg"
                    className="border-white/35 bg-white/10 text-white hover:border-white hover:bg-white/20"
                  >
                    Join Our Mission
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <button
        type="button"
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 z-20 inline-flex min-h-12 min-w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/35 bg-black/25 text-white transition hover:bg-black/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4B400]"
        aria-label="Show previous hero slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        type="button"
        onClick={goToNext}
        className="absolute right-4 top-1/2 z-20 inline-flex min-h-12 min-w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/35 bg-black/25 text-white transition hover:bg-black/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4B400]"
        aria-label="Show next hero slide"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute inset-x-0 bottom-6 z-20 flex items-center justify-center gap-2 px-4">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => goToSlide(index)}
            className="group inline-flex items-center gap-2"
            aria-label={`Go to slide ${index + 1}: ${slide.focus}`}
            aria-current={index === activeIndex}
          >
            <span
              className={[
                "block h-2.5 rounded-full transition-all duration-300",
                index === activeIndex ? "w-10 bg-[#F4B400]" : "w-2.5 bg-white/70 group-hover:bg-white",
              ].join(" ")}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
