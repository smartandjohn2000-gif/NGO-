"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  type VolunteerApplicationInput,
  volunteerApplicationSchema,
} from "@/lib/schemas";

const fieldClass =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 shadow-sm outline-none transition focus:border-[#0F4C81] focus:ring-2 focus:ring-[#0F4C81]/20";

export function VolunteerForm() {
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<VolunteerApplicationInput>({
    resolver: zodResolver(volunteerApplicationSchema),
  });

  const onSubmit = async (values: VolunteerApplicationInput) => {
    setIsSubmitting(true);
    setStatus(null);
    try {
      const response = await fetch("/api/volunteer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Unable to submit volunteer application.");
      }

      reset();
      setStatus("Your application has been submitted successfully.");
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Something went wrong.";
      setStatus(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 md:grid-cols-2" noValidate>
      <div>
        <label className="mb-2 block text-sm font-semibold text-[#0F4C81]" htmlFor="fullName">
          Full Name
        </label>
        <input id="fullName" {...register("fullName")} className={fieldClass} />
        {errors.fullName ? <p className="mt-1 text-xs text-red-600">{errors.fullName.message}</p> : null}
      </div>
      <div>
        <label className="mb-2 block text-sm font-semibold text-[#0F4C81]" htmlFor="email">
          Email
        </label>
        <input id="email" type="email" {...register("email")} className={fieldClass} />
        {errors.email ? <p className="mt-1 text-xs text-red-600">{errors.email.message}</p> : null}
      </div>
      <div>
        <label className="mb-2 block text-sm font-semibold text-[#0F4C81]" htmlFor="phone">
          Phone
        </label>
        <input id="phone" {...register("phone")} className={fieldClass} />
        {errors.phone ? <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p> : null}
      </div>
      <div>
        <label className="mb-2 block text-sm font-semibold text-[#0F4C81]" htmlFor="country">
          Country
        </label>
        <input id="country" {...register("country")} className={fieldClass} />
        {errors.country ? <p className="mt-1 text-xs text-red-600">{errors.country.message}</p> : null}
      </div>
      <div className="md:col-span-2">
        <label className="mb-2 block text-sm font-semibold text-[#0F4C81]" htmlFor="skills">
          Skills
        </label>
        <input id="skills" {...register("skills")} className={fieldClass} />
        {errors.skills ? <p className="mt-1 text-xs text-red-600">{errors.skills.message}</p> : null}
      </div>
      <div className="md:col-span-2">
        <label className="mb-2 block text-sm font-semibold text-[#0F4C81]" htmlFor="interests">
          Interests
        </label>
        <input id="interests" {...register("interests")} className={fieldClass} />
        {errors.interests ? <p className="mt-1 text-xs text-red-600">{errors.interests.message}</p> : null}
      </div>
      <div className="md:col-span-2">
        <label className="mb-2 block text-sm font-semibold text-[#0F4C81]" htmlFor="availability">
          Availability
        </label>
        <input id="availability" {...register("availability")} className={fieldClass} />
        {errors.availability ? <p className="mt-1 text-xs text-red-600">{errors.availability.message}</p> : null}
      </div>
      <div className="md:col-span-2">
        <label className="mb-2 block text-sm font-semibold text-[#0F4C81]" htmlFor="motivation">
          Motivation Statement
        </label>
        <textarea
          id="motivation"
          rows={5}
          {...register("motivation")}
          className={fieldClass}
        />
        {errors.motivation ? <p className="mt-1 text-xs text-red-600">{errors.motivation.message}</p> : null}
      </div>
      <div className="md:col-span-2 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center rounded-full bg-[#0F4C81] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#123f69] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </button>
        {status ? <p className="text-sm text-slate-600">{status}</p> : null}
      </div>
    </form>
  );
}
