"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function MotionSection({
  children,
  className = ""
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.section>
  );
}
