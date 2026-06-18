import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-3"
      aria-label={`${siteConfig.name} home`}
    >
      <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-700 to-brand-900 ring-2 ring-gold-400/80 shadow-md group-hover:ring-gold-300 transition">
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-5 w-5 text-gold-300"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3a14 14 0 0 1 0 18" />
          <path d="M12 3a14 14 0 0 0 0 18" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`text-[1.05rem] font-bold tracking-tight ${
            light ? "text-white" : "text-brand-900"
          }`}
        >
          World Impact
        </span>
        <span
          className={`text-[0.78rem] font-semibold tracking-widest uppercase ${
            light ? "text-gold-300" : "text-gold-500"
          }`}
        >
          Initiative
        </span>
      </span>
    </Link>
  );
}
