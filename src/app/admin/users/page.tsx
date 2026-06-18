import type { Metadata } from "next";
import { Plus } from "lucide-react";

export const metadata: Metadata = {
  title: "Users & Roles",
  robots: { index: false, follow: false },
};

const roles = [
  {
    name: "Super Admin",
    color: "bg-brand-900 text-white",
    description: "Full access to all data, users, and settings.",
    permissions: ["Manage users", "Manage roles", "All data", "Billing", "Audit logs"],
  },
  {
    name: "Program Manager",
    color: "bg-brand-100 text-brand-900",
    description: "Manage programs, beneficiaries, and reports.",
    permissions: [
      "Beneficiary records",
      "Program assignments",
      "Case notes",
      "Reports",
    ],
  },
  {
    name: "Content Editor",
    color: "bg-gold-100 text-gold-700",
    description: "Manage website content—blog, events, gallery.",
    permissions: ["Blog & news", "Events", "Gallery", "Programs page"],
  },
  {
    name: "Volunteer Coordinator",
    color: "bg-emerald-100 text-emerald-800",
    description: "Manage volunteer applications and engagement.",
    permissions: ["Volunteer apps", "Onboarding", "Communications", "Events"],
  },
];

const users = [
  { name: "Sara Mwangi", email: "sara@worldimpactinitiative.org", role: "Super Admin" },
  { name: "Daniel Tremblay", email: "daniel@worldimpactinitiative.org", role: "Program Manager" },
  { name: "Priya Singh", email: "priya@worldimpactinitiative.org", role: "Content Editor" },
  { name: "Marc Dubois", email: "marc@worldimpactinitiative.org", role: "Volunteer Coordinator" },
  { name: "Aisha Bello", email: "aisha@worldimpactinitiative.org", role: "Program Manager" },
];

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-white ring-1 ring-ink-100 p-7 md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-brand-900">
              Users & Roles
            </h1>
            <p className="mt-1 text-sm text-ink-600">
              Permission-based access controls.
            </p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-full bg-brand-800 hover:bg-brand-900 text-white text-sm font-semibold px-5 py-2.5">
            <Plus className="h-4 w-4" aria-hidden="true" /> Invite user
          </button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {roles.map((r) => (
          <div
            key={r.name}
            className="rounded-3xl bg-white ring-1 ring-ink-100 p-6"
          >
            <span
              className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold ${r.color}`}
            >
              {r.name}
            </span>
            <p className="mt-3 text-sm text-ink-600">{r.description}</p>
            <ul className="mt-4 space-y-1 text-xs text-ink-700">
              {r.permissions.map((p) => (
                <li key={p}>• {p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="rounded-3xl bg-white ring-1 ring-ink-100 p-7 md:p-8">
        <h2 className="text-lg font-bold text-brand-900">Team members</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-widest text-ink-500 border-b border-ink-100">
                <th className="py-3 pr-4">Name</th>
                <th className="py-3 pr-4">Email</th>
                <th className="py-3 pr-4">Role</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-100">
              {users.map((u) => (
                <tr key={u.email}>
                  <td className="py-3 pr-4 font-semibold text-brand-900">{u.name}</td>
                  <td className="py-3 pr-4 text-ink-600">{u.email}</td>
                  <td className="py-3 pr-4 text-ink-700">{u.role}</td>
                  <td className="py-3 pr-4 text-right">
                    <button className="text-brand-700 font-semibold hover:underline">
                      Manage
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
