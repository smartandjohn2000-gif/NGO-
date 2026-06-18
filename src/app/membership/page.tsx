import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, IdCard, Lock, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Membership Portal",
  description:
    "World Impact Initiative membership portal for registration, login, dashboard, profile management, directory, and resources."
};

const portalFeatures = [
  ["User Registration", IdCard],
  ["Login", Lock],
  ["Dashboard", Users],
  ["Resource Center", BookOpen]
] as const;

export default function MembershipPage() {
  return (
    <>
      <section className="hero-pattern section text-white">
        <div className="container max-w-5xl">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-[#F4B400]">Membership Portal</p>
          <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-7xl">
            A secure space for members, volunteers, and partners.
          </h1>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className="btn btn-gold" href="/membership/register">Register</Link>
            <Link className="btn btn-white" href="/membership/login">Login</Link>
          </div>
        </div>
      </section>
      <section className="section bg-[#F7F9FC]">
        <div className="container grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {portalFeatures.map(([title, Icon]) => {
            return (
              <article key={String(title)} className="card p-7">
                <Icon className="text-[#0F4C81]" aria-hidden />
                <h2 className="mt-5 text-xl font-black">{title}</h2>
                <p className="mt-3 leading-7 text-slate-600">
                  Supabase Auth-ready portal feature for secure nonprofit operations.
                </p>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
