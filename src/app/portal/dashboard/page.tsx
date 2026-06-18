import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { Users, BookOpen, User, Settings } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { SignOutButton } from "@/components/portal/SignOutButton";

export default async function PortalDashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/portal/login");

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  const { data: members } = await supabase
    .from("profiles")
    .select("id, full_name, country, bio, role")
    .neq("role", "member")
    .limit(20);

  const displayName = profile?.full_name || user.email?.split("@")[0] || "Member";
  const isAdmin = profile?.role && profile.role !== "member";

  return (
    <Section>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-primary">Welcome, {displayName}</h1>
          <p className="text-muted">Membership Portal Dashboard</p>
        </div>
        <div className="flex gap-3">
          {isAdmin && (
            <Link href="/admin" className="px-4 py-2 bg-accent text-primary rounded-lg font-semibold text-sm hover:bg-accent-dark">
              Admin Dashboard
            </Link>
          )}
          <SignOutButton />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card className="p-6">
          <User className="w-8 h-8 text-primary mb-3" />
          <h2 className="font-bold text-primary mb-2">Profile</h2>
          <p className="text-muted text-sm mb-1">{profile?.email || user.email}</p>
          <p className="text-muted text-sm">{profile?.country || "Canada"}</p>
          <Link href="/portal/profile" className="text-primary text-sm font-semibold mt-3 inline-block hover:text-accent">
            Manage Profile →
          </Link>
        </Card>
        <Card className="p-6">
          <Users className="w-8 h-8 text-primary mb-3" />
          <h2 className="font-bold text-primary mb-2">Membership Directory</h2>
          <p className="text-muted text-sm">Connect with fellow members and partners.</p>
          <p className="text-2xl font-bold text-accent mt-2">{members?.length || 0}+ members</p>
        </Card>
        <Card className="p-6">
          <BookOpen className="w-8 h-8 text-primary mb-3" />
          <h2 className="font-bold text-primary mb-2">Resource Center</h2>
          <p className="text-muted text-sm">Access reports, guides, and training materials.</p>
          <Link href="/portal/resources" className="text-primary text-sm font-semibold mt-3 inline-block hover:text-accent">
            Browse Resources →
          </Link>
        </Card>
      </div>

      <SectionHeader title="Membership Directory" centered={false} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {(members || []).length > 0 ? (
          members!.map((member) => (
            <Card key={member.id} className="p-5" hover={false}>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <span className="text-primary font-bold">{member.full_name?.[0]}</span>
              </div>
              <h3 className="font-semibold text-primary">{member.full_name}</h3>
              <p className="text-muted text-sm">{member.country}</p>
            </Card>
          ))
        ) : (
          <Card className="p-6 col-span-full text-center" hover={false}>
            <Settings className="w-8 h-8 text-muted mx-auto mb-2" />
            <p className="text-muted">Connect Supabase to view the membership directory.</p>
          </Card>
        )}
      </div>
    </Section>
  );
}
