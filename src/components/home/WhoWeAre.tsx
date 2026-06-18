import Image from "next/image";
import { Sparkles, Users, Globe2 } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";

export function WhoWeAre() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <div className="relative aspect-[5/6] overflow-hidden rounded-[2rem] ring-1 ring-ink-100 shadow-2xl">
              <Image
                src="/images/who-we-are.jpg"
                alt="Community members learning together"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 lg:-right-12 max-w-[260px] rounded-2xl bg-white p-5 shadow-2xl ring-1 ring-ink-100">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold-100 text-gold-600">
                  <Sparkles className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-ink-500">
                    Locally led
                  </p>
                  <p className="text-sm font-semibold text-brand-900">
                    Designed with the people we serve
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
            Who We Are
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-[2.6rem] font-bold leading-tight text-brand-900 text-balance">
            Lasting change begins with people, strengthened through partnership and inclusion.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-600">
            <p>
              World Impact Initiative is a Canadian nonprofit organization
              committed to empowering individuals and communities facing social,
              economic, and humanitarian challenges.
            </p>
            <p>
              We believe lasting change begins with people and is strengthened
              through partnership, inclusion, opportunity, and volunteerism.
            </p>
            <p>
              Our work focuses on protecting human rights, supporting vulnerable
              children and families, promoting equitable access to education
              and health resources, and fostering opportunities for youth and
              persons with disabilities.
            </p>
          </div>

          <ul className="mt-8 grid sm:grid-cols-2 gap-4">
            <li className="flex items-start gap-3 rounded-xl bg-ink-50 p-4">
              <Users className="h-5 w-5 text-brand-700 mt-0.5" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-brand-900">
                  Community-driven
                </p>
                <p className="text-sm text-ink-600">
                  Programs co-designed with local partners.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3 rounded-xl bg-ink-50 p-4">
              <Globe2 className="h-5 w-5 text-brand-700 mt-0.5" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-brand-900">
                  Globally connected
                </p>
                <p className="text-sm text-ink-600">
                  Canadian roots, international partnerships.
                </p>
              </div>
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/about" variant="primary" size="md">
              Read Our Story
            </ButtonLink>
            <ButtonLink href="/programs" variant="ghost" size="md">
              Explore Programs
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
