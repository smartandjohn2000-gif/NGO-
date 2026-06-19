"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Menu, PhoneCall, X } from "lucide-react";
import { NAV_ITEMS, SITE_CONFIG } from "@/lib/constants";
import { ButtonLink } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/i18n/language-switcher";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/10 p-2 text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4B400]"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {open ? (
        <div
          id="mobile-navigation"
          className="absolute inset-x-0 top-28 z-50 border-y border-[#0F4C81]/10 bg-white/98 px-6 py-6 shadow-xl backdrop-blur"
        >
          <div className="mb-4 rounded-xl border border-[#0F4C81]/10 bg-[#F7F9FC] p-3">
            <LanguageSwitcher className="w-full justify-between border-[#0F4C81]/20 bg-white text-[#0F4C81]" />
          </div>
          <ul className="space-y-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm font-semibold text-[#0F4C81] transition hover:bg-[#F7F9FC]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <ButtonLink href="/donate" variant="primary" className="w-full">
              Donate
            </ButtonLink>
          </div>
          <div className="mt-4 space-y-2 rounded-xl border border-[#0F4C81]/10 bg-[#F7F9FC] p-3 text-xs text-slate-700">
            <a href={`tel:${SITE_CONFIG.phone.replace(/[^\d+]/g, "")}`} className="inline-flex items-center gap-2">
              <PhoneCall size={13} className="text-[#0F4C81]" />
              {SITE_CONFIG.phone}
            </a>
            <a href={`mailto:${SITE_CONFIG.email}`} className="inline-flex items-center gap-2">
              <Mail size={13} className="text-[#0F4C81]" />
              {SITE_CONFIG.email}
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
}
