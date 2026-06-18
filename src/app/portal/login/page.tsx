"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LogIn, Mail, Lock } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const supabase = createClient();
      const { error: authError } = await supabase.auth.signInWithPassword({ email, password });
      if (authError) {
        setError(authError.message);
        return;
      }
      router.push("/portal/dashboard");
      router.refresh();
    } catch {
      setError("Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  }

  const inputClass = "w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 outline-none focus:border-primary";

  return (
    <Section className="min-h-[70vh] flex items-center">
      <div className="max-w-md mx-auto w-full">
        <Card className="p-8">
          <div className="text-center mb-8">
            <LogIn className="w-12 h-12 text-primary mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-primary">Member Login</h1>
            <p className="text-muted text-sm mt-2">Access your membership portal dashboard</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className={inputClass} />
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
              <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className={inputClass} />
            </div>
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <button type="submit" disabled={loading} className="w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark disabled:opacity-50">
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
          <p className="text-center text-sm text-muted mt-6">
            Don&apos;t have an account?{" "}
            <Link href="/portal/register" className="text-primary font-semibold hover:text-accent">Register</Link>
          </p>
        </Card>
      </div>
    </Section>
  );
}
