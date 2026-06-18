import type { Metadata } from "next";
import { ExternalLink, LockKeyhole, Repeat, Sparkles } from "lucide-react";
import Link from "next/link";
import { donationImpacts, site, testimonials } from "@/lib/content";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support Change That Lasts. Donate to World Impact Initiative through Charitable Impact to fund humanitarian aid, protection, education, inclusion, and crisis response."
};

export default function DonatePage() {
  return (
    <>
      <section className="hero-pattern section text-white">
        <div className="container grid gap-10 lg:grid-cols-[1fr_420px] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#F4B400]">Donate</p>
            <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-7xl">Support Change That Lasts</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-50">
              Your gift helps advance dignity, equality, and opportunity for vulnerable and
              underserved communities.
            </p>
            <a className="btn btn-gold mt-8" href={site.charitableImpactUrl}>
              Give through Charitable Impact <ExternalLink size={18} aria-hidden />
            </a>
          </div>
          <div className="rounded-[2rem] bg-white p-6 text-slate-950 shadow-2xl">
            <div className="flex items-center gap-3 rounded-3xl bg-emerald-50 p-4 text-emerald-700">
              <LockKeyhole aria-hidden />
              <p className="font-black">Secure donation platform</p>
            </div>
            <div className="mt-6 grid gap-4">
              {["One-Time Donation", "Monthly Donation"].map((option) => (
                <a key={option} href={site.charitableImpactUrl} className="rounded-3xl border border-slate-200 p-5 font-black hover:border-[#0F4C81] hover:text-[#0F4C81]">
                  {option}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section bg-[#F7F9FC]">
        <div className="container grid gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Impact statements</p>
            <h2 className="section-title mt-3">Every gift moves practical support forward.</h2>
            <div className="mt-8 grid gap-4">
              {donationImpacts.map((impact) => (
                <div key={impact} className="rounded-3xl bg-white p-5 font-bold text-slate-700">
                  <Sparkles className="mb-3 text-[#F4B400]" aria-hidden /> {impact}
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="eyebrow">Donor testimonials</p>
            <div className="mt-8 grid gap-5">
              {testimonials.map((testimonial) => (
                <blockquote key={testimonial.name} className="card p-7">
                  <Repeat className="text-[#0F4C81]" aria-hidden />
                  <p className="mt-4 text-xl font-bold leading-8">“{testimonial.quote}”</p>
                  <footer className="mt-4 text-sm font-black text-slate-500">{testimonial.name}</footer>
                </blockquote>
              ))}
            </div>
            <Link className="btn btn-blue mt-8" href="/contact">
              Discuss a partnership gift
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
