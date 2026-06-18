import { HandHeart, Handshake, Users } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";

export function CallToAction() {
  const blocks = [
    {
      icon: HandHeart,
      title: "Donate",
      description:
        "Your gift powers protection, education, and crisis response in communities that need it most.",
      cta: { label: "Give Today", href: "/donate" },
    },
    {
      icon: Users,
      title: "Volunteer",
      description:
        "Lend your time and skills—locally or remotely. From event support to mentorship and beyond.",
      cta: { label: "Join the Team", href: "/volunteer" },
    },
    {
      icon: Handshake,
      title: "Partner",
      description:
        "Companies, foundations, and faith communities—let's design something that lasts together.",
      cta: { label: "Start a Partnership", href: "/contact?subject=partnership" },
    },
  ];

  return (
    <section className="relative py-20 md:py-28 bg-ink-50 overflow-hidden">
      <div className="container-page">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
              Get Involved
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-[2.6rem] font-bold leading-tight text-brand-900 text-balance">
              Three ways to create lasting impact—starting today.
            </h2>
            <p className="mt-4 text-base md:text-lg text-ink-600">
              Whether you give, serve, or partner, every action multiplies into
              tangible change for children, women, youth, and communities.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {blocks.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.08}>
              <article className="group relative h-full rounded-3xl bg-white p-7 ring-1 ring-ink-100 shadow-[0_2px_24px_rgba(7,34,60,0.05)] hover:shadow-[0_18px_40px_rgba(7,34,60,0.1)] transition">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-700 to-brand-900 text-gold-300 shadow-md">
                  <b.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-xl font-bold text-brand-900">
                  {b.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">
                  {b.description}
                </p>
                <div className="mt-6">
                  <ButtonLink href={b.cta.href} variant="primary" size="sm">
                    {b.cta.label}
                  </ButtonLink>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
