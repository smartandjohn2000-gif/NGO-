import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { BlogList } from "@/components/blog/BlogList";

export const metadata: Metadata = {
  title: "Blog & News",
  description:
    "Field stories, news, and reports from World Impact Initiative—written by our team and the communities we serve.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog & News"
        title="Stories from the field. News from the team."
        description="Read about the people, programs, and partnerships moving our mission forward."
        crumbs={[{ label: "Blog" }]}
      />
      <section className="py-16 md:py-20 bg-white">
        <div className="container-page">
          <BlogList />
        </div>
      </section>
    </>
  );
}
