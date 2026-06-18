import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Search, Calendar, Tag, ArrowRight, Clock } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Blog & News",
  description:
    "Stay informed with the latest news, stories, and updates from World Impact Initiative — a Canadian nonprofit making a global difference.",
};

const categories = ["All", "Program Updates", "Impact Stories", "Events", "Advocacy", "Volunteer Stories", "Partnerships"];

const blogPosts = [
  {
    id: 1,
    slug: "breaking-barriers-disability-inclusion",
    title: "Breaking Barriers: How Inclusive Education is Transforming Lives in West Africa",
    excerpt: "Our disability inclusion team shares how adapted learning materials and trained teachers are changing the educational journey for children with disabilities across three countries.",
    category: "Impact Stories",
    date: "June 10, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80",
    featured: true,
    author: "Sarah M.",
  },
  {
    id: 2,
    slug: "youth-entrepreneurship-ghana",
    title: "50 Youth Entrepreneurs Launch Businesses in Ghana — Here's How",
    excerpt: "After completing our 12-week Youth Empowerment Program, 50 young people launched businesses ranging from digital marketing agencies to agricultural ventures.",
    category: "Program Updates",
    date: "May 28, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&q=80",
    featured: true,
    author: "David K.",
  },
  {
    id: 3,
    slug: "crisis-response-pakistan-floods",
    title: "Responding to the Pakistan Floods: Our Crisis Response Team on the Ground",
    excerpt: "Within 48 hours of the devastating floods, our crisis response team was distributing emergency supplies to thousands of affected families.",
    category: "Program Updates",
    date: "May 15, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=600&q=80",
    featured: false,
    author: "Emma R.",
  },
  {
    id: 4,
    slug: "gender-equality-community-leaders",
    title: "500 Community Leaders Trained as Gender Equality Champions",
    excerpt: "Our gender equality program has trained community leaders — including men and boys — to become active advocates against gender-based violence.",
    category: "Impact Stories",
    date: "April 30, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80",
    featured: false,
    author: "Amara F.",
  },
  {
    id: 5,
    slug: "volunteer-story-canada",
    title: "From Toronto to Nairobi: A Canadian Volunteer's Story",
    excerpt: "Dr. James Chen shares his experience volunteering with our health program in Kenya and how it changed his perspective on global health equity.",
    category: "Volunteer Stories",
    date: "April 18, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&q=80",
    featured: false,
    author: "Dr. James C.",
  },
  {
    id: 6,
    slug: "annual-impact-report-2024",
    title: "2024 Annual Impact Report: 50,000 Lives Changed",
    excerpt: "Our 2024 Annual Impact Report reveals a landmark year with over 50,000 lives impacted across 15 countries through our six core programs.",
    category: "Advocacy",
    date: "April 5, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80",
    featured: false,
    author: "WII Team",
  },
];

const featuredPosts = blogPosts.filter((p) => p.featured);
const recentPosts = blogPosts.filter((p) => !p.featured);

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-primary">
        <div className="container-custom relative z-10">
          <AnimateOnScroll>
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-4">News & Stories</p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              Blog & News
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mb-8">
              Stories of change, program updates, and insights from the World Impact Initiative community.
            </p>

            {/* Search */}
            <div className="relative max-w-lg">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="search"
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-gold"
                aria-label="Search blog articles"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Featured Articles */}
              <AnimateOnScroll className="mb-10">
                <h2 className="text-2xl font-heading font-bold text-primary mb-6">Featured Articles</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {featuredPosts.map((post) => (
                    <article key={post.id} className="card overflow-hidden group">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <span className="absolute top-3 left-3 bg-gold text-primary text-xs font-bold px-3 py-1 rounded-full">
                          Featured
                        </span>
                      </div>
                      <div className="p-5">
                        <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                          <span className="flex items-center gap-1">
                            <Tag className="w-3 h-3" /> {post.category}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" /> {post.date}
                          </span>
                        </div>
                        <h3 className="font-heading font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-2 mb-4">{post.excerpt}</p>
                        <Link href={`/blog/${post.slug}`} className="text-sm font-semibold text-primary hover:text-gold flex items-center gap-1 transition-colors">
                          Read More <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </AnimateOnScroll>

              {/* All Articles */}
              <AnimateOnScroll>
                <h2 className="text-2xl font-heading font-bold text-primary mb-6">Latest Articles</h2>
                <div className="space-y-6">
                  {blogPosts.map((post) => (
                    <article key={post.id} className="card overflow-hidden group">
                      <div className="flex flex-col sm:flex-row">
                        <div className="relative w-full sm:w-48 h-40 shrink-0 overflow-hidden">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 640px) 100vw, 192px"
                          />
                        </div>
                        <div className="p-5 flex flex-col justify-center">
                          <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 mb-2">
                            <span className="flex items-center gap-1">
                              <Tag className="w-3 h-3" /> {post.category}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" /> {post.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" /> {post.readTime}
                            </span>
                          </div>
                          <h3 className="font-heading font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-sm text-gray-600 line-clamp-2 mb-3">{post.excerpt}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-400">By {post.author}</span>
                            <Link href={`/blog/${post.slug}`} className="text-sm font-semibold text-primary hover:text-gold flex items-center gap-1 transition-colors">
                              Read More <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </AnimateOnScroll>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Categories */}
              <AnimateOnScroll delay={0.1}>
                <div className="card p-6">
                  <h3 className="font-heading font-bold text-primary mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.filter((c) => c !== "All").map((cat) => (
                      <button
                        key={cat}
                        className="flex items-center justify-between w-full px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        <span>{cat}</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Newsletter */}
              <AnimateOnScroll delay={0.2}>
                <div className="card p-6 bg-primary">
                  <h3 className="font-heading font-bold text-white mb-2">Newsletter</h3>
                  <p className="text-white/80 text-sm mb-4">Get our latest stories and updates delivered to your inbox.</p>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="input-field mb-3 text-sm"
                    aria-label="Email for newsletter"
                  />
                  <button className="btn-gold w-full justify-center text-sm">
                    Subscribe
                  </button>
                </div>
              </AnimateOnScroll>

              {/* Recent Posts */}
              <AnimateOnScroll delay={0.3}>
                <div className="card p-6">
                  <h3 className="font-heading font-bold text-primary mb-4">Recent Posts</h3>
                  <div className="space-y-4">
                    {blogPosts.slice(0, 3).map((post) => (
                      <Link
                        key={post.id}
                        href={`/blog/${post.slug}`}
                        className="flex gap-3 group"
                      >
                        <div className="relative w-14 h-14 shrink-0 rounded-lg overflow-hidden">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                            sizes="56px"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-800 group-hover:text-primary line-clamp-2 transition-colors">
                            {post.title}
                          </p>
                          <p className="text-xs text-gray-400 mt-1">{post.date}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
