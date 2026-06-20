"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Globe, Heart, Languages } from "lucide-react";

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
  { href: "/blog", label: "News" },
  { href: "/events", label: "Events" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/contact", label: "Contact" },
];

const languages = [
  { code: "EN", label: "English" },
  { code: "FR", label: "Français" },
  { code: "ES", label: "Español" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [langOpen, setLangOpen] = useState(false);
  const [activeLang, setActiveLang] = useState("EN");
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
    setLangOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-[0_2px_20px_rgba(15,76,129,0.08)] py-2"
          : "bg-white/98 py-3"
      }`}
      role="banner"
    >
      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-sky-400 via-primary to-sky-400 absolute top-0 left-0 right-0" style={{ background: "linear-gradient(90deg, #4DA6FF 0%, #0F4C81 50%, #4DA6FF 100%)" }} />

      <div className="container-custom mt-1">
        <div className="flex items-center justify-between h-14 md:h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group" aria-label="World Impact Initiative — Home">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105" style={{ background: "linear-gradient(135deg, #0F4C81, #4DA6FF)" }}>
              <Globe className="w-5 h-5 text-white" strokeWidth={2} />
            </div>
            <div className="leading-tight">
              <p className="font-heading font-800 text-sm leading-tight" style={{ fontWeight: 800, color: "#0F4C81", fontFamily: "Montserrat, sans-serif" }}>World Impact</p>
              <p className="text-xs font-semibold leading-tight" style={{ color: "#4DA6FF", fontFamily: "Montserrat, sans-serif" }}>Initiative</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-0.5" role="navigation" aria-label="Main navigation">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.href)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isActive(link.href)
                      ? "text-sky-500 bg-sky-50"
                      : "text-gray-700 hover:text-primary hover:bg-gray-50"
                  }`}
                  style={isActive(link.href) ? { color: "#4DA6FF" } : { color: "#374151" }}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  onClick={link.children ? (e) => e.preventDefault() : undefined}
                >
                  {link.label}
                  {link.children && (
                    <ChevronDown className={`w-3.5 h-3.5 mt-0.5 transition-transform ${activeDropdown === link.href ? "rotate-180" : ""}`} />
                  )}
                </Link>

                {link.children && activeDropdown === link.href && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50 overflow-hidden"
                  >
                    {/* Accent top bar */}
                    <div className="h-1 w-full absolute top-0 left-0" style={{ background: "linear-gradient(90deg, #4DA6FF, #0F4C81)" }} />
                    <div className="pt-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex items-center gap-3 px-5 py-3 text-sm text-gray-700 hover:bg-sky-50 hover:text-primary transition-colors group"
                          style={{}}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-300 shrink-0 group-hover:bg-sky-500 transition-colors" />
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden xl:flex items-center gap-2">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors"
                aria-label="Select language"
                aria-expanded={langOpen}
              >
                <Languages className="w-4 h-4" />
                {activeLang}
                <ChevronDown className={`w-3 h-3 transition-transform ${langOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    className="absolute right-0 mt-1 w-36 bg-white rounded-xl shadow-lg border border-gray-100 py-1 z-50"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => { setActiveLang(lang.code); setLangOpen(false); }}
                        className={`flex items-center justify-between w-full px-4 py-2 text-sm transition-colors ${
                          activeLang === lang.code
                            ? "text-primary font-semibold bg-sky-50"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        {lang.label}
                        {activeLang === lang.code && <span className="text-sky-400">✓</span>}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Member Login */}
            <Link href="/membership" className="btn-ghost text-sm px-3 py-2">
              Sign In
            </Link>

            {/* Donate CTA */}
            <Link
              href="/donate"
              className="btn-gold text-sm px-5 py-2.5 flex items-center gap-1.5"
              aria-label="Donate to World Impact Initiative"
            >
              <Heart className="w-4 h-4" />
              Donate
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden w-10 h-10 rounded-xl flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="xl:hidden fixed top-[calc(3.5rem+6px)] left-0 right-0 bottom-0 bg-white z-40 overflow-y-auto"
            style={{ top: "calc(3.75rem + 6px)" }}
          >
            <div className="px-5 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.href}>
                  {link.children ? (
                    <>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === link.href ? null : link.href)}
                        className="flex items-center justify-between w-full px-4 py-3.5 rounded-xl text-base font-semibold text-gray-800 hover:bg-sky-50 hover:text-primary transition-colors"
                      >
                        {link.label}
                        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${activeDropdown === link.href ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === link.href && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 pb-2 space-y-1">
                              {link.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-gray-600 hover:bg-sky-50 hover:text-primary transition-colors"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-sky-300 shrink-0" />
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className={`block px-4 py-3.5 rounded-xl text-base font-semibold transition-colors ${
                        isActive(link.href)
                          ? "bg-sky-50 text-sky-500"
                          : "text-gray-800 hover:bg-sky-50 hover:text-primary"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}

              <div className="pt-4 pb-2 border-t border-gray-100 space-y-3">
                {/* Language selector mobile */}
                <div className="flex gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setActiveLang(lang.code)}
                      className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-colors ${
                        activeLang === lang.code
                          ? "bg-primary text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {lang.code}
                    </button>
                  ))}
                </div>

                <Link href="/membership" className="block w-full btn-outline text-center">
                  Sign In / Register
                </Link>
                <Link href="/donate" className="block w-full btn-gold text-center">
                  <Heart className="w-4 h-4 inline-block mr-1.5" />
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
