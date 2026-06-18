import type { Metadata } from "next";
import { Search, Filter, Plus } from "lucide-react";

export const metadata: Metadata = {
  title: "Beneficiaries",
  robots: { index: false, follow: false },
};

const sample = [
  { id: "WII-9281", name: "Daniel O.", program: "Child Protection", status: "Active", caseNotes: 3, location: "Northern Region" },
  { id: "WII-7430", name: "Amina K.", program: "Gender Equality", status: "Active", caseNotes: 7, location: "Northern Region" },
  { id: "WII-6512", name: "Sarah M.", program: "Disability Inclusion", status: "Active", caseNotes: 2, location: "Eastern Region" },
  { id: "WII-5104", name: "Hassan A.", program: "Crisis Response", status: "Recovery", caseNotes: 5, location: "Southern Region" },
  { id: "WII-4082", name: "Joy I.", program: "Youth Empowerment", status: "Graduated", caseNotes: 9, location: "Urban Center" },
  { id: "WII-3211", name: "Esther N.", program: "Health & Education", status: "Active", caseNotes: 4, location: "Highland Region" },
];

const statusColor: Record<string, string> = {
  Active: "bg-emerald-100 text-emerald-800",
  Recovery: "bg-amber-100 text-amber-800",
  Graduated: "bg-brand-100 text-brand-800",
};

export default function BeneficiariesPage() {
  return (
    <div className="rounded-3xl bg-white ring-1 ring-ink-100 p-7 md:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-brand-900">
            Beneficiary Database
          </h1>
          <p className="mt-1 text-sm text-ink-600">
            Confidential records, program assignments, and case notes.
          </p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-full bg-brand-800 hover:bg-brand-900 text-white text-sm font-semibold px-5 py-2.5">
          <Plus className="h-4 w-4" aria-hidden="true" /> New Record
        </button>
      </div>

      <div className="mt-6 flex flex-col md:flex-row gap-3">
        <label className="relative flex-1 max-w-md">
          <span className="sr-only">Search beneficiaries</span>
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-400"
            aria-hidden="true"
          />
          <input
            type="search"
            placeholder="Search by ID, name, or location…"
            className="w-full rounded-full bg-white ring-1 ring-ink-200 pl-9 pr-4 py-2.5 text-sm focus:outline-2 focus:outline-brand-400"
          />
        </label>
        <button className="inline-flex items-center gap-2 rounded-full bg-ink-50 ring-1 ring-ink-200 text-ink-700 px-4 py-2 text-sm">
          <Filter className="h-4 w-4" aria-hidden="true" /> Filter
        </button>
      </div>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs uppercase tracking-widest text-ink-500 border-b border-ink-100">
              <th className="py-3 pr-4">ID</th>
              <th className="py-3 pr-4">Name</th>
              <th className="py-3 pr-4">Program</th>
              <th className="py-3 pr-4">Location</th>
              <th className="py-3 pr-4">Status</th>
              <th className="py-3 pr-4">Notes</th>
              <th className="py-3 pr-4"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-100">
            {sample.map((r) => (
              <tr key={r.id} className="hover:bg-ink-50">
                <td className="py-3 pr-4 font-mono text-xs text-ink-600">{r.id}</td>
                <td className="py-3 pr-4 font-semibold text-brand-900">{r.name}</td>
                <td className="py-3 pr-4 text-ink-700">{r.program}</td>
                <td className="py-3 pr-4 text-ink-700">{r.location}</td>
                <td className="py-3 pr-4">
                  <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${statusColor[r.status] ?? ""}`}>
                    {r.status}
                  </span>
                </td>
                <td className="py-3 pr-4 text-ink-600">{r.caseNotes}</td>
                <td className="py-3 pr-4 text-right">
                  <button className="text-brand-700 font-semibold hover:underline">
                    Open
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 rounded-2xl bg-amber-50 ring-1 ring-amber-200 p-4 text-xs text-amber-900">
        <strong>Confidentiality:</strong> Beneficiary records are protected
        under our Safeguarding Policy. Access is restricted by role and audited.
      </div>
    </div>
  );
}
