import Image from "next/image";
import Link from "next/link";
import { LucideIcon, ArrowRight, Heart, CheckCircle2 } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

interface ProgramStat {
  value: string;
  label: string;
}

interface ProgramActivity {
  title: string;
  description: string;
}

interface BeneficiaryStory {
  name: string;
  location: string;
  story: string;
  image: string;
}

interface ProgramPageTemplateProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  heroImage: string;
  whyItMatters: string;
  approach: string;
  activities: ProgramActivity[];
  stats: ProgramStat[];
  expectedImpact: string[];
  beneficiaryStory: BeneficiaryStory;
  galleryImages: string[];
  iconColor: string;
  iconBg: string;
}

export default function ProgramPageTemplate({
  icon: Icon,
  title,
  subtitle,
  heroImage,
  whyItMatters,
  approach,
  activities,
  stats,
  expectedImpact,
  beneficiaryStory,
  galleryImages,
  iconColor,
  iconBg,
}: ProgramPageTemplateProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/30" />
        </div>
        <div className="container-custom relative z-10 pt-32">
          <AnimateOnScroll>
            <div className={`w-14 h-14 ${iconBg} rounded-2xl flex items-center justify-center mb-5`}>
              <Icon className={`w-7 h-7 ${iconColor}`} />
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 max-w-3xl">
              {title}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gold py-10">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-heading font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-primary/70 mt-1 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll direction="left">
              <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
                The Challenge
              </p>
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                Why It Matters
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">{whyItMatters}</p>
            </AnimateOnScroll>
            <AnimateOnScroll direction="right">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={galleryImages[0]}
                  alt="Why this program matters"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll direction="left" className="order-2 lg:order-1">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={galleryImages[1] || galleryImages[0]}
                  alt="Our approach"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll direction="right" className="order-1 lg:order-2">
              <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
                How We Work
              </p>
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                Our Approach
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">{approach}</p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Key Activities */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimateOnScroll className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
              What We Do
            </p>
            <h2 className="text-3xl font-heading font-bold text-primary">Key Activities</h2>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <AnimateOnScroll key={activity.title} delay={index * 0.08}>
                <div className="card p-6 h-full">
                  <div className={`w-10 h-10 ${iconBg} rounded-xl flex items-center justify-center mb-4`}>
                    <CheckCircle2 className={`w-5 h-5 ${iconColor}`} />
                  </div>
                  <h3 className="font-heading font-bold text-primary mb-2">{activity.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{activity.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Expected Impact */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <AnimateOnScroll className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
              Looking Ahead
            </p>
            <h2 className="text-3xl font-heading font-bold text-white">Expected Impact</h2>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {expectedImpact.map((impact, index) => (
              <AnimateOnScroll key={impact} delay={index * 0.06}>
                <div className="flex items-start gap-3 bg-white/10 rounded-xl p-4">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <p className="text-white/90 text-sm leading-relaxed">{impact}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficiary Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimateOnScroll className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
              Real Stories
            </p>
            <h2 className="text-3xl font-heading font-bold text-primary">A Story of Change</h2>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="max-w-4xl mx-auto bg-gray-50 rounded-3xl overflow-hidden shadow-card">
              <div className="grid md:grid-cols-2">
                <div className="relative h-64 md:h-auto">
                  <Image
                    src={beneficiaryStory.image}
                    alt={beneficiaryStory.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <div className="text-4xl text-gold mb-4">&ldquo;</div>
                  <p className="text-gray-700 leading-relaxed italic text-lg mb-6">
                    {beneficiaryStory.story}
                  </p>
                  <div>
                    <p className="font-heading font-bold text-primary">{beneficiaryStory.name}</p>
                    <p className="text-sm text-gray-500">{beneficiaryStory.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AnimateOnScroll className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
              Gallery
            </p>
            <h2 className="text-3xl font-heading font-bold text-primary">Program Gallery</h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, index) => (
              <AnimateOnScroll key={img} delay={index * 0.05}>
                <div className="relative aspect-square rounded-2xl overflow-hidden group">
                  <Image
                    src={img}
                    alt={`${title} program photo ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors" />
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTAs */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimateOnScroll delay={0.1}>
              <div className="bg-primary rounded-2xl p-8 text-center">
                <Heart className="w-10 h-10 text-gold mx-auto mb-4" />
                <h3 className="text-xl font-heading font-bold text-white mb-3">
                  Support This Program
                </h3>
                <p className="text-white/80 mb-6 text-sm leading-relaxed">
                  Your donation directly funds this program and creates lasting
                  change for vulnerable communities.
                </p>
                <Link href="/donate" className="btn-gold w-full justify-center">
                  Donate Now
                </Link>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.2}>
              <div className="bg-gold rounded-2xl p-8 text-center">
                <CheckCircle2 className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-heading font-bold text-primary mb-3">
                  Become a Partner
                </h3>
                <p className="text-primary/80 mb-6 text-sm leading-relaxed">
                  Organizations and institutions can partner with us to expand
                  this program&apos;s reach and impact.
                </p>
                <Link href="/contact" className="btn-primary w-full justify-center">
                  Partner With Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
