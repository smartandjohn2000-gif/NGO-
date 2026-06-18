import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { MotionSection } from "@/components/motion-section";
import { programs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore World Impact Initiative programs for gender equality, child protection, youth empowerment, disability inclusion, health services, inclusive education, and crisis response."
};

export default function ProgramsPage() {
  return (
    <>
      <section className="hero-pattern section text-white">
        <div className="container max-w-5xl">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-[#F4B400]">Programs</p>
          <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-7xl">
            Integrated programs for protection, inclusion, and opportunity.
          </h1>
        </div>
      </section>
      <MotionSection className="section bg-[#F7F9FC]">
        <div className="container grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {programs.map((program) => {
            const Icon = program.icon;
            return (
              <article key={program.slug} className="card flex flex-col p-7">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#0F4C81] text-white">
                  <Icon aria-hidden />
                </div>
                <p className="mt-5 eyebrow">{program.eyebrow}</p>
                <h2 className="mt-2 text-2xl font-black text-slate-950">{program.title}</h2>
                <p className="mt-4 flex-1 leading-7 text-slate-600">{program.summary}</p>
                <Link className="btn btn-blue mt-7 justify-center" href={`/programs/${program.slug}`}>
                  View Program <ArrowRight size={18} aria-hidden />
                </Link>
              </article>
            );
          })}
        </div>
      </MotionSection>
    </>
  );
}
