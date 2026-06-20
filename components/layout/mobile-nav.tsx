"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HeartHandshake, Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import { LanguageSwitcher } from "@/components/i18n/language-switcher";

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

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-white/20 bg-white/10 p-2 text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4B400]"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
      >
        <Menu size={22} />
      </button>

      <div
        className={[
          "fixed inset-0 z-50 transition-opacity duration-300",
          open ? "pointer-events-auto bg-slate-900/35 opacity-100" : "pointer-events-none bg-slate-900/0 opacity-0",
        ].join(" ")}
        aria-hidden={!open}
      >
        <aside
          id="mobile-navigation"
          className={[
            "absolute left-0 top-0 flex h-full w-full flex-col bg-white shadow-2xl transition-transform duration-300",
            open ? "translate-x-0" : "-translate-x-full",
          ].join(" ")}
          aria-label="Mobile navigation drawer"
        >
          <div className="flex items-center justify-between border-b border-[#0F4C81]/10 px-5 py-4">
            <div className="inline-flex items-center gap-2">
              <span className="inline-flex size-9 items-center justify-center rounded-full bg-[#F4B400] text-[#0F4C81]">
                <HeartHandshake size={16} aria-hidden />
              </span>
              <span className="text-base font-bold text-[#0F4C81]">World Impact Initiative</span>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-[#0F4C81]/20 text-[#0F4C81] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4B400]"
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
                  className={[
                    "block w-full rounded-xl px-4 py-3 text-base font-semibold uppercase tracking-[0.05em] transition",
                    isActive
                      ? "bg-[#0F4C81]/10 text-[#0F4C81]"
                      : "text-[#0F4C81] hover:bg-[#F7F9FC]",
                  ].join(" ")}
                >
                  {item.label.replace("/", " / ")}
                </Link>
              </li>
                );
              })}
            </ul>
          </nav>

          <div className="border-t border-[#0F4C81]/10 px-4 py-4">
            <LanguageSwitcher className="w-full justify-between border-[#0F4C81]/20 bg-[#F7F9FC] text-[#0F4C81]" />
          </div>
        </aside>
      </div>
    </div>
  );
}
