import {
  Accessibility,
  Baby,
  BookOpen,
  CalendarDays,
  Globe2,
  GraduationCap,
  HandHeart,
  HeartPulse,
  Megaphone,
  ShieldCheck,
  Users,
  Waves
} from "lucide-react";

export const site = {
  name: "World Impact Initiative",
  domain: "worldimpactinitiative.org",
  url: "https://worldimpactinitiative.org",
  email: "info@worldimpactinitiative.org",
  location: "Canada",
  linktree: "https://linktr.ee/worldimpactinitiative.org",
  charitableImpactUrl: "https://charitableimpact.com/"
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog/News", href: "/blog" },
  { label: "Events", href: "/events" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "Donate", href: "/donate" },
  { label: "Contact", href: "/contact" }
];

export const impactAreas = [
  {
    title: "Gender Equality & Protection",
    slug: "gender-equality-protection",
    icon: ShieldCheck,
    summary:
      "Advancing safety, dignity, leadership, and equitable access for women, girls, and gender-diverse communities."
  },
  {
    title: "Child Protection & Human Rights",
    slug: "child-protection-human-rights",
    icon: Baby,
    summary:
      "Protecting children and families through rights education, safeguarding pathways, referral support, and advocacy."
  },
  {
    title: "Youth Empowerment & Technical Skills Training",
    slug: "youth-empowerment-technical-skills-training",
    icon: GraduationCap,
    summary:
      "Preparing young people for dignified livelihoods through mentorship, digital literacy, trades, and leadership development."
  },
  {
    title: "Disability Inclusion & Accessibility",
    slug: "disability-inclusion-accessibility",
    icon: Accessibility,
    summary:
      "Improving participation and access through inclusive design, assistive referrals, family support, and community education."
  },
  {
    title: "Health Services & Inclusive Education",
    slug: "health-services-inclusive-education",
    icon: HeartPulse,
    summary:
      "Connecting underserved communities with health information, wellness navigation, inclusive learning, and prevention resources."
  },
  {
    title: "Crisis Response & Humanitarian Relief",
    slug: "crisis-response-humanitarian-relief",
    icon: Waves,
    summary:
      "Coordinating rapid, accountable relief with local partners before, during, and after humanitarian emergencies."
  }
];

export const programs = impactAreas.map((area, index) => {
  const storyNames = ["Amina", "Samuel", "Nadia", "Daniel", "Grace", "Mariam"];
  const stats = [
    ["12 community safety workshops", "500+ people reached", "30 local advocates trained"],
    ["8 child rights sessions", "220 families connected", "18 referral partners mapped"],
    ["15 skills cohorts planned", "320 youth supported", "70% employment readiness target"],
    ["40 accessibility audits", "160 caregivers supported", "25 inclusive spaces improved"],
    ["10 wellness clinics", "600 learners reached", "35 educators trained"],
    ["72-hour response target", "1,000 relief kits capacity", "20 partner responders onboarded"]
  ];
  const activities = [
    "Community-led needs assessments",
    "Training, mentorship, and referral pathways",
    "Partnerships with schools, clinics, agencies, and local leaders",
    "Monitoring, safeguarding, and transparent impact reporting"
  ];

  return {
    ...area,
    eyebrow: `Program ${index + 1}`,
    hero:
      "Sustainable change is strongest when communities shape the priorities, partnerships, and solutions that affect their lives.",
    why:
      "Vulnerable and underserved communities often face overlapping barriers to safety, opportunity, and essential services. This program addresses those barriers through prevention, practical support, education, and accountable partnerships.",
    approach:
      "World Impact Initiative combines community consultation, trained volunteers, trusted referral networks, and measurable program design to deliver compassionate support that protects dignity and builds long-term capacity.",
    activities,
    impact:
      "Participants gain safer support networks, stronger awareness of rights and services, improved access to opportunity, and a clearer pathway toward stability, inclusion, and self-determination.",
    story:
      `${storyNames[index]} joined a World Impact Initiative community session while navigating a difficult transition. With volunteer support, practical referrals, and peer encouragement, ${storyNames[index]} built a stronger plan for safety, learning, and the future.`,
    stats: stats[index],
    gallery: [
      "Community consultation circle",
      "Volunteer-led workshop",
      "Partner service navigation"
    ]
  };
});

export const inspiration = [
  {
    name: "Nelson Mandela",
    role: "Justice and reconciliation",
    note: "A reminder that dignity and freedom require courage, endurance, and collective responsibility."
  },
  {
    name: "Wole Soyinka",
    role: "Human rights and truth",
    note: "An example of using voice, art, and intellect to challenge injustice."
  },
  {
    name: "Viola Desmond",
    role: "Civil rights in Canada",
    note: "A Canadian legacy of standing against discrimination and widening the path toward equality."
  },
  {
    name: "Terry Fox",
    role: "Hope through service",
    note: "A symbol of perseverance, public generosity, and the power of one person to mobilize many."
  },
  {
    name: "Jean Vanier",
    role: "Community and belonging",
    note: "A call to build communities where persons with disabilities are welcomed, valued, and included."
  },
  {
    name: "Malala Yousafzai",
    role: "Education and courage",
    note: "A global reminder that every child deserves safety, learning, and opportunity."
  }
];

export const values = [
  "Human dignity",
  "Equity and inclusion",
  "Child safeguarding",
  "Community leadership",
  "Volunteerism",
  "Transparency and accountability"
];

export const timeline = [
  {
    year: "Foundation",
    title: "A Canadian nonprofit with global concern",
    text: "World Impact Initiative was established to connect community-driven compassion with practical programs for vulnerable and underserved people."
  },
  {
    year: "Partnership",
    title: "Local trust before scale",
    text: "The organization prioritizes credible partnerships, volunteer leadership, safeguarding, and community voice."
  },
  {
    year: "Impact",
    title: "Programs designed for lasting change",
    text: "The work focuses on protection, opportunity, health, education, inclusion, and rapid humanitarian support."
  }
];

export const founderStory =
  "The full founder story was not supplied in the project brief. This section is intentionally prepared for the exact approved founder story so the organization can publish it without rewriting the page structure.";

export const articles = [
  {
    slug: "community-driven-programs-lasting-change",
    title: "Why community-driven programs create lasting change",
    category: "Community Development",
    excerpt:
      "Sustainable humanitarian work begins with listening, local leadership, and transparent measurement.",
    date: "2026-05-20",
    featured: true
  },
  {
    slug: "protecting-children-through-rights-education",
    title: "Protecting children through rights education",
    category: "Child Protection",
    excerpt:
      "Child safeguarding improves when families, schools, and service providers share language and referral pathways.",
    date: "2026-04-28",
    featured: true
  },
  {
    slug: "inclusive-skills-training-for-youth",
    title: "Inclusive skills training for youth opportunity",
    category: "Youth Empowerment",
    excerpt:
      "Technical skills, mentorship, and confidence-building help young people move toward dignified work.",
    date: "2026-03-18",
    featured: false
  },
  {
    slug: "disability-inclusion-starts-with-access",
    title: "Disability inclusion starts with access",
    category: "Disability Inclusion",
    excerpt:
      "Accessible spaces, adaptive support, and family education strengthen participation for everyone.",
    date: "2026-02-11",
    featured: false
  }
];

export const events = [
  {
    title: "Volunteer Orientation and Safeguarding Briefing",
    date: "2026-07-12",
    type: "Upcoming",
    location: "Virtual / Canada",
    description: "Introductory training for new volunteers supporting community programs."
  },
  {
    title: "Youth Skills and Mentorship Roundtable",
    date: "2026-08-24",
    type: "Upcoming",
    location: "Toronto, Canada",
    description: "Partner discussion on technical skills training and youth opportunity pathways."
  },
  {
    title: "Community Relief Partner Forum",
    date: "2026-04-16",
    type: "Past",
    location: "Hybrid",
    description: "A coordination session on accountable relief, preparedness, and community response."
  }
];

export const galleryItems = [
  { title: "Volunteer training", category: "Programs", type: "Photo" },
  { title: "Community consultation", category: "Community", type: "Photo" },
  { title: "Youth skills workshop", category: "Youth", type: "Photo" },
  { title: "Accessibility outreach", category: "Inclusion", type: "Photo" },
  { title: "Partner interview", category: "Video", type: "Video" },
  { title: "Humanitarian briefing", category: "Relief", type: "Video" }
];

export const donationImpacts = [
  "$25 can help provide outreach materials for a family rights session.",
  "$50 can support volunteer training and safeguarding resources.",
  "$100 can help connect youth with skills training materials.",
  "$250 can strengthen emergency relief readiness with partner support."
];

export const testimonials = [
  {
    quote:
      "World Impact Initiative brings seriousness, care, and respect to community partnership.",
    name: "Community partner"
  },
  {
    quote:
      "Their volunteer pathway helped me understand how to serve with dignity and accountability.",
    name: "Program volunteer"
  }
];

export const socialLinks = [
  { label: "Facebook", href: site.linktree },
  { label: "Instagram", href: site.linktree },
  { label: "LinkedIn", href: site.linktree },
  { label: "X (Twitter)", href: site.linktree },
  { label: "YouTube", href: site.linktree }
];

export const adminRoles = [
  {
    title: "Super Admin",
    permissions: ["Manage users", "Assign roles", "View all reports", "Configure Supabase"]
  },
  {
    title: "Program Manager",
    permissions: ["Manage programs", "Assign beneficiaries", "Review case notes", "Export reports"]
  },
  {
    title: "Content Editor",
    permissions: ["Publish articles", "Manage gallery", "Update events", "Edit SEO metadata"]
  },
  {
    title: "Volunteer Coordinator",
    permissions: ["Review volunteer applications", "Schedule orientations", "Track availability"]
  }
];

export const resourceCenter = [
  "Volunteer safeguarding handbook",
  "Program referral guide",
  "Accessibility checklist",
  "Crisis response coordination template"
];

export const seoKeywords = [
  "Canadian nonprofit organization",
  "humanitarian aid",
  "child protection",
  "youth empowerment",
  "disability inclusion",
  "gender equality",
  "crisis response",
  "community development"
];

export const iconMap = {
  BookOpen,
  CalendarDays,
  Globe2,
  HandHeart,
  Megaphone,
  Users
};
