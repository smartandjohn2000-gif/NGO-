import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Handshake, HeartHandshake } from "lucide-react";
import { programs } from "@/lib/content";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const program = programs.find((item) => item.slug === slug);

  if (!program) {
    return {};
  }

  return {
    title: program.title,
    description: `${program.title}: ${program.summary}`
  };
}

export default async function ProgramDetailPage({ params }: Props) {
  const { slug } = await params;
  const program = programs.find((item) => item.slug === slug);

  if (!program) {
    notFound();
  }

  const Icon = program.icon;

  return (
    <>
      <section className="hero-pattern section text-white">
        <div className="container grid gap-10 lg:grid-cols-[1fr_.8fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#F4B400]">
              {program.eyebrow}
            </p>
            <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-7xl">{program.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-50">{program.hero}</p>
          </div>
          <div className="image-card rounded-[2.5rem] p-8 text-white">
            <Icon size={72} aria-hidden />
            <p className="mt-28 text-2xl font-black">Community-led design. Transparent delivery. Measurable impact.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-7 lg:grid-cols-2">
          {[
            ["Why It Matters", program.why],
            ["Our Approach", program.approach],
            ["Expected Impact", program.impact],
            ["Beneficiary Story", program.story]
          ].map(([title, text]) => (
            <article key={title} className="card p-8">
              <h2 className="text-2xl font-black text-slate-950">{title}</h2>
              <p className="mt-4 leading-8 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section bg-[#F7F9FC]">
        <div className="container grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="eyebrow">Key activities</p>
            <h2 className="section-title mt-3">Practical work that turns compassion into support.</h2>
          </div>
          <div className="grid gap-4">
            {program.activities.map((activity) => (
              <div key={activity} className="rounded-3xl bg-white p-5 font-bold text-slate-700 shadow-sm">
                {activity}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid gap-6 lg:grid-cols-3">
            {program.stats.map((stat) => (
              <div key={stat} className="rounded-[2rem] bg-[#0F4C81] p-8 text-white">
                <p className="text-4xl font-black text-[#F4B400]">{stat.split(" ")[0]}</p>
                <p className="mt-3 text-lg font-bold">{stat.replace(stat.split(" ")[0], "").trim()}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {program.gallery.map((item) => (
              <div key={item} className="image-card min-h-64 rounded-[2rem] p-6 text-white">
                <p className="mt-40 text-xl font-black">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[#092f50] text-white">
        <div className="container grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-white/10 p-8">
            <Handshake className="text-[#F4B400]" size={44} aria-hidden />
            <h2 className="mt-5 text-3xl font-black">Partner with this program</h2>
            <p className="mt-4 leading-8 text-blue-50">
              Collaborate on referrals, training, service delivery, research, funding, and community engagement.
            </p>
            <Link className="btn btn-gold mt-6" href="/contact">
              Start a Partnership
            </Link>
          </div>
          <div className="rounded-[2rem] bg-white p-8 text-slate-950">
            <HeartHandshake className="text-[#0F4C81]" size={44} aria-hidden />
            <h2 className="mt-5 text-3xl font-black">Fund practical impact</h2>
            <p className="mt-4 leading-8 text-slate-600">
              Your donation helps this program reach vulnerable communities with dignity, consistency, and care.
            </p>
            <Link className="btn btn-blue mt-6" href="/donate">
              Donate to Support
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
