"use client";

import { useMemo, useState } from "react";

type BeneficiaryRecord = {
  id: string;
  full_name: string;
  assigned_program_slug: string;
  status: string;
  location: string | null;
  age: number | null;
};

type BeneficiaryPanelProps = {
  records: BeneficiaryRecord[];
};

export function AdminBeneficiaryPanel({ records }: BeneficiaryPanelProps) {
  const [query, setQuery] = useState("");

  const filteredRecords = useMemo(() => {
    if (!query) {
      return records;
    }

    const lowerQuery = query.toLowerCase();
    return records.filter(
      (record) =>
        record.full_name.toLowerCase().includes(lowerQuery) ||
        record.assigned_program_slug.toLowerCase().includes(lowerQuery) ||
        (record.location ?? "").toLowerCase().includes(lowerQuery),
    );
  }, [query, records]);

  const activeCount = filteredRecords.filter((item) => item.status === "active").length;
  const watchlistCount = filteredRecords.filter((item) => item.status === "watchlist").length;
  const closedCount = filteredRecords.filter((item) => item.status === "closed").length;

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-4">
        <article className="surface-card p-5">
          <p className="text-xs uppercase tracking-wide text-slate-500">Total records</p>
          <p className="mt-2 text-2xl font-bold text-[#0F4C81]">{filteredRecords.length}</p>
        </article>
        <article className="surface-card p-5">
          <p className="text-xs uppercase tracking-wide text-slate-500">Active cases</p>
          <p className="mt-2 text-2xl font-bold text-[#0F4C81]">{activeCount}</p>
        </article>
        <article className="surface-card p-5">
          <p className="text-xs uppercase tracking-wide text-slate-500">Watchlist</p>
          <p className="mt-2 text-2xl font-bold text-amber-600">{watchlistCount}</p>
        </article>
        <article className="surface-card p-5">
          <p className="text-xs uppercase tracking-wide text-slate-500">Closed</p>
          <p className="mt-2 text-2xl font-bold text-emerald-600">{closedCount}</p>
        </article>
      </div>

      <div className="surface-card p-5">
        <label htmlFor="beneficiary-search" className="text-sm font-semibold text-[#0F4C81]">
          Search beneficiary records
        </label>
        <input
          id="beneficiary-search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by name, program, or location..."
          className="mt-2 w-full rounded-full border border-slate-300 px-4 py-2 text-sm outline-none focus:border-[#0F4C81]"
        />
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-[#F7F9FC] text-xs uppercase tracking-wide text-[#0F4C81]/75">
            <tr>
              <th className="px-4 py-3">Beneficiary</th>
              <th className="px-4 py-3">Program Assignment</th>
              <th className="px-4 py-3">Location</th>
              <th className="px-4 py-3">Age</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredRecords.map((record) => (
              <tr key={record.id} className="border-t border-slate-100">
                <td className="px-4 py-3 font-medium text-slate-800">{record.full_name}</td>
                <td className="px-4 py-3 text-slate-600">{record.assigned_program_slug}</td>
                <td className="px-4 py-3 text-slate-600">{record.location ?? "—"}</td>
                <td className="px-4 py-3 text-slate-600">{record.age ?? "—"}</td>
                <td className="px-4 py-3 text-slate-600">{record.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
