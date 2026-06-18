"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "surface" | "primary" | "gradient";
}

const backgrounds = {
  white: "bg-white",
  surface: "bg-surface",
  primary: "bg-primary text-white",
  gradient: "gradient-primary text-white",
};

export function Section({ children, className, id, background = "white" }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={cn("section-padding", backgrounds[background], className)}
    >
      <div className="container-narrow">{children}</div>
    </motion.section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeader({ title, subtitle, centered = true, light = false }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn("mb-12", centered && "text-center")}
    >
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-bold mb-4",
          light ? "text-white" : "text-primary"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-lg md:text-xl max-w-3xl",
            centered && "mx-auto",
            light ? "text-white/80" : "text-muted"
          )}
        >
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "mt-6 h-1 w-20 rounded-full bg-accent",
          centered && "mx-auto"
        )}
        aria-hidden="true"
      />
    </motion.div>
  );
}
