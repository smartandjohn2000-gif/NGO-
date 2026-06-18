import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Shield, Heart, RefreshCw, Star, CheckCircle2, ArrowRight } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support World Impact Initiative. Your donation funds child protection, gender equality, youth empowerment, and humanitarian relief programs.",
};

const donationAmounts = [25, 50, 100, 250, 500];

const impactStatements = [
  { amount: "$25", impact: "Provides school supplies for 5 children for one month" },
  { amount: "$50", impact: "Funds a week of meals for 10 families in a crisis setting" },
  { amount: "$100", impact: "Pays for a month of vocational training for one young person" },
  { amount: "$250", impact: "Supports a woman survivor with 3 months of shelter and counseling" },
  { amount: "$500", impact: "Equips a community health worker for 6 months of service" },
  { amount: "$1000", impact: "Sponsors one child's full year of inclusive education" },
];

const donorTestimonials = [
  {
    name: "Margaret L.",
    location: "Vancouver, BC",
    quote: "Donating to World Impact Initiative is the most meaningful thing I do with my monthly giving. I receive regular updates that show exactly how my donation is used.",
    rating: 5,
  },
  {
    name: "Robert T.",
    location: "Toronto, ON",
    quote: "I've been a monthly donor for 3 years. The transparency and accountability of this organization is unmatched. You can see the real impact.",
    rating: 5,
  },
  {
    name: "Aisha M.",
    location: "Calgary, AB",
    quote: "As a Canadian, I'm proud to support an organization that represents our values of compassion and inclusion on the global stage.",
    rating: 5,
  },
];

const trustBadges = [
  { icon: Shield, text: "Secure & Encrypted Donations" },
  { icon: CheckCircle2, text: "Registered Canadian Nonprofit" },
  { icon: Heart, text: "100% Impact Guaranteed" },
  { icon: RefreshCw, text: "Cancel Monthly Anytime" },
];

export default function DonatePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&q=85"
            alt="Children we support"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/30" />
        </div>
        <div className="container-custom relative z-10 pt-32">
          <AnimateOnScroll>
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-4">Give Today</p>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-4">
              Support Change<br />That <span className="text-gold">Lasts</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Your generosity directly funds programs that protect children, empower women and youth, and deliver life-saving humanitarian aid.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-primary py-6">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustBadges.map((badge) => {
              const Icon = badge.icon;
              return (
                <div key={badge.text} className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-gold shrink-0" />
                  <span className="text-sm text-white font-medium">{badge.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Donation Options */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Donation Widget */}
            <AnimateOnScroll direction="left">
              <div className="card p-8 lg:p-10">
                <h2 className="text-2xl font-heading font-bold text-primary mb-2">
                  Make a Donation
                </h2>
                <p className="text-gray-500 mb-6">
                  All donations are processed securely through Charitable Impact.
                </p>

                {/* Donation Type Toggle */}
                <div className="flex gap-2 bg-gray-100 p-1 rounded-xl mb-6">
                  <button className="flex-1 py-2 bg-white text-primary font-semibold rounded-lg text-sm shadow-sm flex items-center justify-center gap-2">
                    <Heart className="w-4 h-4" />
                    One-Time
                  </button>
                  <button className="flex-1 py-2 text-gray-500 font-medium rounded-lg text-sm flex items-center justify-center gap-2 hover:bg-white/50 transition-colors">
                    <RefreshCw className="w-4 h-4" />
                    Monthly
                  </button>
                </div>

                {/* Preset Amounts */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {donationAmounts.map((amount) => (
                    <button
                      key={amount}
                      className="py-3 border-2 border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:border-primary hover:text-primary transition-all duration-200"
                    >
                      ${amount}
                    </button>
                  ))}
                  <button className="py-3 border-2 border-primary bg-primary/5 rounded-xl text-sm font-semibold text-primary">
                    Custom
                  </button>
                </div>

                {/* Custom Amount */}
                <div className="relative mb-6">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-semibold">$</span>
                  <input
                    type="number"
                    placeholder="Enter amount"
                    className="input-field pl-8"
                    aria-label="Custom donation amount"
                  />
                </div>

                {/* Program Designation */}
                <div className="mb-6">
                  <label className="label" htmlFor="program">Designate to Program (Optional)</label>
                  <select id="program" className="input-field">
                    <option value="">Where needed most</option>
                    <option value="gender">Gender Equality & Protection</option>
                    <option value="child">Child Protection & Human Rights</option>
                    <option value="youth">Youth Empowerment & Skills</option>
                    <option value="disability">Disability Inclusion</option>
                    <option value="health">Health & Education</option>
                    <option value="crisis">Crisis Response</option>
                  </select>
                </div>

                {/* Donate Button - Links to Charitable Impact */}
                <a
                  href="https://charitableimpact.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold w-full justify-center text-base py-4 gap-2"
                >
                  <Heart className="w-5 h-5" />
                  Donate Securely Now
                </a>

                <p className="text-xs text-gray-400 text-center mt-4">
                  You will be redirected to our secure donation platform — Charitable Impact. Tax receipts are issued automatically.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Impact Statements */}
            <AnimateOnScroll direction="right">
              <h2 className="text-2xl font-heading font-bold text-primary mb-6">
                Your Donation's Impact
              </h2>
              <div className="space-y-4">
                {impactStatements.map((item) => (
                  <div
                    key={item.amount}
                    className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-primary/5 transition-colors"
                  >
                    <span className="font-heading font-bold text-primary text-lg min-w-[60px]">
                      {item.amount}
                    </span>
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">{item.impact}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gold/10 rounded-2xl border border-gold/20">
                <h3 className="font-heading font-bold text-primary mb-2">
                  📋 About Charitable Impact
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  We process all donations through Charitable Impact, Canada&apos;s leading charitable giving platform. Your donation is secure, encrypted, and comes with an automatic tax receipt.
                </p>
                <a
                  href="https://charitableimpact.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary font-semibold hover:text-gold flex items-center gap-1 transition-colors"
                >
                  Learn more about Charitable Impact
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Donor Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AnimateOnScroll className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="section-title mb-4">What Our Donors Say</h2>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-3 gap-6">
            {donorTestimonials.map((donor, index) => (
              <AnimateOnScroll key={donor.name} delay={index * 0.1}>
                <div className="card p-6 h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: donor.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic leading-relaxed mb-4 flex-1">
                    &ldquo;{donor.quote}&rdquo;
                  </p>
                  <div>
                    <p className="font-semibold text-primary">{donor.name}</p>
                    <p className="text-sm text-gray-400">{donor.location}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <AnimateOnScroll className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-heading font-bold text-white mb-4">
              Other Ways to Give
            </h2>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Planned Giving", desc: "Include World Impact Initiative in your will or estate plan for a lasting legacy of change.", icon: "📜" },
              { title: "Corporate Partnership", desc: "Partner your business with our mission through sponsorships, matching gifts, and CSR programs.", icon: "🤝" },
              { title: "In-Kind Donations", desc: "Donate goods, services, or professional expertise to support our programs directly.", icon: "📦" },
            ].map((item, index) => (
              <AnimateOnScroll key={item.title} delay={index * 0.1}>
                <div className="bg-white/10 rounded-2xl p-6 text-center h-full">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-heading font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/70 text-sm mb-4">{item.desc}</p>
                  <Link href="/contact" className="text-gold text-sm font-semibold hover:text-white transition-colors flex items-center justify-center gap-1">
                    Learn More <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
