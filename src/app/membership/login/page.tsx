import type { Metadata } from "next";
import Link from "next/link";
import { LockKeyhole } from "lucide-react";

export const metadata: Metadata = {
  title: "Member Login",
  description: "Login to the World Impact Initiative membership portal."
};

export default function LoginPage() {
  return (
    <section className="section bg-[#F7F9FC]">
      <div className="container max-w-xl">
        <div className="card p-8">
          <LockKeyhole className="text-[#0F4C81]" size={44} aria-hidden />
          <h1 className="mt-5 text-4xl font-black">Member Login</h1>
          <p className="mt-4 leading-7 text-slate-600">
            Supabase Auth is prepared for email/password login. Connect environment variables and
            enable Auth providers in Supabase to activate production sessions.
          </p>
          <form className="mt-7 grid gap-5">
            <label className="grid gap-2 text-sm font-bold text-slate-700">
              Email
              <input className="form-field" type="email" placeholder="you@example.com" />
            </label>
            <label className="grid gap-2 text-sm font-bold text-slate-700">
              Password
              <input className="form-field" type="password" placeholder="••••••••" />
            </label>
            <Link className="btn btn-blue justify-center" href="/membership/dashboard">
              Continue to Dashboard
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
}
