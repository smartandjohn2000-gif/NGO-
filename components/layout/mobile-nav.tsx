"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HeartHandshake, Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import { LanguageSwitcher } from "@/components/i18n/language-switcher";

const DISPLAY_LABELS: Record<string, string> = {
  "Blog/News": "Blog & News",
};

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const navItems = useMemo(() => NAV_ITEMS, []);

  useEffect(() => {
    if (!open) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-[#CFE4FF] bg-[#EAF3FF] p-2 text-[#0B57D0] transition hover:bg-[#D7E9FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B57D0]"
        aria-expanded={open}
        aria-controls="primary-navigation-drawer"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
      >
        <Menu size={28} />
      </button>

      <div
        className={[
          "fixed inset-0 z-50 transition-opacity duration-300",
          open ? "pointer-events-auto bg-slate-950/35 opacity-100" : "pointer-events-none bg-slate-900/0 opacity-0",
        ].join(" ")}
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      >
        <aside
          id="primary-navigation-drawer"
          className={[
            "absolute left-0 top-0 flex h-full w-full max-w-sm flex-col bg-white shadow-[0_16px_48px_rgba(11,87,208,0.24)] transition-transform duration-300",
            open ? "translate-x-0" : "-translate-x-full",
          ].join(" ")}
          aria-label="Main navigation drawer"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex items-center justify-between border-b border-[#CFE4FF] px-5 py-4">
            <div className="inline-flex items-center gap-2">
              <span className="inline-flex size-9 items-center justify-center rounded-full bg-[#0B57D0] text-white">
                <HeartHandshake size={16} aria-hidden />
              </span>
              <span className="text-base font-bold text-[#0A245D]">World Impact Initiative</span>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-[#CFE4FF] text-[#0A245D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B57D0]"
              aria-label="Close navigation menu"
            >
              <X size={22} />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label="Main menu">
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
                        "block w-full rounded-xl px-4 py-3 text-base font-semibold transition",
                        isActive
                          ? "bg-[#0B57D0] text-white"
                          : "text-[#0A245D] hover:bg-[#EAF3FF]",
                      ].join(" ")}
                    >
                      {DISPLAY_LABELS[item.label] ?? item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="border-t border-[#CFE4FF] px-4 py-4">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#0B57D0]">
              Language
            </p>
            <LanguageSwitcher className="w-full justify-between rounded-xl border-[#CFE4FF] bg-white text-[#0A245D]" />
          </div>
        </aside>
      </div>
    </div>
  );
}
