export default function SettingsAdminPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-primary mb-6">System Settings</h2>
      <div className="bg-white rounded-xl border p-6 space-y-4">
        <div>
          <h3 className="font-semibold text-primary">Organization</h3>
          <p className="text-muted text-sm">World Impact Initiative — worldimpactinitiative.org</p>
        </div>
        <div>
          <h3 className="font-semibold text-primary">Supabase Configuration</h3>
          <p className="text-muted text-sm">Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in environment variables.</p>
        </div>
        <div>
          <h3 className="font-semibold text-primary">Donation Platform</h3>
          <p className="text-muted text-sm">Charitable Impact — charitableimpact.com</p>
        </div>
      </div>
    </div>
  );
}
