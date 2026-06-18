"use client";

import { useState, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";

const inputClass =
  "w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#0F4C81] focus:ring-2 focus:ring-[#0F4C81]/20";

export function RegisterForm() {
  const [message, setMessage] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();
  const router = useRouter();

  return (
    <form
      className="space-y-4 rounded-2xl bg-white p-6 shadow-lg"
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const email = String(formData.get("email") ?? "");
        const password = String(formData.get("password") ?? "");
        const fullName = String(formData.get("fullName") ?? "");

        startTransition(async () => {
          try {
            const supabase = getSupabaseBrowserClient();
            const { error } = await supabase.auth.signUp({
              email,
              password,
              options: { data: { full_name: fullName } },
            });
            if (error) throw error;
            const notifyResponse = await fetch("/api/membership/register", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ fullName, email }),
            });
            if (notifyResponse.ok) {
              setMessage("Registration successful. Check your email to verify your account.");
            } else {
              const payload = await notifyResponse.json().catch(() => null);
              setMessage(
                payload?.message
                  ? `Registration successful. Notification warning: ${payload.message}`
                  : "Registration successful, but notification delivery is currently unavailable.",
              );
            }
            router.refresh();
          } catch (error) {
            setMessage(error instanceof Error ? error.message : "Registration failed.");
          }
        });
      }}
    >
      <h2 className="text-2xl font-bold text-[#0F4C81]">Create your membership account</h2>
      <div>
        <label className="mb-2 block text-sm font-semibold text-[#0F4C81]" htmlFor="register-name">
          Full Name
        </label>
        <input id="register-name" name="fullName" className={inputClass} required />
      </div>
      <div>
        <label className="mb-2 block text-sm font-semibold text-[#0F4C81]" htmlFor="register-email">
          Email
        </label>
        <input id="register-email" name="email" type="email" className={inputClass} required />
      </div>
      <div>
        <label className="mb-2 block text-sm font-semibold text-[#0F4C81]" htmlFor="register-password">
          Password
        </label>
        <input id="register-password" name="password" type="password" className={inputClass} minLength={8} required />
      </div>
      <button
        type="submit"
        disabled={pending}
        className="inline-flex rounded-full bg-[#0F4C81] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#123f69] disabled:opacity-70"
      >
        {pending ? "Creating account..." : "Register"}
      </button>
      {message ? <p className="text-sm text-slate-600">{message}</p> : null}
    </form>
  );
}

export function LoginForm() {
  const [message, setMessage] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();
  const router = useRouter();
  const searchParams = useSearchParams();
  const nextPath = searchParams.get("next") || "/membership/dashboard";

  return (
    <form
      className="space-y-4 rounded-2xl bg-white p-6 shadow-lg"
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const email = String(formData.get("email") ?? "");
        const password = String(formData.get("password") ?? "");

        startTransition(async () => {
          try {
            const supabase = getSupabaseBrowserClient();
            const { error } = await supabase.auth.signInWithPassword({
              email,
              password,
            });
            if (error) throw error;
            router.push(nextPath);
            router.refresh();
          } catch (error) {
            setMessage(error instanceof Error ? error.message : "Login failed.");
          }
        });
      }}
    >
      <h2 className="text-2xl font-bold text-[#0F4C81]">Member login</h2>
      <div>
        <label className="mb-2 block text-sm font-semibold text-[#0F4C81]" htmlFor="login-email">
          Email
        </label>
        <input id="login-email" name="email" type="email" className={inputClass} required />
      </div>
      <div>
        <label className="mb-2 block text-sm font-semibold text-[#0F4C81]" htmlFor="login-password">
          Password
        </label>
        <input id="login-password" name="password" type="password" className={inputClass} required />
      </div>
      <button
        type="submit"
        disabled={pending}
        className="inline-flex rounded-full bg-[#0F4C81] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#123f69] disabled:opacity-70"
      >
        {pending ? "Signing in..." : "Login"}
      </button>
      {message ? <p className="text-sm text-slate-600">{message}</p> : null}
    </form>
  );
}

export function LogoutButton() {
  const [pending, startTransition] = useTransition();
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() =>
        startTransition(async () => {
          const supabase = getSupabaseBrowserClient();
          await supabase.auth.signOut();
          router.push("/membership/login");
          router.refresh();
        })
      }
      className="rounded-full border border-[#0F4C81]/20 bg-white px-4 py-2 text-sm font-semibold text-[#0F4C81]"
      disabled={pending}
    >
      {pending ? "Signing out..." : "Sign out"}
    </button>
  );
}
