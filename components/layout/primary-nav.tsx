"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/constants";

const DISPLAY_LABELS: Record<string, string> = {
  "Blog/News": "Blog & News",
};

// Donate is surfaced as the primary call-to-action button, so it is omitted
// from the inline link list to keep the bar uncluttered.
const PRIMARY_NAV = NAV_ITEMS.filter((item) => item.href !== "/donate");

export function PrimaryNav() {
  const pathname = usePathname();

  return (
    <nav
      className="hidden items-center gap-0.5 lg:flex"
      aria-label="Primary"
      data-no-translate="true"
    >
      {PRIMARY_NAV.map((item) => {
        const isActive =
          item.href === "/"
            ? pathname === item.href
            : pathname === item.href || pathname.startsWith(`${item.href}/`);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={[
              "relative rounded-md px-3 py-2 text-[0.92rem] font-semibold transition-colors",
              "after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-[#0B57D0] after:transition-transform after:duration-200",
              isActive
                ? "text-[#0B57D0] after:scale-x-100"
                : "text-[#0A245D] hover:text-[#0B57D0] after:scale-x-0 hover:after:scale-x-100",
            ].join(" ")}
            data-no-translate="true"
          >
            {DISPLAY_LABELS[item.label] ?? item.label}
          </Link>
        );
      })}
    </nav>
  );
}
