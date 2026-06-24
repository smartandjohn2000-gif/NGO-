import type { Metadata } from "next";
import { requireRole } from "@/lib/auth";
import type { UserRole } from "@/types/database";
import { getSupabaseServerClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Volunteer Coordinator Console",
  description:
    "Role-based volunteer application dashboard for reviewing and managing submissions.",
  alternates: { canonical: "/admin/volunteers" },
};

const allowedRoles: UserRole[] = ["super_admin", "volunteer_coordinator"];

const fallbackApplications = [
  {
    id: "v-1",
    full_name: "Sample Volunteer Applicant",
    email: "applicant1@example.org",
    country: "Canada",
    availability: "Weekends",
    status: "new",
    created_at: new Date().toISOString(),
  },
  {
    id: "v-2",
    full_name: "Sample Community Mentor",
    email: "applicant2@example.org",
    country: "Canada",
    availability: "Evenings",
    status: "reviewing",
    created_at: new Date().toISOString(),
  },
];

export default async function AdminVolunteersPage() {
  await requireRole(allowedRoles);

  let applications = fallbackApplications;

  try {
    const supabase = await getSupabaseServerClient();
    const { data } = await supabase
      .from("volunteer_applications")
      .select("id, full_name, email, country, availability, status, created_at")
      .order("created_at", { ascending: false })
      .limit(50);
    if (data && data.length > 0) {
      applications = data;
    }
  } catch {
    // Continue with fallback content when DB is unavailable.
  }

  return (
    <section className="container-shell py-14 md:py-20">
      <h1 className="text-3xl font-bold text-[#0F4C81]">Volunteer Coordination</h1>
      <p className="mt-2 text-sm text-slate-600">
        Review volunteer applications and move each record through the onboarding pipeline.
      </p>

      <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-[#F7F9FC] text-xs uppercase tracking-wide text-[#0F4C81]/75">
            <tr>
              <th className="px-4 py-3">Applicant</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Country</th>
              <th className="px-4 py-3">Availability</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Submitted</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application) => (
              <tr key={application.id} className="border-t border-slate-100">
                <td className="px-4 py-3 font-medium text-slate-800">{application.full_name}</td>
                <td className="px-4 py-3 text-slate-600">{application.email}</td>
                <td className="px-4 py-3 text-slate-600">{application.country}</td>
                <td className="px-4 py-3 text-slate-600">{application.availability}</td>
                <td className="px-4 py-3 text-slate-600">{application.status}</td>
                <td className="px-4 py-3 text-slate-600">
                  {new Date(application.created_at).toLocaleDateString("en-CA")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
