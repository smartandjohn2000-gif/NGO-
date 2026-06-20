import Link from "next/link";
import { Globe, Mail, MapPin, Heart, ArrowRight } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterXIcon,
  YoutubeIcon,
} from "@/components/ui/SocialIcons";
import NewsletterForm from "./NewsletterForm";

const programLinks = [
  { href: "/programs/gender-equality", label: "Gender Equality & Protection" },
  { href: "/programs/child-protection", label: "Child Protection & Human Rights" },
  { href: "/programs/youth-empowerment", label: "Youth Empowerment" },
  { href: "/programs/disability-inclusion", label: "Disability Inclusion" },
  { href: "/programs/health-education", label: "Health & Education" },
  { href: "/programs/crisis-response", label: "Crisis Response" },
];

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "News & Blog" },
  { href: "/events", label: "Events" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/donate", label: "Donate" },
  { href: "/contact", label: "Contact" },
  { href: "/membership", label: "Member Portal" },
];

const socialLinks = [
  { href: "https://facebook.com/worldimpactinitiative", icon: FacebookIcon, label: "Facebook" },
  { href: "https://instagram.com/worldimpactinitiative", icon: InstagramIcon, label: "Instagram" },
  { href: "https://linkedin.com/company/worldimpactinitiative", icon: LinkedinIcon, label: "LinkedIn" },
  { href: "https://twitter.com/worldimpactini", icon: TwitterXIcon, label: "X (Twitter)" },
  { href: "https://youtube.com/worldimpactinitiative", icon: YoutubeIcon, label: "YouTube" },
];

export default function Footer() {
  return (
    <footer role="contentinfo" style={{ background: "#0F2A4A" }}>
      {/* Newsletter Strip */}
      <div style={{ background: "#0F4C81" }}>
        <div className="container-custom py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "1.25rem", color: "white" }}>
                Stay Connected
              </h3>
              <p style={{ color: "rgba(255,255,255,0.7)", marginTop: "0.25rem", fontSize: "0.9375rem" }}>
                Get updates on our programs, events, and impact stories.
              </p>
            </div>
            <NewsletterForm />
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "linear-gradient(135deg, #4DA6FF, #0F4C81)" }}
              >
                <Globe className="w-5 h-5 text-white" />
              </div>
              <div>
                <p style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, color: "white", fontSize: "1rem", lineHeight: 1.2 }}>
                  World Impact
                </p>
                <p style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#4DA6FF", fontSize: "0.875rem", lineHeight: 1.2 }}>
                  Initiative
                </p>
              </div>
            </Link>

            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.875rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              A Canadian nonprofit advancing human dignity, equality, and opportunity through sustainable, community-driven programs worldwide.
            </p>

            {/* Contact Info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <a
                href="mailto:info@worldimpactinitiative.org"
                className="flex items-center gap-3 transition-colors group"
                style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.875rem" }}
              >
                <Mail className="w-4 h-4 shrink-0" style={{ color: "#4DA6FF" }} />
                <span className="group-hover:text-white transition-colors">info@worldimpactinitiative.org</span>
              </a>
              <div className="flex items-center gap-3" style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.875rem" }}>
                <MapPin className="w-4 h-4 shrink-0" style={{ color: "#4DA6FF" }} />
                Canada 🇨🇦
              </div>
              <a
                href="https://worldimpactinitiative.org"
                className="flex items-center gap-3 transition-colors group"
                style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.875rem" }}
              >
                <Globe className="w-4 h-4 shrink-0" style={{ color: "#4DA6FF" }} />
                <span className="group-hover:text-white transition-colors">worldimpactinitiative.org</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${social.label} — World Impact Initiative`}
                    className="social-icon-btn w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Programs Column */}
          <div>
            <h4 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "white", marginBottom: "1.25rem", fontSize: "0.9375rem" }}>
              Our Programs
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {programLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 transition-colors group"
                    style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.875rem" }}
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "#4DA6FF" }} />
                    <span className="group-hover:text-white transition-colors">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "white", marginBottom: "1.25rem", fontSize: "0.9375rem" }}>
              Quick Links
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 transition-colors group"
                    style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.875rem" }}
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "#4DA6FF" }} />
                    <span className="group-hover:text-white transition-colors">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Donate Column */}
          <div>
            <h4 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "white", marginBottom: "1.25rem", fontSize: "0.9375rem" }}>
              Make a Difference
            </h4>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.875rem", lineHeight: 1.75, marginBottom: "1.25rem" }}>
              Your generosity directly supports vulnerable communities. Every donation creates lasting change.
            </p>
            <Link href="/donate" className="btn-gold w-full justify-center gap-2 mb-3">
              <Heart className="w-4 h-4" />
              Donate Now
            </Link>
            <Link href="/volunteer" className="btn-outline-white w-full justify-center" style={{ fontSize: "0.875rem", padding: "0.75rem 1.5rem" }}>
              Volunteer With Us
            </Link>

            {/* Charity Impact notice */}
            <div
              className="mt-5 p-4 rounded-xl"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.75rem", lineHeight: 1.7 }}>
                Registered Canadian Nonprofit.{" "}
                <a
                  href="https://charitableimpact.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#F4C542" }}
                  className="hover:underline"
                >
                  Donate securely
                </a>{" "}
                through Charitable Impact. Tax receipts issued automatically.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="container-custom py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.8125rem" }}>
              © {new Date().getFullYear()} World Impact Initiative. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              {[
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/terms", label: "Terms of Use" },
                { href: "https://linktr.ee/worldimpactinitiative.org", label: "Linktree", external: true },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.8125rem" }}
                  className="hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
