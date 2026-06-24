"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { GALLERY_ITEMS } from "@/lib/constants";

const pageSize = 6;
const categories = ["all", ...new Set(GALLERY_ITEMS.map((item) => item.category))];

export function GalleryExplorer() {
  const [category, setCategory] = useState("all");
  const [page, setPage] = useState(1);
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return category === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === category);
  }, [category]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const paginated = filtered.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setCategory(cat);
              setPage(1);
            }}
            className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide transition ${
              category === cat
                ? "bg-[#0F4C81] text-white"
                : "bg-white text-[#0F4C81] ring-1 ring-[#0F4C81]/20 hover:ring-[#0F4C81]"
            }`}
            type="button"
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {paginated.map((item) => (
          <article key={item.id} className="overflow-hidden rounded-2xl bg-white shadow-md">
            {item.type === "photo" ? (
              <button
                type="button"
                onClick={() => setLightbox(item.src)}
                className="relative block h-56 w-full"
                aria-label={`Open ${item.title}`}
              >
                <Image src={item.src} alt={item.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
              </button>
            ) : (
              <div className="h-56">
                <iframe
                  title={item.title}
                  src={item.src}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
            <div className="p-4">
              <p className="text-sm font-semibold text-[#0F4C81]">{item.title}</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-slate-500">{item.category}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-600">
          Page {page} of {totalPages}
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            disabled={page <= 1}
            onClick={() => setPage((current) => Math.max(1, current - 1))}
            className="inline-flex items-center gap-1 rounded-full border border-slate-300 px-3 py-2 text-sm disabled:opacity-50"
          >
            <ChevronLeft size={16} /> Prev
          </button>
          <button
            type="button"
            disabled={page >= totalPages}
            onClick={() => setPage((current) => Math.min(totalPages, current + 1))}
            className="inline-flex items-center gap-1 rounded-full border border-slate-300 px-3 py-2 text-sm disabled:opacity-50"
          >
            Next <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {lightbox ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4">
          <button
            onClick={() => setLightbox(null)}
            className="absolute right-4 top-4 rounded-full bg-white/20 p-2 text-white"
            aria-label="Close lightbox"
            type="button"
          >
            <X size={20} />
          </button>
          <div className="relative h-[70vh] w-full max-w-5xl overflow-hidden rounded-2xl bg-black">
            <Image src={lightbox} alt="Expanded gallery item" fill className="object-contain" sizes="100vw" />
          </div>
        </div>
      ) : null}
    </div>
  );
}
