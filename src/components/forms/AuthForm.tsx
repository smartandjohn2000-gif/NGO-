"use client";

import { useState } from "react";
import Link from "next/link";
import { Loader2, AlertCircle, CheckCircle2 } from "lucide-react";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";

type Mode = "login" | "register";

export function AuthForm({ mode }: { mode: Mode }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setMessage("");

    const fd = new FormData(e.currentTarget);
    const email = String(fd.get("email") || "");
    const password = String(fd.get("password") || "");
    const fullName = String(fd.get("full_name") || "");

    if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
      setStatus("error");
      setMessage(
        "Authentication backend is not configured yet. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to enable login."
      );
      return;
    }

    const supabase = getSupabaseBrowserClient();
    try {
      if (mode === "login") {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        setStatus("success");
        setMessage("Signed in. Redirecting…");
        setTimeout(() => (window.location.href = "/membership/dashboard"), 600);
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { data: { full_name: fullName } },
        });
        if (error) throw error;
        setStatus("success");
        setMessage(
          "Check your email for a confirmation link to activate your account."
        );
      }
    } catch (err) {
      setStatus("error");
      setMessage(
        err instanceof Error ? err.message : "Authentication failed."
      );
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      {mode === "register" && (
        <label className="block">
          <span className="text-sm font-semibold text-ink-700">Full Name</span>
          <input
            name="full_name"
            required
            className="mt-1 w-full rounded-lg ring-1 ring-ink-200 px-3 py-2.5 focus:outline-2 focus:outline-brand-400"
          />
        </label>
      )}
      <label className="block">
        <span className="text-sm font-semibold text-ink-700">Email</span>
        <input
          type="email"
          name="email"
          required
          className="mt-1 w-full rounded-lg ring-1 ring-ink-200 px-3 py-2.5 focus:outline-2 focus:outline-brand-400"
        />
      </label>
      <label className="block">
        <span className="text-sm font-semibold text-ink-700">Password</span>
        <input
          type="password"
          name="password"
          required
          minLength={8}
          className="mt-1 w-full rounded-lg ring-1 ring-ink-200 px-3 py-2.5 focus:outline-2 focus:outline-brand-400"
        />
        {mode === "register" && (
          <span className="mt-1 block text-xs text-ink-500">
            Minimum 8 characters.
          </span>
        )}
      </label>

      <p
        aria-live="polite"
        className={`text-sm ${
          status === "success"
            ? "text-emerald-700"
            : status === "error"
              ? "text-red-600"
              : "text-ink-500"
        }`}
      >
        {status === "success" && (
          <span className="inline-flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4" /> {message}
          </span>
        )}
        {status === "error" && (
          <span className="inline-flex items-center gap-2">
            <AlertCircle className="h-4 w-4" /> {message}
          </span>
        )}
      </p>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-800 hover:bg-brand-900 text-white px-6 py-3 text-sm font-semibold disabled:opacity-60"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            {mode === "login" ? "Signing in…" : "Creating account…"}
          </>
        ) : mode === "login" ? (
          "Sign in"
        ) : (
          "Create Account"
        )}
      </button>

      <p className="text-sm text-ink-600 text-center">
        {mode === "login" ? (
          <>
            Don&apos;t have an account?{" "}
            <Link href="/membership/register" className="text-brand-700 font-semibold">
              Register
            </Link>
          </>
        ) : (
          <>
            Already a member?{" "}
            <Link href="/membership/login" className="text-brand-700 font-semibold">
              Sign in
            </Link>
          </>
        )}
      </p>
    </form>
  );
}
