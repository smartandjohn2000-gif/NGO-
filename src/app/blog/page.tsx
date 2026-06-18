"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ArrowRight } from "lucide-react";
import { blogPosts, blogCategories, getFeaturedPosts } from "@/lib/data/blog";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { formatDate, cn } from "@/lib/utils";

export default function BlogPage() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const featured = getFeaturedPosts();

  const filtered = blogPosts.filter((post) => {
    const matchesCategory = category === "All" || post.category === category;
    const matchesSearch =
      search === "" ||
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <section className="gradient-primary text-white py-20 md:py-28">
        <div className="container-narrow">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog & News</h1>
          <p className="text-xl text-white/80">Stories, updates, and insights from our humanitarian work.</p>
        </div>
      </section>

      {featured.length > 0 && (
        <Section background="surface">
          <SectionHeader title="Featured Articles" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featured.map((post) => (
              <Card key={post.slug} className="overflow-hidden group">
                <div className="relative h-56">
                  <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="50vw" />
                </div>
                <div className="p-6">
                  <span className="text-accent text-sm font-medium">{post.category}</span>
                  <h2 className="text-xl font-bold text-primary mt-1 mb-2">{post.title}</h2>
                  <p className="text-muted text-sm mb-4">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-accent">
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Section>
      )}

      <Section>
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" aria-hidden="true" />
            <input
              type="search"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
              aria-label="Search articles"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                  category === cat ? "bg-primary text-white" : "bg-surface text-muted hover:bg-primary/10"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post) => (
            <Card key={post.slug} className="overflow-hidden group">
              <div className="relative h-48">
                <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="33vw" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-muted mb-2">
                  <span className="text-accent font-medium">{post.category}</span>
                  <span>•</span>
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </div>
                <h2 className="text-lg font-bold text-primary mb-2">{post.title}</h2>
                <p className="text-muted text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="text-primary font-semibold text-sm hover:text-accent">
                  Read More →
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section background="primary">
        <div className="max-w-xl mx-auto text-center">
          <SectionHeader title="Newsletter Signup" subtitle="Stay updated with our latest news and impact stories." light />
          <NewsletterForm />
        </div>
      </Section>
    </>
  );
}

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="flex-1 px-4 py-3 rounded-lg text-gray-900"
        aria-label="Email for newsletter"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="px-6 py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-accent-dark transition-colors disabled:opacity-50"
      >
        {status === "loading" ? "Subscribing..." : "Subscribe"}
      </button>
      {status === "success" && <p className="text-accent text-sm sm:col-span-2">Thank you for subscribing!</p>}
      {status === "error" && <p className="text-red-300 text-sm sm:col-span-2">Something went wrong. Please try again.</p>}
    </form>
  );
}
