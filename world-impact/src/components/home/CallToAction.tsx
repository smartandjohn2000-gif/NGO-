"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { ArrowRight, Heart, Handshake, Users } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ctaOptions = [
  {
    icon: Heart,
    title: "Make a Donation",
    description:
      "Your financial support funds life-changing programs delivering healthcare, education, protection, and empowerment to those who need it most.",
    href: "/donate",
    btnLabel: "Donate Now",
    btnClass: "btn-gold",
    accent: "#F4C542",
  },
  {
    icon: Handshake,
    title: "Partner With Us",
    description:
      "Organizations and institutions can partner with World Impact Initiative to scale impact, share resources, and create sustainable change together.",
    href: "/contact",
    btnLabel: "Become a Partner",
    btnClass: "btn-outline",
    accent: "#4DA6FF",
  },
  {
    icon: Users,
    title: "Volunteer Your Skills",
    description:
      "Join our global network of passionate volunteers. Contribute your time, skills, and compassion to causes that make a real difference in people's lives.",
    href: "/volunteer",
    btnLabel: "Join as Volunteer",
    btnClass: "btn-sky",
    accent: "#2FAE66",
  },
];

export default function CallToAction() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Parallax background image
      if (imgRef.current) {
        gsap.fromTo(
          imgRef.current,
          { yPercent: 8 },
          {
            yPercent: -8,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
      }

      // Stagger CTA cards
      gsap.fromTo(
        ".cta-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".cta-grid",
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
      className="relative section-padding overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Light blue gradient background — NO dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 60%, #E0F2FE 100%)" }}
      />

      {/* Decorative image strip on the right (desktop) */}
      <div className="absolute right-0 top-0 bottom-0 w-80 hidden xl:block overflow-hidden">
        <div
          ref={imgRef}
          className="absolute will-change-transform"
          style={{ inset: "-10%" }}
        >
          <Image
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80"
            alt="Volunteers working together"
            fill
            className="object-cover"
            sizes="320px"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, #EFF6FF 0%, rgba(239,246,255,0) 40%)" }}
          />
        </div>
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="section-label">Take Action</div>
          <h2
            id="cta-heading"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#0F4C81",
              lineHeight: 1.15,
              marginBottom: "1rem",
            }}
          >
            Together We Can Create a{" "}
            <span style={{ color: "#4DA6FF" }}>More Just World</span>
          </h2>
          <p className="body-lg" style={{ color: "#4B5563" }}>
            Whether through donations, partnerships, or volunteering — your
            involvement creates lasting, measurable change for communities in need.
          </p>
        </div>

        {/* CTA Grid */}
        <div className="cta-grid grid md:grid-cols-3 gap-6 xl:max-w-3xl">
          {ctaOptions.map((option) => {
            const Icon = option.icon;
            return (
              <div
                key={option.title}
                className="cta-card bg-white rounded-2xl p-7 flex flex-col border border-gray-100"
                style={{ boxShadow: "0 4px 24px rgba(15,76,129,0.08)" }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: `${option.accent}18` }}
                >
                  <Icon className="w-6 h-6" style={{ color: option.accent }} />
                </div>

                <h3
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 700,
                    fontSize: "1.125rem",
                    color: "#0F4C81",
                    marginBottom: "0.75rem",
                  }}
                >
                  {option.title}
                </h3>

                <p
                  className="flex-1 mb-6"
                  style={{ color: "#6B7280", fontSize: "0.9375rem", lineHeight: 1.75 }}
                >
                  {option.description}
                </p>

                <Link
                  href={option.href}
                  className={`${option.btnClass} w-full justify-center gap-2`}
                >
                  {option.btnLabel}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
