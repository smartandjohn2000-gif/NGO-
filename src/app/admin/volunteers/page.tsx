import { createClient } from "@/lib/supabase/server";

export default async function VolunteersAdminPage() {
  const supabase = await createClient();
  const { data: submissions } = await supabase
    .from("volunteer_submissions")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div>
      <h2 className="text-2xl font-bold text-primary mb-6">Volunteer Applications</h2>
      <div className="space-y-4">
        {(submissions || []).length > 0 ? (
          submissions!.map((sub) => (
            <div key={sub.id} className="bg-white rounded-xl border p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-primary">{sub.full_name}</h3>
                <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full">{sub.status}</span>
              </div>
              <p className="text-sm text-muted">{sub.email} • {sub.phone} • {sub.country}</p>
              <p className="text-sm text-muted mt-1">Skills: {sub.skills || "—"} | Interests: {sub.interests || "—"}</p>
              <p className="text-sm text-muted mt-2 italic">&ldquo;{sub.motivation}&rdquo;</p>
            </div>
          ))
        ) : (
          <p className="text-muted text-sm">No volunteer submissions yet. Submissions will appear here when Supabase is connected.</p>
        )}
      </div>
    </div>
  );
}
