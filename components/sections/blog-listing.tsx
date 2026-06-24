"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { BLOG_POSTS } from "@/lib/constants";
import { formatDate } from "@/lib/utils";

const categories = ["all", ...new Set(BLOG_POSTS.map((post) => post.category))];

export function BlogListing() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const posts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory = category === "all" || post.category === category;
      const matchesSearch =
        query.length === 0 ||
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [category, query]);

  const featured = BLOG_POSTS.filter((post) => post.featured);
  const recent = [...BLOG_POSTS].sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, 3);

  return (
    <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
      <div className="space-y-6">
        <div className="rounded-2xl bg-white p-5 shadow-md">
          <div className="grid gap-3 sm:grid-cols-2">
            <input
              aria-label="Search blog posts"
              placeholder="Search articles..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="rounded-full border border-slate-300 px-4 py-2 text-sm outline-none focus:border-[#0F4C81]"
            />
            <select
              aria-label="Filter posts by category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="rounded-full border border-slate-300 px-4 py-2 text-sm outline-none focus:border-[#0F4C81]"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid gap-4">
          {posts.map((post) => (
            <article key={post.id} className="overflow-hidden rounded-2xl bg-white shadow-md sm:grid sm:grid-cols-[220px_1fr]">
              <div className="relative h-52 sm:h-auto">
                <Image src={post.image} alt={post.title} fill className="object-cover" sizes="(max-width: 640px) 100vw, 220px" />
              </div>
              <div className="space-y-3 p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#0F4C81]/70">{post.category}</p>
                <h3 className="text-xl font-semibold text-[#0F4C81]">{post.title}</h3>
                <p className="text-sm text-slate-600">{post.excerpt}</p>
                <p className="text-xs text-slate-500">
                  {post.author} · {formatDate(post.date)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <aside className="space-y-6">
        <div className="rounded-2xl bg-white p-5 shadow-md">
          <h3 className="text-base font-semibold text-[#0F4C81]">Featured Articles</h3>
          <ul className="mt-4 space-y-3">
            {featured.map((post) => (
              <li key={post.id} className="text-sm text-slate-700">
                <p className="font-semibold">{post.title}</p>
                <p className="text-xs text-slate-500">{formatDate(post.date)}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl bg-white p-5 shadow-md">
          <h3 className="text-base font-semibold text-[#0F4C81]">Recent Posts</h3>
          <ul className="mt-4 space-y-3">
            {recent.map((post) => (
              <li key={post.id} className="text-sm text-slate-700">
                <p className="font-semibold">{post.title}</p>
                <p className="text-xs text-slate-500">{formatDate(post.date)}</p>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}
