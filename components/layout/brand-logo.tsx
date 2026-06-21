import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  /** Slightly smaller emblem + wordmark, used inside the mobile drawer header. */
  compact?: boolean;
  onNavigate?: () => void;
};

export function BrandLogo({ compact = false, onNavigate }: BrandLogoProps) {
  return (
    <Link
      href="/"
      onClick={onNavigate}
      className="group inline-flex min-w-0 items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B57D0]"
      aria-label="World Impact Initiative home"
      data-no-translate="true"
    >
      <span
        className={[
          "relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full ring-1 ring-[#CFE4FF]",
          compact ? "size-9" : "size-11",
        ].join(" ")}
      >
        <Image
          src="/images/world-impact-mark.jpg"
          alt="World Impact Initiative"
          fill
          sizes="48px"
          className="object-cover"
          priority
        />
      </span>
      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={[
            "truncate font-serif font-bold text-[#0A245D]",
            compact ? "text-[0.95rem]" : "text-[1.02rem] md:text-[1.08rem]",
          ].join(" ")}
        >
          World Impact Initiative
        </span>
        <span className="mt-0.5 hidden truncate text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-[#0B57D0] sm:block">
          Canadian Nonprofit
        </span>
      </span>
    </Link>
  );
}
