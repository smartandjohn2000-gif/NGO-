import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { blogPosts, getPost } from "@/lib/blog";
import { formatDate } from "@/lib/utils";
import { siteConfig } from "@/lib/site";
import { ButtonLink } from "@/components/ui/Button";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  props: PageProps<"/blog/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: [post.author],
      images: [post.image],
    },
  };
}

export default async function BlogPostPage(
  props: PageProps<"/blog/[slug]">
) {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) notFound();

  const recommended = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: post.title,
    description: post.excerpt,
    image: [`${siteConfig.url}${post.image}`],
    datePublished: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: { "@type": "ImageObject", url: `${siteConfig.url}/favicon.svg` },
    },
  };

  return (
    <article>
      <header className="bg-ink-50">
        <div className="container-page py-10 md:py-14">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All Articles
          </Link>
          <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-brand-700">
            {post.category}
          </p>
          <h1 className="mt-3 text-3xl md:text-5xl font-extrabold text-brand-900 text-balance leading-[1.08]">
            {post.title}
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-ink-600 text-pretty">
            {post.excerpt}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-ink-600">
            <span>By {post.author}</span>
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
              {formatDate(post.date)}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              {post.readingTime}
            </span>
          </div>
        </div>
      </header>

      <div className="container-page mt-8">
        <div className="relative aspect-[16/8] overflow-hidden rounded-3xl ring-1 ring-ink-100">
          <Image
            src={post.image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="container-page py-14">
        <div className="prose prose-lg max-w-3xl mx-auto text-ink-700">
          {post.content.split("\n\n").map((para, i) => (
            <p key={i} className="leading-relaxed text-pretty">
              {para}
            </p>
          ))}
          <hr className="my-10 border-ink-100" />
          <div className="flex flex-wrap items-center gap-2 text-sm text-ink-500">
            Tags:
            {post.tags.map((t) => (
              <span
                key={t}
                className="inline-flex items-center rounded-full bg-ink-50 px-2.5 py-1 text-xs text-ink-700"
              >
                #{t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <section className="py-14 bg-ink-50">
        <div className="container-page">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-bold text-brand-900">Keep reading</h2>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700"
            >
              All articles <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {recommended.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group block overflow-hidden rounded-2xl ring-1 ring-ink-100 bg-white"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={p.image}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-700">
                    {p.category}
                  </p>
                  <h3 className="mt-2 text-base font-bold text-brand-900 group-hover:text-brand-700">
                    {p.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-brand-900 text-white">
        <div className="container-page text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Inspired? Take action today.
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/donate" variant="gold">Donate</ButtonLink>
            <ButtonLink href="/volunteer" variant="outline">Volunteer</ButtonLink>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
    </article>
  );
}
