import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, ClipboardList, Users2, FilePenLine } from "lucide-react";
import { ADMIN_ALLOWED_ROLES, requireRole } from "@/lib/auth";
import { ROLE_PERMISSIONS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Admin System",
  description:
    "Role-based multi-user admin system for super admins, program managers, content editors, and volunteer coordinators.",
  alternates: { canonical: "/admin" },
};

const adminModules = [
  {
    title: "Beneficiary Database",
    href: "/admin/beneficiaries",
    icon: ClipboardList,
    description: "Manage beneficiary records, assignments, case notes, and reporting.",
  },
  {
    title: "Content Management",
    href: "/admin/content",
    icon: FilePenLine,
    description: "Publish updates for blog/news, gallery media, and event listings.",
  },
  {
    title: "Volunteer Coordination",
    href: "/admin/volunteers",
    icon: Users2,
    description: "Review volunteer submissions and manage status workflows.",
  },
];

export default async function AdminPage() {
  const profile = await requireRole(ADMIN_ALLOWED_ROLES);
  const rolePermissions = ROLE_PERMISSIONS[profile.role as keyof typeof ROLE_PERMISSIONS] ?? [];

  return (
    <section className="container-shell py-14 md:py-20">
      <div className="rounded-2xl bg-[#0F4C81] p-6 text-white md:p-8">
        <p className="inline-flex items-center gap-2 text-xs uppercase tracking-wide text-[#F4B400]">
          <ShieldCheck size={14} /> Multi-User Admin System
        </p>
        <h1 className="mt-3 text-3xl font-bold">Role: {profile.role.replace("_", " ")}</h1>
        <ul className="mt-4 space-y-2 text-sm text-white/90">
          {rolePermissions.map((permission) => (
            <li key={permission}>• {permission}</li>
          ))}
        </ul>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {adminModules.map((module) => {
          const Icon = module.icon;
          return (
            <Link key={module.title} href={module.href} className="surface-card p-6 transition hover:-translate-y-1">
              <div className="inline-flex size-10 items-center justify-center rounded-xl bg-[#0F4C81]/10 text-[#0F4C81]">
                <Icon size={20} />
              </div>
              <h2 className="mt-4 text-lg font-semibold text-[#0F4C81]">{module.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{module.description}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
