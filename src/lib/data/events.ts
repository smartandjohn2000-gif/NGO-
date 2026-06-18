import type { Event } from "@/types";

export const events: Event[] = [
  {
    id: "evt-001",
    title: "World Refugee Day Community Gathering",
    description:
      "Join us for a community celebration honoring the resilience of refugees with cultural performances, beneficiary stories, and fundraising for crisis response programs.",
    date: "2026-06-20T14:00:00",
    endDate: "2026-06-20T18:00:00",
    location: "Community Center, Toronto, ON",
    category: "Community",
    image: "/images/events/refugee-day.jpg",
    isPast: false,
  },
  {
    id: "evt-002",
    title: "Youth Skills Training Open House",
    description:
      "Explore our youth empowerment programs, meet mentors, and register for upcoming technical skills training cohorts.",
    date: "2026-07-12T10:00:00",
    endDate: "2026-07-12T16:00:00",
    location: "WII Training Center, Vancouver, BC",
    category: "Programs",
    image: "/images/events/youth-open-house.jpg",
    isPast: false,
  },
  {
    id: "evt-003",
    title: "Annual Fundraising Gala",
    description:
      "Our premier fundraising event featuring keynote speakers, impact presentations, silent auction, and networking with supporters and partners.",
    date: "2026-09-18T18:00:00",
    endDate: "2026-09-18T22:00:00",
    location: "Fairmont Hotel, Ottawa, ON",
    category: "Fundraising",
    image: "/images/events/gala.jpg",
    isPast: false,
  },
  {
    id: "evt-004",
    title: "Disability Inclusion Workshop",
    description:
      "A hands-on workshop for community leaders and educators on creating accessible, inclusive environments for persons with disabilities.",
    date: "2026-08-05T09:00:00",
    endDate: "2026-08-05T17:00:00",
    location: "Online (Virtual)",
    category: "Training",
    image: "/images/events/inclusion-workshop.jpg",
    isPast: false,
  },
  {
    id: "evt-005",
    title: "Volunteer Orientation Session",
    description:
      "New volunteer orientation covering our mission, programs, safety protocols, and available volunteer opportunities across Canada.",
    date: "2026-06-28T13:00:00",
    endDate: "2026-06-28T16:00:00",
    location: "WII Office, Montreal, QC",
    category: "Volunteers",
    image: "/images/events/volunteer-orientation.jpg",
    isPast: false,
  },
  {
    id: "evt-006",
    title: "Gender Equality Summit 2025",
    description:
      "Our annual summit brought together 300 advocates, practitioners, and community leaders to advance gender equality initiatives.",
    date: "2025-11-15T09:00:00",
    endDate: "2025-11-16T17:00:00",
    location: "Convention Center, Calgary, AB",
    category: "Community",
    image: "/images/events/gender-summit.jpg",
    isPast: true,
  },
  {
    id: "evt-007",
    title: "Holiday Gift Drive 2025",
    description:
      "Community gift drive providing essential items and holiday cheer to 500 families in underserved communities.",
    date: "2025-12-10T10:00:00",
    endDate: "2025-12-20T18:00:00",
    location: "Multiple Locations, Canada",
    category: "Community",
    image: "/images/events/gift-drive.jpg",
    isPast: true,
  },
];

export const eventCategories = ["All", "Community", "Programs", "Fundraising", "Training", "Volunteers"];

export function getUpcomingEvents(): Event[] {
  return events.filter((e) => !e.isPast);
}

export function getPastEvents(): Event[] {
  return events.filter((e) => e.isPast);
}

export function getEventById(id: string): Event | undefined {
  return events.find((e) => e.id === id);
}
