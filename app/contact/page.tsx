import type { Metadata } from "next";
import Link from "next/link";
import {
  AtSign,
  Camera,
  CircleHelp,
  Globe,
  Mail,
  MapPin,
  MessageSquareShare,
  PhoneCall,
  PlayCircle,
} from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactForm } from "@/components/forms/contact-form";
import { DEPARTMENT_CONTACTS, SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact World Impact Initiative in Canada via our contact form, email, or social channels.",
  alternates: { canonical: "/contact" },
};

const socialIcons = [
  { label: "Facebook", href: "https://linktr.ee/worldimpactinitiative.org", icon: Globe },
  { label: "Instagram", href: "https://linktr.ee/worldimpactinitiative.org", icon: Camera },
  { label: "LinkedIn", href: "https://linktr.ee/worldimpactinitiative.org", icon: AtSign },
  {
    label: "X (Twitter)",
    href: "https://linktr.ee/worldimpactinitiative.org",
    icon: MessageSquareShare,
  },
  { label: "YouTube", href: "https://linktr.ee/worldimpactinitiative.org", icon: PlayCircle },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact World Impact Initiative"
        subtitle="Choose the right department for your inquiry and connect with our team quickly."
        image="/images/gallery-4.jpg"
      />

      <section className="container-shell py-14 md:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Department Directory"
              title="Find the right contact channel"
              description="Use the department cards below or submit the form and we will route your message to the right inbox."
            />
            <div className="grid gap-4">
              {DEPARTMENT_CONTACTS.map((department) => (
                <article key={department.key} className="surface-card border border-[#0F4C81]/10 p-5 text-sm text-slate-700">
                  <h3 className="text-base font-semibold text-[#0F4C81]">{department.title}</h3>
                  <p className="mt-2 leading-relaxed">{department.purpose}</p>
                  <a
                    href={`mailto:${department.email}`}
                    className="mt-3 inline-flex items-center gap-2 font-semibold text-[#0F4C81] underline-offset-2 hover:underline"
                  >
                    <Mail size={15} />
                    {department.email}
                  </a>
                </article>
              ))}
            </div>

            <article className="surface-card p-6 text-sm text-slate-700">
              <h3 className="text-base font-semibold text-[#0F4C81]">Office Contact Information</h3>
              <p className="mt-3 font-semibold text-[#0F4C81]">Phone</p>
              <a
                href={`tel:${SITE_CONFIG.phone.replace(/[^\d+]/g, "")}`}
                className="inline-flex items-center gap-2 text-slate-700 underline-offset-2 hover:underline"
              >
                <PhoneCall size={15} className="text-[#0F4C81]" />
                {SITE_CONFIG.phone}
              </a>
              <p className="mt-4 font-semibold text-[#0F4C81]">Website</p>
              <p>{SITE_CONFIG.domain}</p>
              <p className="mt-4 font-semibold text-[#0F4C81]">Location</p>
              <p>{SITE_CONFIG.location}</p>
            </article>

            <article className="surface-card p-6">
              <h3 className="text-base font-semibold text-[#0F4C81]">Social Media</h3>
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
                <p className="text-sm font-semibold text-[#0F4C81]">Interactive Map</p>
              </div>
              <iframe
                title="World Impact Initiative location in Canada"
                src="https://www.google.com/maps?q=Canada&output=embed"
                className="h-72 w-full"
                loading="lazy"
              />
            </article>

            <article className="surface-card p-6 text-sm text-slate-700">
              <h3 className="inline-flex items-center gap-2 text-base font-semibold text-[#0F4C81]">
                <CircleHelp size={16} />
                Frequently Asked Questions
              </h3>
              <div className="mt-4 space-y-4">
                <div>
                  <p className="font-semibold text-[#0F4C81]">Which inquiry type should I choose?</p>
                  <p className="mt-1">Choose General, Donor, or Partnership based on your request type for faster support.</p>
                </div>
                <div>
                  <p className="font-semibold text-[#0F4C81]">Can I request volunteer information here?</p>
                  <p className="mt-1">Yes, select General Inquiries and include your volunteer interests in your message.</p>
                </div>
                <div>
                  <p className="font-semibold text-[#0F4C81]">Do you provide donor receipts support?</p>
                  <p className="mt-1">Yes, select Donor Inquiries for donation assistance, receipts, and contribution questions.</p>
                </div>
              </div>
            </article>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
