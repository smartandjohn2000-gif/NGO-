"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Users, ChevronDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Parallax image on scroll
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          yPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Fade out text on scroll
      if (contentRef.current) {
        gsap.to(contentRef.current, {
          yPercent: 12,
          opacity: 0.4,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "40% top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-label="Hero — World Impact Initiative"
    >
      {/* Parallax Image Container */}
      <div ref={imageRef} className="absolute inset-0 will-change-transform" style={{ top: "-10%", bottom: "-10%" }}>
        <Image
          src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=1920&q=90"
          alt="Community members supported by World Impact Initiative — children learning, women empowered, communities thriving"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Clean, non-dark overlay — subtle blue tint */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(15,76,129,0.75) 0%, rgba(15,76,129,0.55) 55%, rgba(15,76,129,0.3) 100%)" }} />
      </div>

      {/* Hero Content */}
      <div ref={contentRef} className="relative z-10 container-custom pt-28 pb-20">
        <div className="max-w-3xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3 mb-7"
          >
            <div className="flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-4 py-2 backdrop-blur-[2px]">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" style={{ background: "#2FAE66" }} />
              <span className="text-white/90 text-sm font-semibold">Canadian Nonprofit Organization</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-balance font-heading text-white mb-6"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.25rem, 5vw, 4rem)",
              lineHeight: 1.12,
              letterSpacing: "-0.01em",
            }}
          >
            Creating Lasting Impact Through{" "}
            <span style={{ color: "#F4C542" }}>Compassion</span>,{" "}
            <span style={{ color: "#F4C542" }}>Protection</span>, and{" "}
            <span style={{ color: "#F4C542" }}>Opportunity</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/85 mb-10 max-w-xl"
            style={{ fontSize: "1.2rem", lineHeight: 1.75 }}
          >
            Supporting vulnerable communities through protection, empowerment, inclusion, education, and humanitarian action.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/programs"
              className="btn-sky text-base px-8 py-4 flex items-center justify-center gap-2 shadow-lg"
              style={{ fontSize: "1rem", padding: "1rem 2.25rem" }}
            >
              Discover Our Work
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/volunteer"
              className="btn-outline-white text-base px-8 py-4 flex items-center justify-center gap-2"
              style={{ fontSize: "1rem", padding: "1rem 2.25rem" }}
            >
              <Users className="w-5 h-5" />
              Join Our Mission
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom Stats Strip */}
      <div className="relative z-10 mt-auto">
        <div className="bg-white/95 backdrop-blur-[4px] border-t border-white/20">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {[
                { value: "50,000+", label: "Lives Impacted" },
                { value: "6", label: "Core Programs" },
                { value: "15+", label: "Countries" },
                { value: "500+", label: "Volunteers" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                  className="stat-item"
                >
                  <p
                    className="font-heading font-extrabold"
                    style={{ color: "#0F4C81", fontFamily: "Montserrat, sans-serif", fontSize: "1.75rem", fontWeight: 800 }}
                  >
                    {stat.value}
                  </p>
                  <p style={{ color: "#6B7280", fontSize: "0.875rem", fontWeight: 500, marginTop: "0.25rem" }}>
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-36 right-8 hidden md:flex flex-col items-center gap-2 z-10"
      >
        <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
