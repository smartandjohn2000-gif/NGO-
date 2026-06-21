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
        <p className="text-base font-semibold uppercase tracking-[0.14em] text-[#0B57D0]/80">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-2xl font-bold tracking-tight text-[#083EA0] md:text-4xl">{title}</h2>
      {description ? (
        <p className="max-w-3xl text-lg leading-relaxed text-slate-700 md:text-xl">
          {description}
        </p>
      ) : null}
    </div>
  );
}
