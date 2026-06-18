"use client";

import { useState } from "react";
import Image from "next/image";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import { eventCategories, getUpcomingEvents, getPastEvents } from "@/lib/data/events";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { formatDate, cn } from "@/lib/utils";

export default function EventsPage() {
  const [tab, setTab] = useState<"upcoming" | "past">("upcoming");
  const [category, setCategory] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [rsvpStatus, setRsvpStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const source = tab === "upcoming" ? getUpcomingEvents() : getPastEvents();
  const filtered = source.filter((e) => category === "All" || e.category === category);

  async function handleRSVP(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setRsvpStatus("loading");
    const form = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/events/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          event_id: selectedEvent,
          full_name: form.get("full_name"),
          email: form.get("email"),
          phone: form.get("phone"),
          guests: form.get("guests"),
        }),
      });
      setRsvpStatus(res.ok ? "success" : "error");
    } catch {
      setRsvpStatus("error");
    }
  }

  return (
    <>
      <section className="gradient-primary text-white py-20 md:py-28">
        <div className="container-narrow">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Events</h1>
          <p className="text-xl text-white/80">Join us at upcoming events and community gatherings.</p>
        </div>
      </section>

      <Section background="surface">
        <SectionHeader title="Event Calendar" subtitle={`${getUpcomingEvents().length} upcoming events scheduled.`} />
        <div className="grid grid-cols-7 gap-1 max-w-2xl mx-auto mb-4">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
            <div key={d} className="text-center text-xs font-medium text-muted py-2">{d}</div>
          ))}
          {Array.from({ length: 35 }, (_, i) => {
            const day = i - 2;
            const hasEvent = day > 0 && day <= 30 && [5, 12, 18, 20, 28].includes(day);
            return (
              <div
                key={i}
                className={cn(
                  "aspect-square flex items-center justify-center text-sm rounded-lg",
                  day > 0 && day <= 30 ? "hover:bg-primary/10 cursor-default" : "text-transparent",
                  hasEvent && "bg-accent/20 font-bold text-primary"
                )}
              >
                {day > 0 && day <= 30 ? day : ""}
              </div>
            );
          })}
        </div>
      </Section>

      <Section>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex gap-2">
            {(["upcoming", "past"] as const).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                className={cn(
                  "px-5 py-2 rounded-lg font-medium capitalize transition-colors",
                  tab === t ? "bg-primary text-white" : "bg-surface text-muted"
                )}
              >
                {t} Events
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {eventCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={cn(
                  "px-3 py-1.5 rounded-full text-xs font-medium transition-colors",
                  category === cat ? "bg-accent text-primary" : "bg-surface text-muted"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((event) => (
            <Card key={event.id} className="overflow-hidden">
              <div className="relative h-48">
                <Image src={event.image} alt={event.title} fill className="object-cover" sizes="50vw" />
              </div>
              <div className="p-6">
                <span className="text-accent text-xs font-medium uppercase">{event.category}</span>
                <h2 className="text-xl font-bold text-primary mt-1 mb-3">{event.title}</h2>
                <p className="text-muted text-sm mb-4">{event.description}</p>
                <div className="space-y-2 text-sm text-muted mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" aria-hidden="true" />
                    {formatDate(event.date)}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" aria-hidden="true" />
                    {new Date(event.date).toLocaleTimeString("en-CA", { hour: "2-digit", minute: "2-digit" })}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" aria-hidden="true" />
                    {event.location}
                  </div>
                </div>
                {!event.isPast && (
                  <button
                    type="button"
                    onClick={() => { setSelectedEvent(event.id); setRsvpStatus("idle"); }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors"
                  >
                    <Users className="w-4 h-4" aria-hidden="true" />
                    RSVP / Register
                  </button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {selectedEvent && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4" role="dialog" aria-modal="true">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold text-primary mb-4">Event Registration</h3>
            <form onSubmit={handleRSVP} className="space-y-4">
              <input name="full_name" required placeholder="Full Name" className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none focus:border-primary" />
              <input name="email" type="email" required placeholder="Email" className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none focus:border-primary" />
              <input name="phone" placeholder="Phone" className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none focus:border-primary" />
              <input name="guests" type="number" min="1" defaultValue="1" placeholder="Number of guests" className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none focus:border-primary" />
              <div className="flex gap-3">
                <button type="submit" disabled={rsvpStatus === "loading"} className="flex-1 py-3 bg-primary text-white rounded-lg font-medium disabled:opacity-50">
                  {rsvpStatus === "loading" ? "Submitting..." : "Submit RSVP"}
                </button>
                <button type="button" onClick={() => setSelectedEvent(null)} className="px-4 py-3 border rounded-lg text-muted">
                  Cancel
                </button>
              </div>
              {rsvpStatus === "success" && <p className="text-green-600 text-sm">Registration successful! We&apos;ll be in touch.</p>}
              {rsvpStatus === "error" && <p className="text-red-600 text-sm">Registration failed. Please try again.</p>}
            </form>
          </div>
        </div>
      )}
    </>
  );
}
