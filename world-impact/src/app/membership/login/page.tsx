"use client";

import { useState } from "react";
import Link from "next/link";
import { Globe, Eye, EyeOff, LogIn } from "lucide-react";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // In production: use Supabase auth
    // const supabase = createSupabaseBrowserClient();
    // const { error } = await supabase.auth.signInWithPassword({ email, password });
    setTimeout(() => setStatus("error"), 1000); // Demo: always error without Supabase
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-md"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <Globe className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-heading font-bold text-primary">Welcome Back</h1>
          <p className="text-gray-500 mt-1">Sign in to your member account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="label" htmlFor="login-email">Email Address</label>
            <input
              id="login-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="label" htmlFor="login-password">Password</label>
            <div className="relative">
              <input
                id="login-password"
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field pr-12"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
              <input type="checkbox" className="rounded" />
              Remember me
            </label>
            <button type="button" className="text-sm text-primary hover:text-gold font-medium transition-colors">
              Forgot password?
            </button>
          </div>

          {status === "error" && (
            <div className="bg-red-50 text-red-600 rounded-xl p-3 text-sm">
              Invalid email or password. Please try again.
            </div>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="btn-primary w-full justify-center gap-2"
          >
            {status === "loading" ? (
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <LogIn className="w-4 h-4" />
            )}
            Sign In
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don&apos;t have an account?{" "}
          <Link href="/membership/register" className="text-primary font-semibold hover:text-gold transition-colors">
            Create one free
          </Link>
        </p>

        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-center text-xs text-gray-400 mb-3">Admin? Access the admin portal</p>
          <Link href="/admin" className="btn-outline w-full justify-center text-sm py-2.5">
            Admin Dashboard
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
