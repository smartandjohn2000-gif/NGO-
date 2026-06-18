"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/lib/content";
import { Logo } from "./logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-white/95 shadow-sm backdrop-blur">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-[#F4B400] focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-slate-950"
      >
        Skip to content
      </a>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Logo />
        <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-3 py-2 text-sm font-semibold transition ${
                pathname === item.href
                  ? "bg-[#0F4C81] text-white"
                  : "text-slate-700 hover:bg-[#F7F9FC] hover:text-[#0F4C81]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link className="btn btn-gold" href="/donate">
            Donate
          </Link>
        </div>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-[#0F4C81] lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Open navigation menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden /> : <Menu aria-hidden />}
        </button>
      </div>
      {open ? (
        <div id="mobile-menu" className="border-t border-slate-100 bg-white px-4 py-4 lg:hidden">
          <nav className="grid gap-2" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-base font-bold text-slate-700 hover:bg-[#F7F9FC] hover:text-[#0F4C81]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
