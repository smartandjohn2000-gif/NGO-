import Link from "next/link";
import { Globe2, HeartHandshake } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import { ButtonLink } from "@/components/ui/button";
import { MobileNav } from "@/components/layout/mobile-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#0F4C81]/10 bg-[#0F4C81] text-white shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4B400]"
          aria-label="World Impact Initiative home"
        >
          <span className="inline-flex size-11 items-center justify-center rounded-full bg-[#F4B400] text-[#0F4C81]">
            <HeartHandshake size={20} aria-hidden />
          </span>
          <span>
            <span className="block text-base font-bold leading-tight sm:text-lg">
              World Impact Initiative
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-white/80">
              <Globe2 size={12} aria-hidden />
              worldimpactinitiative.org
            </span>
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-white/90 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4B400]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <ButtonLink href="/donate" variant="primary" size="sm" className="hidden lg:inline-flex">
            Donate
          </ButtonLink>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
