"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/programs", label: "Programs" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog/News" },
  { href: "/events", label: "Events" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/donate", label: "Donate" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container-narrow">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-3 group" aria-label="World Impact Initiative Home">
            <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary flex items-center justify-center group-hover:bg-primary-dark transition-colors">
              <Heart className="w-5 h-5 md:w-6 md:h-6 text-accent fill-accent" aria-hidden="true" />
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-primary text-sm md:text-base leading-tight block">
                World Impact
              </span>
              <span className="text-xs text-muted leading-tight block">Initiative</span>
            </div>
          </Link>

          <nav className="hidden xl:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-surface rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button href="/donate" variant="accent" size="sm" className="hidden md:inline-flex">
              Donate
            </Button>
            <button
              type="button"
              className="xl:hidden p-2 rounded-lg hover:bg-surface transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "xl:hidden overflow-hidden transition-all duration-300 bg-white border-b border-gray-100",
          mobileOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="container-narrow py-4 flex flex-col gap-1" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="px-4 py-3 text-base font-medium text-gray-700 hover:text-primary hover:bg-surface rounded-lg transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 px-4">
            <Button href="/donate" variant="accent" size="md" className="w-full">
              Donate Now
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
