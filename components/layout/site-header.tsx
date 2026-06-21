import Link from "next/link";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { MobileNav } from "@/components/layout/mobile-nav";
import { DesktopNav } from "@/components/layout/desktop-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-b-[#CFE4FF] bg-white/98 text-[#0A245D] shadow-[0_2px_14px_rgba(11,87,208,0.1)] backdrop-blur-md">
      <div className="mx-auto flex h-[4.6rem] w-full max-w-[1240px] items-center justify-between gap-4 px-4 md:px-6">
        <div className="flex items-center gap-2 lg:hidden">
          <MobileNav />
        </div>

        <Link
          href="/"
          className="inline-flex min-w-0 items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B57D0]"
          aria-label="World Impact Initiative home"
          data-no-translate="true"
        >
          <span className="inline-flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-xl ring-1 ring-[#CFE4FF]">
            <Image
              src="/images/logo.jpg"
              alt="World Impact Initiative logo"
              width={88}
              height={88}
              priority
              className="size-full object-cover"
            />
          </span>
          <span className="hidden min-w-0 flex-col leading-tight sm:flex">
            <span className="truncate font-serif text-[1.06rem] font-bold text-[#0A245D]">
              World Impact Initiative
            </span>
            <span className="truncate text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#0B57D0]">
              Dignity · Equality · Opportunity
            </span>
          </span>
        </Link>

        <DesktopNav />

        <div className="flex shrink-0 items-center justify-end gap-2">
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
