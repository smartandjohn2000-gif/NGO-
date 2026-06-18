"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, boxShadow: "0 20px 40px rgba(15, 76, 129, 0.12)" } : undefined}
      transition={{ duration: 0.3 }}
      className={cn(
        "bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
