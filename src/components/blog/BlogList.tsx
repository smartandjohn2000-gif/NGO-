"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Calendar, Clock, ArrowRight } from "lucide-react";
import { blogPosts, blogCategories, type BlogPost } from "@/lib/blog";
import { formatDate, cn } from "@/lib/utils";

export function BlogList() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<(typeof blogCategories)[number]>("All");

  const featured = blogPosts.filter((p) => p.featured);

  const filtered: BlogPost[] = useMemo(() => {
    let list = blogPosts;
    if (active !== "All") list = list.filter((p) => p.category === active);
    const q = query.trim().toLowerCase();
    if (q)
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    return list;
  }, [active, query]);

  return (
    <div className="grid gap-12 lg:grid-cols-12">
      <div className="lg:col-span-8">
        {/* Featured */}
        {featured.length > 0 && active === "All" && !query && (
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
              Featured
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {featured.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group block overflow-hidden rounded-3xl ring-1 ring-ink-100 bg-white hover:shadow-xl transition"
                >
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 rounded-full bg-gold-400 text-brand-900 px-2.5 py-1 text-xs font-bold">
                      {p.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg md:text-xl font-bold text-brand-900 group-hover:text-brand-700 transition">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-ink-600 line-clamp-3">
                      {p.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-3 text-xs text-ink-500">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                        {formatDate(p.date)}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                        {p.readingTime}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="mt-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {blogCategories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                className={cn(
                  "rounded-full px-3.5 py-1.5 text-sm font-medium transition",
                  active === c
                    ? "bg-brand-800 text-white shadow"
                    : "bg-ink-50 text-ink-700 hover:bg-ink-100"
                )}
              >
                {c}
              </button>
            ))}
          </div>
          <label className="relative w-full md:w-72">
            <span className="sr-only">Search articles</span>
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-400"
              aria-hidden="true"
            />
            <input
              type="search"
              placeholder="Search articles…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-full bg-white ring-1 ring-ink-200 pl-9 pr-4 py-2 text-sm focus:outline-2 focus:outline-brand-400"
            />
          </label>
        </div>

        {/* Articles */}
        <ul className="mt-8 space-y-4">
          {filtered.length === 0 && (
            <li className="rounded-2xl bg-ink-50 p-10 text-center text-ink-600">
              No articles match your search.
            </li>
          )}
          {filtered.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/blog/${p.slug}`}
                className="group grid gap-4 rounded-2xl ring-1 ring-ink-100 bg-white p-4 sm:grid-cols-[200px_1fr] hover:shadow-lg transition"
              >
                <div className="relative aspect-[4/3] sm:aspect-auto rounded-xl overflow-hidden bg-ink-100">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="200px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="rounded-full bg-brand-50 px-2 py-0.5 font-semibold text-brand-700">
                      {p.category}
                    </span>
                    <span className="text-ink-500">{formatDate(p.date)}</span>
                    <span className="text-ink-300">·</span>
                    <span className="text-ink-500">{p.readingTime}</span>
                  </div>
                  <h3 className="mt-2 text-lg font-bold text-brand-900 group-hover:text-brand-700 transition">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm text-ink-600 line-clamp-2">{p.excerpt}</p>
                  <span className="mt-auto pt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
                    Read article
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Sidebar */}
      <aside className="lg:col-span-4 space-y-8">
        <div className="rounded-3xl bg-gradient-to-br from-brand-800 to-brand-950 p-7 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-300">
            Newsletter
          </p>
          <h3 className="mt-2 text-xl font-bold">
            Field stories, monthly.
          </h3>
          <p className="mt-2 text-sm text-white/80">
            One email a month. Stories, impact updates, and ways to take action.
          </p>
          <form
            method="post"
            action="/api/newsletter"
            className="mt-4 flex flex-col gap-2"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email
            </label>
            <input
              id="newsletter-email"
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-full bg-white/10 ring-1 ring-white/20 px-4 py-2.5 text-sm text-white placeholder:text-white/50 focus:outline-2 focus:outline-gold-400"
            />
            <button
              type="submit"
              className="rounded-full bg-gold-400 px-4 py-2.5 text-sm font-semibold text-brand-900 hover:bg-gold-300 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="rounded-3xl bg-ink-50 p-7 ring-1 ring-ink-100">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
            Recent Posts
          </p>
          <ul className="mt-4 space-y-4">
            {blogPosts.slice(0, 4).map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="group flex gap-3 items-start"
                >
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-ink-200">
                    <Image
                      src={p.image}
                      alt=""
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-brand-900 group-hover:text-brand-700 line-clamp-2">
                      {p.title}
                    </p>
                    <p className="text-xs text-ink-500 mt-0.5">
                      {formatDate(p.date)}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl bg-white p-7 ring-1 ring-ink-100">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
            Categories
          </p>
          <ul className="mt-4 space-y-2">
            {blogCategories.filter((c) => c !== "All").map((c) => (
              <li key={c}>
                <button
                  type="button"
                  onClick={() => setActive(c)}
                  className="text-sm text-ink-700 hover:text-brand-700"
                >
                  {c}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}
