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
    <header className="sticky top-0 z-50 w-full border-b-[3px] border-b-[#0B57D0] bg-white/95 text-[#0A245D] shadow-[0_2px_16px_rgba(11,87,208,0.12)] backdrop-blur-xl">
      <div className="mx-auto hidden h-[4.5rem] w-full max-w-[1240px] items-center justify-between gap-4 px-6 md:flex">
        <Link
          href="/"
          className="inline-flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B57D0]"
          aria-label="World Impact Initiative home"
          data-no-translate="true"
        >
          <span className="inline-flex size-11 items-center justify-center rounded-full bg-[#0B57D0] text-white">
            <HeartHandshake size={19} aria-hidden />
          </span>
          <span className="leading-tight text-[#0A245D]">
            <span className="block font-serif text-[1.08rem] font-extrabold leading-tight">
              World Impact Initiative
            </span>
            <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-[#0B57D0]">
              Empowering Futures
            </span>
          </span>
        </Link>

        <nav aria-label="Main navigation" className="flex-1 overflow-x-auto">
          <ul className="flex items-center justify-center gap-0.5 whitespace-nowrap">
            {NAV_ITEMS_WITHOUT_DONATE.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="wii-nav-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B57D0]"
                >
                  {DISPLAY_LABELS[item.label] ?? item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center justify-end gap-3">
          <LanguageSwitcher compact className="border-[#CFE4FF] bg-white text-[#0A245D]" />
          <ButtonLink href="/donate" variant="primary" size="sm" className="px-5 shadow-[0_2px_10px_rgba(11,87,208,0.35)]">
            Donate
          </ButtonLink>
        </div>
      </div>

      <div className="grid h-[4.2rem] w-full grid-cols-[auto_1fr_auto] items-center gap-2 px-3 md:hidden">
        <div className="flex items-center justify-start">
          <MobileNav />
        </div>
        <Link
          href="/"
          className="mx-auto inline-flex max-w-[180px] items-center justify-center gap-2 rounded-md text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B57D0]"
          aria-label="World Impact Initiative home"
          data-no-translate="true"
        >
          <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-[#0B57D0] text-white">
            <HeartHandshake size={16} aria-hidden />
          </span>
          <span className="line-clamp-2 text-xs font-bold leading-tight text-[#0A245D]">
            World Impact Initiative
          </span>
        </Link>
        <div className="flex items-center justify-end">
          <LanguageSwitcher compact className="border-[#CFE4FF] bg-white text-[#0A245D]" />
        </div>
      </div>
    </header>
  );
}
