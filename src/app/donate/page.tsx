import type { Metadata } from "next";
import { Shield, Heart, Star } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support World Impact Initiative's humanitarian programs. Make a secure one-time or monthly donation through Charitable Impact.",
};

const impactStatements = [
  { amount: "$25", impact: "Provides school supplies for 5 children" },
  { amount: "$50", impact: "Funds a week of mobile health clinic services" },
  { amount: "$100", impact: "Supports one month of youth skills training" },
  { amount: "$250", impact: "Provides emergency shelter for a displaced family" },
];

const testimonials = [
  {
    quote: "Knowing my monthly donation directly supports child protection programs gives me peace of mind. World Impact Initiative is transparent and effective.",
    name: "Margaret T.",
    role: "Monthly Donor since 2022",
  },
  {
    quote: "We've partnered with WII for three years. Their community-driven approach delivers real, measurable results.",
    name: "James & Linda R.",
    role: "Corporate Partners",
  },
  {
    quote: "After visiting a program site, I increased my giving. The impact on children's lives is extraordinary.",
    name: "Dr. Ahmed S.",
    role: "Major Donor",
  },
];

export default function DonatePage() {
  return (
    <>
      <section className="gradient-primary text-white py-20 md:py-28">
        <div className="container-narrow text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Support Change That Lasts</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Your generosity powers our mission to advance human dignity, equality, and opportunity worldwide.
          </p>
        </div>
      </section>

      <Section>
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 md:p-12 text-center mb-8">
            <Shield className="w-12 h-12 text-primary mx-auto mb-4" aria-hidden="true" />
            <h2 className="text-2xl font-bold text-primary mb-2">Secure Donation via Charitable Impact</h2>
            <p className="text-muted mb-6">
              Donate securely through Charitable Impact, Canada&apos;s trusted giving platform.
              Choose one-time or monthly giving options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button href={SITE_CONFIG.donateUrl} variant="accent" size="lg" external icon={Heart}>
                One-Time Donation
              </Button>
              <Button href={SITE_CONFIG.donateUrl} variant="primary" size="lg" external>
                Monthly Donation
              </Button>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-muted bg-surface py-3 px-4 rounded-lg">
              <Shield className="w-4 h-4 text-green-600" aria-hidden="true" />
              Secure, tax-receipt eligible donations processed by Charitable Impact
            </div>
          </Card>
        </div>
      </Section>

      <Section background="surface">
        <SectionHeader title="Your Impact" subtitle="See how your donation makes a difference." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactStatements.map((item) => (
            <Card key={item.amount} className="p-6 text-center" hover={false}>
              <div className="text-3xl font-bold text-accent mb-2">{item.amount}</div>
              <p className="text-muted text-sm">{item.impact}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader title="Donor Testimonials" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <Card key={t.name} className="p-6" hover={false}>
              <Star className="w-5 h-5 text-accent mb-3" aria-hidden="true" />
              <blockquote className="text-muted text-sm italic mb-4">&ldquo;{t.quote}&rdquo;</blockquote>
              <p className="font-semibold text-primary">{t.name}</p>
              <p className="text-xs text-muted">{t.role}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
