"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newsletterSchema } from "@/lib/schemas";

type NewsletterFormValues = { email: string };

export function NewsletterForm() {
  const [message, setMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (values: NewsletterFormValues) => {
    setIsSubmitting(true);
    setMessage(null);
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => null);
        throw new Error(payload?.message ?? "Subscription failed.");
      }

      setMessage("Thanks for subscribing. You will receive our latest updates.");
      reset();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Subscription failed.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3" noValidate>
      <label htmlFor="newsletter-email" className="text-sm font-semibold text-[#0F4C81]">
        Newsletter Signup
      </label>
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          id="newsletter-email"
          type="email"
          placeholder="you@example.org"
          {...register("email")}
          className="w-full rounded-full border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#0F4C81]"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-full bg-[#0F4C81] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#123f69] disabled:opacity-70"
        >
          {isSubmitting ? "Submitting..." : "Subscribe"}
        </button>
      </div>
      {errors.email ? <p className="text-xs text-red-600">{errors.email.message}</p> : null}
      {message ? <p className="text-xs text-slate-600">{message}</p> : null}
    </form>
  );
}
