"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "./Logo";
import { ButtonLink } from "@/components/ui/Button";
import { navigation } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const previousPath = useRef(pathname);

  useEffect(() => {
    if (previousPath.current !== pathname) {
      previousPath.current = pathname;
      setOpen(false);
    }
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_2px_20px_rgba(7,34,60,0.08)]"
          : "bg-white/80 backdrop-blur"
      )}
    >
      <div className="container-page flex h-16 md:h-20 items-center justify-between gap-4">
        <Logo />
        <nav
          aria-label="Primary"
          className="hidden lg:flex items-center gap-1"
        >
          {navigation.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-3.5 py-2 text-[0.93rem] font-medium rounded-full transition-colors",
                  active
                    ? "text-brand-900"
                    : "text-ink-700 hover:text-brand-800"
                )}
              >
                {item.label}
                {active && (
                  <span className="absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-gold-400" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink
            href="/donate"
            variant="gold"
            size="sm"
            className="hidden sm:inline-flex"
          >
            <Heart className="h-4 w-4" aria-hidden="true" />
            Donate
          </ButtonLink>
          <button
            type="button"
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full text-brand-800 hover:bg-brand-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-x-0 top-16 md:top-20 bottom-0 bg-white border-t border-ink-100 overflow-y-auto"
          >
            <nav
              aria-label="Mobile"
              className="container-page py-6 flex flex-col gap-1"
            >
              {navigation.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "px-4 py-3 rounded-xl text-base font-medium",
                      active
                        ? "bg-brand-50 text-brand-900"
                        : "text-ink-700 hover:bg-ink-50"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <ButtonLink href="/volunteer" variant="secondary" size="md">
                  Volunteer
                </ButtonLink>
                <ButtonLink href="/donate" variant="gold" size="md">
                  Donate
                </ButtonLink>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
