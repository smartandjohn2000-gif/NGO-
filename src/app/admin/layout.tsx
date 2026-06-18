import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  HeartHandshake,
  FileText,
  Calendar,
  ShieldAlert,
  Settings,
} from "lucide-react";

const adminNav = [
  { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Beneficiaries", href: "/admin/beneficiaries", icon: ShieldAlert },
  { label: "Volunteers", href: "/admin/volunteers", icon: HeartHandshake },
  { label: "Programs", href: "/admin/programs", icon: FileText },
  { label: "Events", href: "/admin/events", icon: Calendar },
  { label: "Users & Roles", href: "/admin/users", icon: Users },
  { label: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-ink-50 min-h-screen">
      <div className="container-page py-10 grid gap-8 lg:grid-cols-[260px_1fr]">
        <aside className="lg:sticky lg:top-24 h-fit rounded-3xl bg-white ring-1 ring-ink-100 p-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-700">
            Admin
          </p>
          <p className="mt-1 text-sm text-ink-500">
            Internal team console
          </p>
          <nav aria-label="Admin" className="mt-5 space-y-1">
            {adminNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-ink-700 hover:bg-brand-50 hover:text-brand-800"
              >
                <item.icon className="h-4 w-4" aria-hidden="true" />
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-6 rounded-xl bg-amber-50 ring-1 ring-amber-200 p-3 text-xs text-amber-900">
            Admin access requires a Super Admin or Program Manager role.
          </div>
        </aside>
        <section>{children}</section>
      </div>
    </div>
  );
}
