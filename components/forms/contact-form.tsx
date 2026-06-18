"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactInput } from "@/lib/schemas";

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 shadow-sm outline-none transition focus:border-[#0F4C81] focus:ring-2 focus:ring-[#0F4C81]/20";

export function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (values: ContactInput) => {
    setIsSubmitting(true);
    setStatus(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) {
        throw new Error("Could not send message.");
      }
      setStatus("Message sent successfully. We will get back to you soon.");
      reset();
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 rounded-2xl bg-white p-6 shadow-lg" noValidate>
      <h3 className="text-xl font-semibold text-[#0F4C81]">Send us a message</h3>
      <div>
        <label className="mb-2 block text-sm font-semibold text-[#0F4C81]" htmlFor="contact-name">
          Full Name
        </label>
        <input id="contact-name" {...register("fullName")} className={inputClass} />
        {errors.fullName ? <p className="mt-1 text-xs text-red-600">{errors.fullName.message}</p> : null}
      </div>
      <div>
        <label className="mb-2 block text-sm font-semibold text-[#0F4C81]" htmlFor="contact-email">
          Email
        </label>
        <input id="contact-email" type="email" {...register("email")} className={inputClass} />
        {errors.email ? <p className="mt-1 text-xs text-red-600">{errors.email.message}</p> : null}
      </div>
      <div>
        <label className="mb-2 block text-sm font-semibold text-[#0F4C81]" htmlFor="contact-subject">
          Subject
        </label>
        <input id="contact-subject" {...register("subject")} className={inputClass} />
        {errors.subject ? <p className="mt-1 text-xs text-red-600">{errors.subject.message}</p> : null}
      </div>
      <div>
        <label className="mb-2 block text-sm font-semibold text-[#0F4C81]" htmlFor="contact-message">
          Message
        </label>
        <textarea id="contact-message" rows={5} {...register("message")} className={inputClass} />
        {errors.message ? <p className="mt-1 text-xs text-red-600">{errors.message.message}</p> : null}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center rounded-full bg-[#0F4C81] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#123f69] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Sending..." : "Submit"}
      </button>
      {status ? <p className="text-sm text-slate-600">{status}</p> : null}
    </form>
  );
}
