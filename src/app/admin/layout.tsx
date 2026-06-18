import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { hasPermission } from "@/lib/utils";
import type { UserRole } from "@/types";
import {
  LayoutDashboard,
  Users,
  Heart,
  FileText,
  BarChart3,
  Settings,
  Shield,
} from "lucide-react";

const adminNav = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard, permission: "dashboard" },
  { href: "/admin/beneficiaries", label: "Beneficiaries", icon: Heart, permission: "beneficiaries" },
  { href: "/admin/volunteers", label: "Volunteers", icon: Users, permission: "volunteers" },
  { href: "/admin/content", label: "Content", icon: FileText, permission: "content" },
  { href: "/admin/reports", label: "Reports", icon: BarChart3, permission: "reports" },
  { href: "/admin/users", label: "Users", icon: Shield, permission: "users" },
  { href: "/admin/settings", label: "Settings", icon: Settings, permission: "settings" },
];

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/portal/login");

  const { data: profile } = await supabase
    .from("profiles")
    .select("role, full_name")
    .eq("id", user.id)
    .single();

  const role = (profile?.role || "member") as UserRole;
  const adminRoles: UserRole[] = ["super_admin", "program_manager", "content_editor", "volunteer_coordinator"];

  if (!adminRoles.includes(role)) redirect("/portal/dashboard");

  const allowedNav = adminNav.filter((item) => hasPermission(role, item.permission));

  return (
    <div className="min-h-screen bg-surface">
      <div className="gradient-primary text-white py-4">
        <div className="container-narrow flex items-center justify-between">
          <div>
            <h1 className="font-bold text-lg">Admin Panel</h1>
            <p className="text-white/70 text-sm">{profile?.full_name} — {role.replace("_", " ")}</p>
          </div>
          <Link href="/portal/dashboard" className="text-sm text-white/80 hover:text-white">
            ← Back to Portal
          </Link>
        </div>
      </div>
      <div className="container-narrow py-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <aside className="lg:col-span-1">
            <nav className="bg-white rounded-xl border p-4 space-y-1">
              {allowedNav.map(({ href, label, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-surface hover:text-primary transition-colors"
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                  {label}
                </Link>
              ))}
            </nav>
          </aside>
          <main className="lg:col-span-4">{children}</main>
        </div>
      </div>
    </div>
  );
}
