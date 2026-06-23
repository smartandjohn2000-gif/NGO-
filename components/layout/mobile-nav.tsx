"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS, SOCIAL_LINKS } from "@/lib/constants";
import { LanguageSwitcher } from "@/components/i18n/language-switcher";

const DISPLAY_LABELS: Record<string, string> = {
  "Blog/News": "Blog & News",
};

// Items rendered as prominent orange call-to-action bars, matching the
// highlighted Volunteer / Donate buttons in the reference design.
const HIGHLIGHT_HREFS = new Set(["/volunteer", "/donate"]);

// Brand glyphs for the social row. lucide-react no longer ships brand
// icons, so the paths are inlined here and tinted via `currentColor`.
const SOCIAL_ICONS: Record<string, ReactNode> = {
  Facebook: (
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
  ),
  "X (Twitter)": (
    <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.22-6.82-5.97 6.82H1.66l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.01 4.13H5.04l12.04 15.64Z" />
  ),
  LinkedIn: (
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  ),
  YouTube: (
    <path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.2C0 8.07 0 12 0 12s0 3.93.5 5.8a3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.8ZM9.6 15.57V8.43L15.82 12 9.6 15.57Z" />
  ),
  Instagram: (
    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16ZM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.12 1.38C1.35 2.67.94 3.34.63 4.14c-.3.76-.5 1.64-.56 2.91C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.8.72 1.47 1.38 2.13.66.66 1.33 1.07 2.12 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.86 5.86 0 0 0 2.13-1.38c.66-.66 1.07-1.33 1.38-2.13.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.86 5.86 0 0 0-1.38-2.13A5.86 5.86 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0Zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84Zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4Zm6.41-10.4a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44Z" />
  ),
  Linktree: (
    <path d="M13.51 0v7.16l5.06-5.07 2.49 2.5-5.39 5.16h6.39v3.55h-6.4l5.4 5.21-2.49 2.46-6.07-6.12-6.06 6.12-2.49-2.46 5.39-5.21H1.05V9.75h6.39L2.05 4.59l2.49-2.5 5.06 5.07V0h3.91Zm-3.91 17.42h3.91V24H9.6v-6.58Z" />
  ),
};

function SocialGlyph({ label }: { label: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="currentColor"
      aria-hidden
    >
      {SOCIAL_ICONS[label] ?? SOCIAL_ICONS.Linktree}
    </svg>
  );
}

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Lock background scroll while the menu is open.
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

  // Always collapse after navigating to a new route.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div>
      {/* Orange menu button, styled after the reference image */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex size-11 items-center justify-center rounded-lg border-2 border-[#F59E0B] bg-[#F59E0B] text-white shadow-[0_2px_10px_rgba(245,158,11,0.4)] transition hover:bg-[#E08C07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2"
        aria-expanded={open}
        aria-controls="primary-navigation-drawer"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
      >
        {open ? <X size={24} aria-hidden /> : <Menu size={24} aria-hidden />}
      </button>

      {/* Backdrop */}
      <div
        className={[
          "fixed inset-0 top-[4.6rem] z-40 bg-black/30 transition-opacity duration-300 xl:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      />

      {/* Full-width dark dropdown panel */}
      <div
        id="primary-navigation-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Main navigation"
        className={[
          "fixed inset-x-0 top-[4.6rem] z-50 max-h-[calc(100dvh-4.6rem)] origin-top overflow-y-auto overscroll-contain bg-[#2A2E33] text-white shadow-[0_24px_48px_rgba(0,0,0,0.4)] transition-all duration-300 ease-out xl:hidden",
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0",
        ].join(" ")}
      >
        <nav aria-label="Main menu" className="flex flex-col px-5 py-3">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === item.href
                : pathname === item.href || pathname.startsWith(`${item.href}/`);
            const label = DISPLAY_LABELS[item.label] ?? item.label;

            if (HIGHLIGHT_HREFS.has(item.href)) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className="my-1.5 flex min-h-12 items-center rounded-md bg-[#F59E0B] px-4 text-lg font-bold uppercase tracking-wide text-white shadow-[0_2px_10px_rgba(245,158,11,0.35)] transition hover:bg-[#E08C07]"
                >
                  {label}
                </Link>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={isActive ? "page" : undefined}
                className={[
                  "flex min-h-12 items-center border-b border-white/10 text-lg font-semibold uppercase tracking-wide transition",
                  isActive
                    ? "text-[#F59E0B]"
                    : "text-white hover:text-[#F59E0B]",
                ].join(" ")}
              >
                {label}
              </Link>
            );
          })}

          {/* Language selector */}
          <div className="border-b border-white/10 py-4">
            <LanguageSwitcher className="w-full justify-between border-white/20 bg-white/10 text-white" />
          </div>

          {/* Social media links */}
          <div className="flex flex-wrap items-center gap-5 py-5">
            {SOCIAL_LINKS.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                aria-label={social.label}
                className="text-white/90 transition hover:text-[#F59E0B]"
              >
                <SocialGlyph label={social.label} />
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}
