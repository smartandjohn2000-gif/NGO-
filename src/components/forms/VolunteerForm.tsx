"use client";

import { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const interestOptions = [
  "Child Protection",
  "Gender Equality",
  "Youth Empowerment",
  "Disability Inclusion",
  "Health & Education",
  "Crisis Response",
  "Communications",
  "Fundraising",
  "Events",
];

const availabilityOptions = [
  "Weekdays",
  "Weekends",
  "Evenings",
  "Flexible",
  "1-2 hours/week",
  "3-5 hours/week",
  "6+ hours/week",
];

export function VolunteerForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const fd = new FormData(e.currentTarget);
    const interests = fd.getAll("interests");
    const payload = Object.fromEntries(fd.entries());
    (payload as Record<string, unknown>).interests = interests;

    try {
      const res = await fetch("/api/volunteer", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Submission failed");
      }
      setStatus("success");
      setMessage(
        "Thank you for stepping forward. A coordinator will be in touch within 3 business days."
      );
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setStatus("error");
      setMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-5"
      aria-describedby="volunteer-form-status"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" name="full_name" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" />
        <Field label="Country" name="country" required defaultValue="Canada" />
      </div>
      <Field label="Skills (comma separated)" name="skills" placeholder="e.g. teaching, design, translation" />

      <fieldset>
        <legend className="text-sm font-semibold text-ink-700">
          Interests
        </legend>
        <div className="mt-2 grid gap-2 sm:grid-cols-3">
          {interestOptions.map((opt) => (
            <label
              key={opt}
              className="inline-flex items-center gap-2 rounded-lg ring-1 ring-ink-200 bg-white px-3 py-2 text-sm cursor-pointer hover:ring-brand-300"
            >
              <input
                type="checkbox"
                name="interests"
                value={opt}
                className="h-4 w-4 accent-brand-700"
              />
              {opt}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="block">
        <span className="text-sm font-semibold text-ink-700">Availability</span>
        <select
          name="availability"
          required
          className="mt-1 w-full rounded-lg ring-1 ring-ink-200 px-3 py-2.5 bg-white focus:outline-2 focus:outline-brand-400"
          defaultValue=""
        >
          <option value="" disabled>
            Choose an option
          </option>
          {availabilityOptions.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="text-sm font-semibold text-ink-700">
          Motivation Statement
        </span>
        <textarea
          name="motivation"
          rows={5}
          required
          minLength={40}
          className="mt-1 w-full rounded-lg ring-1 ring-ink-200 px-3 py-2.5 focus:outline-2 focus:outline-brand-400"
          placeholder="Tell us why you want to volunteer with World Impact Initiative…"
        />
      </label>

      <label className="inline-flex items-start gap-2 text-sm text-ink-600">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 h-4 w-4 accent-brand-700"
        />
        <span>
          I consent to World Impact Initiative contacting me about volunteer
          opportunities and storing my information in accordance with their
          privacy policy.
        </span>
      </label>

      <div className="flex items-center justify-between gap-4">
        <p
          id="volunteer-form-status"
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
              <Loader2 className="h-4 w-4 animate-spin" /> Submitting…
            </>
          ) : (
            "Submit Application"
          )}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
  defaultValue,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  defaultValue?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-ink-700">
        {label}{required && <span className="text-red-500"> *</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className="mt-1 w-full rounded-lg ring-1 ring-ink-200 px-3 py-2.5 focus:outline-2 focus:outline-brand-400"
      />
    </label>
  );
}
