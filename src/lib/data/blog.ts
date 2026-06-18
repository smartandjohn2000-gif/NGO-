import type { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    slug: "expanding-youth-programs-across-canada",
    title: "Expanding Youth Programs Across Canada",
    excerpt:
      "World Impact Initiative announces the expansion of its youth empowerment programs to three new provinces, reaching 1,000 additional young people.",
    content: `World Impact Initiative is proud to announce a significant expansion of our Youth Empowerment & Technical Skills Training program across Canada. This expansion will bring market-relevant skills training, mentorship, and entrepreneurship support to underserved youth in British Columbia, Alberta, and Nova Scotia.

The expansion is made possible through partnerships with local community organizations, educational institutions, and corporate sponsors who share our commitment to youth development. Each new program hub will offer digital literacy training, vocational skills development, and leadership programs tailored to local economic opportunities.

"We believe every young person deserves the chance to build a meaningful future," said our Program Director. "This expansion represents our commitment to ensuring geographic location is never a barrier to opportunity."

Applications for the first cohort open next month. Community organizations interested in partnership opportunities are encouraged to contact us.`,
    category: "Programs",
    author: "World Impact Initiative",
    date: "2026-05-15",
    image: "/images/blog/youth-expansion.jpg",
    featured: true,
  },
  {
    slug: "world-refugee-day-2026-community-gathering",
    title: "World Refugee Day 2026: Community Gathering & Fundraiser",
    excerpt:
      "Join us on June 20 for a community celebration honoring the resilience of refugees and raising funds for crisis response programs.",
    content: `On World Refugee Day, World Impact Initiative invites you to a community gathering celebrating the strength, courage, and contributions of refugees in Canada and around the world.

The event will feature stories from program beneficiaries, cultural performances, and opportunities to learn about our crisis response work. All proceeds will support our humanitarian relief programs serving displaced communities.

Event Details:
- Date: June 20, 2026
- Time: 2:00 PM - 6:00 PM
- Location: Community Center, Toronto, ON
- Registration: Free (donations welcome)

Together, we can show refugees that they are welcome, valued, and supported.`,
    category: "Events",
    author: "Events Team",
    date: "2026-06-01",
    image: "/images/blog/refugee-day.jpg",
    featured: true,
  },
  {
    slug: "disability-inclusion-report-2025",
    title: "2025 Disability Inclusion Impact Report",
    excerpt:
      "Our latest report highlights progress in accessibility, employment, and education for persons with disabilities across our program areas.",
    content: `World Impact Initiative is pleased to release our 2025 Disability Inclusion Impact Report, documenting significant progress in our mission to ensure equal opportunity for persons with disabilities.

Key highlights from the report include:
- 450 assistive devices provided to individuals and families
- 32 public facilities made accessible through our infrastructure program
- 200 teachers trained in inclusive education methodologies
- 68% employment rate among program graduates within 6 months

The report also outlines our strategic priorities for 2026, including expanded peer mentoring networks and advocacy for strengthened disability rights legislation at provincial and federal levels.

Download the full report from our Resource Center or contact us for a printed copy.`,
    category: "Impact",
    author: "Research Team",
    date: "2026-04-22",
    image: "/images/blog/disability-report.jpg",
  },
  {
    slug: "volunteer-spotlight-meet-priya",
    title: "Volunteer Spotlight: Meet Priya",
    excerpt:
      "Priya Sharma has volunteered over 500 hours with our gender equality program. Learn about her journey and the impact she's making.",
    content: `This month, we shine a spotlight on Priya Sharma, one of our most dedicated volunteers who has contributed over 500 hours to our Gender Equality & Protection program.

Priya, a social worker based in Vancouver, began volunteering with World Impact Initiative two years ago after attending one of our community awareness events. Since then, she has facilitated workshops, mentored young women entrepreneurs, and helped coordinate our annual gender equality summit.

"What keeps me coming back is seeing the transformation in the women we serve," Priya shares. "When a survivor of violence starts her own business and employs other women—that's the kind of change that lasts."

Interested in volunteering? Visit our Volunteer page to learn about current opportunities.`,
    category: "Volunteers",
    author: "Volunteer Team",
    date: "2026-04-10",
    image: "/images/blog/volunteer-spotlight.jpg",
  },
  {
    slug: "emergency-response-flood-relief-update",
    title: "Emergency Response Update: Flood Relief Operations",
    excerpt:
      "An update on our humanitarian response to recent flooding, including aid delivered and recovery plans for affected communities.",
    content: `World Impact Initiative's Crisis Response team has been actively supporting communities affected by recent flooding events. This update provides an overview of our response efforts and ongoing recovery support.

Response Summary:
- 3,200 families received emergency food assistance
- 800 shelter kits distributed within 48 hours of deployment
- 12 mobile health clinics operating in affected areas
- 15 child-friendly spaces established for displaced children

Our early recovery phase is now underway, focusing on livelihood restoration, infrastructure repair, and psychosocial support for affected families. We remain committed to supporting these communities through the full recovery process.

Your donations make this life-saving work possible. Visit our Donate page to support crisis response efforts.`,
    category: "Crisis Response",
    author: "Crisis Response Team",
    date: "2026-03-28",
    image: "/images/blog/flood-relief.jpg",
  },
  {
    slug: "partnership-announcement-university-toronto",
    title: "New Partnership with University of Toronto",
    excerpt:
      "World Impact Initiative partners with the University of Toronto to advance research in inclusive education and community development.",
    content: `We are thrilled to announce a new research partnership with the University of Toronto's Faculty of Education, focused on advancing inclusive education practices and community development methodologies.

The partnership will support:
- Joint research on inclusive education best practices
- Student internship and field placement opportunities
- Development of open-access training resources for educators
- Community-based participatory research in program areas

"This partnership represents the kind of academic-community collaboration that drives meaningful, evidence-based change," noted our Executive Director.

We look forward to sharing research findings and practical resources with our global community of partners and practitioners.`,
    category: "Partnerships",
    author: "Partnerships Team",
    date: "2026-03-15",
    image: "/images/blog/partnership.jpg",
  },
];

export const blogCategories = [
  "All",
  "Programs",
  "Events",
  "Impact",
  "Volunteers",
  "Crisis Response",
  "Partnerships",
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((p) => p.featured);
}
