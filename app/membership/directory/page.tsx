import type { Metadata } from "next";
import { requireAuth } from "@/lib/auth";
import { getSupabaseServerClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Membership Directory",
  description: "Browse member directory profiles in the World Impact Initiative portal.",
  alternates: { canonical: "/membership/directory" },
};

type MemberRecord = {
  id: string;
  full_name: string | null;
  email: string;
  country: string | null;
  profession: string | null;
};

const fallbackMembers: MemberRecord[] = [
  {
    id: "sample-1",
    full_name: "Sample Program Partner",
    email: "partner@example.org",
    country: "Canada",
    profession: "Program Advisor",
  },
  {
    id: "sample-2",
    full_name: "Sample Volunteer Lead",
    email: "volunteer@example.org",
    country: "Canada",
    profession: "Volunteer Coordinator",
  },
];

export default async function MembershipDirectoryPage() {
  await requireAuth();

  let members = fallbackMembers;

  try {
    const supabase = await getSupabaseServerClient();
    const { data } = await supabase
      .from("profiles")
      .select("id, full_name, email, country, profession")
      .order("created_at", { ascending: false })
      .limit(20);

    if (data && data.length > 0) {
      members = data;
    }
  } catch {
    // Keep directory visible with fallback rows if DB is unavailable.
  }

  return (
    <section className="container-shell py-14 md:py-20">
      <h1 className="text-3xl font-bold text-[#0F4C81]">Membership Directory</h1>
      <p className="mt-2 text-sm text-slate-600">
        Connect with members, volunteers, and collaborators across programs.
      </p>

      <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-[#F7F9FC] text-xs uppercase tracking-wide text-[#0F4C81]/80">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Country</th>
              <th className="px-4 py-3">Profession</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.id} className="border-t border-slate-100">
                <td className="px-4 py-3 font-medium text-slate-800">
                  {member.full_name ?? "Unnamed member"}
                </td>
                <td className="px-4 py-3 text-slate-600">{member.email}</td>
                <td className="px-4 py-3 text-slate-600">{member.country ?? "—"}</td>
                <td className="px-4 py-3 text-slate-600">{member.profession ?? "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
