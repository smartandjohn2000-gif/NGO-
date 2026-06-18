export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: "Field Stories" | "News" | "Reports" | "Voices" | "Press";
  author: string;
  date: string;
  readingTime: string;
  image: string;
  featured?: boolean;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "launching-our-2026-impact-roadmap",
    title: "Launching Our 2026 Impact Roadmap: Five Priorities for the Year Ahead",
    excerpt:
      "An ambitious year is taking shape. Read our five strategic priorities for 2026—from doubling girls' education access to scaling crisis-response partnerships.",
    content:
      "World Impact Initiative is entering 2026 with the most ambitious roadmap in our history. Our priorities reflect what we have heard from the communities we serve: education that meets every learner, livelihoods that respect dignity, and protection that travels with families wherever crisis takes them.\n\nFirst, we will double the number of girls supported through our scholarship and mentorship pipelines. Second, we are expanding inclusive technical training to ten new sites. Third, we are deepening our localization commitments through co-funded partnerships with grassroots organizations. Fourth, we are integrating mental health into every program. Finally, we are investing in climate-resilient livelihoods—because the next decade of humanitarian need will be shaped by climate shocks.",
    category: "News",
    author: "Communications Team",
    date: "2026-06-02",
    readingTime: "5 min",
    image: "/images/hero.jpg",
    featured: true,
    tags: ["strategy", "roadmap", "2026"],
  },
  {
    slug: "amina-from-survivor-to-cooperative-leader",
    title: "Amina's Story: From Survivor to Cooperative Leader",
    excerpt:
      "Amina lost everything in conflict. Five years later, she leads a 40-woman cooperative that pays school fees for over 100 children.",
    content:
      "When Amina arrived at our women's safe space, she was carrying her three daughters and very little else. Today she leads a tailoring cooperative of forty women and is mentor to dozens more. This is what survivor-centered protection looks like when it is paired with economic opportunity.",
    category: "Field Stories",
    author: "Field Team, Northern Region",
    date: "2026-05-21",
    readingTime: "6 min",
    image: "/images/programs/gender-equality.jpg",
    featured: true,
    tags: ["gender equality", "livelihoods", "story"],
  },
  {
    slug: "child-friendly-spaces-after-the-floods",
    title: "Child-Friendly Spaces in the First 72 Hours After the Floods",
    excerpt:
      "How our team and local partners stood up six child-friendly spaces in the first three days of an unprecedented flood emergency.",
    content:
      "When the floods hit, the first priority was safety. Within 72 hours, our crisis response team partnered with three local organizations to set up six child-friendly spaces serving more than 1,200 children. Here is what we learned about preparation, partnership, and the irreplaceable role of trained community responders.",
    category: "Field Stories",
    author: "Crisis Response Unit",
    date: "2026-05-09",
    readingTime: "7 min",
    image: "/images/programs/child-protection.jpg",
    tags: ["crisis response", "child protection"],
  },
  {
    slug: "annual-report-2025",
    title: "Our 2025 Annual Report: Numbers, Names, and the Year of Listening",
    excerpt:
      "Read our 2025 annual report, including impact data, financials, and a deep dive into a year of listening to the communities we serve.",
    content:
      "In 2025, World Impact Initiative reached more than 165,000 people across six programs. Our annual report shares impact data, audited financials, and the stories that shaped our year of listening.",
    category: "Reports",
    author: "Board of Directors",
    date: "2026-04-15",
    readingTime: "12 min",
    image: "/images/who-we-are.jpg",
    tags: ["report", "transparency"],
  },
  {
    slug: "why-disability-inclusion-must-be-design-principle",
    title: "Why Disability Inclusion Must Be a Design Principle, Not an Add-On",
    excerpt:
      "Inclusion does not happen by accident. It is designed in—or designed out. Our Director of Programs reflects on the cost of getting it wrong.",
    content:
      "Persons with disabilities are 15% of the global population. When inclusion is treated as an add-on, we leave people behind. When it is the design principle, we build programs that serve everyone better.",
    category: "Voices",
    author: "Director of Programs",
    date: "2026-03-28",
    readingTime: "8 min",
    image: "/images/programs/disability-inclusion.jpg",
    tags: ["disability inclusion", "design"],
  },
  {
    slug: "youth-led-cohort-graduates",
    title: "Our Largest Youth-Led ICT Cohort Just Graduated",
    excerpt:
      "210 young people just graduated from our largest ICT bootcamp ever. Meet the entrepreneurs and engineers shaping their communities.",
    content:
      "210 young people graduated this month from our flagship ICT bootcamp—the largest cohort we have ever supported. Their projects range from agri-tech apps to community storytelling platforms.",
    category: "News",
    author: "Youth Empowerment Team",
    date: "2026-03-12",
    readingTime: "4 min",
    image: "/images/programs/youth-empowerment.jpg",
    tags: ["youth", "skills", "ict"],
  },
  {
    slug: "press-statement-on-emergency-funding",
    title: "Press Statement: Emergency Funding Gap Threatens Lives",
    excerpt:
      "A joint statement from World Impact Initiative and partners urging donors to close a critical funding gap as the lean season begins.",
    content:
      "We urge donors to act now. The lean season is approaching, and a 35% funding gap threatens to leave more than 80,000 people without adequate food assistance.",
    category: "Press",
    author: "Communications Team",
    date: "2026-02-22",
    readingTime: "3 min",
    image: "/images/programs/crisis-response.jpg",
    tags: ["press", "advocacy"],
  },
];

export const blogCategories = [
  "All",
  "Field Stories",
  "News",
  "Reports",
  "Voices",
  "Press",
] as const;

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
