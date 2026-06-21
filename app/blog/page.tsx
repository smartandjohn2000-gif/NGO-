import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { BlogListing } from "@/components/sections/blog-listing";
import { NewsletterForm } from "@/components/forms/newsletter-form";

export const metadata: Metadata = {
  title: "Blog & News",
  description:
    "Read the latest NGO updates on humanitarian aid, child protection, youth empowerment, and inclusive development.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Blog & News"
        subtitle="Insights, updates, and stories from World Impact Initiative programs and partners."
        image="/images/main_uploads/main-3.jpg"
      />

      <section className="container-shell py-14 md:py-20">
        <SectionHeading
          eyebrow="SEO Optimized Articles"
          title="Explore the latest posts by topic"
          description="Use search and categories to find content aligned with your interests."
        />
        <div className="mt-10">
          <BlogListing />
        </div>
        <div className="mt-10 rounded-2xl bg-white p-6 shadow-md">
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
