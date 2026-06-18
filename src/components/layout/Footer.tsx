import Link from "next/link";
import { Mail, MapPin, ExternalLink } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
  YouTubeIcon,
} from "@/components/icons/Social";
import { Logo } from "./Logo";
import { siteConfig, footerLinks } from "@/lib/site";

const socialLinks = [
  { href: siteConfig.social.facebook, label: "Facebook", Icon: FacebookIcon },
  { href: siteConfig.social.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: siteConfig.social.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: siteConfig.social.twitter, label: "X (Twitter)", Icon: XIcon },
  { href: siteConfig.social.youtube, label: "YouTube", Icon: YouTubeIcon },
];

export function Footer() {
  return (
    <footer className="mt-24 bg-brand-950 text-white/80">
      <div className="container-page py-16 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo light />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/75">
            {siteConfig.description}
          </p>
          <ul className="mt-6 space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-gold-300" aria-hidden="true" />
              <a
                className="hover:text-white"
                href={`mailto:${siteConfig.email}`}
              >
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gold-300" aria-hidden="true" />
              {siteConfig.location}
            </li>
            <li className="flex items-center gap-2">
              <ExternalLink className="h-4 w-4 text-gold-300" aria-hidden="true" />
              <a
                className="hover:text-white"
                href={siteConfig.linktree}
                target="_blank"
                rel="noreferrer noopener"
              >
                linktr.ee/worldimpactinitiative.org
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
            Organization
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {footerLinks.organization.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
            Get Involved
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {footerLinks.getInvolved.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
            Stay Connected
          </h3>
          <p className="mt-4 text-sm text-white/75">
            Subscribe for stories from the field, impact updates, and ways to
            get involved.
          </p>
          <form
            action="/api/newsletter"
            method="post"
            className="mt-4 flex flex-col sm:flex-row gap-2"
          >
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>
            <input
              id="footer-email"
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="flex-1 rounded-full bg-white/10 ring-1 ring-white/20 placeholder:text-white/50 px-4 py-2.5 text-sm text-white focus:outline-2 focus:outline-gold-400"
            />
            <button
              type="submit"
              className="rounded-full bg-gold-400 px-5 py-2.5 text-sm font-semibold text-brand-950 hover:bg-gold-300 transition"
            >
              Subscribe
            </button>
          </form>

          <ul className="mt-6 flex items-center gap-3" aria-label="Social media">
            {socialLinks.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 hover:bg-gold-400 hover:text-brand-950 transition"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Registered Canadian
            nonprofit. All rights reserved.
          </p>
          <ul className="flex items-center gap-5">
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/membership" className="hover:text-white">
                Membership
              </Link>
            </li>
            <li>
              <Link href="/admin" className="hover:text-white">
                Admin
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
