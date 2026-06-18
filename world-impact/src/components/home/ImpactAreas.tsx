"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Baby,
  Zap,
  Accessibility,
  HeartPulse,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const impactAreas = [
  {
    icon: ShieldCheck,
    title: "Gender Equality & Protection",
    description:
      "Championing women's rights, preventing gender-based violence, and creating safe spaces where all genders can thrive with dignity and freedom.",
    href: "/programs/gender-equality",
    color: "from-purple-500 to-pink-500",
    bg: "bg-purple-50",
    iconColor: "text-purple-500",
  },
  {
    icon: Baby,
    title: "Child Protection & Human Rights",
    description:
      "Safeguarding children from exploitation, abuse, and neglect while advocating for universal human rights and access to essential services.",
    href: "/programs/child-protection",
    color: "from-blue-500 to-cyan-500",
    bg: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    icon: Zap,
    title: "Youth Empowerment & Technical Skills",
    description:
      "Equipping young people with vocational training, entrepreneurship skills, and mentorship to build sustainable livelihoods and futures.",
    href: "/programs/youth-empowerment",
    color: "from-amber-500 to-orange-500",
    bg: "bg-amber-50",
    iconColor: "text-amber-500",
  },
  {
    icon: Accessibility,
    title: "Disability Inclusion & Accessibility",
    description:
      "Breaking down barriers and creating inclusive environments where persons with disabilities can fully participate in all aspects of society.",
    href: "/programs/disability-inclusion",
    color: "from-green-500 to-emerald-500",
    bg: "bg-green-50",
    iconColor: "text-green-500",
  },
  {
    icon: HeartPulse,
    title: "Health Services & Inclusive Education",
    description:
      "Expanding access to quality healthcare and education for marginalized communities, ensuring no one is left behind.",
    href: "/programs/health-education",
    color: "from-red-500 to-rose-500",
    bg: "bg-red-50",
    iconColor: "text-red-500",
  },
  {
    icon: AlertTriangle,
    title: "Crisis Response & Humanitarian Relief",
    description:
      "Delivering rapid, effective humanitarian assistance to communities affected by conflict, natural disasters, and displacement.",
    href: "/programs/crisis-response",
    color: "from-primary to-blue-600",
    bg: "bg-primary/5",
    iconColor: "text-primary",
  },
];

export default function ImpactAreas() {
  return (
    <section className="section-padding bg-gray-50" aria-labelledby="impact-heading">
      <div className="container-custom">
        {/* Section Header */}
        <AnimateOnScroll className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
            What We Do
          </p>
          <h2 id="impact-heading" className="section-title mb-4">
            Our Impact Areas
          </h2>
          <p className="section-subtitle">
            Through six core program areas, we address the most pressing
            challenges facing vulnerable communities with evidence-based,
            community-driven solutions.
          </p>
        </AnimateOnScroll>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {impactAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <AnimateOnScroll key={area.title} delay={index * 0.08}>
                <div className="card group h-full flex flex-col p-6 lg:p-8">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 ${area.bg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={`w-7 h-7 ${area.iconColor}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-heading font-bold text-gray-900 mb-3">
                    {area.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-1">
                    {area.description}
                  </p>

                  {/* Learn More */}
                  <Link
                    href={area.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold transition-colors group/link"
                    aria-label={`Learn more about ${area.title}`}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>

        {/* View All Programs */}
        <AnimateOnScroll className="text-center mt-12">
          <Link href="/programs" className="btn-primary inline-flex gap-2">
            View All Programs
            <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
