"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Play } from "lucide-react";
import { galleryItems, galleryCategories, type GalleryItem } from "@/lib/gallery";
import { cn } from "@/lib/utils";

const PAGE_SIZE = 9;

export function GalleryGrid() {
  const [active, setActive] = useState<(typeof galleryCategories)[number]>("All");
  const [page, setPage] = useState(0);
  const [open, setOpen] = useState<number | null>(null);

  const filtered = useMemo(() => {
    if (active === "All") return galleryItems;
    return galleryItems.filter((g) => g.category === active);
  }, [active]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageItems = filtered.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);
  const item: GalleryItem | null = open !== null ? filtered[open] : null;

  return (
    <>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter gallery by category">
        {galleryCategories.map((c) => (
          <button
            key={c}
            type="button"
            role="tab"
            aria-selected={active === c}
            onClick={() => {
              setActive(c);
              setPage(0);
            }}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition",
              active === c
                ? "bg-brand-800 text-white shadow"
                : "bg-white ring-1 ring-ink-200 text-ink-700 hover:bg-ink-50"
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {pageItems.map((g, idx) => {
          const realIndex = page * PAGE_SIZE + idx;
          return (
            <button
              key={g.id}
              type="button"
              onClick={() => setOpen(realIndex)}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-ink-100 bg-gradient-to-br from-brand-100 to-brand-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
            >
              <Image
                src={g.src}
                alt={g.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-sm font-semibold drop-shadow">{g.title}</p>
                {g.type === "video" && (
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gold-400 text-brand-900">
                    <Play className="h-4 w-4" aria-hidden="true" />
                  </span>
                )}
              </div>
              <span className="absolute top-3 left-3 rounded-full bg-white/90 backdrop-blur px-2.5 py-1 text-xs font-semibold text-brand-900">
                {g.category}
              </span>
            </button>
          );
        })}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-10 flex items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-ink-200 disabled:opacity-40"
            aria-label="Previous page"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          </button>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setPage(i)}
              aria-current={page === i}
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold",
                page === i
                  ? "bg-brand-800 text-white"
                  : "ring-1 ring-ink-200 text-ink-700 hover:bg-ink-50"
              )}
            >
              {i + 1}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-ink-200 disabled:opacity-40"
            aria-label="Next page"
          >
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {item && open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-brand-950/95 backdrop-blur-sm flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label={item.title}
            onClick={() => setOpen(null)}
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setOpen(null);
              }}
              className="absolute top-4 right-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/20"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setOpen(((open ?? 0) - 1 + filtered.length) % filtered.length);
              }}
              className="absolute left-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/20"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setOpen(((open ?? 0) + 1) % filtered.length);
              }}
              className="absolute right-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/20"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <motion.figure
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative max-h-[85vh] max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full aspect-video bg-brand-900 rounded-2xl overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
              <figcaption className="mt-4 text-center text-white">
                <p className="text-sm uppercase tracking-widest text-gold-300">
                  {item.category}
                </p>
                <p className="mt-1 text-lg font-semibold">{item.title}</p>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
