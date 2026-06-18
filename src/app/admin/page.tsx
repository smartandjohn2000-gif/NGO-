import { createClient } from "@/lib/supabase/server";
import { Users, Heart, FileText, HandHeart } from "lucide-react";
import { Card } from "@/components/ui/Card";

export default async function AdminDashboardPage() {
  const supabase = await createClient();

  const [volunteers, beneficiaries, contacts] = await Promise.all([
    supabase.from("volunteer_submissions").select("id", { count: "exact", head: true }),
    supabase.from("beneficiaries").select("id", { count: "exact", head: true }),
    supabase.from("contact_submissions").select("id", { count: "exact", head: true }),
  ]);

  const stats = [
    { label: "Volunteer Applications", value: volunteers.count ?? 0, icon: HandHeart, color: "text-primary" },
    { label: "Beneficiary Records", value: beneficiaries.count ?? 0, icon: Heart, color: "text-red-500" },
    { label: "Contact Messages", value: contacts.count ?? 0, icon: FileText, color: "text-accent" },
    { label: "Active Members", value: "—", icon: Users, color: "text-green-600" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-primary mb-6">Dashboard Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <Card key={stat.label} className="p-6" hover={false}>
            <stat.icon className={`w-8 h-8 ${stat.color} mb-3`} />
            <div className="text-3xl font-bold text-primary">{stat.value}</div>
            <div className="text-muted text-sm">{stat.label}</div>
          </Card>
        ))}
      </div>
      <Card className="p-6" hover={false}>
        <h3 className="font-bold text-primary mb-4">Reporting Dashboard</h3>
        <p className="text-muted text-sm mb-4">
          Connect Supabase to view live data. Role-based access controls ensure each team member sees only what they need.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { role: "Super Admin", access: "Full system access" },
            { role: "Program Manager", access: "Beneficiaries & reports" },
            { role: "Content Editor", access: "Blog, gallery, events" },
            { role: "Volunteer Coordinator", access: "Volunteer applications" },
          ].map((r) => (
            <div key={r.role} className="p-4 bg-surface rounded-lg">
              <p className="font-semibold text-primary text-sm">{r.role}</p>
              <p className="text-muted text-xs mt-1">{r.access}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
