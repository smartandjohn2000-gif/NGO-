"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, HandHeart } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden" aria-label="Hero">
      <Image
        src="/images/hero.jpg"
        alt="World Impact Initiative humanitarian work in communities"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" aria-hidden="true" />

      <div className="container-narrow relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Heart className="w-4 h-4" aria-hidden="true" />
            Canadian Nonprofit Organization
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Creating Lasting Impact Through Compassion, Protection, and Opportunity
          </h1>
          <p className="text-lg md:text-xl text-white/85 leading-relaxed mb-8 max-w-2xl">
            World Impact Initiative is committed to advancing human dignity, equality, and opportunity
            by supporting vulnerable and underserved communities through sustainable, community-driven programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/donate" variant="accent" size="lg" icon={Heart}>
              Donate Now
            </Button>
            <Button href="/volunteer" variant="outline" size="lg" icon={HandHeart}>
              Become a Volunteer
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
