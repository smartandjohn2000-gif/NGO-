import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";

type PageHeroProps = {
  title: string;
  subtitle: string;
  image: string;
  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
};

export function PageHero({
  title,
  subtitle,
  image,
  primaryAction,
  secondaryAction,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[#0F4C81] text-white">
      <Image
        src={image}
        alt=""
        fill
        priority
        className="object-cover opacity-68"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F4C81]/75 via-[#0B6E8A]/52 to-[#0F4C81]/35" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/95 md:text-[1.3rem]">
          {subtitle}
        </p>
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
