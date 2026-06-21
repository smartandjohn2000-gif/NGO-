"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";

const HERO_SLIDES = [
  {
    src: "/images/impact/impact-gender-equality.jpg",
    alt: "World Impact Initiative facilitator listening to a circle of women",
  },
  {
    src: "/images/impact/impact-child-protection.jpg",
    alt: "Children laughing and cheering together",
  },
  {
    src: "/images/impact/impact-youth-empowerment.jpg",
    alt: "Young people learning technical and digital skills in a computer lab",
  },
  {
    src: "/images/impact/impact-disability-inclusion.jpg",
    alt: "A World Impact Initiative worker assisting a woman using a wheelchair ramp",
  },
  {
    src: "/images/impact/impact-health-education.jpg",
    alt: "A health worker checking an elderly woman's blood pressure",
  },
  {
    src: "/images/impact/impact-crisis-response.jpg",
    alt: "Volunteers distributing meals to children during a relief response",
  },
];

const SLIDE_DURATION = 5000;

export function HomeHeroSlideshow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % HERO_SLIDES.length);
    }, SLIDE_DURATION);

    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="wii-hero" aria-label="World Impact Initiative hero">
      <div className="wii-hero__stage">
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={slide.src}
            className={`wii-hero__slide${index === active ? " is-active" : ""}`}
            aria-hidden={index === active ? undefined : true}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="wii-hero__media"
            />
          </div>
        ))}
      </div>
      <div className="wii-hero__overlay" />

      <div className="container-shell wii-hero__content">
        <p className="wii-hero__eyebrow">World Impact Initiative</p>
        <h1 className="wii-hero__title">
          Creating Lasting Impact Through{" "}
          <span className="wii-hero__accent">Compassion, Protection, and Opportunity</span>
        </h1>
        <div className="wii-hero__actions">
          <ButtonLink href="#impact-areas" variant="secondary" size="lg">
            Discover Our Work
          </ButtonLink>
        </div>
      </div>

      <div className="wii-hero__dots" role="tablist" aria-label="Hero slides">
        {HERO_SLIDES.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            className={`wii-hero__dot${index === active ? " is-active" : ""}`}
            aria-label={`Show slide ${index + 1}`}
            aria-selected={index === active}
            role="tab"
            onClick={() => setActive(index)}
          />
        ))}
      </div>
    </section>
  );
}
