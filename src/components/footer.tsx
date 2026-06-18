import Link from "next/link";
import { navItems, site, socialLinks } from "@/lib/content";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="bg-[#092f50] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
        <div>
          <div className="rounded-3xl bg-white p-4">
            <Logo />
          </div>
          <p className="mt-6 max-w-xl text-sm leading-7 text-blue-50">
            World Impact Initiative is a Canadian nonprofit organization advancing human dignity,
            equality, and opportunity through sustainable, community-driven programs.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.2em] text-[#F4B400]">Explore</h2>
          <div className="mt-5 grid gap-3 text-sm">
            {navItems.map((item) => (
              <Link key={item.href} className="text-blue-50 hover:text-[#F4B400]" href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.2em] text-[#F4B400]">Connect</h2>
          <div className="mt-5 grid gap-3 text-sm text-blue-50">
            <a href={`mailto:${site.email}`} className="hover:text-[#F4B400]">
              {site.email}
            </a>
            <span>{site.location}</span>
            <a href={site.linktree} className="hover:text-[#F4B400]">
              Linktree
            </a>
            <div className="flex flex-wrap gap-2 pt-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-full border border-white/20 px-3 py-1 text-xs font-bold hover:border-[#F4B400] hover:text-[#F4B400]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-blue-100">
        © {new Date().getFullYear()} World Impact Initiative. All rights reserved.
      </div>
    </footer>
  );
}
