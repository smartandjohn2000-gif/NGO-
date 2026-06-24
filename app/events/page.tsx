import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { EVENT_LIST } from "@/lib/constants";
import { formatDate } from "@/lib/utils";
import { RsvpForm } from "@/components/forms/rsvp-form";

export const metadata: Metadata = {
  title: "Events",
  description:
    "View upcoming and past events, register participation, and RSVP for World Impact Initiative events.",
  alternates: { canonical: "/events" },
};

function buildCalendarCells() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (number | null)[] = [];

  for (let i = 0; i < firstDay; i += 1) cells.push(null);
  for (let day = 1; day <= daysInMonth; day += 1) cells.push(day);
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

const calendarCells = buildCalendarCells();
const upcoming = EVENT_LIST.filter((event) => event.type === "upcoming");
const pastEvents = EVENT_LIST.filter((event) => event.type === "past");

export default function EventsPage() {
  return (
    <>
      <PageHero
        title="Events"
        subtitle="Join upcoming events, review past sessions, and engage with our global impact community."
        image="/images/events-hero-speaker.jpg"
        highlight
      />

      <div className="container-shell space-y-12 py-12 md:space-y-16 md:py-16">
        <section className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <article className="surface-card p-6">
            <SectionHeading
              eyebrow="Event Calendar"
              title="Current month overview"
              description="A quick calendar snapshot to help members plan participation."
            />
            <div className="mt-6 grid grid-cols-7 gap-2 text-center text-sm">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <p key={day} className="font-semibold text-[#0F4C81]">
                  {day}
                </p>
              ))}
              {calendarCells.map((day, index) => (
                <div
                  key={`${day}-${index}`}
                  className="rounded-lg border border-slate-100 bg-[#F7F9FC] p-2 text-slate-600"
                >
                  {day ?? ""}
                </div>
              ))}
            </div>
          </article>
          <article className="surface-card p-6">
            <SectionHeading
              eyebrow="Registration"
              title="RSVP functionality"
              description="Use the RSVP forms in each upcoming event card to register attendance."
            />
          </article>
        </section>

        <section>
          <SectionHeading
            eyebrow="Upcoming Events"
            title="Register and reserve your place"
          />
          <div className="mt-6 grid gap-4">
            {upcoming.map((event) => (
              <article key={event.id} className="surface-card p-6">
                <p className="text-xs uppercase tracking-wide text-[#F4B400]">
                  {formatDate(event.date)} · {event.location}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-[#0F4C81]">{event.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{event.description}</p>
                <div className="mt-5 rounded-xl border border-slate-100 bg-[#F7F9FC] p-4">
                  <p className="mb-3 text-sm font-semibold text-[#0F4C81]">Event Registration Form</p>
                  <RsvpForm eventId={event.id} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section>
          <SectionHeading eyebrow="Past Events" title="Learning from completed engagements" />
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {pastEvents.map((event) => (
              <article key={event.id} className="surface-card p-6">
                <p className="text-xs uppercase tracking-wide text-[#F4B400]">
                  {formatDate(event.date)} · {event.location}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-[#0F4C81]">{event.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{event.description}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
