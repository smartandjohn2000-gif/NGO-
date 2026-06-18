import type { ReactNode } from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Crumb {
  label: string;
  href?: string;
}

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  children,
  className,
  pattern = true,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  crumbs?: Crumb[];
  children?: ReactNode;
  className?: string;
  pattern?: boolean;
}) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden gradient-hero text-white",
        className
      )}
    >
      {pattern && (
        <div className="absolute inset-0 -z-10 opacity-[0.06] pointer-events-none">
          <svg className="h-full w-full" aria-hidden="true">
            <defs>
              <pattern
                id="grid-pattern"
                width="36"
                height="36"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 36 0 L 0 0 0 36"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>
      )}

      <div className="container-page py-14 md:py-20">
        {crumbs && (
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-1 text-sm text-white/70">
              <li>
                <Link
                  href="/"
                  className="inline-flex items-center gap-1 hover:text-white"
                  aria-label="Home"
                >
                  <Home className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </li>
              {crumbs.map((c, i) => (
                <li key={i} className="flex items-center gap-1">
                  <ChevronRight
                    className="h-3.5 w-3.5 text-white/40"
                    aria-hidden="true"
                  />
                  {c.href && i < crumbs.length - 1 ? (
                    <Link href={c.href} className="hover:text-white">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-white">{c.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 max-w-3xl text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-balance">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/85 text-pretty">
            {description}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
