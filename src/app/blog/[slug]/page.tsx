import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPostBySlug } from "@/lib/data/blog";
import { formatDate, SITE_CONFIG } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Article Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.image }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_CONFIG.url}${post.image}`,
    datePublished: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@type": "NGO", name: SITE_CONFIG.name, url: SITE_CONFIG.url },
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="relative h-64 md:h-96">
        <Image src={post.image} alt={post.title} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
      </div>
      <div className="container-narrow py-12 max-w-3xl">
        <div className="flex items-center gap-2 text-sm text-muted mb-4">
          <span className="text-accent font-medium">{post.category}</span>
          <span>•</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>•</span>
          <span>{post.author}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8">{post.title}</h1>
        <div className="prose prose-lg max-w-none text-muted leading-relaxed whitespace-pre-line">
          {post.content}
        </div>
        <div className="mt-12 pt-8 border-t">
          <Link href="/blog" className="text-primary font-semibold hover:text-accent">
            ← Back to Blog
          </Link>
        </div>
      </div>
    </article>
  );
}
