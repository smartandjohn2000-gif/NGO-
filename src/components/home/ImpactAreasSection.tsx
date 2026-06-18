"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Shield,
  Heart,
  GraduationCap,
  Accessibility,
  Stethoscope,
  AlertTriangle,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { programs } from "@/lib/data/programs";

const iconMap: Record<string, LucideIcon> = {
  Shield,
  Heart,
  GraduationCap,
  Accessibility,
  Stethoscope,
  AlertTriangle,
};

export function ImpactAreasSection() {
  return (
    <Section background="surface" id="impact-areas">
      <SectionHeader
        title="Our Impact Areas"
        subtitle="Six interconnected programs driving sustainable change in vulnerable communities worldwide."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.map((program, index) => {
          const Icon = iconMap[program.icon] || Heart;
          return (
            <motion.div
              key={program.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={program.heroImage}
                    alt={program.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-primary mb-3">{program.title}</h3>
                  <p className="text-muted text-sm leading-relaxed mb-4 flex-1">
                    {program.shortDescription}
                  </p>
                  <Link
                    href={`/programs/${program.slug}`}
                    className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-accent transition-colors group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
