"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Heart, Users, ArrowDown } from "lucide-react";
import CountUp from "@/components/ui/CountUp";

const stats = [
  { value: 50000, suffix: "+", label: "Lives Impacted" },
  { value: 25, suffix: "+", label: "Programs Active" },
  { value: 15, suffix: "+", label: "Countries Reached" },
  { value: 500, suffix: "+", label: "Volunteers" },
];

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&q=90"
          alt="Children and community members benefiting from World Impact Initiative programs"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom w-full pt-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass-effect px-4 py-2 rounded-full mb-6"
          >
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <span className="text-sm text-white font-medium">
              Canadian Nonprofit Organization
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6"
          >
            Creating Lasting Impact Through{" "}
            <span className="text-gold">Compassion</span>,{" "}
            <span className="text-gold">Protection</span>, and{" "}
            <span className="text-gold">Opportunity</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/85 leading-relaxed mb-8 max-w-2xl"
          >
            World Impact Initiative is committed to advancing human dignity,
            equality, and opportunity by supporting vulnerable and underserved
            communities through sustainable, community-driven programs.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Link
              href="/donate"
              className="btn-gold text-base px-8 py-4 flex items-center justify-center gap-2 shadow-cta"
            >
              <Heart className="w-5 h-5" />
              Donate Now
            </Link>
            <Link
              href="/volunteer"
              className="btn-outline-white text-base px-8 py-4 flex items-center justify-center gap-2"
            >
              <Users className="w-5 h-5" />
              Become a Volunteer
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-effect rounded-xl p-4 text-center"
              >
                <p className="text-2xl md:text-3xl font-heading font-bold text-gold">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-xs md:text-sm text-white/80 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-white/60 text-xs">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-5 h-5 text-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
