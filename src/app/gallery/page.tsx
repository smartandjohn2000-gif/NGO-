import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photographs and videos from World Impact Initiative programs around the world—children, youth, families, and communities at the heart of our work.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Faces, places, and moments from the field."
        description="Browse photos and videos from across our programs and events. Filter by category, click to expand."
        crumbs={[{ label: "Gallery" }]}
      />
      <section className="py-16 md:py-20 bg-white">
        <div className="container-page">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
