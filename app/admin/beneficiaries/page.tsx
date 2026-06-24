import type { Metadata } from "next";
import { ADMIN_ALLOWED_ROLES, requireRole } from "@/lib/auth";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { AdminBeneficiaryPanel } from "@/components/sections/admin-beneficiary-panel";

export const metadata: Metadata = {
  title: "Beneficiary Database",
  description:
    "Admin-only beneficiary records with program assignment, case notes, search, and reporting dashboard.",
  alternates: { canonical: "/admin/beneficiaries" },
};

const fallbackBeneficiaries = [
  {
    id: "demo-1",
    full_name: "Sample Beneficiary A",
    assigned_program_slug: "child-protection-human-rights",
    status: "active",
    location: "Canada",
    age: 13,
  },
  {
    id: "demo-2",
    full_name: "Sample Beneficiary B",
    assigned_program_slug: "disability-inclusion-accessibility",
    status: "watchlist",
    location: "Canada",
    age: 18,
  },
  {
    id: "demo-3",
    full_name: "Sample Beneficiary C",
    assigned_program_slug: "youth-empowerment-technical-skills-training",
    status: "closed",
    location: "Canada",
    age: 21,
  },
];

type BeneficiaryRecord = {
  id: string;
  full_name: string;
  assigned_program_slug: string;
  status: string;
  location: string | null;
  age: number | null;
};

type CaseNote = {
  id: string;
  note: string;
  created_at: string;
};

const fallbackNotes: CaseNote[] = [
  {
    id: "note-1",
    note: "Follow-up completed with family support referral pathway.",
    created_at: new Date().toISOString(),
  },
  {
    id: "note-2",
    note: "Program assignment updated after inclusion needs reassessment.",
    created_at: new Date().toISOString(),
  },
];

export default async function AdminBeneficiariesPage() {
  await requireRole(ADMIN_ALLOWED_ROLES);

  let beneficiaries: BeneficiaryRecord[] = fallbackBeneficiaries;
  let caseNotes = fallbackNotes;

  try {
    const supabase = await getSupabaseServerClient();

    const [{ data: beneficiaryData }, { data: noteData }] = await Promise.all([
      supabase
        .from("beneficiaries")
        .select("id, full_name, assigned_program_slug, status, location, age")
        .order("updated_at", { ascending: false })
        .limit(50),
      supabase
        .from("beneficiary_case_notes")
        .select("id, note, created_at")
        .order("created_at", { ascending: false })
        .limit(5),
    ]);

    if (beneficiaryData && beneficiaryData.length > 0) {
      beneficiaries = beneficiaryData;
    }
    if (noteData && noteData.length > 0) {
      caseNotes = noteData;
    }
  } catch {
    // Keep page usable with fallback datasets.
  }

  return (
    <section className="container-shell space-y-8 py-14 md:py-20">
      <div>
        <h1 className="text-3xl font-bold text-[#0F4C81]">Beneficiary Database</h1>
        <p className="mt-2 text-sm text-slate-600">
          Admin-only records including program assignment, case notes, search, and reporting.
        </p>
      </div>

      <AdminBeneficiaryPanel records={beneficiaries} />

      <article className="surface-card p-6">
        <h2 className="text-xl font-semibold text-[#0F4C81]">Recent Case Notes</h2>
        <ul className="mt-4 space-y-3">
          {caseNotes.map((note) => (
            <li key={note.id} className="rounded-xl border border-slate-100 bg-[#F7F9FC] p-4">
              <p className="text-sm text-slate-700">{note.note}</p>
              <p className="mt-2 text-xs uppercase tracking-wide text-slate-500">
                {new Date(note.created_at).toLocaleString("en-CA")}
              </p>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
