import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  light,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "uppercase tracking-[0.18em] text-xs font-semibold mb-3",
            light ? "text-gold-300" : "text-brand-700"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-[2.6rem] font-bold leading-tight text-balance",
          light ? "text-white" : "text-brand-900"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base md:text-lg leading-relaxed text-pretty",
            light ? "text-white/80" : "text-ink-600"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
