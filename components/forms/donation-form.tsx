"use client";

import { useState } from "react";
import { CreditCard, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { donationSchema } from "@/lib/schemas";

const PRESET_AMOUNTS = [25, 50, 100, 250] as const;

const DESIGNATIONS = [
  "Where it's needed most",
  "Child Protection & Human Rights",
  "Youth Empowerment & Skills",
  "Gender Equality & Protection",
  "Disability Inclusion",
  "Health & Education",
  "Crisis Response & Relief",
] as const;

const fieldClass =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 shadow-sm outline-none transition focus:border-[#0F4C81] focus:ring-2 focus:ring-[#0F4C81]/20";

export function DonationForm() {
  const [frequency, setFrequency] = useState<"one_time" | "monthly">("one_time");
  const [selectedPreset, setSelectedPreset] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [designation, setDesignation] = useState<string>(DESIGNATIONS[0]);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const amount = selectedPreset ?? Number.parseFloat(customAmount);

  const onSubmit = async (formEvent: React.FormEvent) => {
    formEvent.preventDefault();
    setError(null);

    const parsed = donationSchema.safeParse({
      amount: Number.isFinite(amount) ? amount : undefined,
      frequency,
      fullName: fullName || undefined,
      email,
      designation: designation === DESIGNATIONS[0] ? undefined : designation,
    });

    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Please check the form.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const data = (await response.json()) as { url?: string; message?: string };

      if (!response.ok || !data.url) {
        throw new Error(data.message ?? "Unable to start the donation.");
      }

      window.location.href = data.url;
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Something went wrong. Please try again.",
      );
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6" noValidate>
      <div className="grid grid-cols-2 gap-2 rounded-full bg-[#F1F5FB] p-1">
        {(
          [
            { key: "one_time", label: "One-Time" },
            { key: "monthly", label: "Monthly" },
          ] as const
        ).map((option) => (
          <button
            key={option.key}
            type="button"
            onClick={() => setFrequency(option.key)}
            className={cn(
              "rounded-full px-4 py-2.5 text-sm font-semibold transition",
              frequency === option.key
                ? "bg-[#0F4C81] text-white shadow"
                : "text-[#0F4C81] hover:bg-white",
            )}
          >
            {option.label}
          </button>
        ))}
      </div>

      <div>
        <span className="mb-2 block text-sm font-semibold text-[#0F4C81]">
          Choose an amount (CAD)
        </span>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {PRESET_AMOUNTS.map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => {
                setSelectedPreset(value);
                setCustomAmount("");
              }}
              className={cn(
                "rounded-xl border px-4 py-3 text-sm font-semibold transition",
                selectedPreset === value
                  ? "border-[#0F4C81] bg-[#0F4C81] text-white"
                  : "border-slate-200 bg-white text-[#0F4C81] hover:border-[#0F4C81]",
              )}
            >
              ${value}
            </button>
          ))}
        </div>
        <div className="mt-3">
          <label className="mb-2 block text-sm font-semibold text-[#0F4C81]" htmlFor="customAmount">
            Or enter a custom amount
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-500">
              $
            </span>
            <input
              id="customAmount"
              inputMode="decimal"
              placeholder="Custom amount"
              value={customAmount}
              onChange={(changeEvent) => {
                setCustomAmount(changeEvent.target.value);
                setSelectedPreset(null);
              }}
              className={cn(fieldClass, "pl-8")}
            />
          </div>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-[#0F4C81]" htmlFor="donorName">
            Full Name <span className="font-normal text-slate-400">(optional)</span>
          </label>
          <input
            id="donorName"
            value={fullName}
            onChange={(changeEvent) => setFullName(changeEvent.target.value)}
            className={fieldClass}
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-semibold text-[#0F4C81]" htmlFor="donorEmail">
            Email
          </label>
          <input
            id="donorEmail"
            type="email"
            required
            value={email}
            onChange={(changeEvent) => setEmail(changeEvent.target.value)}
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-[#0F4C81]" htmlFor="designation">
          Direct my gift to
        </label>
        <select
          id="designation"
          value={designation}
          onChange={(changeEvent) => setDesignation(changeEvent.target.value)}
          className={fieldClass}
        >
          {DESIGNATIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {error ? (
        <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0F4C81] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#123f69] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={18} className="animate-spin" /> Redirecting to secure checkout…
          </>
        ) : (
          <>
            <CreditCard size={18} /> Donate{" "}
            {Number.isFinite(amount) && amount > 0 ? `$${amount}` : ""}
            {frequency === "monthly" ? " / month" : ""}
          </>
        )}
      </button>
      <p className="text-center text-xs text-slate-500">
        Payments are processed securely by Stripe. Your card details never touch our servers.
      </p>
    </form>
  );
}
