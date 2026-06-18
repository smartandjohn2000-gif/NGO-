import { ButtonLink } from "@/components/ui/button";

type CtaBannerProps = {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CtaBanner({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CtaBannerProps) {
  return (
    <section className="rounded-3xl bg-[#0F4C81] p-8 text-white shadow-xl md:p-12">
      <h3 className="text-2xl font-bold md:text-3xl">{title}</h3>
      <p className="mt-3 max-w-3xl text-white/85">{description}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <ButtonLink href={primaryHref} variant="primary" size="lg">
          {primaryLabel}
        </ButtonLink>
        {secondaryLabel && secondaryHref ? (
          <ButtonLink href={secondaryHref} variant="ghost" size="lg" className="text-white">
            {secondaryLabel}
          </ButtonLink>
        ) : null}
      </div>
    </section>
  );
}
