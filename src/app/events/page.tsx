import type { Metadata } from "next";
import { CalendarDays, MapPin } from "lucide-react";
import { ActionForm } from "@/components/forms";
import { submitEventRsvp } from "@/app/actions";
import { events } from "@/lib/content";

export const metadata: Metadata = {
  title: "Events",
  description:
    "View upcoming and past World Impact Initiative events, orientations, roundtables, and humanitarian forums."
};

export default function EventsPage() {
  const upcoming = events.filter((event) => event.type === "Upcoming");
  const past = events.filter((event) => event.type === "Past");

  return (
    <>
      <section className="hero-pattern section text-white">
        <div className="container max-w-5xl">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-[#F4B400]">Events</p>
          <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-7xl">
            Gatherings that mobilize volunteers, partners, and communities.
          </h1>
        </div>
      </section>
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[1fr_380px]">
          <div>
            <h2 className="section-title">Upcoming Events</h2>
            <div className="mt-8 grid gap-5">
              {upcoming.map((event) => (
                <article key={event.title} className="card grid gap-6 p-6 sm:grid-cols-[120px_1fr]">
                  <div className="rounded-3xl bg-[#0F4C81] p-5 text-center text-white">
                    <CalendarDays className="mx-auto text-[#F4B400]" aria-hidden />
                    <p className="mt-3 text-lg font-black">{event.date}</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black">{event.title}</h3>
                    <p className="mt-3 flex items-center gap-2 font-bold text-[#0F4C81]">
                      <MapPin size={18} aria-hidden /> {event.location}
                    </p>
                    <p className="mt-3 leading-7 text-slate-600">{event.description}</p>
                  </div>
                </article>
              ))}
            </div>
            <h2 className="mt-12 text-3xl font-black">Past Events</h2>
            <div className="mt-6 grid gap-4">
              {past.map((event) => (
                <article key={event.title} className="rounded-3xl bg-[#F7F9FC] p-6">
                  <p className="text-sm font-black text-[#0F4C81]">{event.date}</p>
                  <h3 className="mt-2 text-xl font-black">{event.title}</h3>
                  <p className="mt-2 text-slate-600">{event.description}</p>
                </article>
              ))}
            </div>
          </div>
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <ActionForm
              action={submitEventRsvp}
              submitLabel="Submit RSVP"
              fields={[
                { name: "event_title", label: "Event", placeholder: "Event name", required: true },
                { name: "full_name", label: "Full Name", required: true },
                { name: "email", label: "Email", type: "email", required: true },
                { name: "phone", label: "Phone", type: "tel" }
              ]}
            />
          </aside>
        </div>
      </section>
    </>
  );
}
