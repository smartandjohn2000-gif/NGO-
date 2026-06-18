"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  if (submitted) {
    return (
      <div className="flex items-center gap-3 bg-white/10 rounded-xl px-5 py-3">
        <span className="text-2xl">✅</span>
        <p className="text-white font-medium">Thanks for subscribing!</p>
      </div>
    );
  }

  return (
    <form className="flex gap-3 w-full md:w-auto" onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        required
        className="px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 flex-1 md:w-64 outline-none focus:ring-2 focus:ring-white/30"
        aria-label="Email address for newsletter"
      />
      <button type="submit" className="btn-gold whitespace-nowrap flex items-center gap-2">
        Subscribe <ArrowRight className="w-4 h-4" />
      </button>
    </form>
  );
}
