"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, Users, Handshake } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const ctaOptions = [
  {
    icon: Heart,
    title: "Make a Donation",
    description:
      "Your financial support funds life-changing programs and services for vulnerable communities across the globe.",
    href: "/donate",
    btnLabel: "Donate Now",
    btnClass: "btn-gold",
    bg: "bg-primary",
    textColor: "text-white",
  },
  {
    icon: Handshake,
    title: "Partner With Us",
    description:
      "Organizations and institutions can partner with us to scale impact, share resources, and create sustainable change together.",
    href: "/contact",
    btnLabel: "Become a Partner",
    btnClass: "btn-outline",
    bg: "bg-white",
    textColor: "text-gray-900",
  },
  {
    icon: Users,
    title: "Volunteer Your Skills",
    description:
      "Join our global network of passionate volunteers and contribute your time, expertise, and compassion to meaningful causes.",
    href: "/volunteer",
    btnLabel: "Join as Volunteer",
    btnClass: "btn-primary",
    bg: "bg-gray-50",
    textColor: "text-gray-900",
  },
];

export default function CallToAction() {
  return (
    <section
      className="section-padding relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&q=80"
          alt="Volunteers working together"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-cta-gradient opacity-95" />
      </div>

      <div className="container-custom relative z-10">
        <AnimateOnScroll className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
            Take Action
          </p>
          <h2
            id="cta-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4"
          >
            Together We Can Create a{" "}
            <span className="text-gold">Better World</span>
          </h2>
          <p className="text-white/80 text-lg leading-relaxed">
            Whether through donations, partnerships, or volunteering — your
            involvement creates lasting, meaningful change for communities in
            need.
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {ctaOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <AnimateOnScroll key={option.title} delay={index * 0.1}>
                <div
                  className={`${option.bg} rounded-2xl p-8 h-full flex flex-col text-center shadow-xl`}
                >
                  <div
                    className={`w-16 h-16 ${
                      option.bg === "bg-primary"
                        ? "bg-white/10"
                        : "bg-primary/10"
                    } rounded-2xl flex items-center justify-center mx-auto mb-5`}
                  >
                    <Icon
                      className={`w-8 h-8 ${
                        option.bg === "bg-primary" ? "text-gold" : "text-primary"
                      }`}
                    />
                  </div>
                  <h3
                    className={`text-xl font-heading font-bold mb-3 ${option.textColor}`}
                  >
                    {option.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed mb-6 flex-1 ${
                      option.bg === "bg-primary"
                        ? "text-white/80"
                        : "text-gray-600"
                    }`}
                  >
                    {option.description}
                  </p>
                  <Link href={option.href} className={`${option.btnClass} w-full justify-center`}>
                    {option.btnLabel}
                  </Link>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
