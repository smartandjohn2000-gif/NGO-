"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/constants";

const DISPLAY_LABELS: Record<string, string> = {
  "Blog/News": "Blog & News",
};

// The horizontal bar carries the page links; "Donate" is surfaced
// separately as the primary call-to-action button in the header.
const PRIMARY_NAV = NAV_ITEMS.filter((item) => item.href !== "/donate");

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className="hidden lg:block">
      <ul className="flex items-center gap-1">
        {PRIMARY_NAV.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === item.href
              : pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={[
                  "relative inline-flex items-center rounded-md px-3 py-2 text-[0.92rem] font-semibold transition-colors",
                  isActive
                    ? "text-[#0B57D0]"
                    : "text-[#0A245D] hover:text-[#0B57D0]",
                ].join(" ")}
              >
                {DISPLAY_LABELS[item.label] ?? item.label}
                <span
                  aria-hidden
                  className={[
                    "absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-[#0B57D0] transition-transform duration-200",
                    isActive ? "scale-x-100" : "scale-x-0",
                  ].join(" ")}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
