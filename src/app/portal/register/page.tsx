"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { UserPlus } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({ full_name: "", email: "", password: "", country: "Canada" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const supabase = createClient();
      const { error: authError } = await supabase.auth.signUp({
        email: form.email,
        password: form.password,
        options: { data: { full_name: form.full_name, country: form.country, role: "member" } },
      });
      if (authError) {
        setError(authError.message);
        return;
      }
      router.push("/portal/dashboard");
      router.refresh();
    } catch {
      setError("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const inputClass = "w-full px-4 py-3 rounded-lg border border-gray-200 outline-none focus:border-primary";

  return (
    <Section className="min-h-[70vh] flex items-center">
      <div className="max-w-md mx-auto w-full">
        <Card className="p-8">
          <div className="text-center mb-8">
            <UserPlus className="w-12 h-12 text-primary mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-primary">Create Account</h1>
            <p className="text-muted text-sm mt-2">Join the World Impact Initiative membership portal</p>
          </div>
          <form onSubmit={handleRegister} className="space-y-4">
            <input required placeholder="Full Name" value={form.full_name} onChange={(e) => setForm({ ...form, full_name: e.target.value })} className={inputClass} />
            <input required type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} />
            <input required type="password" minLength={8} placeholder="Password (min 8 characters)" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} className={inputClass} />
            <input placeholder="Country" value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} className={inputClass} />
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <button type="submit" disabled={loading} className="w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark disabled:opacity-50">
              {loading ? "Creating account..." : "Create Account"}
            </button>
          </form>
          <p className="text-center text-sm text-muted mt-6">
            Already have an account?{" "}
            <Link href="/portal/login" className="text-primary font-semibold hover:text-accent">Sign In</Link>
          </p>
        </Card>
      </div>
    </Section>
  );
}
