import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import {
  ShieldCheck,
  Baby,
  Zap,
  Accessibility,
  HeartPulse,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Programs",
  description:
    "Explore World Impact Initiative's six core programs: gender equality, child protection, youth empowerment, disability inclusion, health & education, and crisis response.",
};

const programs = [
  {
    icon: ShieldCheck,
    slug: "gender-equality",
    title: "Gender Equality & Protection",
    description:
      "Championing women's rights, preventing gender-based violence, and creating safe spaces where all genders can thrive with dignity and freedom.",
    stats: ["5,000+ women supported", "12 countries", "85% reduction in GBV cases"],
    color: "from-purple-500 to-pink-500",
    bg: "bg-purple-50",
    iconColor: "text-purple-500",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80",
  },
  {
    icon: Baby,
    slug: "child-protection",
    title: "Child Protection & Human Rights",
    description:
      "Safeguarding children from exploitation, abuse, and neglect while advocating for universal human rights and access to essential services.",
    stats: ["10,000+ children protected", "30 schools supported", "Zero tolerance policy"],
    color: "from-blue-500 to-cyan-500",
    bg: "bg-blue-50",
    iconColor: "text-blue-500",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80",
  },
  {
    icon: Zap,
    slug: "youth-empowerment",
    title: "Youth Empowerment & Technical Skills",
    description:
      "Equipping young people with vocational training, entrepreneurship skills, and mentorship to build sustainable livelihoods.",
    stats: ["8,000+ youth trained", "75% employment rate", "200+ businesses launched"],
    color: "from-amber-500 to-orange-500",
    bg: "bg-amber-50",
    iconColor: "text-amber-500",
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&q=80",
  },
  {
    icon: Accessibility,
    slug: "disability-inclusion",
    title: "Disability Inclusion & Accessibility",
    description:
      "Breaking down barriers and creating inclusive environments where persons with disabilities participate fully in all aspects of society.",
    stats: ["3,000+ persons with disabilities", "50+ accessible facilities", "Policy advocacy wins"],
    color: "from-green-500 to-emerald-500",
    bg: "bg-green-50",
    iconColor: "text-green-500",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80",
  },
  {
    icon: HeartPulse,
    slug: "health-education",
    title: "Health Services & Inclusive Education",
    description:
      "Expanding access to quality healthcare and education for marginalized communities, ensuring no one is left behind.",
    stats: ["20,000+ health consultations", "40 schools built", "90% literacy improvement"],
    color: "from-red-500 to-rose-500",
    bg: "bg-red-50",
    iconColor: "text-red-500",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
  },
  {
    icon: AlertTriangle,
    slug: "crisis-response",
    title: "Crisis Response & Humanitarian Relief",
    description:
      "Delivering rapid, effective humanitarian assistance to communities affected by conflict, natural disasters, and displacement.",
    stats: ["15,000+ people aided", "20 crisis responses", "48-hour deployment"],
    color: "from-primary to-blue-600",
    bg: "bg-primary/5",
    iconColor: "text-primary",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=600&q=80",
  },
];

export default function ProgramsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&q=60')] bg-cover bg-center" />
        <div className="container-custom relative z-10">
          <AnimateOnScroll>
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-4">What We Do</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Our Programs
            </h1>
            <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
              Six core program areas addressing the most pressing challenges
              facing vulnerable communities through evidence-based, sustainable
              solutions.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <AnimateOnScroll key={program.slug} delay={index * 0.06}>
                  <div className={`card overflow-hidden ${index % 2 === 0 ? "" : ""}`}>
                    <div className={`grid md:grid-cols-2 gap-0 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
                      {/* Image */}
                      <div className={`relative h-64 md:h-auto min-h-64 overflow-hidden ${index % 2 !== 0 ? "md:order-2" : ""}`}>
                        <Image
                          src={program.image}
                          alt={program.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-transparent" />
                      </div>

                      {/* Content */}
                      <div className={`p-8 lg:p-10 flex flex-col justify-center ${index % 2 !== 0 ? "md:order-1" : ""}`}>
                        <div className={`w-12 h-12 ${program.bg} rounded-xl flex items-center justify-center mb-5`}>
                          <Icon className={`w-6 h-6 ${program.iconColor}`} />
                        </div>
                        <h2 className="text-2xl font-heading font-bold text-primary mb-3">
                          {program.title}
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-5">
                          {program.description}
                        </p>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {program.stats.map((stat) => (
                            <span
                              key={stat}
                              className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full"
                            >
                              {stat}
                            </span>
                          ))}
                        </div>

                        <Link
                          href={`/programs/${program.slug}`}
                          className="btn-primary inline-flex gap-2 w-fit"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
