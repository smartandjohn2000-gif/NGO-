import type { Metadata } from "next";
import { Search } from "lucide-react";
import { ActionForm } from "@/components/forms";
import { submitNewsletter } from "@/app/actions";
import { articles } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog and News",
  description:
    "Read World Impact Initiative news and insights on Canadian nonprofit work, humanitarian aid, child protection, youth empowerment, disability inclusion, and crisis response."
};

export default function BlogPage() {
  const featured = articles.filter((article) => article.featured);
  const recent = articles.filter((article) => !article.featured);

  return (
    <>
      <section className="hero-pattern section text-white">
        <div className="container max-w-5xl">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-[#F4B400]">Blog / News</p>
          <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-7xl">
            Insights for humanitarian aid and community development.
          </h1>
        </div>
      </section>
      <section className="section bg-[#F7F9FC]">
        <div className="container grid gap-10 lg:grid-cols-[1fr_340px]">
          <div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <label className="relative flex-1">
                <Search className="pointer-events-none absolute left-4 top-3.5 text-slate-400" size={18} aria-hidden />
                <span className="sr-only">Search articles</span>
                <input className="form-field bg-white pl-11" placeholder="Search articles" />
              </label>
              <select className="form-field bg-white sm:max-w-56" aria-label="Article category">
                <option>All categories</option>
                <option>Child Protection</option>
                <option>Youth Empowerment</option>
                <option>Disability Inclusion</option>
                <option>Community Development</option>
              </select>
            </div>
            <h2 className="mt-10 text-3xl font-black">Featured Articles</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {featured.map((article) => (
                <article key={article.slug} className="card p-7">
                  <p className="eyebrow">{article.category}</p>
                  <h3 className="mt-3 text-2xl font-black text-slate-950">{article.title}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{article.excerpt}</p>
                  <p className="mt-6 text-sm font-bold text-slate-500">{article.date}</p>
                </article>
              ))}
            </div>
            <h2 className="mt-10 text-3xl font-black">Recent Posts</h2>
            <div className="mt-6 grid gap-4">
              {recent.map((article) => (
                <article key={article.slug} className="rounded-3xl bg-white p-6 shadow-sm">
                  <p className="text-sm font-black text-[#0F4C81]">{article.category}</p>
                  <h3 className="mt-2 text-xl font-black">{article.title}</h3>
                  <p className="mt-2 text-slate-600">{article.excerpt}</p>
                </article>
              ))}
            </div>
          </div>
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <ActionForm
              action={submitNewsletter}
              submitLabel="Join Newsletter"
              fields={[
                {
                  name: "email",
                  label: "Email",
                  type: "email",
                  placeholder: "you@example.com",
                  required: true
                }
              ]}
            />
          </aside>
        </div>
      </section>
    </>
  );
}
