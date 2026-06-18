import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-3", align === "center" && "text-center", className)}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#0F4C81]/70">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-2xl font-bold tracking-tight text-[#0F4C81] md:text-4xl">{title}</h2>
      {description ? (
        <p className="max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
