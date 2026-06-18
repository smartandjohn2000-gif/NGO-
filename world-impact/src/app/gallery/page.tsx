"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Filter } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const categories = ["All", "Gender Equality", "Child Protection", "Youth", "Disability", "Health & Education", "Crisis Response"];

const galleryItems = [
  { id: 1, type: "photo", category: "Child Protection", src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80", title: "Children Learning Together" },
  { id: 2, type: "photo", category: "Gender Equality", src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80", title: "Women's Empowerment Workshop" },
  { id: 3, type: "photo", category: "Youth", src: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&q=80", title: "Youth Skills Training" },
  { id: 4, type: "photo", category: "Health & Education", src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80", title: "Community Health Clinic" },
  { id: 5, type: "photo", category: "Crisis Response", src: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=800&q=80", title: "Humanitarian Aid Distribution" },
  { id: 6, type: "photo", category: "Disability", src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80", title: "Disability Inclusion Program" },
  { id: 7, type: "photo", category: "Child Protection", src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80", title: "Safe Learning Environment" },
  { id: 8, type: "photo", category: "Gender Equality", src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", title: "Community Outreach" },
  { id: 9, type: "photo", category: "Youth", src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=80", title: "Youth Leadership Forum" },
  { id: 10, type: "photo", category: "Health & Education", src: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80", title: "School Program" },
  { id: 11, type: "photo", category: "Crisis Response", src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80", title: "Emergency Relief" },
  { id: 12, type: "photo", category: "Disability", src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80", title: "Inclusive Community Event" },
  { id: 13, type: "photo", category: "Child Protection", src: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&q=80", title: "Child-Friendly Space" },
  { id: 14, type: "photo", category: "Gender Equality", src: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&q=80", title: "Women's Support Group" },
  { id: 15, type: "photo", category: "Youth", src: "https://images.unsplash.com/photo-1561489396-888724a1543d?w=800&q=80", title: "Digital Skills Training" },
  { id: 16, type: "photo", category: "Health & Education", src: "https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?w=800&q=80", title: "Education Program" },
  { id: 17, type: "photo", category: "Crisis Response", src: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&q=80", title: "Food Distribution" },
  { id: 18, type: "photo", category: "Disability", src: "https://images.unsplash.com/photo-1574279606130-09958dc756f7?w=800&q=80", title: "Assistive Technology Training" },
];

const ITEMS_PER_PAGE = 9;

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<(typeof galleryItems)[0] | null>(null);
  const [page, setPage] = useState(1);

  const filtered = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const paginated = filtered.slice(0, page * ITEMS_PER_PAGE);
  const hasMore = paginated.length < filtered.length;

  const openLightbox = (item: (typeof galleryItems)[0]) => {
    setActiveItem(item);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setActiveItem(null);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-primary">
        <div className="container-custom relative z-10">
          <AnimateOnScroll>
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-4">Visual Stories</p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              Gallery
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Witness the real stories, faces, and moments of transformation across our programs worldwide.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          {/* Filter Tabs */}
          <AnimateOnScroll>
            <div className="flex flex-wrap gap-2 mb-10 items-center">
              <Filter className="w-4 h-4 text-gray-400" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setActiveCategory(cat); setPage(1); }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-primary text-white shadow-md"
                      : "bg-white text-gray-600 hover:bg-primary/10 hover:text-primary border border-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimateOnScroll>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <AnimatePresence>
              {paginated.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer shadow-card"
                  onClick={() => openLightbox(item)}
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/60 transition-all duration-300 flex items-center justify-center">
                    {item.type === "video" ? (
                      <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    ) : null}
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white font-semibold text-sm">{item.title}</p>
                      <p className="text-gold text-xs">{item.category}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Load More */}
          {hasMore && (
            <div className="text-center mt-10">
              <button
                onClick={() => setPage((p) => p + 1)}
                className="btn-primary"
              >
                Load More Photos
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="relative max-w-4xl w-full max-h-[80vh] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={activeItem.src}
                alt={activeItem.title}
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white font-bold">{activeItem.title}</p>
                <p className="text-gold text-sm">{activeItem.category}</p>
              </div>
            </motion.div>
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
