import Link from "next/link";
import { HeartHandshake } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import { ButtonLink } from "@/components/ui/button";
import { MobileNav } from "@/components/layout/mobile-nav";
import { LanguageSwitcher } from "@/components/i18n/language-switcher";

const NAV_ITEMS_WITHOUT_DONATE = NAV_ITEMS.filter((item) => item.href !== "/donate");
const DISPLAY_LABELS: Record<string, string> = {
  "Blog/News": "Blog & News",
};

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 border-t-4 border-t-[#1A6B3C] bg-white text-slate-800 shadow-sm">
      <div className="mx-auto hidden h-20 w-full max-w-7xl items-center gap-6 px-4 md:flex md:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex max-w-[240px] items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A6B3C]"
          aria-label="World Impact Initiative home"
          data-no-translate="true"
        >
          <span className="inline-flex size-11 items-center justify-center rounded-full bg-[#1A6B3C] text-white">
            <HeartHandshake size={20} aria-hidden />
          </span>
          <span className="leading-tight">
            <span className="block text-base font-bold text-slate-900 lg:text-lg">
              World Impact Initiative
            </span>
          </span>
        </Link>

        <nav aria-label="Main navigation" className="flex-1">
          <ul className="flex items-center justify-center gap-5">
            {NAV_ITEMS_WITHOUT_DONATE.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-semibold text-slate-700 underline-offset-8 decoration-2 decoration-transparent transition hover:text-slate-900 hover:underline hover:decoration-[#1A6B3C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A6B3C]"
                >
                  {DISPLAY_LABELS[item.label] ?? item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center justify-end gap-3">
          <ButtonLink
            href="/donate"
            variant="secondary"
            size="sm"
            className="rounded-lg bg-[#1A6B3C] px-4 text-white hover:bg-[#15542f] hover:text-white focus-visible:ring-[#1A6B3C]"
          >
            Donate
          </ButtonLink>
          <LanguageSwitcher
            compact
            className="border-slate-300 bg-white text-slate-700"
          />
        </div>
      </div>

      <div className="grid h-16 w-full grid-cols-[auto_1fr_auto] items-center gap-2 px-3 md:hidden">
        <div className="flex items-center justify-start">
          <MobileNav />
        </div>
        <Link
          href="/"
          className="mx-auto inline-flex max-w-[160px] items-center justify-center gap-2 rounded-md text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A6B3C]"
          aria-label="World Impact Initiative home"
          data-no-translate="true"
        >
          <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-[#1A6B3C] text-white">
            <HeartHandshake size={16} aria-hidden />
          </span>
          <span className="line-clamp-2 text-xs font-bold leading-tight text-slate-900">
            World Impact Initiative
          </span>
        </Link>
        <div className="flex items-center justify-end">
          <LanguageSwitcher compact className="border-slate-300 bg-white text-slate-700" />
        </div>
      </div>
    </header>
  );
}
