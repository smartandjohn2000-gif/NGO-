"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const testimonials = [
  {
    quote:
      "World Impact Initiative gave me the skills and confidence to start my own business. Today I employ five people from my community. My life has completely changed.",
    name: "Amara K.",
    role: "Youth Empowerment Graduate",
    country: "Ghana",
    flag: "🇬🇭",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=85",
    accent: "#4DA6FF",
  },
  {
    quote:
      "The disability inclusion program helped me access education I never thought possible. Now I am studying to become an engineer. Inclusion changed everything for me.",
    name: "David M.",
    role: "Disability Inclusion Beneficiary",
    country: "Nigeria",
    flag: "🇳🇬",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=85",
    accent: "#2FAE66",
  },
  {
    quote:
      "When our village was devastated by floods, World Impact Initiative was there with food, shelter, and hope. Their crisis response saved our community.",
    name: "Fatima R.",
    role: "Crisis Response Beneficiary",
    country: "Pakistan",
    flag: "🇵🇰",
    image: "https://images.unsplash.com/photo-1614644147724-2d4785d69962?w=200&q=85",
    accent: "#F4C542",
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".testimonial-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding"
      style={{ background: "#F9FAFB" }}
      aria-labelledby="testimonials-heading"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="section-label" style={{ justifyContent: "center" }}>
            <span className="inline-block w-8 h-0.5 mr-2 rounded" style={{ background: "#4DA6FF" }} />
            Stories of Change
          </div>
          <h2
            id="testimonials-heading"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              color: "#0F4C81",
              lineHeight: 1.2,
              marginBottom: "1rem",
            }}
          >
            Voices From the Communities We Serve
          </h2>
          <p className="body-lg" style={{ color: "#6B7280" }}>
            Real stories from people whose lives have been transformed through
            your support and generosity.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="testimonial-card bg-white rounded-2xl p-8 flex flex-col border border-gray-100 hover:border-sky-200 transition-all duration-300 hover:shadow-xl"
              style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.05)" }}
            >
              {/* Quote mark */}
              <div
                className="text-5xl leading-none mb-4 font-serif"
                style={{ color: t.accent, opacity: 0.6 }}
              >
                &ldquo;
              </div>

              {/* Quote */}
              <p
                className="flex-1 mb-6"
                style={{ color: "#374151", lineHeight: 1.8, fontSize: "1rem" }}
              >
                {t.quote}
              </p>

              {/* Divider */}
              <div className="w-12 h-1 rounded mb-5" style={{ background: t.accent }} />

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-gray-100">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <p style={{ fontWeight: 700, color: "#111827", fontSize: "0.9375rem" }}>
                    {t.name}
                  </p>
                  <p style={{ color: "#9CA3AF", fontSize: "0.8125rem", marginTop: "0.125rem" }}>
                    {t.role} · {t.flag} {t.country}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
