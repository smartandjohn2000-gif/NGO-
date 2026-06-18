export interface EventItem {
  slug: string;
  title: string;
  description: string;
  date: string;
  endDate?: string;
  location: string;
  format: "In-person" | "Virtual" | "Hybrid";
  category: "Fundraiser" | "Volunteer Day" | "Awareness" | "Conference" | "Community";
  image: string;
  capacity?: number;
  rsvpRequired?: boolean;
}

export const events: EventItem[] = [
  {
    slug: "annual-gala-2026",
    title: "Annual Impact Gala 2026",
    description:
      "An evening of stories, music, and giving. Join donors, partners, and program alumni for our largest fundraising event of the year.",
    date: "2026-09-12T18:00:00-04:00",
    location: "Toronto, ON · Fairmont Royal York",
    format: "In-person",
    category: "Fundraiser",
    image: "/images/events/gala.jpg",
    capacity: 320,
    rsvpRequired: true,
  },
  {
    slug: "world-childrens-day-2026",
    title: "World Children's Day Walk",
    description:
      "A family-friendly walk across the waterfront to raise awareness for child protection. Bring friends, family, and your favorite picket signs.",
    date: "2026-11-20T10:00:00-05:00",
    location: "Vancouver, BC · Stanley Park",
    format: "In-person",
    category: "Awareness",
    image: "/images/events/walk.jpg",
    rsvpRequired: true,
  },
  {
    slug: "volunteer-saturday-toronto",
    title: "Volunteer Saturday: Toronto",
    description:
      "Spend a Saturday morning packing dignity kits with our team and partners. No experience needed—coffee and pastries provided.",
    date: "2026-07-19T09:00:00-04:00",
    location: "Toronto, ON · Distillery District",
    format: "In-person",
    category: "Volunteer Day",
    image: "/images/events/volunteer-day.jpg",
    rsvpRequired: true,
  },
  {
    slug: "global-girls-summit-virtual",
    title: "Global Girls' Summit (Virtual)",
    description:
      "A virtual summit convening young women, mentors, and policymakers to advance gender equality. Free and open to all.",
    date: "2026-10-11T13:00:00-04:00",
    location: "Online · Zoom",
    format: "Virtual",
    category: "Conference",
    image: "/images/events/summit.jpg",
    rsvpRequired: true,
  },
  {
    slug: "community-open-house",
    title: "Community Open House",
    description:
      "Tour our Toronto office, meet the team, and learn how to get involved. Refreshments and storytelling.",
    date: "2026-06-28T14:00:00-04:00",
    location: "Toronto, ON · 100 King St W",
    format: "In-person",
    category: "Community",
    image: "/images/events/open-house.jpg",
  },
  {
    slug: "winter-coat-drive-2025",
    title: "Winter Coat Drive (Past)",
    description:
      "Thanks to 1,400 donors, we distributed 3,800 winter coats to newcomer families across three provinces.",
    date: "2025-12-04T10:00:00-05:00",
    location: "Multi-city",
    format: "In-person",
    category: "Community",
    image: "/images/events/coat-drive.jpg",
  },
];

export function getUpcomingEvents() {
  const now = Date.now();
  return events
    .filter((e) => new Date(e.date).getTime() >= now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

export function getPastEvents() {
  const now = Date.now();
  return events
    .filter((e) => new Date(e.date).getTime() < now)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getEvent(slug: string) {
  return events.find((e) => e.slug === slug);
}
