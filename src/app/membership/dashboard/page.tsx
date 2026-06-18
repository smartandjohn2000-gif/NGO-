import type { Metadata } from "next";
import Link from "next/link";
import {
  User,
  BookOpen,
  Users,
  Heart,
  Bell,
  Calendar,
  FileText,
} from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { createSupabaseServerClient, isSupabaseConfigured } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Member Dashboard",
  description: "Your World Impact Initiative member dashboard.",
  robots: { index: false, follow: false },
};

export default async function DashboardPage() {
  let userEmail: string | null = null;
  let userName: string | null = null;

  if (isSupabaseConfigured()) {
    const supabase = await createSupabaseServerClient();
    const { data } = await supabase.auth.getUser();
    if (data.user) {
      userEmail = data.user.email ?? null;
      const meta = data.user.user_metadata as { full_name?: string } | null;
      userName = meta?.full_name ?? null;
    }
  }

  const cards = [
    {
      icon: User,
      title: "Profile",
      text: "Update your name, photo, skills, and preferences.",
      href: "/membership/dashboard",
    },
    {
      icon: Users,
      title: "Member Directory",
      text: "Search and connect with fellow members.",
      href: "/membership/directory",
    },
    {
      icon: BookOpen,
      title: "Resource Center",
      text: "Toolkits, briefings, and on-demand training.",
      href: "/membership/resources",
    },
    {
      icon: Calendar,
      title: "Upcoming Events",
      text: "RSVP to member-only briefings and gatherings.",
      href: "/events",
    },
    {
      icon: Heart,
      title: "Giving History",
      text: "View receipts and impact from your contributions.",
      href: "/donate",
    },
    {
      icon: FileText,
      title: "Reports & News",
      text: "Member updates, field reports, and field stories.",
      href: "/blog",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Dashboard"
        title={
          userName
            ? `Welcome back, ${userName.split(" ")[0]}.`
            : userEmail
              ? `Welcome back.`
              : "Member Dashboard"
        }
        description={
          userEmail
            ? `Signed in as ${userEmail}.`
            : "Sign in to see your personal dashboard."
        }
        crumbs={[
          { label: "Membership", href: "/membership" },
          { label: "Dashboard" },
        ]}
      />

      <section className="py-14 md:py-20 bg-white">
        <div className="container-page">
          {!isSupabaseConfigured() && (
            <div className="mb-8 rounded-2xl bg-amber-50 ring-1 ring-amber-200 px-5 py-4 text-sm text-amber-900">
              <strong>Demo mode:</strong> Authentication is not configured.
              Add <code>NEXT_PUBLIC_SUPABASE_URL</code> and{" "}
              <code>NEXT_PUBLIC_SUPABASE_ANON_KEY</code> to enable login,
              registration, and member features.
            </div>
          )}

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((c) => (
              <Link
                key={c.title}
                href={c.href}
                className="group block rounded-2xl bg-ink-50 p-6 ring-1 ring-ink-100 hover:bg-white hover:shadow-lg transition"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white text-brand-700 ring-1 ring-brand-100 group-hover:bg-brand-800 group-hover:text-gold-300 transition">
                  <c.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-brand-900">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm text-ink-600">{c.text}</p>
              </Link>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 rounded-3xl bg-gradient-to-br from-brand-800 to-brand-950 p-8 text-white">
              <div className="flex items-center gap-3">
                <Bell className="h-5 w-5 text-gold-300" aria-hidden="true" />
                <h3 className="text-lg font-bold">Notifications</h3>
              </div>
              <ul className="mt-4 space-y-3 text-sm text-white/85">
                <li className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                  📅 Member briefing on the 2026 Roadmap — June 25 at 2pm ET
                </li>
                <li className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                  📚 New resource: Inclusive Programming Toolkit (v2)
                </li>
                <li className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                  🤝 5 new volunteers joined the Toronto chapter
                </li>
              </ul>
            </div>
            <div className="rounded-3xl bg-ink-50 p-8 ring-1 ring-ink-100">
              <h3 className="text-lg font-bold text-brand-900">Quick actions</h3>
              <div className="mt-4 grid gap-2 text-sm">
                <Link
                  href="/donate"
                  className="rounded-lg bg-white px-4 py-3 ring-1 ring-ink-100 hover:ring-brand-200"
                >
                  💛 Make a gift
                </Link>
                <Link
                  href="/volunteer"
                  className="rounded-lg bg-white px-4 py-3 ring-1 ring-ink-100 hover:ring-brand-200"
                >
                  🤝 Update volunteer interests
                </Link>
                <Link
                  href="/membership/directory"
                  className="rounded-lg bg-white px-4 py-3 ring-1 ring-ink-100 hover:ring-brand-200"
                >
                  🌐 Browse directory
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
