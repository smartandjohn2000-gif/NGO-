import type { Metadata } from "next";
import { PlayCircle, Search } from "lucide-react";
import { galleryItems } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photo and video gallery for World Impact Initiative programs, volunteers, partners, and community impact."
};

const categories = ["All", "Programs", "Community", "Youth", "Inclusion", "Relief", "Video"];

export default function GalleryPage() {
  return (
    <>
      <section className="hero-pattern section text-white">
        <div className="container max-w-5xl">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-[#F4B400]">Gallery</p>
          <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-7xl">
            Stories of service, dignity, and community partnership.
          </h1>
        </div>
      </section>
      <section className="section bg-[#F7F9FC]">
        <div className="container">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button key={category} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-black text-slate-700 hover:border-[#0F4C81] hover:text-[#0F4C81]">
                  {category}
                </button>
              ))}
            </div>
            <label className="relative block">
              <Search className="pointer-events-none absolute left-4 top-3.5 text-slate-400" size={18} aria-hidden />
              <span className="sr-only">Search gallery</span>
              <input className="form-field pl-11" placeholder="Search media" />
            </label>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item, index) => (
              <article key={item.title} className="card overflow-hidden">
                <button className="image-card relative block min-h-72 w-full p-6 text-left text-white" aria-label={`Open lightbox for ${item.title}`}>
                  {item.type === "Video" ? (
                    <PlayCircle className="absolute right-6 top-6 text-[#F4B400]" size={42} aria-hidden />
                  ) : null}
                  <span className="absolute left-6 top-6 rounded-full bg-white/90 px-3 py-1 text-xs font-black text-[#0F4C81]">
                    {item.category}
                  </span>
                  <span className="absolute bottom-6 left-6 right-6 text-2xl font-black">
                    {item.title}
                  </span>
                </button>
                <div className="flex items-center justify-between p-5">
                  <p className="text-sm font-bold text-slate-500">{item.type} Gallery</p>
                  <p className="text-sm font-black text-[#0F4C81]">#{index + 1}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 flex justify-center gap-2" aria-label="Gallery pagination">
            {[1, 2, 3].map((page) => (
              <button key={page} className={`grid h-11 w-11 place-items-center rounded-full font-black ${page === 1 ? "bg-[#0F4C81] text-white" : "bg-white text-slate-700"}`}>
                {page}
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
