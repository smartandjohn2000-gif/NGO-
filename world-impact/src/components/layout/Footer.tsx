import Link from "next/link";
import { Globe, Mail, MapPin, Heart, ArrowRight } from "lucide-react";
import NewsletterForm from "./NewsletterForm";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterXIcon,
  YoutubeIcon,
} from "@/components/ui/SocialIcons";

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
  { href: "/blog", label: "Blog/News" },
  { href: "/events", label: "Events" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/donate", label: "Donate" },
  { href: "/contact", label: "Contact" },
  { href: "/membership", label: "Member Portal" },
];

const socialLinks = [
  {
    href: "https://facebook.com/worldimpactinitiative",
    icon: FacebookIcon,
    label: "Facebook",
    color: "hover:text-blue-500",
  },
  {
    href: "https://instagram.com/worldimpactinitiative",
    icon: InstagramIcon,
    label: "Instagram",
    color: "hover:text-pink-500",
  },
  {
    href: "https://linkedin.com/company/worldimpactinitiative",
    icon: LinkedinIcon,
    label: "LinkedIn",
    color: "hover:text-blue-400",
  },
  {
    href: "https://twitter.com/worldimpactini",
    icon: TwitterXIcon,
    label: "X (Twitter)",
    color: "hover:text-sky-400",
  },
  {
    href: "https://youtube.com/worldimpactinitiative",
    icon: YoutubeIcon,
    label: "YouTube",
    color: "hover:text-red-500",
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      {/* Newsletter Bar */}
      <div className="bg-primary">
        <div className="container-custom py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-heading font-bold text-white">
                Stay Connected
              </h3>
              <p className="text-white/80 mt-1">
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
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-heading font-bold text-white text-lg leading-tight">
                  World Impact
                </p>
                <p className="font-heading font-bold text-gold text-lg leading-tight">
                  Initiative
                </p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A Canadian nonprofit advancing human dignity, equality, and
              opportunity through sustainable, community-driven programs.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:info@worldimpactinitiative.org"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-gold transition-colors"
              >
                <Mail className="w-4 h-4 text-gold shrink-0" />
                info@worldimpactinitiative.org
              </a>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-gold shrink-0" />
                Canada
              </div>
              <a
                href="https://worldimpactinitiative.org"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-gold transition-colors"
              >
                <Globe className="w-4 h-4 text-gold shrink-0" />
                worldimpactinitiative.org
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit our ${social.label} page`}
                    className={`w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-gray-400 ${social.color} transition-all duration-200 hover:bg-white/20`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-heading font-bold text-white mb-5">
              Our Programs
            </h4>
            <ul className="space-y-2.5">
              {programLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-gold transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-white mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-gold transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Donate CTA */}
          <div>
            <h4 className="font-heading font-bold text-white mb-5">
              Make a Difference
            </h4>
            <p className="text-sm text-gray-400 mb-5 leading-relaxed">
              Your generosity directly supports vulnerable communities. Every
              dollar creates lasting change.
            </p>
            <Link
              href="/donate"
              className="btn-gold w-full justify-center gap-2 mb-4"
            >
              <Heart className="w-4 h-4" />
              Donate Now
            </Link>
            <Link
              href="/volunteer"
              className="btn-outline-white w-full justify-center text-sm py-2.5"
            >
              Become a Volunteer
            </Link>

            {/* Charity Registration */}
            <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-xs text-gray-500 leading-relaxed">
                Registered Canadian Nonprofit Organization.{" "}
                <a
                  href="https://charitableimpact.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:underline"
                >
                  Donate securely
                </a>{" "}
                through Charitable Impact.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} World Impact Initiative. All rights
              reserved.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <Link
                href="/privacy"
                className="text-gray-500 hover:text-gray-300 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-500 hover:text-gray-300 transition-colors"
              >
                Terms of Use
              </Link>
              <a
                href="https://linktr.ee/worldimpactinitiative.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-300 transition-colors"
              >
                Linktree
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
