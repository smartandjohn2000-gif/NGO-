"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const pillars = [
  "Human dignity and equality for all people",
  "Sustainable, community-led programs",
  "Transparency and accountability",
  "Inclusive partnerships and collaboration",
  "Evidence-based program delivery",
  "Respect for cultural diversity",
];

export default function WhoWeAre() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Gentle parallax on image
      if (imgRef.current) {
        gsap.fromTo(
          imgRef.current,
          { yPercent: 6 },
          {
            yPercent: -6,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
            },
          }
        );
      }

      // Stagger animate text items
      gsap.fromTo(
        ".who-item",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".who-pillars",
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-white"
      aria-labelledby="who-we-are-heading"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image with subtle frame */}
          <div className="relative">
            {/* Frame accent */}
            <div
              className="absolute -top-5 -left-5 w-24 h-24 rounded-2xl z-0"
              style={{ background: "linear-gradient(135deg, #4DA6FF22, #4DA6FF44)" }}
            />
            <div
              className="absolute -bottom-5 -right-5 w-16 h-16 rounded-xl z-0"
              style={{ background: "#F4C54244" }}
            />

            {/* Image container */}
            <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(15,76,129,0.15)] aspect-[4/5] z-10">
              <div
                ref={imgRef}
                className="absolute will-change-transform"
                style={{ inset: "-8%" }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=800&q=90"
                  alt="Community members participating in World Impact Initiative programs"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Subtle color wash at bottom */}
              <div
                className="absolute inset-x-0 bottom-0 h-32 z-10"
                style={{ background: "linear-gradient(to top, rgba(15,76,129,0.15), transparent)" }}
              />
            </div>

            {/* Floating badge */}
            <div
              className="absolute bottom-6 -left-4 z-20 bg-white rounded-2xl px-5 py-4 shadow-xl border border-gray-100"
            >
              <p style={{ color: "#0F4C81", fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "1.875rem" }}>
                10+
              </p>
              <p style={{ color: "#6B7280", fontSize: "0.875rem", fontWeight: 500 }}>Years of Impact</p>
            </div>

            {/* Flag badge */}
            <div
              className="absolute top-6 -right-4 z-20 bg-white rounded-xl px-4 py-3 shadow-lg border border-gray-100 flex items-center gap-2"
            >
              <span style={{ fontSize: "1.5rem" }}>🇨🇦</span>
              <div>
                <p style={{ color: "#0F4C81", fontWeight: 700, fontSize: "0.8125rem" }}>Canadian</p>
                <p style={{ color: "#9CA3AF", fontSize: "0.75rem" }}>Nonprofit</p>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <div className="section-label">Who We Are</div>
            <h2
              id="who-we-are-heading"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)",
                color: "#0F4C81",
                lineHeight: 1.2,
                marginBottom: "1.5rem",
              }}
            >
              Empowering People, Strengthening Communities
            </h2>

            <p className="body-lg mb-4" style={{ color: "#4B5563" }}>
              World Impact Initiative is a Canadian nonprofit committed to
              empowering individuals and communities facing social, economic,
              and humanitarian challenges.
            </p>
            <p className="body-md mb-4" style={{ color: "#6B7280" }}>
              We believe lasting change begins with people — and is strengthened
              through partnership, inclusion, opportunity, and volunteerism.
            </p>
            <p className="body-md mb-8" style={{ color: "#6B7280" }}>
              Our work focuses on protecting human rights, supporting vulnerable
              children and families, promoting equitable access to education and
              health resources, and fostering opportunities for youth and persons
              with disabilities.
            </p>

            {/* Values list */}
            <div className="who-pillars grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {pillars.map((pillar) => (
                <div key={pillar} className="who-item flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 shrink-0 mt-0.5"
                    style={{ color: "#2FAE66" }}
                  />
                  <span style={{ color: "#374151", fontSize: "0.9375rem", lineHeight: 1.6 }}>
                    {pillar}
                  </span>
                </div>
              ))}
            </div>

            <Link href="/about" className="btn-primary inline-flex gap-2">
              Our Full Story
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-20">
          <div
            className="rounded-2xl p-8"
            style={{ background: "#0F4C81" }}
          >
            <div className="text-4xl mb-4">🎯</div>
            <h3
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 800,
                fontSize: "1.375rem",
                color: "white",
                marginBottom: "0.875rem",
              }}
            >
              Our Mission
            </h3>
            <p style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.75, fontSize: "1rem" }}>
              To advance human dignity, equality, and opportunity by supporting
              vulnerable and underserved communities through sustainable,
              community-driven programs.
            </p>
          </div>

          <div
            className="rounded-2xl p-8"
            style={{ background: "#F4C542" }}
          >
            <div className="text-4xl mb-4">🌍</div>
            <h3
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 800,
                fontSize: "1.375rem",
                color: "#0F4C81",
                marginBottom: "0.875rem",
              }}
            >
              Our Vision
            </h3>
            <p style={{ color: "rgba(15,76,129,0.8)", lineHeight: 1.75, fontSize: "1rem" }}>
              A world where every person lives with dignity, safety, and equal
              opportunity — regardless of their circumstances, background, or
              ability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
