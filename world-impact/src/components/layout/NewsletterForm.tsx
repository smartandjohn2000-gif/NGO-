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
    }
  };

  if (submitted) {
    return (
      <div className="flex items-center gap-3 px-5 py-3 rounded-xl" style={{ background: "rgba(255,255,255,0.15)" }}>
        <span style={{ fontSize: "1.25rem" }}>✅</span>
        <p style={{ color: "white", fontWeight: 600, fontSize: "0.9375rem" }}>
          Thanks for subscribing!
        </p>
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
        className="flex-1 md:w-64 px-4 py-3 rounded-lg outline-none transition-all"
        style={{
          background: "rgba(255,255,255,0.12)",
          border: "1px solid rgba(255,255,255,0.25)",
          color: "white",
          fontSize: "0.9375rem",
        }}
        aria-label="Email address for newsletter"
      />
      <button
        type="submit"
        className="btn-gold whitespace-nowrap flex items-center gap-2 px-5 py-3"
        style={{ fontSize: "0.9375rem" }}
      >
        Subscribe
        <ArrowRight className="w-4 h-4" />
      </button>
    </form>
  );
}
