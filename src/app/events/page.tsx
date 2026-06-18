import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, Globe2, Users, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/motion/Reveal";
import { getUpcomingEvents, getPastEvents, type EventItem } from "@/lib/events";
import { formatDate } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Upcoming and past events from World Impact Initiative—galas, walks, summits, and volunteer days. RSVP to join us.",
  alternates: { canonical: "/events" },
};

function formatEventDate(iso: string) {
  return new Date(iso).toLocaleString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function EventCard({ event, past = false }: { event: EventItem; past?: boolean }) {
  return (
    <article
      className={`group h-full overflow-hidden rounded-3xl ring-1 ring-ink-100 bg-white shadow-[0_2px_24px_rgba(7,34,60,0.05)] hover:shadow-[0_18px_40px_rgba(7,34,60,0.1)] transition ${
        past ? "opacity-90" : ""
      }`}
    >
      <div className="relative aspect-[16/9] bg-ink-100 overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 flex flex-col rounded-2xl bg-white/95 backdrop-blur p-3 text-center shadow">
          <span className="text-[0.65rem] uppercase tracking-widest text-brand-700 font-bold">
            {new Date(event.date).toLocaleString("en-CA", { month: "short" })}
          </span>
          <span className="text-2xl font-extrabold text-brand-900 leading-none mt-0.5">
            {new Date(event.date).getDate()}
          </span>
        </div>
        <span className="absolute top-4 right-4 rounded-full bg-gold-400 text-brand-900 text-xs font-bold px-2.5 py-1">
          {event.category}
        </span>
      </div>
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-700">
          {event.format}
        </p>
        <h3 className="mt-1 text-lg md:text-xl font-bold text-brand-900">
          {event.title}
        </h3>
        <p className="mt-2 text-sm text-ink-600 line-clamp-3">
          {event.description}
        </p>
        <ul className="mt-4 space-y-1.5 text-sm text-ink-600">
          <li className="inline-flex items-center gap-2">
            <Calendar className="h-4 w-4 text-brand-700" aria-hidden="true" />
            {formatEventDate(event.date)}
          </li>
          <li className="flex items-start gap-2">
            {event.format === "Virtual" ? (
              <Globe2 className="h-4 w-4 text-brand-700 mt-0.5" aria-hidden="true" />
            ) : (
              <MapPin className="h-4 w-4 text-brand-700 mt-0.5" aria-hidden="true" />
            )}
            <span>{event.location}</span>
          </li>
          {event.capacity && (
            <li className="inline-flex items-center gap-2">
              <Users className="h-4 w-4 text-brand-700" aria-hidden="true" />
              Capacity: {event.capacity}
            </li>
          )}
        </ul>
        {!past && (
          <div className="mt-5">
            <Link
              href={`#rsvp-${event.slug}`}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
            >
              {event.rsvpRequired ? "RSVP & Register" : "View details"}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        )}
      </div>
    </article>
  );
}

export default function EventsPage() {
  const upcoming = getUpcomingEvents();
  const past = getPastEvents();

  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Gatherings that turn community into action."
        description="From galas to walks to volunteer Saturdays—come meet our team, our partners, and the people behind the impact."
        crumbs={[{ label: "Events" }]}
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="container-page">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-700">
                  Upcoming Events
                </p>
                <h2 className="mt-2 text-3xl md:text-4xl font-bold text-brand-900">
                  Mark your calendar
                </h2>
              </div>
              <p className="text-sm text-ink-500">
                {upcoming.length} upcoming event{upcoming.length !== 1 ? "s" : ""}
              </p>
            </div>
          </Reveal>
          <StaggerContainer className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {upcoming.map((e) => (
              <StaggerItem key={e.slug}>
                <EventCard event={e} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* RSVP form */}
      <section id="rsvp" className="py-16 md:py-20 bg-ink-50">
        <div className="container-page">
          <Reveal>
            <div className="max-w-3xl mx-auto rounded-3xl bg-white ring-1 ring-ink-100 p-8 md:p-10 shadow-[0_2px_24px_rgba(7,34,60,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-700">
                RSVP
              </p>
              <h2 className="mt-2 text-2xl md:text-3xl font-bold text-brand-900">
                Reserve your spot
              </h2>
              <p className="mt-2 text-ink-600">
                Tell us which event you&rsquo;d like to join and we&rsquo;ll be in touch
                with details.
              </p>
              <form
                method="post"
                action="/api/events/rsvp"
                className="mt-6 grid gap-4 sm:grid-cols-2"
              >
                <label className="block">
                  <span className="text-sm font-semibold text-ink-700">Full Name</span>
                  <input
                    name="name"
                    required
                    className="mt-1 w-full rounded-lg ring-1 ring-ink-200 px-3 py-2.5 focus:outline-2 focus:outline-brand-400"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-semibold text-ink-700">Email</span>
                  <input
                    type="email"
                    name="email"
                    required
                    className="mt-1 w-full rounded-lg ring-1 ring-ink-200 px-3 py-2.5 focus:outline-2 focus:outline-brand-400"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-sm font-semibold text-ink-700">Event</span>
                  <select
                    name="event"
                    required
                    className="mt-1 w-full rounded-lg ring-1 ring-ink-200 px-3 py-2.5 focus:outline-2 focus:outline-brand-400 bg-white"
                  >
                    {upcoming.map((e) => (
                      <option key={e.slug} value={e.slug}>
                        {e.title} — {formatDate(e.date)}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="text-sm font-semibold text-ink-700">Number of guests</span>
                  <input
                    type="number"
                    name="guests"
                    min={1}
                    defaultValue={1}
                    className="mt-1 w-full rounded-lg ring-1 ring-ink-200 px-3 py-2.5 focus:outline-2 focus:outline-brand-400"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-semibold text-ink-700">Phone (optional)</span>
                  <input
                    name="phone"
                    className="mt-1 w-full rounded-lg ring-1 ring-ink-200 px-3 py-2.5 focus:outline-2 focus:outline-brand-400"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-sm font-semibold text-ink-700">Notes</span>
                  <textarea
                    name="notes"
                    rows={3}
                    className="mt-1 w-full rounded-lg ring-1 ring-ink-200 px-3 py-2.5 focus:outline-2 focus:outline-brand-400"
                  />
                </label>
                <div className="sm:col-span-2 flex items-center justify-end">
                  <button
                    type="submit"
                    className="rounded-full bg-brand-800 hover:bg-brand-900 text-white px-6 py-3 text-sm font-semibold"
                  >
                    Confirm RSVP
                  </button>
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container-page">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-700">
              Past Events
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-brand-900">
              A look back
            </h2>
          </Reveal>
          <StaggerContainer className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {past.map((e) => (
              <StaggerItem key={e.slug}>
                <EventCard event={e} past />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-16 bg-brand-900 text-white">
        <div className="container-page text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Want to host an event with us?
          </h2>
          <p className="mt-3 text-white/80 max-w-xl mx-auto">
            From speaker series to community fundraisers—our team can help.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/contact?subject=event" variant="gold">
              Contact Events Team
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
