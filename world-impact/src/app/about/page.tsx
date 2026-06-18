import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { ArrowRight, Heart } from "lucide-react";

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
    legacy: "His 27-year imprisonment and ultimate triumph over apartheid taught us that justice and dignity are worth every sacrifice.",
  },
  {
    name: "Wole Soyinka",
    country: "Nigeria",
    quote: "A tiger does not proclaim its tigritude, it pounces.",
    image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&q=80",
    legacy: "Africa's first Nobel Laureate in Literature reminds us that African voices, art, and intellect shape our world.",
  },
  {
    name: "Viola Desmond",
    country: "Canada",
    quote: "Dignity is not negotiable.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80",
    legacy: "Nova Scotia's civil rights pioneer challenged racial segregation years before Rosa Parks, inspiring Canadian activism.",
  },
  {
    name: "Terry Fox",
    country: "Canada",
    quote: "I just wish people would realize that anything's possible if you try.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80",
    legacy: "His Marathon of Hope — running across Canada with one leg while battling cancer — raised millions for cancer research.",
  },
  {
    name: "Jean Vanier",
    country: "Canada",
    quote: "The worst thing about poverty is not the lack of material goods but the sense of being excluded.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=400&q=80",
    legacy: "Founder of L'Arche communities, Vanier dedicated his life to building inclusive communities for persons with disabilities.",
  },
  {
    name: "Malala Yousafzai",
    country: "Pakistan",
    quote: "One child, one teacher, one book, one pen can change the world.",
    image: "https://images.unsplash.com/photo-1614644147724-2d4785d69962?w=400&q=80",
    legacy: "Youngest Nobel Peace Prize laureate, survived assassination and continues championing girls' education worldwide.",
  },
];

const timeline = [
  {
    year: "2012",
    title: "Foundation",
    description: "World Impact Initiative was founded by a group of passionate Canadians committed to addressing systemic inequalities.",
  },
  {
    year: "2014",
    title: "First Programs",
    description: "Launched our first child protection and youth empowerment programs, reaching 500 beneficiaries in year one.",
  },
  {
    year: "2016",
    title: "International Expansion",
    description: "Expanded operations internationally, establishing partnerships in Africa, Asia, and the Caribbean.",
  },
  {
    year: "2018",
    title: "Gender Equality Initiative",
    description: "Launched comprehensive gender equality and protection programs reaching 5,000+ women and girls.",
  },
  {
    year: "2020",
    title: "COVID-19 Crisis Response",
    description: "Rapidly mobilized crisis response to support vulnerable communities during the global pandemic.",
  },
  {
    year: "2022",
    title: "Disability Inclusion Program",
    description: "Launched dedicated disability inclusion program, breaking down systemic barriers for persons with disabilities.",
  },
  {
    year: "2024",
    title: "50,000 Lives Impacted",
    description: "Celebrated a landmark achievement of impacting over 50,000 lives across 15 countries and counting.",
  },
];

const coreValues = [
  { icon: "🤝", title: "Integrity", desc: "We operate with transparency, honesty, and accountability in everything we do." },
  { icon: "❤️", title: "Compassion", desc: "We lead with empathy and genuine care for the dignity of every person." },
  { icon: "🌍", title: "Inclusion", desc: "We celebrate diversity and ensure no one is left behind in our programs." },
  { icon: "💪", title: "Empowerment", desc: "We build capacity and support communities to lead their own transformation." },
  { icon: "🔬", title: "Innovation", desc: "We embrace creative, evidence-based approaches to complex social challenges." },
  { icon: "🌱", title: "Sustainability", desc: "We design programs that create lasting change beyond our direct involvement." },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&q=60')] bg-cover bg-center" />
        </div>
        <div className="container-custom relative z-10">
          <AnimateOnScroll>
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-4">
              Our Story
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 max-w-3xl">
              About World Impact Initiative
            </h1>
            <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
              A Canadian nonprofit built on courage, compassion, and the
              unwavering belief that every person deserves dignity and
              opportunity.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Why We Were Founded */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimateOnScroll direction="left">
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl">
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
              <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-4">
                Our Foundation
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                Why World Impact Initiative Was Founded
              </h2>
              <div className="prose prose-gray max-w-none space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  World Impact Initiative was born from a deeply personal
                  encounter with injustice. Our founders witnessed firsthand
                  the devastating effects of systemic inequality on children,
                  women, youth, and persons with disabilities in communities
                  across Canada and around the world.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Moved by the resilience of those facing poverty, conflict,
                  discrimination, and exclusion, our founders made a commitment:
                  to build an organization where compassion meets action, where
                  partnerships drive change, and where every program is designed
                  with and for the people it serves.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We believe that meaningful change is not given — it is
                  co-created. That is why our programs are community-led,
                  evidence-based, and designed for sustainability. We don&apos;t
                  just provide relief; we invest in people&apos;s capacity to
                  transform their own lives and communities.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  From Canada to communities across Africa, Asia, and beyond,
                  World Impact Initiative stands as proof that when compassion
                  meets commitment, extraordinary things are possible.
                </p>
              </div>
              <Link href="/donate" className="btn-primary inline-flex gap-2 mt-8">
                <Heart className="w-4 h-4" />
                Support Our Mission
              </Link>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AnimateOnScroll className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
              Our Foundation
            </p>
            <h2 className="section-title mb-4">Mission, Vision & Values</h2>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <AnimateOnScroll delay={0.1}>
              <div className="bg-primary rounded-2xl p-8 text-white h-full">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-heading font-bold mb-4">Our Mission</h3>
                <p className="text-white/85 leading-relaxed text-lg">
                  To advance human dignity, equality, and opportunity by
                  supporting vulnerable and underserved communities through
                  sustainable, community-driven programs.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.2}>
              <div className="bg-gold rounded-2xl p-8 h-full">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">Our Vision</h3>
                <p className="text-primary/85 leading-relaxed text-lg">
                  A world where every person lives with dignity, safety, and
                  equal opportunity, regardless of their circumstances.
                </p>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Core Values */}
          <AnimateOnScroll className="text-center mb-10">
            <h3 className="text-2xl font-heading font-bold text-primary">Core Values</h3>
          </AnimateOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <AnimateOnScroll key={value.title} delay={index * 0.08}>
                <div className="card p-6 text-center">
                  <div className="text-4xl mb-3">{value.icon}</div>
                  <h4 className="font-heading font-bold text-primary mb-2">{value.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{value.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Our Inspiration */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimateOnScroll className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
              Inspired By Greatness
            </p>
            <h2 className="section-title mb-4">Our Inspiration</h2>
            <p className="section-subtitle">
              These extraordinary individuals inspire the values, courage, and
              compassion that guide everything we do at World Impact Initiative.
            </p>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {inspirations.map((person, index) => (
              <AnimateOnScroll key={person.name} delay={index * 0.08}>
                <div className="card overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <p className="text-white font-heading font-bold">{person.name}</p>
                      <p className="text-gold text-sm">{person.country}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <blockquote className="text-primary font-semibold italic mb-3 text-sm">
                      &ldquo;{person.quote}&rdquo;
                    </blockquote>
                    <p className="text-gray-600 text-sm leading-relaxed">{person.legacy}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AnimateOnScroll className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
              Our Journey
            </p>
            <h2 className="section-title mb-4">A Decade of Impact</h2>
          </AnimateOnScroll>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <AnimateOnScroll key={item.year} delay={index * 0.08}>
                  <div className={`flex gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center`}>
                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} hidden md:block`}>
                      {index % 2 === 0 && (
                        <div className="bg-white rounded-2xl shadow-card p-6 inline-block max-w-sm">
                          <p className="text-gold font-heading font-bold text-lg mb-1">{item.year}</p>
                          <h3 className="font-heading font-bold text-primary mb-2">{item.title}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                        </div>
                      )}
                    </div>

                    {/* Dot */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-8 h-8 bg-primary rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                        <div className="w-2 h-2 bg-gold rounded-full" />
                      </div>
                    </div>

                    <div className={`flex-1 ${index % 2 !== 0 ? "md:text-right" : "md:text-left"}`}>
                      <div className="bg-white rounded-2xl shadow-card p-6 inline-block max-w-sm md:max-w-sm w-full">
                        <p className="text-gold font-heading font-bold text-lg mb-1">{item.year}</p>
                        <h3 className="font-heading font-bold text-primary mb-2">{item.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary section-padding">
        <div className="container-custom text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Join Our Mission
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Together, we can create a world where every person lives with
              dignity, safety, and opportunity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/donate" className="btn-gold gap-2">
                <Heart className="w-4 h-4" />
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
