import type { Metadata } from "next";
import Link from "next/link";
import { LayoutDashboard, Users, UserCircle2, FolderKanban } from "lucide-react";
import { requireAuth } from "@/lib/auth";
import { LogoutButton } from "@/components/forms/auth-forms";
import { getSupabaseServerClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Membership Dashboard",
  description:
    "Membership dashboard for profile management, directory access, and resource center navigation.",
  alternates: { canonical: "/membership/dashboard" },
};

const cards = [
  {
    title: "Profile Management",
    href: "/membership/profile",
    description: "Update your personal details, professional profile, and biography.",
    icon: UserCircle2,
  },
  {
    title: "Membership Directory",
    href: "/membership/directory",
    description: "Connect with fellow members, volunteers, and partner representatives.",
    icon: Users,
  },
  {
    title: "Resource Center",
    href: "/membership/resources",
    description: "Access learning guides, program toolkits, and policy resources.",
    icon: FolderKanban,
  },
  {
    title: "Admin System",
    href: "/admin",
    description: "Open role-based admin features for operations and content workflows.",
    icon: LayoutDashboard,
  },
];

export default async function MembershipDashboardPage() {
  const profile = await requireAuth();
  let submissionStats = {
    volunteerForms: 0,
    contactForms: 0,
    rsvps: 0,
    newsletterSubscriptions: 0,
  };

  try {
    const supabase = await getSupabaseServerClient();
    const [volunteerCount, contactCount, rsvpCount, newsletterCount] = await Promise.all([
      supabase
        .from("volunteer_applications")
        .select("*", { count: "exact", head: true })
        .eq("email", profile.email),
      supabase
        .from("contact_messages")
        .select("*", { count: "exact", head: true })
        .eq("email", profile.email),
      supabase
        .from("event_rsvps")
        .select("*", { count: "exact", head: true })
        .eq("email", profile.email),
      supabase
        .from("newsletter_subscriptions")
        .select("*", { count: "exact", head: true })
        .eq("email", profile.email),
    ]);

    submissionStats = {
      volunteerForms: volunteerCount.count ?? 0,
      contactForms: contactCount.count ?? 0,
      rsvps: rsvpCount.count ?? 0,
      newsletterSubscriptions: newsletterCount.count ?? 0,
    };
  } catch {
    // Dashboard keeps rendering if Supabase environment is not configured.
  }

  return (
    <section className="container-shell py-14 md:py-20">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-wide text-[#0F4C81]/70">Membership Portal</p>
          <h1 className="text-3xl font-bold text-[#0F4C81]">
            Welcome, {profile.full_name ?? "Member"}
          </h1>
          <p className="mt-2 text-sm text-slate-600">Role: {profile.role.replace("_", " ")}</p>
        </div>
        <LogoutButton />
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <article className="surface-card p-4">
          <p className="text-xs uppercase tracking-wide text-slate-500">Volunteer forms</p>
          <p className="mt-2 text-2xl font-bold text-[#0F4C81]">{submissionStats.volunteerForms}</p>
        </article>
        <article className="surface-card p-4">
          <p className="text-xs uppercase tracking-wide text-slate-500">Contact forms</p>
          <p className="mt-2 text-2xl font-bold text-[#0F4C81]">{submissionStats.contactForms}</p>
        </article>
        <article className="surface-card p-4">
          <p className="text-xs uppercase tracking-wide text-slate-500">Event RSVPs</p>
          <p className="mt-2 text-2xl font-bold text-[#0F4C81]">{submissionStats.rsvps}</p>
        </article>
        <article className="surface-card p-4">
          <p className="text-xs uppercase tracking-wide text-slate-500">Newsletter</p>
          <p className="mt-2 text-2xl font-bold text-[#0F4C81]">{submissionStats.newsletterSubscriptions}</p>
        </article>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <Link key={card.title} href={card.href} className="surface-card p-6 transition hover:-translate-y-1">
              <div className="inline-flex size-10 items-center justify-center rounded-xl bg-[#0F4C81]/10 text-[#0F4C81]">
                <Icon size={20} />
              </div>
              <h2 className="mt-4 text-xl font-semibold text-[#0F4C81]">{card.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{card.description}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
