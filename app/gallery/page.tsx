import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { GalleryExplorer } from "@/components/sections/gallery-explorer";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore World Impact Initiative's photo and video gallery with filters, pagination, and lightbox viewing.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="Stories of impact from our humanitarian and community development work."
        image="/images/main_uploads/main-9.jpg"
      />
      <div className="container-shell py-14 md:py-20">
        <SectionHeading
          eyebrow="Photo & Video Gallery"
          title="Field moments, community stories, and program highlights"
          description="Browse by category, watch videos, and open photos in a full-screen lightbox."
          align="center"
        />
        <div className="mt-10">
          <GalleryExplorer />
        </div>
      </div>
    </>
  );
}
