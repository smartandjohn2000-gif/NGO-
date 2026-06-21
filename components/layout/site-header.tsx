import { ButtonLink } from "@/components/ui/button";
import { BrandLogo } from "@/components/layout/brand-logo";
import { PrimaryNav } from "@/components/layout/primary-nav";
import { MobileNav } from "@/components/layout/mobile-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-b-[#CFE4FF] bg-white/98 text-[#0A245D] shadow-[0_2px_14px_rgba(11,87,208,0.1)] backdrop-blur-md">
      <div className="mx-auto flex h-[4.6rem] w-full max-w-[1240px] items-center justify-between gap-3 px-4 md:px-6">
        <div className="flex min-w-0 items-center gap-2">
          <div className="lg:hidden">
            <MobileNav />
          </div>
          <BrandLogo />
        </div>

        <PrimaryNav />

        <div className="flex shrink-0 items-center justify-end">
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
