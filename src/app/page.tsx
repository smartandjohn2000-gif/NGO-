import { ArrowRight, CheckCircle2, HandHeart, HeartHandshake, UsersRound } from "lucide-react";
import Link from "next/link";
import { MotionSection } from "@/components/motion-section";
import { impactAreas } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <section className="hero-pattern relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,44,77,.95),rgba(15,76,129,.78),rgba(15,76,129,.15))]" />
        <div className="container relative grid min-h-[760px] items-center gap-12 py-16 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="mb-5 text-sm font-black uppercase tracking-[0.28em] text-[#F4B400]">
              Canadian nonprofit organization
            </p>
            <h1 className="headline text-white">
              Creating Lasting Impact Through Compassion, Protection, and Opportunity
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-blue-50">
              World Impact Initiative is committed to advancing human dignity, equality, and
              opportunity by supporting vulnerable and underserved communities through sustainable,
              community-driven programs.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link className="btn btn-gold" href="/donate">
                Donate Now <ArrowRight size={18} aria-hidden />
              </Link>
              <Link className="btn btn-white" href="/volunteer">
                Become a Volunteer
              </Link>
            </div>
          </div>
          <div className="image-card min-h-[430px] rounded-[2.5rem] border border-white/20 p-6 shadow-2xl shadow-blue-950/30">
            <div className="flex h-full min-h-[380px] flex-col justify-end rounded-[2rem] bg-white/12 p-7 backdrop-blur">
              <p className="text-5xl font-black text-[#F4B400]">6</p>
              <p className="mt-2 max-w-sm text-2xl font-black">integrated impact areas for protection, opportunity, inclusion, and relief.</p>
            </div>
          </div>
        </div>
      </section>

      <MotionSection className="section bg-[#F7F9FC]">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Our impact areas</p>
            <h2 className="section-title mt-3">Programs built with communities, not for them.</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {impactAreas.map((area) => {
              const Icon = area.icon;
              return (
                <article key={area.slug} className="card group p-7">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#0F4C81] text-white group-hover:bg-[#F4B400] group-hover:text-slate-950">
                    <Icon aria-hidden />
                  </div>
                  <h3 className="mt-6 text-xl font-black text-slate-950">{area.title}</h3>
                  <p className="mt-3 min-h-24 leading-7 text-slate-600">{area.summary}</p>
                  <Link className="mt-6 inline-flex items-center gap-2 font-black text-[#0F4C81]" href={`/programs/${area.slug}`}>
                    Learn More <ArrowRight size={18} aria-hidden />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="section">
        <div className="container grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <div className="card image-card min-h-[520px] p-8 text-white">
            <div className="flex h-full flex-col justify-between rounded-[1.5rem] bg-[#092f50]/65 p-8">
              <HandHeart size={48} aria-hidden />
              <div>
                <p className="text-6xl font-black text-[#F4B400]">100%</p>
                <p className="mt-3 text-2xl font-black">community-centered, partnership-led, dignity-first.</p>
              </div>
            </div>
          </div>
          <div>
            <p className="eyebrow">Who we are</p>
            <h2 className="section-title mt-3">A Canadian nonprofit committed to dignity and opportunity.</h2>
            <div className="mt-7 grid gap-5 text-lg leading-8 text-slate-600">
              <p>
                World Impact Initiative is a Canadian nonprofit organization committed to empowering
                individuals and communities facing social, economic, and humanitarian challenges.
              </p>
              <p>
                We believe lasting change begins with people and is strengthened through partnership,
                inclusion, opportunity, and volunteerism.
              </p>
              <p>
                Our work focuses on protecting human rights, supporting vulnerable children and families,
                promoting equitable access to education and health resources, and fostering opportunities
                for youth and persons with disabilities.
              </p>
            </div>
            <div className="mt-9 grid gap-5 md:grid-cols-2">
              <div className="rounded-3xl bg-[#F7F9FC] p-6">
                <CheckCircle2 className="text-[#0F4C81]" aria-hidden />
                <h3 className="mt-4 text-xl font-black">Mission</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  To advance human dignity, equality, and opportunity by supporting vulnerable and
                  underserved communities through sustainable, community-driven programs.
                </p>
              </div>
              <div className="rounded-3xl bg-[#F7F9FC] p-6">
                <UsersRound className="text-[#0F4C81]" aria-hidden />
                <h3 className="mt-4 text-xl font-black">Vision</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  A world where every person lives with dignity, safety, and equal opportunity,
                  regardless of their circumstances.
                </p>
              </div>
            </div>
          </div>
        </div>
      </MotionSection>

      <section className="section bg-[#0F4C81] text-white">
        <div className="container grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#F4B400]">
              Take action
            </p>
            <h2 className="mt-3 max-w-4xl text-4xl font-black tracking-tight sm:text-5xl">
              Partner, volunteer, or donate to help communities build change that lasts.
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link className="btn btn-gold justify-center" href="/donate">
              Donate
            </Link>
            <Link className="btn btn-white justify-center" href="/volunteer">
              Volunteer
            </Link>
            <Link className="btn justify-center border border-white/30 text-white hover:bg-white hover:text-[#0F4C81]" href="/contact">
              Partnerships
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
