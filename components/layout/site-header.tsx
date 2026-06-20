import Link from "next/link";
import { Globe2, HeartHandshake } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import { MobileNav } from "@/components/layout/mobile-nav";
import { LanguageSwitcher } from "@/components/i18n/language-switcher";

const NAV_ITEMS_WITHOUT_DONATE = NAV_ITEMS.filter((item) => item.href !== "/donate");

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#0F4C81]/10 bg-[#0F4C81] text-white shadow-sm">
      <div className="mx-auto hidden h-20 max-w-7xl items-center justify-between gap-6 px-4 md:flex md:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4B400]"
          aria-label="World Impact Initiative home"
          data-no-translate="true"
        >
          <span className="inline-flex size-11 items-center justify-center rounded-full bg-[#F4B400] text-[#0F4C81]">
            <HeartHandshake size={20} aria-hidden />
          </span>
          <span>
            <span className="block text-base font-bold leading-tight lg:text-lg">
              World Impact Initiative
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-white/80">
              <Globe2 size={12} aria-hidden />
              worldimpactinitiative.org
            </span>
          </span>
        </Link>

        <nav aria-label="Main navigation" className="flex-1">
          <ul className="flex items-center justify-center gap-6">
            {NAV_ITEMS_WITHOUT_DONATE.map((item) => (
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

        <div className="flex items-center justify-end">
          <LanguageSwitcher compact />
        </div>
      </div>
      <div className="grid h-16 grid-cols-3 items-center px-4 md:hidden">
        <div className="flex items-center justify-start">
          <MobileNav />
        </div>
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 rounded-md text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4B400]"
          aria-label="World Impact Initiative home"
          data-no-translate="true"
        >
          <span className="inline-flex size-9 items-center justify-center rounded-full bg-[#F4B400] text-[#0F4C81]">
            <HeartHandshake size={16} aria-hidden />
          </span>
          <span className="text-sm font-bold leading-tight">World Impact Initiative</span>
        </Link>
        <div aria-hidden className="flex items-center justify-end" />
      </div>
    </header>
  );
}
