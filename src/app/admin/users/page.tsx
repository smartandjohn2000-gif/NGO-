export default function UsersAdminPage() {
  const roles = [
    { role: "Super Admin", description: "Full system access including user management and settings", permissions: "All permissions" },
    { role: "Program Manager", description: "Manage beneficiaries, programs, and reports", permissions: "Beneficiaries, Programs, Reports" },
    { role: "Content Editor", description: "Manage blog, gallery, and events content", permissions: "Content, Blog, Gallery, Events" },
    { role: "Volunteer Coordinator", description: "Review volunteer applications and manage events", permissions: "Volunteers, Events" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-primary mb-6">User Management</h2>
      <p className="text-muted text-sm mb-6">Super Admin only. Manage user roles and permissions via Supabase profiles table.</p>
      <div className="space-y-4">
        {roles.map((r) => (
          <div key={r.role} className="bg-white rounded-xl border p-6">
            <h3 className="font-semibold text-primary">{r.role}</h3>
            <p className="text-muted text-sm mt-1">{r.description}</p>
            <p className="text-xs text-accent mt-2 font-medium">Permissions: {r.permissions}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
