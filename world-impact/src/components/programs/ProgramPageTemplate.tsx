import Image from "next/image";
import Link from "next/link";
import { LucideIcon, ArrowRight, Heart, CheckCircle2 } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

interface ProgramStat { value: string; label: string; }
interface ProgramActivity { title: string; description: string; }
interface BeneficiaryStory { name: string; location: string; story: string; image: string; }

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
  accentColor?: string;
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
  accentColor = "#4DA6FF",
}: ProgramPageTemplateProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[65vh] flex items-end pb-0 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Bright gradient — avoid heavy dark overlay */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(15,76,129,0.85) 0%, rgba(15,76,129,0.4) 50%, rgba(15,76,129,0.1) 100%)" }}
          />
        </div>
        <div className="relative z-10 container-custom pt-32 pb-12">
          <AnimateOnScroll>
            <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full" style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)" }}>
              <Icon className="w-4 h-4" style={{ color: "#F4C542" }} />
              <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.875rem", fontWeight: 600 }}>World Impact Initiative</span>
            </div>
            <h1
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "white",
                lineHeight: 1.12,
                maxWidth: "42rem",
                marginBottom: "1rem",
              }}
            >
              {title}
            </h1>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.125rem", lineHeight: 1.75, maxWidth: "36rem" }}>
              {subtitle}
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ background: accentColor }}>
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="stat-item"
                style={{ borderColor: "rgba(255,255,255,0.2)" }}
              >
                <p style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "2rem", color: i % 2 === 0 ? "#0F4C81" : "white" }}>
                  {stat.value}
                </p>
                <p style={{ color: i % 2 === 0 ? "rgba(15,76,129,0.7)" : "rgba(255,255,255,0.8)", fontSize: "0.875rem", marginTop: "0.25rem", fontWeight: 500 }}>
                  {stat.label}
                </p>
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
              <div className="section-label">The Challenge</div>
              <h2 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "clamp(1.875rem, 3.5vw, 2.5rem)", color: "#0F4C81", marginBottom: "1.25rem", lineHeight: 1.2 }}>
                Why It Matters
              </h2>
              <p className="body-lg" style={{ color: "#4B5563" }}>{whyItMatters}</p>
            </AnimateOnScroll>
            <AnimateOnScroll direction="right">
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <Image
                  src={galleryImages[0]}
                  alt="Why this program matters"
                  width={700}
                  height={525}
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding" style={{ background: "#F9FAFB" }}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll direction="left" className="order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <Image
                  src={galleryImages[1] || galleryImages[0]}
                  alt="Our approach"
                  width={700}
                  height={525}
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll direction="right" className="order-1 lg:order-2">
              <div className="section-label">How We Work</div>
              <h2 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "clamp(1.875rem, 3.5vw, 2.5rem)", color: "#0F4C81", marginBottom: "1.25rem", lineHeight: 1.2 }}>
                Our Approach
              </h2>
              <p className="body-lg" style={{ color: "#4B5563" }}>{approach}</p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Key Activities */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimateOnScroll className="text-center max-w-2xl mx-auto mb-12">
            <div className="section-label" style={{ justifyContent: "center" }}>
              <span className="inline-block w-8 h-0.5 mr-2 rounded" style={{ background: accentColor }} />
              What We Do
            </div>
            <h2 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "clamp(1.75rem, 3vw, 2.25rem)", color: "#0F4C81" }}>
              Key Activities
            </h2>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {activities.map((activity, index) => (
              <AnimateOnScroll key={activity.title} delay={index * 0.07}>
                <div className="card card-hover card-shadow p-6 h-full">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: iconBg }}>
                    <CheckCircle2 className="w-5 h-5" style={{ color: iconColor }} />
                  </div>
                  <h3 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#0F4C81", marginBottom: "0.5rem", fontSize: "1rem" }}>
                    {activity.title}
                  </h3>
                  <p style={{ color: "#6B7280", fontSize: "0.9rem", lineHeight: 1.75 }}>{activity.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Expected Impact */}
      <section className="section-padding" style={{ background: "#EFF6FF" }}>
        <div className="container-custom">
          <AnimateOnScroll className="text-center max-w-2xl mx-auto mb-12">
            <div className="section-label" style={{ justifyContent: "center" }}>
              <span className="inline-block w-8 h-0.5 mr-2 rounded" style={{ background: "#4DA6FF" }} />
              Looking Ahead
            </div>
            <h2 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "clamp(1.75rem, 3vw, 2.25rem)", color: "#0F4C81" }}>
              Expected Impact
            </h2>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {expectedImpact.map((impact, index) => (
              <AnimateOnScroll key={impact} delay={index * 0.06}>
                <div className="flex items-start gap-3 bg-white rounded-xl p-4 border border-blue-100 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#2FAE66" }} />
                  <p style={{ color: "#374151", fontSize: "0.9375rem", lineHeight: 1.7 }}>{impact}</p>
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
            <div className="section-label" style={{ justifyContent: "center" }}>
              <span className="inline-block w-8 h-0.5 mr-2 rounded" style={{ background: "#2FAE66" }} />
              Real Stories
            </div>
            <h2 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "clamp(1.75rem, 3vw, 2.25rem)", color: "#0F4C81" }}>
              A Story of Change
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-gray-100" style={{ boxShadow: "0 8px 40px rgba(15,76,129,0.1)" }}>
              <div className="grid md:grid-cols-2">
                <div className="relative h-72 md:h-auto min-h-[280px]">
                  <Image
                    src={beneficiaryStory.image}
                    alt={beneficiaryStory.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-8 lg:p-10 flex flex-col justify-center bg-white">
                  <div className="text-5xl leading-none mb-4" style={{ color: accentColor, opacity: 0.4, fontFamily: "Georgia, serif" }}>&ldquo;</div>
                  <p style={{ color: "#374151", lineHeight: 1.85, fontSize: "1.0625rem", fontStyle: "italic", marginBottom: "1.5rem" }}>
                    {beneficiaryStory.story}
                  </p>
                  <div className="w-12 h-1 rounded mb-4" style={{ background: accentColor }} />
                  <p style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#0F4C81" }}>
                    {beneficiaryStory.name}
                  </p>
                  <p style={{ color: "#9CA3AF", fontSize: "0.875rem", marginTop: "0.25rem" }}>
                    {beneficiaryStory.location}
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="section-padding" style={{ background: "#F9FAFB" }}>
        <div className="container-custom">
          <AnimateOnScroll className="text-center max-w-2xl mx-auto mb-12">
            <div className="section-label" style={{ justifyContent: "center" }}>
              <span className="inline-block w-8 h-0.5 mr-2 rounded" style={{ background: "#4DA6FF" }} />
              Gallery
            </div>
            <h2 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "clamp(1.75rem, 3vw, 2.25rem)", color: "#0F4C81" }}>
              Program Gallery
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, index) => (
              <AnimateOnScroll key={img} delay={index * 0.05}>
                <div className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer">
                  <Image
                    src={img}
                    alt={`${title} gallery ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "rgba(15,76,129,0.2)" }}
                  />
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTAs */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <AnimateOnScroll delay={0.1}>
              <div className="rounded-2xl p-8 text-center" style={{ background: "#0F4C81" }}>
                <Heart className="w-10 h-10 mx-auto mb-4" style={{ color: "#F4C542" }} />
                <h3 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "1.25rem", color: "white", marginBottom: "0.75rem" }}>
                  Support This Program
                </h3>
                <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9375rem", lineHeight: 1.75, marginBottom: "1.5rem" }}>
                  Your donation directly funds this program and creates lasting change for vulnerable communities.
                </p>
                <Link href="/donate" className="btn-gold w-full justify-center">
                  Donate Now
                </Link>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.2}>
              <div className="rounded-2xl p-8 text-center border-2" style={{ borderColor: "#4DA6FF", background: "#EFF6FF" }}>
                <CheckCircle2 className="w-10 h-10 mx-auto mb-4" style={{ color: "#4DA6FF" }} />
                <h3 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "1.25rem", color: "#0F4C81", marginBottom: "0.75rem" }}>
                  Become a Partner
                </h3>
                <p style={{ color: "#4B5563", fontSize: "0.9375rem", lineHeight: 1.75, marginBottom: "1.5rem" }}>
                  Organizations can partner with us to expand this program&apos;s reach and impact across communities.
                </p>
                <Link href="/contact" className="btn-primary w-full justify-center gap-2">
                  Partner With Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
