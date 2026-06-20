import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about World Impact Initiative's founding story, mission, vision, core values, and the inspiration behind our commitment to creating lasting change.",
};

const inspirations = [
  {
    name: "Nelson Mandela",
    country: "South Africa",
    quote: "It always seems impossible until it's done.",
    image: "https://images.unsplash.com/photo-1541480601022-2308c0f02487?w=400&q=80",
    legacy: "His 27-year imprisonment and ultimate triumph over apartheid taught us that justice and dignity are worth every sacrifice. He showed that reconciliation, not revenge, builds nations.",
  },
  {
    name: "Wole Soyinka",
    country: "Nigeria",
    quote: "A tiger does not proclaim its tigritude, it pounces.",
    image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&q=80",
    legacy: "Africa's first Nobel Laureate in Literature reminds us that African voices, art, and intellect have always shaped our world — and will continue to do so.",
  },
  {
    name: "Viola Desmond",
    country: "Canada",
    quote: "Dignity is not negotiable.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80",
    legacy: "Nova Scotia's civil rights pioneer challenged racial segregation years before Rosa Parks, inspiring a generation of Canadian activists to stand firm against injustice.",
  },
  {
    name: "Terry Fox",
    country: "Canada",
    quote: "I just wish people would realize that anything's possible if you try.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80",
    legacy: "His Marathon of Hope — running across Canada with one leg while battling cancer — raised millions and showed the world that courage has no limits.",
  },
  {
    name: "Jean Vanier",
    country: "Canada",
    quote: "The worst thing about poverty is not the lack of material goods but the sense of being excluded.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=400&q=80",
    legacy: "Founder of L'Arche communities, Vanier dedicated his life to building inclusive communities where persons with disabilities and their assistants share life as equals.",
  },
  {
    name: "Malala Yousafzai",
    country: "Pakistan",
    quote: "One child, one teacher, one book, one pen can change the world.",
    image: "https://images.unsplash.com/photo-1614644147724-2d4785d69962?w=400&q=80",
    legacy: "Youngest Nobel Peace Prize laureate, she survived assassination and continues to champion girls' education worldwide — proof that truth and courage outlast bullets.",
  },
];

const timeline = [
  { year: "2012", title: "Foundation", description: "World Impact Initiative was founded by a group of passionate Canadians committed to addressing systemic inequalities facing vulnerable communities." },
  { year: "2014", title: "First Programs", description: "Launched our first child protection and youth empowerment programs, reaching 500 beneficiaries in year one across two countries." },
  { year: "2016", title: "International Expansion", description: "Expanded operations internationally, establishing partnerships in Africa, Asia, and the Caribbean." },
  { year: "2018", title: "Gender Equality Initiative", description: "Launched comprehensive gender equality and protection programs reaching 5,000+ women and girls across 8 countries." },
  { year: "2020", title: "COVID-19 Crisis Response", description: "Rapidly mobilized crisis response to support 10,000+ vulnerable community members during the global pandemic." },
  { year: "2022", title: "Disability Inclusion Program", description: "Launched dedicated disability inclusion program, breaking down systemic barriers for persons with disabilities." },
  { year: "2024", title: "50,000 Lives Impacted", description: "Celebrated a landmark achievement — over 50,000 lives impacted across 15+ countries through our six core programs." },
];

const coreValues = [
  { icon: "🤝", title: "Integrity", desc: "We operate with complete transparency, honesty, and accountability in everything we do." },
  { icon: "❤️", title: "Compassion", desc: "We lead with empathy and genuine care for the dignity of every person we serve." },
  { icon: "🌍", title: "Inclusion", desc: "We celebrate diversity and ensure no one is left behind in our programs or communities." },
  { icon: "💪", title: "Empowerment", desc: "We build capacity and support communities to lead their own transformation." },
  { icon: "🔬", title: "Innovation", desc: "We embrace creative, evidence-based approaches to complex social challenges." },
  { icon: "🌱", title: "Sustainability", desc: "We design programs that create lasting change beyond our direct involvement." },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)" }}
      >
        {/* Decorative */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden hidden lg:block">
          <div className="relative h-full">
            <Image
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=900&q=80"
              alt="Community members supported by World Impact Initiative"
              fill
              className="object-cover object-left"
              sizes="50vw"
              priority
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to right, #EFF6FF 0%, rgba(239,246,255,0.3) 40%, rgba(239,246,255,0) 70%)" }}
            />
          </div>
        </div>

        <div className="container-custom relative z-10">
          <AnimateOnScroll>
            <div className="section-label">Our Story</div>
            <h1
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                color: "#0F4C81",
                lineHeight: 1.12,
                maxWidth: "34rem",
                marginBottom: "1.25rem",
              }}
            >
              About World Impact Initiative
            </h1>
            <p
              className="max-w-xl"
              style={{ color: "#4B5563", fontSize: "1.125rem", lineHeight: 1.8 }}
            >
              A Canadian nonprofit built on courage, compassion, and the
              unwavering belief that every person deserves dignity and opportunity.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Why We Were Founded */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimateOnScroll direction="left">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=85"
                  alt="Founder working with community members"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll direction="right">
              <div className="section-label">Our Foundation</div>
              <h2
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)",
                  color: "#0F4C81",
                  lineHeight: 1.2,
                  marginBottom: "1.5rem",
                }}
              >
                Why World Impact Initiative Was Founded
              </h2>
              <div className="space-y-4 mb-8">
                <p className="body-lg" style={{ color: "#4B5563" }}>
                  World Impact Initiative was born from a deeply personal
                  encounter with injustice. Our founders witnessed firsthand the
                  devastating effects of systemic inequality on children, women,
                  youth, and persons with disabilities in communities across
                  Canada and around the world.
                </p>
                <p className="body-md" style={{ color: "#6B7280" }}>
                  Moved by the resilience of those facing poverty, conflict,
                  discrimination, and exclusion, our founders made a commitment:
                  to build an organization where compassion meets action, where
                  partnerships drive change, and where every program is designed
                  with and for the people it serves.
                </p>
                <p className="body-md" style={{ color: "#6B7280" }}>
                  We believe that meaningful change is not given — it is
                  co-created. That is why our programs are community-led,
                  evidence-based, and designed for sustainability. We don&apos;t
                  just provide relief; we invest in people&apos;s capacity to
                  transform their own lives and communities.
                </p>
              </div>
              <Link href="/donate" className="btn-primary inline-flex gap-2">
                Support Our Mission
                <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Core Values */}
      <section className="section-padding" style={{ background: "#F9FAFB" }}>
        <div className="container-custom">
          <AnimateOnScroll className="text-center max-w-2xl mx-auto mb-14">
            <div className="section-label" style={{ justifyContent: "center" }}>
              <span className="inline-block w-8 h-0.5 mr-2 rounded" style={{ background: "#4DA6FF" }} />
              Our Foundation
            </div>
            <h2
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                color: "#0F4C81",
              }}
            >
              Mission, Vision &amp; Values
            </h2>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 gap-6 mb-14">
            <AnimateOnScroll delay={0.1}>
              <div className="rounded-2xl p-8 h-full" style={{ background: "#0F4C81" }}>
                <div className="text-4xl mb-4">🎯</div>
                <h3 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "1.375rem", color: "white", marginBottom: "0.875rem" }}>
                  Our Mission
                </h3>
                <p style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.8, fontSize: "1.0625rem" }}>
                  To advance human dignity, equality, and opportunity by
                  supporting vulnerable and underserved communities through
                  sustainable, community-driven programs.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.2}>
              <div className="rounded-2xl p-8 h-full" style={{ background: "#F4C542" }}>
                <div className="text-4xl mb-4">🌍</div>
                <h3 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "1.375rem", color: "#0F4C81", marginBottom: "0.875rem" }}>
                  Our Vision
                </h3>
                <p style={{ color: "rgba(15,76,129,0.8)", lineHeight: 1.8, fontSize: "1.0625rem" }}>
                  A world where every person lives with dignity, safety, and
                  equal opportunity — regardless of their circumstances,
                  background, or ability.
                </p>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Core Values */}
          <AnimateOnScroll className="text-center mb-10">
            <h3 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "1.5rem", color: "#0F4C81" }}>
              Core Values
            </h3>
          </AnimateOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {coreValues.map((value, index) => (
              <AnimateOnScroll key={value.title} delay={index * 0.08}>
                <div className="card card-hover card-shadow p-6 text-center">
                  <div className="text-4xl mb-3">{value.icon}</div>
                  <h4 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#0F4C81", marginBottom: "0.5rem" }}>
                    {value.title}
                  </h4>
                  <p style={{ color: "#6B7280", fontSize: "0.9rem", lineHeight: 1.7 }}>{value.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Inspirations */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimateOnScroll className="text-center max-w-3xl mx-auto mb-14">
            <div className="section-label" style={{ justifyContent: "center" }}>
              <span className="inline-block w-8 h-0.5 mr-2 rounded" style={{ background: "#4DA6FF" }} />
              Inspired By Greatness
            </div>
            <h2
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                color: "#0F4C81",
                marginBottom: "1rem",
              }}
            >
              Our Inspiration
            </h2>
            <p className="body-lg" style={{ color: "#6B7280" }}>
              These extraordinary individuals inspire the values, courage, and
              compassion that guide everything we do.
            </p>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {inspirations.map((person, index) => (
              <AnimateOnScroll key={person.name} delay={index * 0.07}>
                <div className="card card-hover overflow-hidden">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(to top, rgba(15,76,129,0.7) 0%, transparent 60%)" }}
                    />
                    <div className="absolute bottom-4 left-4">
                      <p style={{ color: "white", fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "1rem" }}>
                        {person.name}
                      </p>
                      <p style={{ color: "#F4C542", fontSize: "0.8125rem", fontWeight: 500 }}>
                        {person.country}
                      </p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p style={{ color: "#0F4C81", fontWeight: 600, fontStyle: "italic", marginBottom: "0.75rem", fontSize: "0.9375rem" }}>
                      &ldquo;{person.quote}&rdquo;
                    </p>
                    <p style={{ color: "#6B7280", fontSize: "0.875rem", lineHeight: 1.75 }}>{person.legacy}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding" style={{ background: "#EFF6FF" }}>
        <div className="container-custom">
          <AnimateOnScroll className="text-center max-w-2xl mx-auto mb-14">
            <div className="section-label" style={{ justifyContent: "center" }}>
              <span className="inline-block w-8 h-0.5 mr-2 rounded" style={{ background: "#4DA6FF" }} />
              Our Journey
            </div>
            <h2 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", color: "#0F4C81" }}>
              A Decade of Impact
            </h2>
          </AnimateOnScroll>

          <div className="max-w-3xl mx-auto space-y-6">
            {timeline.map((item, index) => (
              <AnimateOnScroll key={item.year} delay={index * 0.07}>
                <div className="flex gap-5">
                  {/* Year badge */}
                  <div className="shrink-0 flex flex-col items-center">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center font-heading font-bold text-sm"
                      style={{ background: "#0F4C81", color: "#F4C542", fontFamily: "Montserrat, sans-serif" }}
                    >
                      {item.year}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 flex-1 mt-2" style={{ background: "#BFDBFE", minHeight: "1.5rem" }} />
                    )}
                  </div>
                  {/* Content */}
                  <div className="card card-shadow p-5 flex-1 mb-0">
                    <h3 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#0F4C81", marginBottom: "0.5rem" }}>
                      {item.title}
                    </h3>
                    <p style={{ color: "#6B7280", fontSize: "0.9375rem", lineHeight: 1.7 }}>{item.description}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ background: "#0F4C81" }}>
        <div className="container-custom text-center">
          <AnimateOnScroll>
            <h2 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)", color: "white", marginBottom: "1rem" }}>
              Join Our Mission
            </h2>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.125rem", marginBottom: "2rem", maxWidth: "36rem", margin: "0 auto 2rem" }}>
              Together, we can create a world where every person lives with dignity, safety, and equal opportunity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/donate" className="btn-gold gap-2">
                Donate Now
              </Link>
              <Link href="/volunteer" className="btn-outline-white gap-2">
                Volunteer With Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
