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
    <section className="rounded-3xl border border-[#BAE6FD] bg-gradient-to-r from-[#E0F2FE] via-white to-[#ECFDF5] p-8 text-[#0F172A] shadow-xl md:p-12">
      <h3 className="text-2xl font-bold text-[#0F4C81] md:text-3xl">{title}</h3>
      <p className="mt-3 max-w-3xl text-lg text-slate-700">{description}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <ButtonLink href={primaryHref} variant="primary" size="lg">
          {primaryLabel}
        </ButtonLink>
        {secondaryLabel && secondaryHref ? (
          <ButtonLink href={secondaryHref} variant="secondary" size="lg">
            {secondaryLabel}
          </ButtonLink>
        ) : null}
      </div>
    </section>
  );
}
