"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryItems, galleryCategories } from "@/lib/data/gallery";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

const ITEMS_PER_PAGE = 9;

export default function GalleryPage() {
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = galleryItems.filter(
    (item) => category === "All" || item.category === category
  );
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);

  return (
    <>
      <section className="gradient-primary text-white py-20 md:py-28">
        <div className="container-narrow">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-xl text-white/80">Photos and videos from our programs and community impact.</p>
        </div>
      </section>

      <Section>
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => { setCategory(cat); setPage(1); }}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                category === cat ? "bg-primary text-white" : "bg-surface text-muted hover:bg-primary/10"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {paginated.map((item, index) => (
            <motion.button
              key={item.id}
              type="button"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => openLightbox((page - 1) * ITEMS_PER_PAGE + index)}
              className="relative h-64 rounded-xl overflow-hidden group cursor-pointer focus-visible:ring-2 focus-visible:ring-accent"
              aria-label={`View ${item.title}`}
            >
              <Image src={item.thumbnail} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center">
                    <Play className="w-6 h-6 text-primary ml-1" aria-hidden="true" />
                  </div>
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-full group-hover:translate-y-0 transition-transform">
                <p className="font-semibold text-sm">{item.title}</p>
                <p className="text-xs text-white/70">{item.category}</p>
              </div>
            </motion.button>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            <button
              type="button"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="p-2 rounded-lg bg-surface disabled:opacity-50"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setPage(i + 1)}
                className={cn(
                  "w-10 h-10 rounded-lg font-medium text-sm",
                  page === i + 1 ? "bg-primary text-white" : "bg-surface text-muted"
                )}
              >
                {i + 1}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="p-2 rounded-lg bg-surface disabled:opacity-50"
              aria-label="Next page"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </Section>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Gallery lightbox"
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 text-white hover:bg-white/10 rounded-lg"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>
            <button
              type="button"
              onClick={() => setLightbox((l) => (l !== null && l > 0 ? l - 1 : l))}
              className="absolute left-4 p-2 text-white hover:bg-white/10 rounded-lg"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <div className="max-w-5xl w-full max-h-[85vh] relative">
              {filtered[lightbox]?.type === "video" ? (
                <iframe
                  src={filtered[lightbox].src}
                  title={filtered[lightbox].title}
                  className="w-full aspect-video rounded-xl"
                  allowFullScreen
                />
              ) : (
                <div className="relative w-full h-[70vh]">
                  <Image
                    src={filtered[lightbox]?.src || ""}
                    alt={filtered[lightbox]?.title || ""}
                    fill
                    className="object-contain"
                    sizes="90vw"
                  />
                </div>
              )}
              <p className="text-white text-center mt-4 font-medium">{filtered[lightbox]?.title}</p>
            </div>
            <button
              type="button"
              onClick={() => setLightbox((l) => (l !== null && l < filtered.length - 1 ? l + 1 : l))}
              className="absolute right-4 p-2 text-white hover:bg-white/10 rounded-lg"
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
