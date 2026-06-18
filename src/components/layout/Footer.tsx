import Link from "next/link";
import { Heart, Mail, MapPin, Globe, Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { SITE_CONFIG } from "@/lib/utils";

const footerLinks = {
  programs: [
    { href: "/programs/gender-equality-protection", label: "Gender Equality" },
    { href: "/programs/child-protection-human-rights", label: "Child Protection" },
    { href: "/programs/youth-empowerment-skills", label: "Youth Empowerment" },
    { href: "/programs/disability-inclusion", label: "Disability Inclusion" },
    { href: "/programs/health-education", label: "Health & Education" },
    { href: "/programs/crisis-response", label: "Crisis Response" },
  ],
  organization: [
    { href: "/about", label: "About Us" },
    { href: "/blog", label: "Blog & News" },
    { href: "/events", label: "Events" },
    { href: "/gallery", label: "Gallery" },
    { href: "/volunteer", label: "Volunteer" },
    { href: "/contact", label: "Contact" },
  ],
  support: [
    { href: "/donate", label: "Donate" },
    { href: "/portal/register", label: "Become a Member" },
    { href: "/portal/login", label: "Member Login" },
    { href: SITE_CONFIG.social.linktree, label: "Linktree", external: true },
  ],
};

const socialIcons = [
  { href: SITE_CONFIG.social.facebook, icon: Facebook, label: "Facebook" },
  { href: SITE_CONFIG.social.instagram, icon: Instagram, label: "Instagram" },
  { href: SITE_CONFIG.social.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: SITE_CONFIG.social.twitter, icon: Twitter, label: "X (Twitter)" },
  { href: SITE_CONFIG.social.youtube, icon: Youtube, label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-white" role="contentinfo">
      <div className="container-narrow py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <Heart className="w-6 h-6 text-accent fill-accent" aria-hidden="true" />
              </div>
              <div>
                <span className="font-bold text-lg block">World Impact</span>
                <span className="text-sm text-white/70 block">Initiative</span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              A Canadian nonprofit advancing human dignity, equality, and opportunity through sustainable, community-driven programs.
            </p>
            <div className="flex gap-3">
              {socialIcons.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors"
                >
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-accent">Our Programs</h3>
            <ul className="space-y-2">
              {footerLinks.programs.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-accent">Organization</h3>
            <ul className="space-y-2">
              {footerLinks.organization.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-accent">Get Involved</h3>
            <ul className="space-y-2 mb-6">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  {"external" in link && link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className="text-white/70 hover:text-white text-sm transition-colors">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="space-y-3 text-sm text-white/70">
              <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
                {SITE_CONFIG.email}
              </a>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 shrink-0" aria-hidden="true" />
                {SITE_CONFIG.domain}
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 shrink-0" aria-hidden="true" />
                {SITE_CONFIG.location}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-narrow py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} World Impact Initiative. All rights reserved.</p>
          <p>Registered Canadian Nonprofit Organization</p>
        </div>
      </div>
    </footer>
  );
}
