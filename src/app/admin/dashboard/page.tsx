import type { Metadata } from "next";
import { ShieldAlert, Users, HeartHandshake, FileText, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  robots: { index: false, follow: false },
};

const stats = [
  { label: "Active beneficiaries", value: "12,481", trend: "+4.2%", Icon: ShieldAlert },
  { label: "Active volunteers", value: "1,204", trend: "+2.1%", Icon: HeartHandshake },
  { label: "Members", value: "3,820", trend: "+0.9%", Icon: Users },
  { label: "Open cases", value: "62", trend: "-1.4%", Icon: FileText },
];

const recent = [
  { type: "Volunteer", name: "Aisha B.", action: "submitted application", time: "2h ago" },
  { type: "Case", name: "WII-1043", action: "case note added", time: "4h ago" },
  { type: "Donation", name: "Anonymous", action: "$250 monthly gift", time: "5h ago" },
  { type: "Beneficiary", name: "WII-9281", action: "enrolled in Youth program", time: "Yesterday" },
];

export default function AdminDashboard() {
  return (
    <>
      <div className="rounded-3xl bg-white ring-1 ring-ink-100 p-7 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold text-brand-900">
          Admin Dashboard
        </h1>
        <p className="mt-1 text-ink-600 text-sm">
          High-level overview across programs, volunteers, and beneficiaries.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl bg-ink-50 p-5 ring-1 ring-ink-100"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white text-brand-700 ring-1 ring-brand-100">
                  <s.Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700">
                  <TrendingUp className="h-3.5 w-3.5" aria-hidden="true" />
                  {s.trend}
                </span>
              </div>
              <p className="mt-3 text-2xl font-extrabold text-brand-900">
                {s.value}
              </p>
              <p className="text-xs text-ink-500">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-3xl bg-white ring-1 ring-ink-100 p-7">
          <h2 className="text-lg font-bold text-brand-900">Recent activity</h2>
          <ul className="mt-4 divide-y divide-ink-100">
            {recent.map((r, i) => (
              <li key={i} className="py-3 flex items-center justify-between gap-4 text-sm">
                <div>
                  <p className="font-semibold text-ink-800">{r.name}</p>
                  <p className="text-ink-500 text-xs">{r.type} · {r.action}</p>
                </div>
                <span className="text-xs text-ink-400">{r.time}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl bg-white ring-1 ring-ink-100 p-7">
          <h2 className="text-lg font-bold text-brand-900">Reporting</h2>
          <p className="mt-2 text-sm text-ink-600">
            Generate program, donor, and impact reports.
          </p>
          <div className="mt-4 grid gap-2 text-sm">
            <button className="rounded-lg bg-ink-50 px-4 py-3 ring-1 ring-ink-100 text-left">
              📊 Program Impact Report
            </button>
            <button className="rounded-lg bg-ink-50 px-4 py-3 ring-1 ring-ink-100 text-left">
              💛 Donor Acknowledgment Report
            </button>
            <button className="rounded-lg bg-ink-50 px-4 py-3 ring-1 ring-ink-100 text-left">
              🤝 Volunteer Engagement Report
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
