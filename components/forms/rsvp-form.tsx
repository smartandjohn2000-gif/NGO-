"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { eventRsvpSchema, type EventRsvpInput } from "@/lib/schemas";

type RsvpFormProps = {
  eventId: string;
};

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 shadow-sm outline-none transition focus:border-[#0F4C81] focus:ring-2 focus:ring-[#0F4C81]/20";

export function RsvpForm({ eventId }: RsvpFormProps) {
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EventRsvpInput>({
    resolver: zodResolver(eventRsvpSchema),
    defaultValues: { eventId, attendees: 1 },
  });

  const onSubmit = async (values: EventRsvpInput) => {
    setLoading(true);
    setStatus(null);
    try {
      const response = await fetch("/api/events/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("RSVP failed. Please try again.");
      }

      setStatus("RSVP received. We look forward to seeing you.");
      reset({ eventId, attendees: 1, fullName: "", email: "", notes: "" });
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Unexpected error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-3 md:grid-cols-2" noValidate>
      <input type="hidden" value={eventId} {...register("eventId")} />
      <div>
        <label className="mb-1 block text-sm font-semibold text-[#0F4C81]" htmlFor={`rsvp-name-${eventId}`}>
          Full Name
        </label>
        <input id={`rsvp-name-${eventId}`} {...register("fullName")} className={inputClass} />
        {errors.fullName ? <p className="mt-1 text-xs text-red-600">{errors.fullName.message}</p> : null}
      </div>
      <div>
        <label className="mb-1 block text-sm font-semibold text-[#0F4C81]" htmlFor={`rsvp-email-${eventId}`}>
          Email
        </label>
        <input id={`rsvp-email-${eventId}`} type="email" {...register("email")} className={inputClass} />
        {errors.email ? <p className="mt-1 text-xs text-red-600">{errors.email.message}</p> : null}
      </div>
      <div>
        <label className="mb-1 block text-sm font-semibold text-[#0F4C81]" htmlFor={`rsvp-attendees-${eventId}`}>
          Attendees
        </label>
        <input
          id={`rsvp-attendees-${eventId}`}
          type="number"
          min={1}
          max={10}
          {...register("attendees", { valueAsNumber: true })}
          className={inputClass}
        />
        {errors.attendees ? <p className="mt-1 text-xs text-red-600">{errors.attendees.message}</p> : null}
      </div>
      <div>
        <label className="mb-1 block text-sm font-semibold text-[#0F4C81]" htmlFor={`rsvp-notes-${eventId}`}>
          Notes (optional)
        </label>
        <input id={`rsvp-notes-${eventId}`} {...register("notes")} className={inputClass} />
      </div>
      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={loading}
          className="inline-flex rounded-full bg-[#0F4C81] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#123f69] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? "Submitting..." : "RSVP"}
        </button>
        {status ? <p className="mt-2 text-sm text-slate-600">{status}</p> : null}
      </div>
    </form>
  );
}
