"use client";

import { useState } from "react";
import { Search, Plus, X } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { createClient } from "@/lib/supabase/client";

interface Beneficiary {
  id: string;
  full_name: string;
  country: string;
  gender?: string;
  status: string;
  case_notes?: string;
  programs?: { title: string; slug: string };
}

interface Program {
  id: string;
  title: string;
  slug: string;
}

interface Props {
  initialBeneficiaries: Beneficiary[];
  programs: Program[];
}

export function BeneficiaryManager({ initialBeneficiaries, programs }: Props) {
  const [beneficiaries, setBeneficiaries] = useState(initialBeneficiaries);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [selected, setSelected] = useState<Beneficiary | null>(null);
  const [form, setForm] = useState({ full_name: "", country: "", gender: "", program_id: "", status: "active", case_notes: "" });

  const filtered = beneficiaries.filter(
    (b) =>
      b.full_name.toLowerCase().includes(search.toLowerCase()) ||
      b.country.toLowerCase().includes(search.toLowerCase())
  );

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    const supabase = createClient();
    const { data, error } = await supabase
      .from("beneficiaries")
      .insert(form)
      .select("*, programs(title, slug)")
      .single();
    if (!error && data) {
      setBeneficiaries([data, ...beneficiaries]);
      setShowForm(false);
      setForm({ full_name: "", country: "", gender: "", program_id: "", status: "active", case_notes: "" });
    }
  }

  const inputClass = "w-full px-3 py-2 rounded-lg border border-gray-200 text-sm outline-none focus:border-primary";

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
          <input
            type="search"
            placeholder="Search beneficiaries..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 text-sm outline-none focus:border-primary"
          />
        </div>
        <button
          type="button"
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark"
        >
          <Plus className="w-4 h-4" /> Add Beneficiary
        </button>
      </div>

      {showForm && (
        <Card className="p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-primary">New Beneficiary Record</h3>
            <button type="button" onClick={() => setShowForm(false)}><X className="w-5 h-5 text-muted" /></button>
          </div>
          <form onSubmit={handleAdd} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input required placeholder="Full Name" value={form.full_name} onChange={(e) => setForm({ ...form, full_name: e.target.value })} className={inputClass} />
            <input required placeholder="Country" value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} className={inputClass} />
            <input placeholder="Gender" value={form.gender} onChange={(e) => setForm({ ...form, gender: e.target.value })} className={inputClass} />
            <select value={form.program_id} onChange={(e) => setForm({ ...form, program_id: e.target.value })} className={inputClass}>
              <option value="">Select Program</option>
              {programs.map((p) => <option key={p.id} value={p.id}>{p.title}</option>)}
            </select>
            <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })} className={inputClass}>
              <option value="active">Active</option>
              <option value="graduated">Graduated</option>
              <option value="inactive">Inactive</option>
            </select>
            <textarea placeholder="Case Notes" value={form.case_notes} onChange={(e) => setForm({ ...form, case_notes: e.target.value })} className={inputClass} rows={2} />
            <button type="submit" className="sm:col-span-2 py-2.5 bg-primary text-white rounded-lg font-medium">Save Record</button>
          </form>
        </Card>
      )}

      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-xl border overflow-hidden">
          <thead className="bg-surface">
            <tr>
              {["Name", "Country", "Program", "Status", "Actions"].map((h) => (
                <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-muted uppercase">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.length > 0 ? filtered.map((b) => (
              <tr key={b.id} className="border-t hover:bg-surface/50">
                <td className="px-4 py-3 text-sm font-medium text-primary">{b.full_name}</td>
                <td className="px-4 py-3 text-sm text-muted">{b.country}</td>
                <td className="px-4 py-3 text-sm text-muted">{b.programs?.title || "—"}</td>
                <td className="px-4 py-3">
                  <span className={`text-xs px-2 py-1 rounded-full ${b.status === "active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"}`}>
                    {b.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <button type="button" onClick={() => setSelected(b)} className="text-sm text-primary font-medium hover:text-accent">View</button>
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-muted text-sm">
                  No beneficiary records yet. Connect Supabase and add records to get started.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <Card className="p-6 max-w-md w-full">
            <div className="flex justify-between mb-4">
              <h3 className="font-bold text-primary">{selected.full_name}</h3>
              <button type="button" onClick={() => setSelected(null)}><X className="w-5 h-5" /></button>
            </div>
            <div className="space-y-2 text-sm">
              <p><span className="font-medium">Country:</span> {selected.country}</p>
              <p><span className="font-medium">Program:</span> {selected.programs?.title || "—"}</p>
              <p><span className="font-medium">Status:</span> {selected.status}</p>
              {selected.case_notes && <p><span className="font-medium">Case Notes:</span> {selected.case_notes}</p>}
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
