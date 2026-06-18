"use client";

import { useState } from "react";
import Link from "next/link";
import { Globe, Eye, EyeOff, UserPlus, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "", email: "", password: "", country: "", phone: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // In production: use Supabase auth
    // const supabase = createSupabaseBrowserClient();
    // const { error } = await supabase.auth.signUp({ email: formData.email, password: formData.password, options: { data: { full_name: formData.fullName } } });
    setTimeout(() => setStatus("success"), 1000); // Demo
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-md"
      >
        {status === "success" ? (
          <div className="text-center py-8">
            <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-heading font-bold text-primary mb-2">Account Created!</h2>
            <p className="text-gray-600 mb-6">
              Please check your email to verify your account, then sign in.
            </p>
            <Link href="/membership/login" className="btn-primary w-full justify-center">
              Sign In Now
            </Link>
          </div>
        ) : (
          <>
            {/* Logo */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-2xl font-heading font-bold text-primary">Create Account</h1>
              <p className="text-gray-500 mt-1">Join the World Impact Initiative community</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="label" htmlFor="reg-name">Full Name *</label>
                <input
                  id="reg-name"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="input-field"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="label" htmlFor="reg-email">Email Address *</label>
                <input
                  id="reg-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="input-field"
                  placeholder="your@email.com"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="label" htmlFor="reg-country">Country *</label>
                  <input
                    id="reg-country"
                    type="text"
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="input-field"
                    placeholder="Country"
                  />
                </div>
                <div>
                  <label className="label" htmlFor="reg-phone">Phone</label>
                  <input
                    id="reg-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="input-field"
                    placeholder="+1 (000) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="label" htmlFor="reg-password">Password *</label>
                <div className="relative">
                  <input
                    id="reg-password"
                    type={showPassword ? "text" : "password"}
                    required
                    minLength={8}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="input-field pr-12"
                    placeholder="Min. 8 characters"
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

              <label className="flex items-start gap-2 text-sm text-gray-600 cursor-pointer">
                <input type="checkbox" required className="mt-0.5 rounded" />
                <span>
                  I agree to the{" "}
                  <Link href="/terms" className="text-primary hover:text-gold">Terms of Use</Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-primary hover:text-gold">Privacy Policy</Link>
                </span>
              </label>

              {status === "error" && (
                <div className="bg-red-50 text-red-600 rounded-xl p-3 text-sm">
                  Something went wrong. Please try again.
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-gold w-full justify-center gap-2"
              >
                {status === "loading" ? (
                  <div className="w-4 h-4 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                ) : (
                  <UserPlus className="w-4 h-4" />
                )}
                Create Free Account
              </button>
            </form>

            <p className="text-center text-sm text-gray-500 mt-6">
              Already a member?{" "}
              <Link href="/membership/login" className="text-primary font-semibold hover:text-gold transition-colors">
                Sign in
              </Link>
            </p>
          </>
        )}
      </motion.div>
    </div>
  );
}
