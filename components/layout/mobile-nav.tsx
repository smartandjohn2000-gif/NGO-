"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HeartHandshake, Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import { LanguageSwitcher } from "@/components/i18n/language-switcher";

const DISPLAY_LABELS: Record<string, string> = {
  Home: "HOME",
  "About Us": "ABOUT US",
  Programs: "PROGRAMS",
  Gallery: "GALLERY",
  "Blog/News": "BLOG & NEWS",
  Events: "EVENTS",
  Volunteer: "VOLUNTEER",
  Contact: "CONTACT",
};

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const navItems = useMemo(() => NAV_ITEMS.filter((item) => item.href !== "/donate"), []);

  useEffect(() => {
    if (!open) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-slate-300 bg-white p-2 text-slate-800 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2FAE66]"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
      >
        <Menu size={28} />
      </button>

      <div
        className={[
          "fixed inset-0 z-50 transition-opacity duration-300",
          open ? "pointer-events-auto bg-slate-900/35 opacity-100" : "pointer-events-none bg-slate-900/0 opacity-0",
        ].join(" ")}
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      >
        <aside
          id="mobile-navigation"
          className={[
            "absolute left-0 top-0 flex h-full w-full flex-col bg-white shadow-2xl transition-transform duration-300",
            open ? "translate-x-0" : "-translate-x-full",
          ].join(" ")}
          aria-label="Mobile navigation drawer"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
            <div className="inline-flex items-center gap-2">
              <span className="inline-flex size-9 items-center justify-center rounded-full bg-[#1A6B3C] text-white">
                <HeartHandshake size={16} aria-hidden />
              </span>
              <span className="text-base font-bold text-slate-900">World Impact Initiative</span>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-slate-300 text-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2FAE66]"
              aria-label="Close navigation menu"
            >
              <X size={22} />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label="Mobile primary">
            <ul className="space-y-1">
              {navItems.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === item.href
                    : pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={[
                    "block w-full rounded-xl px-4 py-3 text-base font-bold uppercase tracking-[0.05em] transition",
                    isActive
                      ? "bg-[#f3f4f6] text-slate-900"
                      : "text-slate-800 hover:bg-[#f8f9fa]",
                  ].join(" ")}
                >
                  {DISPLAY_LABELS[item.label] ?? item.label.toUpperCase()}
                </Link>
              </li>
                );
              })}
            </ul>
          </nav>

          <div className="space-y-3 border-t border-slate-200 px-4 py-4">
            <LanguageSwitcher className="w-full justify-between border-slate-300 bg-white text-slate-700" />
            <Link
              href="/donate"
              onClick={() => setOpen(false)}
              className="inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-[#2FAE66] px-4 py-3 text-base font-semibold text-white transition hover:bg-[#258c52] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2FAE66]"
            >
              Donate
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
