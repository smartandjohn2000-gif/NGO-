import type { Metadata } from "next";
import Link from "next/link";
import { LogIn, UserPlus, BookOpen, Users, Star, Lock } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Membership Portal",
  description:
    "Sign in to the World Impact Initiative member portal: update your profile, browse the directory, and access the resource center.",
  alternates: { canonical: "/membership" },
};

const features = [
  {
    icon: Users,
    title: "Member Directory",
    text: "Connect with volunteers, donors, alumni, and partners around the world.",
  },
  {
    icon: BookOpen,
    title: "Resource Center",
    text: "Toolkits, training materials, and program briefings curated for members.",
  },
  {
    icon: Star,
    title: "Member Events",
    text: "Quarterly briefings, salons, and exclusive field-update calls.",
  },
];

export default function MembershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Membership"
        title="A community of changemakers."
        description="Volunteers, donors, alumni, and partners share a portal designed to keep us connected, learning, and acting together."
        crumbs={[{ label: "Membership" }]}
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="container-page grid gap-8 lg:grid-cols-3">
          {features.map((f) => (
            <Reveal key={f.title}>
              <div className="h-full rounded-3xl bg-ink-50 p-7 ring-1 ring-ink-100">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-brand-700 ring-1 ring-brand-100">
                  <f.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-brand-900">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">
                  {f.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-20 bg-ink-50">
        <div className="container-page grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          <Reveal>
            <div className="h-full rounded-3xl bg-white p-8 ring-1 ring-ink-100 text-center">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-800">
                <LogIn className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="mt-4 text-2xl font-bold text-brand-900">Sign in</h2>
              <p className="mt-2 text-sm text-ink-600">
                Welcome back. Access your dashboard, the directory, and resources.
              </p>
              <Link
                href="/membership/login"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-800 hover:bg-brand-900 text-white px-6 py-3 text-sm font-semibold"
              >
                Member Login
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl bg-gradient-to-br from-brand-800 to-brand-950 p-8 text-white text-center">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20 text-gold-300">
                <UserPlus className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="mt-4 text-2xl font-bold">Create an account</h2>
              <p className="mt-2 text-sm text-white/80">
                Volunteers, donors, and partners are welcome. Free to join.
              </p>
              <Link
                href="/membership/register"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold-400 hover:bg-gold-300 text-brand-900 px-6 py-3 text-sm font-semibold"
              >
                Register Now
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container-page text-center">
          <Lock className="h-8 w-8 text-brand-700 mx-auto" aria-hidden="true" />
          <p className="mt-3 text-sm text-ink-600 max-w-2xl mx-auto">
            Your data is protected. We use Supabase authentication with secure
            session cookies and never sell or share member information.
          </p>
        </div>
      </section>
    </>
  );
}
