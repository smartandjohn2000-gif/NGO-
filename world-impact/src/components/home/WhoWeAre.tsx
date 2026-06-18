"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const values = [
  "Human dignity and equality for all",
  "Community-driven, sustainable solutions",
  "Transparency and accountability",
  "Inclusive partnerships and collaboration",
  "Evidence-based program delivery",
  "Respect for cultural diversity",
];

export default function WhoWeAre() {
  return (
    <section className="section-padding bg-white" aria-labelledby="who-we-are-heading">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Images */}
          <AnimateOnScroll direction="left" className="relative">
            <div className="relative h-96 lg:h-[550px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=800&q=85"
                alt="Community members participating in World Impact Initiative programs"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>

            {/* Floating Stat Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-card border border-gray-100"
            >
              <p className="text-3xl font-heading font-bold text-primary">10+</p>
              <p className="text-sm text-gray-600 mt-1">Years of Impact</p>
              <div className="w-8 h-1 bg-gold rounded-full mt-2" />
            </motion.div>

            {/* Second floating card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="absolute -top-6 -left-6 bg-gold rounded-2xl p-4 shadow-cta"
            >
              <p className="text-2xl font-heading font-bold text-primary">🇨🇦</p>
              <p className="text-xs font-semibold text-primary mt-1">Canadian Nonprofit</p>
            </motion.div>
          </AnimateOnScroll>

          {/* Content */}
          <AnimateOnScroll direction="right">
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
              Who We Are
            </p>
            <h2 id="who-we-are-heading" className="section-title mb-6">
              Empowering Communities, Transforming Lives
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              World Impact Initiative is a Canadian nonprofit organization
              committed to empowering individuals and communities facing social,
              economic, and humanitarian challenges.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We believe lasting change begins with people and is strengthened
              through partnership, inclusion, opportunity, and volunteerism.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our work focuses on protecting human rights, supporting vulnerable
              children and families, promoting equitable access to education and
              health resources, and fostering opportunities for youth and persons
              with disabilities.
            </p>

            {/* Values List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {values.map((value) => (
                <div key={value} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{value}</span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="btn-primary inline-flex gap-2"
            >
              Learn Our Story
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimateOnScroll>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6 mt-20">
          <AnimateOnScroll delay={0.1}>
            <div className="bg-primary rounded-2xl p-8 text-white h-full">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-5">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">Our Mission</h3>
              <p className="text-white/85 leading-relaxed">
                The mission of World Impact Initiative is to advance human
                dignity, equality, and opportunity by supporting vulnerable and
                underserved communities through sustainable, community-driven
                programs.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2}>
            <div className="bg-gold rounded-2xl p-8 h-full">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-5">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-primary/85 leading-relaxed">
                World Impact Initiative envisions a world where every person
                lives with dignity, safety, and equal opportunity, regardless
                of their circumstances.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
