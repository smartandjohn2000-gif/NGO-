import Link from "next/link";
import { HeartHandshake } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { MobileNav } from "@/components/layout/mobile-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-b-[#CFE4FF] bg-white text-[#0A245D] shadow-[0_2px_14px_rgba(11,87,208,0.1)]">
      <div className="mx-auto grid h-[4.4rem] w-full max-w-[1240px] grid-cols-[auto_1fr_auto] items-center gap-3 px-3 md:flex md:justify-between md:px-6">
        <div className="flex shrink-0 items-center md:hidden">
          <MobileNav />
        </div>

        <Link
          href="/"
          className="inline-flex min-w-0 items-center justify-self-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B57D0] md:flex-1 md:justify-self-auto"
          aria-label="World Impact Initiative home"
          data-no-translate="true"
        >
          <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-[#0B57D0] text-white">
            <HeartHandshake size={18} aria-hidden />
          </span>
          <span className="truncate font-serif text-base font-bold leading-tight text-[#0A245D] md:text-[1.08rem]">
            World Impact Initiative
          </span>
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          <MobileNav />
        </div>

        <div className="flex shrink-0 items-center justify-end md:ml-3">
          <ButtonLink
            href="/donate"
            variant="primary"
            size="sm"
            className="px-4 shadow-[0_2px_10px_rgba(11,87,208,0.35)]"
          >
            Donate
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
