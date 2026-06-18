"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

export default function ProfilePage() {
  const router = useRouter();
  const [profile, setProfile] = useState({ full_name: "", phone: "", country: "Canada", bio: "" });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function load() {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { router.push("/portal/login"); return; }
      const { data } = await supabase.from("profiles").select("*").eq("id", user.id).single();
      if (data) setProfile({ full_name: data.full_name || "", phone: data.phone || "", country: data.country || "Canada", bio: data.bio || "" });
      setLoading(false);
    }
    load();
  }, [router]);

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
    const { error } = await supabase.from("profiles").update({ ...profile, updated_at: new Date().toISOString() }).eq("id", user.id);
    setMessage(error ? "Failed to save" : "Profile updated!");
    setSaving(false);
  }

  const inputClass = "w-full px-4 py-3 rounded-lg border border-gray-200 outline-none focus:border-primary";

  if (loading) return <Section><p className="text-center text-muted">Loading...</p></Section>;

  return (
    <Section>
      <h1 className="text-3xl font-bold text-primary mb-8">Profile Management</h1>
      <Card className="p-8 max-w-xl">
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input value={profile.full_name} onChange={(e) => setProfile({ ...profile, full_name: e.target.value })} className={inputClass} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input value={profile.phone} onChange={(e) => setProfile({ ...profile, phone: e.target.value })} className={inputClass} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Country</label>
            <input value={profile.country} onChange={(e) => setProfile({ ...profile, country: e.target.value })} className={inputClass} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Bio</label>
            <textarea value={profile.bio} onChange={(e) => setProfile({ ...profile, bio: e.target.value })} rows={4} className={inputClass} />
          </div>
          <button type="submit" disabled={saving} className="px-6 py-3 bg-primary text-white rounded-lg font-semibold disabled:opacity-50">
            {saving ? "Saving..." : "Save Changes"}
          </button>
          {message && <p className="text-sm text-green-600">{message}</p>}
        </form>
      </Card>
    </Section>
  );
}
