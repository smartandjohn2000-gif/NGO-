"use client";

import { useEffect, useRef, ReactNode } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface AnimateOnScrollProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  once?: boolean;
}

export default function AnimateOnScroll({
  children,
  delay = 0,
  direction = "up",
  className = "",
  once = true,
}: AnimateOnScrollProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-40px" });
  const controls = useAnimation();

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 28 : direction === "down" ? -28 : 0,
      x: direction === "left" ? 28 : direction === "right" ? -28 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.65,
        delay,
        ease: "easeOut" as const,
      },
    },
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else if (!once) {
      controls.start("hidden");
    }
  }, [isInView, controls, once]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
