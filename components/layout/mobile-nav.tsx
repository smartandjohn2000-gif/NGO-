"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS, SOCIAL_LINKS } from "@/lib/constants";
import { LanguageSwitcher } from "@/components/i18n/language-switcher";

const DISPLAY_LABELS: Record<string, string> = {
  "Blog/News": "Blog & News",
};

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panelRef = useRef<HTMLElement | null>(null);

  // Lock background scroll while the drawer is open.
  useEffect(() => {
    if (!open) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  // Close on Escape for keyboard accessibility.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Always collapse the drawer after navigating to a new route.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#CFE4FF] bg-[#EAF3FF] px-3 py-2 text-sm font-semibold text-[#0B57D0] transition hover:bg-[#D7E9FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B57D0]"
        aria-expanded={open}
        aria-controls="primary-navigation-drawer"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
      >
        <Menu size={22} aria-hidden />
        <span>Menu</span>
      </button>

      <div
        className={[
          "fixed inset-0 z-[60] transition-opacity duration-300",
          open
            ? "pointer-events-auto bg-slate-950/40 opacity-100"
            : "pointer-events-none bg-slate-900/0 opacity-0",
        ].join(" ")}
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      >
        <aside
          ref={panelRef}
          id="primary-navigation-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Main navigation"
          className={[
            "absolute left-0 top-0 flex h-full w-[88%] max-w-sm flex-col bg-white shadow-[0_16px_48px_rgba(11,87,208,0.24)] transition-transform duration-300 ease-out",
            open ? "translate-x-0" : "-translate-x-full",
          ].join(" ")}
          onClick={(event) => event.stopPropagation()}
        >
          {/* Logo + organization name (fixed at top) */}
          <div className="flex shrink-0 items-center justify-between border-b border-[#CFE4FF] px-4 py-4">
            <div className="inline-flex min-w-0 items-center gap-2" data-no-translate="true">
              <span className="inline-flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-lg ring-1 ring-[#CFE4FF]">
                <Image
                  src="/images/logo.jpg"
                  alt="World Impact Initiative logo"
                  width={72}
                  height={72}
                  className="size-full object-cover"
                />
              </span>
              <span className="truncate text-base font-bold text-[#0A245D]">
                World Impact Initiative
              </span>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex size-11 shrink-0 items-center justify-center rounded-md border border-[#CFE4FF] text-[#0A245D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B57D0]"
              aria-label="Close navigation menu"
            >
              <X size={22} aria-hidden />
            </button>
          </div>

          {/* Scrollable region: language, links, and social */}
          <div className="flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain">
            {/* Language selector, directly below the logo */}
            <div className="border-b border-[#EAF3FF] px-4 py-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#0B57D0]">
                Language
              </p>
              <LanguageSwitcher className="w-full justify-between rounded-xl border-[#CFE4FF] bg-white text-[#0A245D]" />
            </div>

            {/* Primary navigation links */}
            <nav className="px-3 py-3" aria-label="Main menu">
              <ul className="space-y-1.5">
                {NAV_ITEMS.map((item) => {
                  const isActive =
                    item.href === "/"
                      ? pathname === item.href
                      : pathname === item.href || pathname.startsWith(`${item.href}/`);
                  const isDonate = item.href === "/donate";

                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        aria-current={isActive ? "page" : undefined}
                        className={[
                          "flex min-h-11 w-full items-center rounded-xl px-4 py-3 text-base font-semibold transition",
                          isDonate
                            ? "justify-center bg-[#0B57D0] text-white shadow-[0_2px_10px_rgba(11,87,208,0.35)] hover:bg-[#083EA0]"
                            : isActive
                              ? "bg-[#EAF3FF] text-[#0B57D0]"
                              : "text-[#0A245D] hover:bg-[#EAF3FF] hover:text-[#0B57D0]",
                        ].join(" ")}
                      >
                        {DISPLAY_LABELS[item.label] ?? item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Social media links, pinned to the bottom of the scroll area */}
            <div className="mt-auto border-t border-[#CFE4FF] px-4 py-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#0B57D0]">
                Follow Us
              </p>
              <ul className="flex flex-wrap gap-2">
                {SOCIAL_LINKS.map((social) => (
                  <li key={social.label}>
                    <Link
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => setOpen(false)}
                      className="inline-flex min-h-9 items-center rounded-full border border-[#CFE4FF] bg-[#F4F9FF] px-3 py-1.5 text-xs font-semibold text-[#0A245D] transition hover:bg-[#EAF3FF] hover:text-[#0B57D0]"
                    >
                      {social.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
