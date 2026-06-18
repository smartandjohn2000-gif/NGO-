import type { Metadata } from "next";
import { MotionSection } from "@/components/motion-section";
import { founderStory, inspiration, timeline, values } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn why World Impact Initiative was founded, what inspires our work, and the mission, vision, and values guiding this Canadian nonprofit organization."
};

export default function AboutPage() {
  return (
    <>
      <section className="hero-pattern section text-white">
        <div className="container max-w-5xl">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-[#F4B400]">About us</p>
          <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-7xl">
            Built for dignity, partnership, and lasting impact.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-50">
            World Impact Initiative brings people, volunteers, and partners together to support
            vulnerable communities through accountable nonprofit programs.
          </p>
        </div>
      </section>

      <MotionSection className="section">
        <div className="container grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <p className="eyebrow">Why World Impact Initiative was founded</p>
            <h2 className="section-title mt-3">A practical response to human need.</h2>
          </div>
          <div className="card p-8 text-lg leading-8 text-slate-600">
            <p>{founderStory}</p>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="section bg-[#F7F9FC]">
        <div className="container">
          <div className="max-w-3xl">
            <p className="eyebrow">Our inspiration</p>
            <h2 className="section-title mt-3">Lives of courage that keep service human.</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {inspiration.map((person) => (
              <article key={person.name} className="card p-7">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-[#0F4C81] text-xl font-black text-white">
                  {person.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </div>
                <h3 className="mt-5 text-2xl font-black text-slate-950">{person.name}</h3>
                <p className="mt-1 font-bold text-[#0F4C81]">{person.role}</p>
                <p className="mt-4 leading-7 text-slate-600">{person.note}</p>
              </article>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="section">
        <div className="container">
          <p className="eyebrow">Timeline</p>
          <h2 className="section-title mt-3">From conviction to coordinated action.</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {timeline.map((item) => (
              <article key={item.title} className="relative rounded-[2rem] border-l-8 border-[#F4B400] bg-white p-7 shadow-xl shadow-blue-900/10">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#0F4C81]">
                  {item.year}
                </p>
                <h3 className="mt-4 text-2xl font-black">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </MotionSection>

      <section className="section bg-[#0F4C81] text-white">
        <div className="container grid gap-8 lg:grid-cols-3">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#F4B400]">Mission</p>
            <p className="mt-4 text-2xl font-black leading-tight">
              Advance human dignity, equality, and opportunity through community-driven programs.
            </p>
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#F4B400]">Vision</p>
            <p className="mt-4 text-2xl font-black leading-tight">
              A world where every person lives with dignity, safety, and equal opportunity.
            </p>
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#F4B400]">Core values</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {values.map((value) => (
                <span key={value} className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold">
                  {value}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
