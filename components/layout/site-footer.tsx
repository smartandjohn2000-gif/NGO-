import Link from "next/link";
import { NAV_ITEMS, SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-[#0F4C81] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">{SITE_CONFIG.name}</h3>
          <p className="text-sm leading-relaxed text-white/85">
            Advancing dignity, equality, and opportunity through community-driven programs.
          </p>
          <p className="text-sm text-white/80">Email: {SITE_CONFIG.email}</p>
          <p className="text-sm text-white/80">Location: {SITE_CONFIG.location}</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-[#F4B400]">
            Quick Links
          </h4>
          <ul className="mt-3 space-y-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-white/85 transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-[#F4B400]">
            Membership
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-white/85">
            <li>
              <Link href="/membership/register" className="transition hover:text-white">
                Register
              </Link>
            </li>
            <li>
              <Link href="/membership/login" className="transition hover:text-white">
                Login
              </Link>
            </li>
            <li>
              <Link href="/membership/dashboard" className="transition hover:text-white">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/admin" className="transition hover:text-white">
                Admin System
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-[#F4B400]">
            Social
          </h4>
          <ul className="mt-3 space-y-2">
            {SOCIAL_LINKS.map((social) => (
              <li key={social.label}>
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-white/85 transition hover:text-white"
                >
                  {social.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/75">
        © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
      </div>
    </footer>
  );
}
