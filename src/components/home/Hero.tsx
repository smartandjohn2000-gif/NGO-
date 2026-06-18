"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, HandHeart, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden gradient-hero text-white">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero.jpg"
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-950/70 via-brand-900/60 to-brand-950/85" />
      </div>

      <div className="container-page relative pt-16 md:pt-24 pb-20 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gold-300 ring-1 ring-white/20 backdrop-blur">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
            Canadian Nonprofit · Est. 2018
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-extrabold leading-[1.05] text-balance">
            Creating Lasting Impact Through{" "}
            <span className="text-gold-300">Compassion</span>,{" "}
            <span className="text-gold-300">Protection</span>, and{" "}
            <span className="text-gold-300">Opportunity</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-white/85 text-pretty">
            World Impact Initiative is committed to advancing human dignity,
            equality, and opportunity by supporting vulnerable and underserved
            communities through sustainable, community-driven programs.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <ButtonLink href="/donate" variant="gold" size="lg">
              <HandHeart className="h-5 w-5" aria-hidden="true" />
              Donate Now
            </ButtonLink>
            <ButtonLink href="/volunteer" variant="outline" size="lg">
              Become a Volunteer
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </ButtonLink>
          </div>

          <dl className="mt-12 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
            {[
              { v: "165K+", l: "People reached" },
              { v: "37", l: "Communities" },
              { v: "6", l: "Core programs" },
              { v: "100%", l: "Locally led" },
            ].map((s) => (
              <div key={s.l}>
                <dt className="text-xs uppercase tracking-widest text-white/60">
                  {s.l}
                </dt>
                <dd className="mt-1 text-2xl font-bold text-gold-300">
                  {s.v}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute -right-20 top-12 hidden lg:block">
        <div className="animate-float-slow h-72 w-72 rounded-full bg-gold-400/20 blur-3xl" />
      </div>
    </section>
  );
}
