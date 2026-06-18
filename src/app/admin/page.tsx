import type { Metadata } from "next";
import { Database, FileBarChart, ShieldCheck, UsersRound } from "lucide-react";
import { ActionForm } from "@/components/forms";
import { submitBeneficiaryRecord } from "@/app/actions";
import { adminRoles, programs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description:
    "Role-based World Impact Initiative admin dashboard for programs, volunteers, content, reports, and beneficiary records."
};

export default function AdminPage() {
  return (
    <>
      <section className="hero-pattern section text-white">
        <div className="container max-w-5xl">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-[#F4B400]">Admin System</p>
          <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-7xl">
            Permission-based tools for trusted nonprofit operations.
          </h1>
        </div>
      </section>
      <section className="section bg-[#F7F9FC]">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {adminRoles.map((role) => (
              <article key={role.title} className="card p-6">
                <ShieldCheck className="text-[#0F4C81]" aria-hidden />
                <h2 className="mt-5 text-xl font-black">{role.title}</h2>
                <ul className="mt-4 grid gap-2 text-sm text-slate-600">
                  {role.permissions.map((permission) => (
                    <li key={permission}>• {permission}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_420px]">
            <div className="card p-8">
              <div className="flex items-center gap-3">
                <Database className="text-[#0F4C81]" aria-hidden />
                <h2 className="text-3xl font-black">Beneficiary Database</h2>
              </div>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <input className="form-field" placeholder="Search beneficiary records" />
                <select className="form-field sm:max-w-64" aria-label="Program assignment">
                  <option>All programs</option>
                  {programs.map((program) => (
                    <option key={program.slug}>{program.title}</option>
                  ))}
                </select>
              </div>
              <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200">
                <div className="grid grid-cols-4 bg-[#0F4C81] p-4 text-sm font-black text-white">
                  <span>Ref</span>
                  <span>Program</span>
                  <span>Status</span>
                  <span>Case Notes</span>
                </div>
                {["WII-001", "WII-002", "WII-003"].map((ref, index) => (
                  <div key={ref} className="grid grid-cols-4 border-t border-slate-200 bg-white p-4 text-sm text-slate-600">
                    <span className="font-bold text-slate-950">{ref}</span>
                    <span>{programs[index].title}</span>
                    <span>Active</span>
                    <span>Protected record</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 grid gap-5 md:grid-cols-3">
                {["Beneficiary Records", "Program Assignment", "Reporting Dashboard"].map((metric, index) => (
                  <div key={metric} className="rounded-3xl bg-[#F7F9FC] p-5">
                    <FileBarChart className="text-[#F4B400]" aria-hidden />
                    <p className="mt-3 text-3xl font-black text-[#0F4C81]">{[128, 6, 12][index]}</p>
                    <p className="text-sm font-bold text-slate-600">{metric}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="mb-5 flex items-center gap-3">
                <UsersRound className="text-[#0F4C81]" aria-hidden />
                <h2 className="text-2xl font-black">Add Case Record</h2>
              </div>
              <ActionForm
                action={submitBeneficiaryRecord}
                submitLabel="Save Beneficiary Record"
                fields={[
                  { name: "reference_code", label: "Reference Code", required: true },
                  { name: "full_name", label: "Full Name", required: true },
                  { name: "program", label: "Program Assignment", required: true },
                  { name: "country", label: "Country", required: true },
                  { name: "case_status", label: "Case Status", required: true },
                  { name: "case_notes", label: "Case Notes", textarea: true }
                ]}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
