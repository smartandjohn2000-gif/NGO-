"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const impactAreas = [
  {
    slug: "gender-equality",
    title: "Gender Equality & Protection",
    tagline: "Every woman and girl deserves to live free from violence and discrimination.",
    description:
      "We champion women's rights, prevent gender-based violence, and create safe, supportive environments where all genders can thrive with dignity and freedom. Our programs support survivors, educate communities, and advocate for systemic change.",
    stats: [{ value: "5,000+", label: "Women supported" }, { value: "85%", label: "GBV reduction" }],
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=900&q=85",
    accent: "#4DA6FF",
    accentLight: "#EFF6FF",
  },
  {
    slug: "child-protection",
    title: "Child Protection & Human Rights",
    tagline: "Every child has the right to safety, education, and a healthy childhood.",
    description:
      "We safeguard children from exploitation, abuse, and neglect while advocating for universal human rights. From child-friendly spaces to anti-trafficking programs, every initiative puts children first.",
    stats: [{ value: "10,000+", label: "Children protected" }, { value: "30", label: "Schools supported" }],
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=900&q=85",
    accent: "#2FAE66",
    accentLight: "#E8F8EF",
  },
  {
    slug: "youth-empowerment",
    title: "Youth Empowerment & Technical Skills",
    tagline: "Young people are not just the future — they are agents of change today.",
    description:
      "We equip young people with vocational skills, entrepreneurship training, and mentorship to build sustainable livelihoods. Our youth-led approach creates opportunity where systems have failed.",
    stats: [{ value: "8,000+", label: "Youth trained" }, { value: "75%", label: "Employment rate" }],
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=900&q=85",
    accent: "#F4C542",
    accentLight: "#FEF9E7",
  },
  {
    slug: "disability-inclusion",
    title: "Disability Inclusion & Accessibility",
    tagline: "Inclusion is not a privilege — it is a fundamental right.",
    description:
      "We break systemic barriers that prevent persons with disabilities from accessing education, employment, and civic life. Through policy advocacy, accessible infrastructure, and assistive technology, we build a world where everyone belongs.",
    stats: [{ value: "3,000+", label: "Persons supported" }, { value: "12", label: "Policy wins" }],
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=900&q=85",
    accent: "#4DA6FF",
    accentLight: "#EFF6FF",
  },
  {
    slug: "health-education",
    title: "Health Services & Inclusive Education",
    tagline: "Health and education are the foundation of every thriving community.",
    description:
      "We expand access to quality healthcare and inclusive education for communities left behind. Community health workers, school construction, nutrition programs, and adult literacy — all designed to leave no one behind.",
    stats: [{ value: "20,000+", label: "Health visits" }, { value: "40", label: "Schools built" }],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=85",
    accent: "#2FAE66",
    accentLight: "#E8F8EF",
  },
  {
    slug: "crisis-response",
    title: "Crisis Response & Humanitarian Relief",
    tagline: "When disaster strikes, we respond — fast, effectively, and with dignity.",
    description:
      "We deliver life-saving humanitarian assistance to communities affected by conflict, natural disasters, and displacement. From emergency food and shelter to psychosocial support and early recovery — we are there when it matters most.",
    stats: [{ value: "15,000+", label: "People aided" }, { value: "48 hrs", label: "Deployment time" }],
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=900&q=85",
    accent: "#0F4C81",
    accentLight: "#EFF6FF",
  },
];

function ProgramRow({
  area,
  index,
}: {
  area: (typeof impactAreas)[0];
  index: number;
}) {
  const rowRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const even = index % 2 === 0;

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Image subtle parallax within section
      if (imgRef.current) {
        gsap.fromTo(
          imgRef.current,
          { yPercent: 8 },
          {
            yPercent: -8,
            ease: "none",
            scrollTrigger: {
              trigger: rowRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
      }

      // Text fade in
      if (textRef.current) {
        gsap.fromTo(
          textRef.current,
          { opacity: 0, x: even ? -30 : 30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: rowRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, [even]);

  return (
    <div ref={rowRef} className="program-section grid md:grid-cols-2 gap-0 min-h-[480px] md:min-h-[520px] overflow-hidden">
      {/* Image Side */}
      <div
        className={`relative overflow-hidden ${!even ? "md:order-2" : ""} min-h-[280px] md:min-h-0`}
      >
        <div ref={imgRef} className="absolute inset-0 will-change-transform" style={{ top: "-8%", bottom: "-8%" }}>
          <Image
            src={area.image}
            alt={area.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Clean color wash overlay — uses program accent */}
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(to ${even ? "right" : "left"}, ${area.accent}18, transparent 70%)` }}
          />
        </div>
      </div>

      {/* Content Side */}
      <div
        ref={textRef}
        className={`flex flex-col justify-center px-8 md:px-12 lg:px-16 py-12 md:py-16 ${!even ? "md:order-1" : ""}`}
        style={{ background: area.accentLight }}
      >
        {/* Label */}
        <div className="section-label" style={{ color: area.accent }}>
          <span
            className="inline-block w-8 h-0.5 mr-2 rounded"
            style={{ background: area.accent }}
          />
          Program {String(index + 1).padStart(2, "0")}
        </div>

        {/* Title */}
        <h2
          className="mb-3"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
            lineHeight: 1.2,
            color: "#0F4C81",
          }}
        >
          {area.title}
        </h2>

        {/* Tagline */}
        <p
          className="mb-5 italic"
          style={{ color: area.accent, fontSize: "1rem", fontWeight: 600 }}
        >
          {area.tagline}
        </p>

        {/* Description */}
        <p className="body-md mb-7 max-w-md" style={{ color: "#4B5563" }}>
          {area.description}
        </p>

        {/* Stats */}
        <div className="flex gap-6 mb-8">
          {area.stats.map((stat) => (
            <div key={stat.label}>
              <p
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 800,
                  fontSize: "1.625rem",
                  color: "#0F4C81",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </p>
              <p style={{ color: "#6B7280", fontSize: "0.8125rem", marginTop: "0.25rem" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Link
          href={`/programs/${area.slug}`}
          className="inline-flex items-center gap-2 font-semibold transition-all duration-200 group w-fit"
          style={{ color: area.accent, fontSize: "0.9375rem" }}
        >
          Learn About This Program
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}

export default function ImpactAreas() {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 80%",
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section aria-labelledby="programs-heading" className="bg-white">
      {/* Section Header */}
      <div ref={headerRef} className="container-custom section-padding pb-12" style={{ paddingBottom: "3rem" }}>
        <div className="max-w-3xl">
          <div className="section-label">What We Do</div>
          <h2
            id="programs-heading"
            className="section-title mb-5"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#0F4C81", fontFamily: "Montserrat, sans-serif", fontWeight: 800 }}
          >
            Six Programs, One Mission:{" "}
            <span style={{ color: "#4DA6FF" }}>Human Dignity</span>
          </h2>
          <p className="body-lg" style={{ color: "#4B5563", maxWidth: "42rem" }}>
            From protecting children to responding to humanitarian crises, every
            program addresses a critical gap — and every person we reach brings
            us closer to a more equitable world.
          </p>
        </div>
      </div>

      {/* Alternating Program Sections */}
      <div className="divide-y divide-gray-100">
        {impactAreas.map((area, index) => (
          <ProgramRow key={area.slug} area={area} index={index} />
        ))}
      </div>

      {/* All Programs CTA */}
      <div className="container-custom py-16 text-center">
        <Link href="/programs" className="btn-primary inline-flex gap-2">
          View All Programs
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
