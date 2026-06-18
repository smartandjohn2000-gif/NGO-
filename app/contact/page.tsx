import type { Metadata } from "next";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, MapPin, Twitter, Youtube } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactForm } from "@/components/forms/contact-form";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact World Impact Initiative in Canada via our contact form, email, or social channels.",
  alternates: { canonical: "/contact" },
};

const socialIcons = [
  { label: "Facebook", href: "https://linktr.ee/worldimpactinitiative.org", icon: Facebook },
  { label: "Instagram", href: "https://linktr.ee/worldimpactinitiative.org", icon: Instagram },
  { label: "LinkedIn", href: "https://linktr.ee/worldimpactinitiative.org", icon: Linkedin },
  { label: "X (Twitter)", href: "https://linktr.ee/worldimpactinitiative.org", icon: Twitter },
  { label: "YouTube", href: "https://linktr.ee/worldimpactinitiative.org", icon: Youtube },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact World Impact Initiative"
        subtitle="Let’s connect on partnerships, volunteering, and program collaboration."
        image="/images/contact-hero.jpg"
      />

      <section className="container-shell py-14 md:py-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr]">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Office Information"
              title="Get in touch"
              description="We welcome collaboration requests, partnership conversations, and general inquiries."
            />
            <article className="surface-card p-6 text-sm text-slate-700">
              <p className="font-semibold text-[#0F4C81]">Email</p>
              <p>{SITE_CONFIG.email}</p>
              <p className="mt-4 font-semibold text-[#0F4C81]">Website</p>
              <p>{SITE_CONFIG.domain}</p>
              <p className="mt-4 font-semibold text-[#0F4C81]">Location</p>
              <p>{SITE_CONFIG.location}</p>
            </article>

            <article className="surface-card p-6">
              <h3 className="text-base font-semibold text-[#0F4C81]">Social Media Icons</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {socialIcons.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[#0F4C81]/20 bg-white px-4 py-2 text-sm text-[#0F4C81]"
                    >
                      <Icon size={15} />
                      {social.label}
                    </Link>
                  );
                })}
              </div>
            </article>

            <article className="surface-card overflow-hidden">
              <div className="flex items-center gap-2 border-b border-slate-100 p-4">
                <MapPin size={16} className="text-[#0F4C81]" />
                <p className="text-sm font-semibold text-[#0F4C81]">Google Map</p>
              </div>
              <iframe
                title="World Impact Initiative location in Canada"
                src="https://www.google.com/maps?q=Canada&output=embed"
                className="h-72 w-full"
                loading="lazy"
              />
            </article>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
