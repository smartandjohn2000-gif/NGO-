import type { Metadata } from "next";
import { Suspense } from "react";
import { Mail, MapPin, ExternalLink, Clock } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "@/components/forms/ContactForm";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
  YouTubeIcon,
} from "@/components/icons/Social";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with World Impact Initiative. Email, phone, and social channels for media, partnerships, donors, volunteers, and general inquiries.",
  alternates: { canonical: "/contact" },
};

const socialLinks = [
  { href: siteConfig.social.facebook, label: "Facebook", Icon: FacebookIcon },
  { href: siteConfig.social.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: siteConfig.social.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: siteConfig.social.twitter, label: "X (Twitter)", Icon: XIcon },
  { href: siteConfig.social.youtube, label: "YouTube", Icon: YouTubeIcon },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We'd love to hear from you."
        description="Whether you have a question about giving, a partnership idea, or a story you want to share—we read every message."
        crumbs={[{ label: "Contact" }]}
      />

      <section className="py-14 md:py-20 bg-white">
        <div className="container-page grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-ink-50 p-7 ring-1 ring-ink-100">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-700">
                Office
              </p>
              <ul className="mt-4 space-y-4 text-ink-700">
                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-brand-700 mt-0.5" aria-hidden="true" />
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="hover:text-brand-700"
                  >
                    {siteConfig.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-brand-700 mt-0.5" aria-hidden="true" />
                  {siteConfig.location}
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-brand-700 mt-0.5" aria-hidden="true" />
                  Mon–Fri · 9am–5pm ET
                </li>
                <li className="flex items-start gap-3">
                  <ExternalLink className="h-5 w-5 text-brand-700 mt-0.5" aria-hidden="true" />
                  <a
                    href={siteConfig.linktree}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hover:text-brand-700"
                  >
                    All our links
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-7 ring-1 ring-ink-100">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-700">
                Connect
              </p>
              <p className="mt-2 text-sm text-ink-600">
                Follow our work and join the community.
              </p>
              <ul className="mt-4 flex flex-wrap gap-3">
                {socialLinks.map(({ href, label, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={label}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-brand-800 ring-1 ring-brand-100 hover:bg-brand-800 hover:text-white transition"
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl overflow-hidden ring-1 ring-ink-100">
              <iframe
                title="Map of Canada"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-141.0,41.7,-52.6,83.1&layer=mapnik&marker=56.13,-106.35"
                className="w-full h-72 border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="bg-ink-50 px-4 py-2 text-xs text-ink-500">
                Office located in Canada — exact address available on request.
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="rounded-3xl bg-white ring-1 ring-ink-100 p-7 md:p-10 shadow-[0_2px_24px_rgba(7,34,60,0.05)]">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-900">
                Send us a message
              </h2>
              <p className="mt-2 text-ink-600">
                We typically respond within 1–2 business days.
              </p>
              <div className="mt-8">
                <Suspense fallback={null}>
                  <ContactForm />
                </Suspense>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
