"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const subjects = [
  "General inquiry",
  "Partnership",
  "Media",
  "Volunteer",
  "Donation question",
  "Event",
  "Programs",
  "Other",
];

export function ContactForm() {
  const params = useSearchParams();
  const initialSubject = params.get("subject");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
      setMessage("Thank you. We'll be in touch within 1–2 business days.");
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again or email us directly.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-semibold text-ink-700">
            Full Name <span className="text-red-500">*</span>
          </span>
          <input
            name="name"
            required
            className="mt-1 w-full rounded-lg ring-1 ring-ink-200 px-3 py-2.5 focus:outline-2 focus:outline-brand-400"
          />
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-ink-700">
            Email <span className="text-red-500">*</span>
          </span>
          <input
            type="email"
            name="email"
            required
            className="mt-1 w-full rounded-lg ring-1 ring-ink-200 px-3 py-2.5 focus:outline-2 focus:outline-brand-400"
          />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-semibold text-ink-700">
            Organization (optional)
          </span>
          <input
            name="organization"
            className="mt-1 w-full rounded-lg ring-1 ring-ink-200 px-3 py-2.5 focus:outline-2 focus:outline-brand-400"
          />
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-ink-700">
            Subject <span className="text-red-500">*</span>
          </span>
          <select
            name="subject"
            required
            defaultValue={
              initialSubject &&
              subjects.find((s) => s.toLowerCase().includes(initialSubject.toLowerCase()))
                ? subjects.find((s) =>
                    s.toLowerCase().includes(initialSubject.toLowerCase())
                  )
                : ""
            }
            className="mt-1 w-full rounded-lg ring-1 ring-ink-200 px-3 py-2.5 focus:outline-2 focus:outline-brand-400 bg-white"
          >
            <option value="" disabled>
              Choose a topic
            </option>
            {subjects.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="block">
        <span className="text-sm font-semibold text-ink-700">
          Message <span className="text-red-500">*</span>
        </span>
        <textarea
          name="message"
          rows={6}
          required
          minLength={20}
          className="mt-1 w-full rounded-lg ring-1 ring-ink-200 px-3 py-2.5 focus:outline-2 focus:outline-brand-400"
        />
      </label>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
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
          className="inline-flex items-center gap-2 rounded-full bg-brand-800 hover:bg-brand-900 text-white px-7 py-3 text-sm font-semibold disabled:opacity-60"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Sending…
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </div>
    </form>
  );
}
