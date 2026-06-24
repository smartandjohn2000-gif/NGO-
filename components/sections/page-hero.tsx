import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";

type PageHeroProps = {
  title: string;
  subtitle: string;
  image: string;
  /**
   * When true, the background image is shown more transparently and the title
   * and subtitle are rendered on highlighted backing panels so the writing
   * stands out clearly over the photo.
   */
  highlight?: boolean;
  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
};

export function PageHero({
  title,
  subtitle,
  image,
  highlight = false,
  primaryAction,
  secondaryAction,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[#0B57D0] text-white">
      <Image
        src={image}
        alt=""
        fill
        priority
        className={`object-cover ${highlight ? "opacity-55" : "opacity-78"}`}
        sizes="100vw"
      />
      <div
        className={
          highlight
            ? "absolute inset-0 bg-gradient-to-r from-[#06245F]/82 via-[#0A347F]/60 to-[#06245F]/72"
            : "absolute inset-0 bg-gradient-to-r from-[#083EA0]/70 via-[#1F7DFF]/38 to-[#0A245D]/32"
        }
      />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        {highlight ? (
          <>
            <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              <span className="box-decoration-clone rounded-lg bg-[#06245F]/70 px-3 py-1 shadow-lg ring-1 ring-white/15 [text-shadow:_0_2px_10px_rgba(0,0,0,0.55)]">
                {title}
              </span>
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white md:text-[1.3rem]">
              <span className="box-decoration-clone rounded-md bg-[#06245F]/65 px-2 py-1 [text-shadow:_0_1px_6px_rgba(0,0,0,0.5)]">
                {subtitle}
              </span>
            </p>
          </>
        ) : (
          <>
            <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">{title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white md:text-[1.3rem]">
              {subtitle}
            </p>
          </>
        )}
        {primaryAction || secondaryAction ? (
          <div className="mt-8 flex flex-wrap gap-3">
            {primaryAction ? (
              <ButtonLink href={primaryAction.href} variant="primary" size="lg">
                {primaryAction.label}
              </ButtonLink>
            ) : null}
            {secondaryAction ? (
              <ButtonLink href={secondaryAction.href} variant="ghost" size="lg" className="text-white">
                {secondaryAction.label}
              </ButtonLink>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
