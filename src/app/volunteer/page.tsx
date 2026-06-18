import type { Metadata } from "next";
import { CheckCircle2, ShieldCheck, HeartHandshake, Sparkles } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { VolunteerForm } from "@/components/forms/VolunteerForm";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Volunteer With Us",
  description:
    "Join our volunteer community. Whether you have an hour or a lifetime to give, there's a way to make a difference at World Impact Initiative.",
  alternates: { canonical: "/volunteer" },
};

const benefits = [
  {
    icon: HeartHandshake,
    title: "Meaningful work",
    text: "Be part of programs that protect children, empower youth, and respond to crises.",
  },
  {
    icon: Sparkles,
    title: "Skills & growth",
    text: "Develop new skills, attend trainings, and gain exposure to global humanitarian work.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & supported",
    text: "Every volunteer is screened, trained, and supported by a dedicated coordinator.",
  },
];

export default function VolunteerPage() {
  return (
    <>
      <PageHero
        eyebrow="Volunteer"
        title="Lend your time, talent, and heart."
        description="From event support to mentorship, design to translation—our volunteers are essential to the work we do."
        crumbs={[{ label: "Volunteer" }]}
      />

      <section className="py-14 md:py-20 bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-700">
              Why Volunteer With Us
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-brand-900 text-balance">
              Real impact, real community, and a team that has your back.
            </h2>
            <p className="mt-4 text-ink-600">
              Our volunteers are at the center of everything we do. Tell us
              what you love and how you&rsquo;d like to help&mdash;we&rsquo;ll match you with a
              role that fits.
            </p>
            <ul className="mt-8 space-y-4">
              {benefits.map((b) => (
                <li
                  key={b.title}
                  className="flex items-start gap-3 rounded-2xl bg-ink-50 p-4 ring-1 ring-ink-100"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-brand-700 ring-1 ring-brand-100">
                    <b.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-semibold text-brand-900">{b.title}</p>
                    <p className="text-sm text-ink-600">{b.text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl bg-brand-50 p-5 ring-1 ring-brand-100">
              <p className="text-sm font-semibold text-brand-900">What happens after I apply?</p>
              <ol className="mt-3 space-y-2 text-sm text-ink-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-700 mt-0.5" aria-hidden="true" />
                  A coordinator reviews your application within 3 business days.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-700 mt-0.5" aria-hidden="true" />
                  We&rsquo;ll invite you to a brief 20-minute virtual chat.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-700 mt-0.5" aria-hidden="true" />
                  We&rsquo;ll match you to a role and complete onboarding.
                </li>
              </ol>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="rounded-3xl bg-white ring-1 ring-ink-100 shadow-[0_2px_24px_rgba(7,34,60,0.05)] p-7 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-900">
                Volunteer Application
              </h2>
              <p className="mt-2 text-ink-600">
                Tell us about yourself. All fields marked with{" "}
                <span className="text-red-500">*</span> are required.
              </p>
              <div className="mt-8">
                <VolunteerForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
