"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Heart,
  Globe,
} from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  {
    href: "/programs",
    label: "Programs",
    children: [
      { href: "/programs/gender-equality", label: "Gender Equality & Protection" },
      { href: "/programs/child-protection", label: "Child Protection & Human Rights" },
      { href: "/programs/youth-empowerment", label: "Youth Empowerment & Skills" },
      { href: "/programs/disability-inclusion", label: "Disability Inclusion" },
      { href: "/programs/health-education", label: "Health & Education" },
      { href: "/programs/crisis-response", label: "Crisis Response" },
    ],
  },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog/News" },
  { href: "/events", label: "Events" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
      role="banner"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="World Impact Initiative Home">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <Globe className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <div>
              <p className={`font-heading font-bold text-sm md:text-base leading-tight transition-colors ${
                isScrolled ? "text-primary" : "text-white"
              }`}>
                World Impact
              </p>
              <p className={`font-heading font-bold text-sm md:text-base leading-tight transition-colors ${
                isScrolled ? "text-gold" : "text-gold-300"
              }`}>
                Initiative
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1" role="navigation" aria-label="Main navigation">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.href)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(link.href)
                      ? isScrolled
                        ? "text-primary bg-primary/10"
                        : "text-gold"
                      : isScrolled
                      ? "text-gray-700 hover:text-primary hover:bg-gray-50"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  {link.label}
                  {link.children && (
                    <ChevronDown className="w-3 h-3 mt-0.5" />
                  )}
                </Link>

                {link.children && activeDropdown === link.href && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden xl:flex items-center gap-3">
            <Link
              href="/membership"
              className={`text-sm font-medium px-4 py-2 rounded-lg transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-primary"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Member Login
            </Link>
            <Link
              href="/donate"
              className="btn-gold text-sm px-5 py-2.5 flex items-center gap-2"
              aria-label="Donate to World Impact Initiative"
            >
              <Heart className="w-4 h-4" />
              Donate Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`xl:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? "text-primary hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden fixed top-0 left-0 right-0 bottom-0 bg-white z-40 overflow-y-auto pt-20"
          >
            <div className="container-custom py-6 space-y-2">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    className={`flex items-center justify-between w-full px-4 py-3 rounded-xl font-medium text-base transition-colors ${
                      isActive(link.href)
                        ? "bg-primary/10 text-primary"
                        : "text-gray-800 hover:bg-gray-50"
                    }`}
                    onClick={link.children ? (e) => {
                      e.preventDefault();
                      setActiveDropdown(activeDropdown === link.href ? null : link.href);
                    } : undefined}
                  >
                    {link.label}
                    {link.children && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          activeDropdown === link.href ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {link.children && activeDropdown === link.href && (
                    <div className="ml-4 mt-1 space-y-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-gray-600 hover:text-primary rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-4 space-y-3 border-t border-gray-100">
                <Link
                  href="/membership"
                  className="block w-full text-center px-6 py-3 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-colors"
                >
                  Member Login
                </Link>
                <Link
                  href="/donate"
                  className="btn-gold w-full justify-center gap-2"
                >
                  <Heart className="w-4 h-4" />
                  Donate Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
