"use client";

import { useEffect, useMemo, useState } from "react";
import { ButtonLink } from "@/components/ui/button";

const SLIDES = [
  "/images/gallery-2.jpg",
  "/images/gallery-7.jpg",
  "/images/gallery-11.jpg",
];

export function HomeHeroSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => setPrefersReducedMotion(media.matches);
    syncPreference();
    media.addEventListener("change", syncPreference);
    return () => media.removeEventListener("change", syncPreference);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % SLIDES.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, [prefersReducedMotion]);

  const trackStyle = useMemo(
    () => ({ transform: `translateX(-${activeIndex * 100}%)` }),
    [activeIndex],
  );

  return (
    <section className="wii-hero" aria-label="World Impact Initiative hero">
      <div className="wii-hero__slides" style={trackStyle}>
        {SLIDES.map((image) => (
          <div key={image} className="wii-hero__slide" style={{ backgroundImage: `url(${image})` }} />
        ))}
      </div>
      <div className="wii-hero__overlay" />

      <div className="container-shell wii-hero__content">
        <p className="wii-hero__eyebrow">Empowering Communities</p>
        <h1 className="wii-hero__title">
          Creating Lasting Impact Through Compassion, Protection, and Opportunity
        </h1>
        <p className="wii-hero__subtitle">
          Supporting vulnerable communities through protection, empowerment, inclusion,
          education, and humanitarian action.
        </p>
        <div className="wii-hero__actions">
          <ButtonLink href="#impact-areas" variant="secondary" size="lg">
            Discover Our Work
          </ButtonLink>
          <ButtonLink href="/volunteer" variant="ghost" size="lg" className="wii-hero__ghost">
            Join Our Mission
          </ButtonLink>
        </div>

        <div className="wii-hero__dots" role="tablist" aria-label="Hero slides">
          {SLIDES.map((_, index) => (
            <button
              key={index}
              type="button"
              className={index === activeIndex ? "wii-dot active" : "wii-dot"}
              aria-label={`Show hero slide ${index + 1}`}
              aria-selected={index === activeIndex}
              role="tab"
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
