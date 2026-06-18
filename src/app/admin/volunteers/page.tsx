import type { Metadata } from "next";
import { isSupabaseConfigured, createSupabaseServerClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Volunteer Submissions",
  robots: { index: false, follow: false },
};

interface VolunteerRow {
  id: string;
  full_name: string;
  email: string;
  country: string | null;
  availability: string | null;
  created_at: string;
  status?: string | null;
}

const fallback: VolunteerRow[] = [
  {
    id: "demo-1",
    full_name: "Aisha Bello",
    email: "aisha@example.com",
    country: "Canada",
    availability: "Weekends",
    created_at: new Date().toISOString(),
    status: "Pending",
  },
  {
    id: "demo-2",
    full_name: "Daniel Tremblay",
    email: "daniel@example.com",
    country: "Canada",
    availability: "Flexible",
    created_at: new Date(Date.now() - 86400000).toISOString(),
    status: "Reviewed",
  },
];

export default async function VolunteersAdminPage() {
  let rows: VolunteerRow[] = fallback;

  if (isSupabaseConfigured()) {
    try {
      const supabase = await createSupabaseServerClient();
      const { data } = await supabase
        .from("volunteer_submissions")
        .select("id, full_name, email, country, availability, created_at, status")
        .order("created_at", { ascending: false })
        .limit(50);
      if (data && data.length) rows = data as VolunteerRow[];
    } catch {
      // ignore — fall back to demo data
    }
  }

  return (
    <div className="rounded-3xl bg-white ring-1 ring-ink-100 p-7 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold text-brand-900">
        Volunteer Submissions
      </h1>
      <p className="mt-1 text-sm text-ink-600">
        Review and triage incoming volunteer applications.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs uppercase tracking-widest text-ink-500 border-b border-ink-100">
              <th className="py-3 pr-4">Name</th>
              <th className="py-3 pr-4">Email</th>
              <th className="py-3 pr-4">Country</th>
              <th className="py-3 pr-4">Availability</th>
              <th className="py-3 pr-4">Submitted</th>
              <th className="py-3 pr-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-100">
            {rows.map((r) => (
              <tr key={r.id}>
                <td className="py-3 pr-4 font-semibold text-brand-900">{r.full_name}</td>
                <td className="py-3 pr-4 text-ink-700">{r.email}</td>
                <td className="py-3 pr-4 text-ink-700">{r.country}</td>
                <td className="py-3 pr-4 text-ink-700">{r.availability}</td>
                <td className="py-3 pr-4 text-ink-500 text-xs">
                  {new Date(r.created_at).toLocaleString()}
                </td>
                <td className="py-3 pr-4">
                  <span className="inline-flex items-center rounded-full bg-brand-50 text-brand-800 px-2.5 py-1 text-xs font-semibold">
                    {r.status ?? "Pending"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {!isSupabaseConfigured() && (
        <p className="mt-6 text-xs text-ink-500">
          Showing demo records. Configure Supabase to display real submissions
          from the volunteer form.
        </p>
      )}
    </div>
  );
}
