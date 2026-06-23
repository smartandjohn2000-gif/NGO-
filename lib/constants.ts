export const SITE_CONFIG = {
  name: "World Impact Initiative",
  shortName: "WII",
  domain: "worldimpactinitiative.org",
  url: "https://worldimpactinitiative.org",
  email: "info@worldimpactinitiative.org",
  location: "Canada",
  phone: "+1 (819) 700-6128",
  donationHeadline: "Support Change That Lasts",
  mission:
    "The mission of World Impact Initiative is to advance human dignity, equality, and opportunity by supporting vulnerable and underserved communities through sustainable, community-driven programs.",
  vision:
    "World Impact Initiative envisions a world where every person lives with dignity, safety, and equal opportunity, regardless of their circumstances.",
  heroHeadline:
    "Creating Lasting Impact Through Compassion, Protection, and Opportunity",
  heroSubheadline:
    "World Impact Initiative is committed to advancing human dignity, equality, and opportunity by supporting vulnerable and underserved communities through sustainable, community-driven programs.",
  seoKeywords: [
    "Canadian nonprofit organization",
    "humanitarian aid",
    "child protection",
    "youth empowerment",
    "disability inclusion",
    "gender equality",
    "crisis response",
    "community development",
  ],
} as const;

export const LANGUAGE_OPTIONS = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "es", label: "Español" },
  { code: "ar", label: "العربية" },
  { code: "zh", label: "中文" },
] as const;

export type SupportedLanguage = (typeof LANGUAGE_OPTIONS)[number]["code"];

export const DEPARTMENT_CONTACTS = [
  {
    key: "general",
    title: "General Inquiries",
    email: "info@worldimpactinitiative.org",
    purpose:
      "General questions, volunteer inquiries, website inquiries, and public communication.",
  },
  {
    key: "donor",
    title: "Donor Inquiries",
    email: "donors@worldimpactinitiative.org",
    purpose:
      "Donation assistance, tax receipts, fundraising campaigns, donor support, and contribution inquiries.",
  },
  {
    key: "partnership",
    title: "Partnership Inquiries",
    email: "partnerships@worldimpactinitiative.org",
    purpose:
      "Corporate partnerships, nonprofit collaborations, sponsorships, grants, strategic partnerships, and community initiatives.",
  },
] as const;

export type ContactDepartmentKey = (typeof DEPARTMENT_CONTACTS)[number]["key"];

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog/News", href: "/blog" },
  { label: "Events", href: "/events" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "Donate", href: "/donate" },
  { label: "Contact", href: "/contact" },
] as const;

export const IMPACT_AREAS = [
  {
    icon: "ShieldCheck",
    title: "Gender Equality & Protection",
    description:
      "Advancing safe, equitable communities where women and girls can lead and thrive free from violence.",
    slug: "gender-equality-protection",
  },
  {
    icon: "HeartHandshake",
    title: "Child Protection & Human Rights",
    description:
      "Safeguarding children through rights-based interventions, family support, and community advocacy.",
    slug: "child-protection-human-rights",
  },
  {
    icon: "GraduationCap",
    title: "Youth Empowerment & Technical Skills Training",
    description:
      "Preparing young people with practical skills, mentorship, and pathways to dignified livelihoods.",
    slug: "youth-empowerment-technical-skills-training",
  },
  {
    icon: "Accessibility",
    title: "Disability Inclusion & Accessibility",
    description:
      "Promoting inclusive services, assistive support, and equal participation for persons with disabilities.",
    slug: "disability-inclusion-accessibility",
  },
  {
    icon: "Stethoscope",
    title: "Health Services & Inclusive Education",
    description:
      "Expanding equitable access to health, wellness, and quality education for underserved families.",
    slug: "health-services-inclusive-education",
  },
  {
    icon: "LifeBuoy",
    title: "Crisis Response & Humanitarian Relief",
    description:
      "Delivering rapid, coordinated emergency response and long-term recovery support after crises.",
    slug: "crisis-response-humanitarian-relief",
  },
] as const;

export type ProgramSlug = (typeof IMPACT_AREAS)[number]["slug"];

export type ImpactTheme = {
  accent: string;
  soft: string;
  strong: string;
  ring: string;
};

export const IMPACT_THEMES: Record<ProgramSlug, ImpactTheme> = {
  "gender-equality-protection": {
    accent: "#2563EB",
    soft: "#EAF1FF",
    strong: "#123A8F",
    ring: "rgba(37,99,235,0.32)",
  },
  "child-protection-human-rights": {
    accent: "#0EA5E9",
    soft: "#E6F6FF",
    strong: "#0B5EA8",
    ring: "rgba(14,165,233,0.32)",
  },
  "youth-empowerment-technical-skills-training": {
    accent: "#1D4ED8",
    soft: "#E8EEFF",
    strong: "#1E3A8A",
    ring: "rgba(29,78,216,0.32)",
  },
  "disability-inclusion-accessibility": {
    accent: "#0284C7",
    soft: "#E0F5FF",
    strong: "#0C4A6E",
    ring: "rgba(2,132,199,0.32)",
  },
  "health-services-inclusive-education": {
    accent: "#3B82F6",
    soft: "#EAF4FF",
    strong: "#1E40AF",
    ring: "rgba(59,130,246,0.32)",
  },
  "crisis-response-humanitarian-relief": {
    accent: "#0369A1",
    soft: "#E5F4FF",
    strong: "#082F49",
    ring: "rgba(3,105,161,0.32)",
  },
};

export function getImpactThemeBySlug(slug: ProgramSlug) {
  return IMPACT_THEMES[slug];
}

export type HeroSlide = {
  id: string;
  headline: string;
  supporting: string;
  focus: string;
  ctaLabel: string;
  ctaHref: string;
  mediaType: "image" | "video";
  mediaSrc: string;
  mediaPoster?: string;
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "hero-1",
    headline: "Creating Lasting Impact Through Compassion, Protection, and Opportunity",
    supporting:
      "World Impact Initiative is committed to advancing human dignity, equality, and opportunity by supporting vulnerable and underserved communities through sustainable, community-driven programs.",
    focus: "Overall organization mission",
    ctaLabel: "Discover Our Work",
    ctaHref: "#impact-areas",
    mediaType: "video",
    mediaSrc: "/videos/home-hero.mp4",
    mediaPoster: "/images/main_uploads/main-1.jpg",
  },
  {
    id: "hero-2",
    headline: "Protecting Children. Promoting Rights. Building Futures.",
    supporting:
      "Our Child Protection & Human Rights programs strengthen safer homes, schools, and communities through prevention, response, and family-centered support.",
    focus: "Child Protection & Human Rights",
    ctaLabel: "Learn More",
    ctaHref: "/programs/child-protection-human-rights",
    mediaType: "image",
    mediaSrc: "/images/main_uploads/main-2.jpg",
  },
  {
    id: "hero-3",
    headline: "Empowering Youth Today. Transforming Communities Tomorrow.",
    supporting:
      "We equip youth with practical technical skills, mentorship, and leadership pathways that unlock dignified livelihoods and stronger local economies.",
    focus: "Youth Empowerment & Skills Training",
    ctaLabel: "Explore Programs",
    ctaHref: "/programs",
    mediaType: "image",
    mediaSrc: "/images/main_uploads/main-6.jpg",
  },
  {
    id: "hero-4",
    headline: "Advancing Safety, Dignity, and Equal Opportunity.",
    supporting:
      "Our Gender Equality & Protection work helps communities prevent violence, expand leadership opportunities, and promote rights-based inclusion.",
    focus: "Gender Equality & Protection",
    ctaLabel: "View Programs",
    ctaHref: "/programs/gender-equality-protection",
    mediaType: "image",
    mediaSrc: "/images/main_uploads/main-5.jpg",
  },
  {
    id: "hero-5",
    headline: "Responding When Communities Need It Most.",
    supporting:
      "During crisis, we deliver accountable humanitarian support and partner with local leaders to protect dignity and accelerate recovery.",
    focus: "Humanitarian Relief & Crisis Response",
    ctaLabel: "Support Our Mission",
    ctaHref: "/donate",
    mediaType: "image",
    mediaSrc: "/images/main_uploads/main-8.jpg",
  },
];

export type ProgramContent = {
  slug: ProgramSlug;
  title: string;
  image: string;
  heroSummary: string;
  whyItMatters: string;
  ourApproach: string[];
  keyActivities: string[];
  expectedImpact: string[];
  beneficiaryStory: {
    name: string;
    location: string;
    quote: string;
  };
  impactStats: { label: string; value: string }[];
  gallery: { type: "photo" | "video"; title: string; src: string; category: string }[];
};

export const PROGRAMS: ProgramContent[] = [
  {
    slug: "gender-equality-protection",
    title: "Gender Equality & Protection",
    image: "/images/impact/impact-gender-equality.jpg",
    heroSummary:
      "We partner with communities to prevent gender-based violence and expand safe access to leadership, justice, and opportunity.",
    whyItMatters:
      "Inequality and gender-based violence limit health, safety, and economic opportunity for millions. Community-led protection systems create safer futures for women, girls, and families.",
    ourApproach: [
      "Support survivor-centered case management and referrals.",
      "Train community leaders on safeguarding and prevention.",
      "Engage men and boys as allies for equitable social norms.",
    ],
    keyActivities: [
      "Protection desks and referral partnerships",
      "Legal literacy and rights awareness sessions",
      "Safe-space programming for adolescent girls",
      "Leadership training for women-led community groups",
    ],
    expectedImpact: [
      "Reduced protection incidents and stronger survivor support pathways",
      "Higher participation of women in local decision-making",
      "Sustained community awareness on rights and prevention",
    ],
    beneficiaryStory: {
      name: "Amara",
      location: "Community partner network",
      quote:
        "The training gave me confidence to speak up for my rights and mentor younger girls in my area.",
    },
    impactStats: [
      { label: "Women and girls reached annually", value: "4,500+" },
      { label: "Protection volunteers trained", value: "260" },
      { label: "Local safeguarding committees active", value: "38" },
    ],
    gallery: [
      { type: "photo", title: "Community dialogue", src: "/images/main_uploads/main-5.jpg", category: "gender" },
      { type: "photo", title: "Safe-space mentoring", src: "/images/main_uploads/main-2.jpg", category: "gender" },
      { type: "video", title: "Leadership forum", src: "https://www.youtube.com/embed/tgbNymZ7vqY", category: "gender" },
    ],
  },
  {
    slug: "child-protection-human-rights",
    title: "Child Protection & Human Rights",
    image: "/images/impact/impact-child-protection.jpg",
    heroSummary:
      "Our child-rights programs protect vulnerable children through prevention, response, and family-centered support.",
    whyItMatters:
      "Children face disproportionate risk during poverty, conflict, and displacement. Rights-based child protection helps prevent abuse and keeps children safe in homes, schools, and communities.",
    ourApproach: [
      "Strengthen child protection referral and case management systems.",
      "Promote child participation and rights education in schools.",
      "Equip caregivers with parenting and psychosocial support tools.",
    ],
    keyActivities: [
      "Child safeguarding committees",
      "School-based child-rights clubs",
      "Psychosocial support groups for caregivers",
      "Case follow-up with social service partners",
    ],
    expectedImpact: [
      "Safer environments for children and adolescents",
      "Improved school retention and wellbeing outcomes",
      "Stronger family resilience and protective behaviors",
    ],
    beneficiaryStory: {
      name: "Samuel",
      location: "Youth learning center",
      quote:
        "I learned that my voice matters. Now I help other children report problems safely.",
    },
    impactStats: [
      { label: "Children reached", value: "6,200+" },
      { label: "Caregivers trained", value: "1,100+" },
      { label: "Schools engaged", value: "44" },
    ],
    gallery: [
      { type: "photo", title: "Rights education workshop", src: "/images/main_uploads/main-2.jpg", category: "child" },
      { type: "photo", title: "Caregiver support session", src: "/images/main_uploads/main-5.jpg", category: "child" },
      { type: "video", title: "Children's forum", src: "https://www.youtube.com/embed/dQw4w9WgXcQ", category: "child" },
    ],
  },
  {
    slug: "youth-empowerment-technical-skills-training",
    title: "Youth Empowerment & Technical Skills Training",
    image: "/images/impact/impact-youth-empowerment.jpg",
    heroSummary:
      "We equip youth with technical, digital, and entrepreneurial skills that unlock employment and leadership opportunities.",
    whyItMatters:
      "Youth unemployment and underemployment limit community growth. Practical skills and mentorship can transform youth potential into meaningful livelihood pathways.",
    ourApproach: [
      "Co-design training pathways with industry and local employers.",
      "Blend technical learning with soft skills and coaching.",
      "Support graduates with internships and business startup guidance.",
    ],
    keyActivities: [
      "Vocational and digital literacy bootcamps",
      "Career coaching and CV clinics",
      "Internship and apprenticeship placements",
      "Micro-enterprise incubation circles",
    ],
    expectedImpact: [
      "Increased youth employability and income generation",
      "Expanded leadership among young changemakers",
      "Improved local workforce readiness",
    ],
    beneficiaryStory: {
      name: "Rita",
      location: "Skills innovation hub",
      quote:
        "After completing technical training, I secured my first paid internship and now mentor younger students.",
    },
    impactStats: [
      { label: "Youth trained", value: "3,800+" },
      { label: "Job/internship placements", value: "1,400+" },
      { label: "Youth-led enterprises supported", value: "210" },
    ],
    gallery: [
      { type: "photo", title: "Technical training lab", src: "/images/main_uploads/main-1.jpg", category: "youth" },
      { type: "photo", title: "Career mentorship", src: "/images/main_uploads/main-6.jpg", category: "youth" },
      { type: "video", title: "Innovation challenge", src: "https://www.youtube.com/embed/OY4n4M7CVyY", category: "youth" },
    ],
  },
  {
    slug: "disability-inclusion-accessibility",
    title: "Disability Inclusion & Accessibility",
    image: "/images/impact/impact-disability-inclusion.jpg",
    heroSummary:
      "We champion equal access by removing barriers and co-creating inclusive services with persons with disabilities.",
    whyItMatters:
      "Exclusion from education, health, transport, and employment continues to affect persons with disabilities. Inclusive design and policy implementation improve outcomes for everyone.",
    ourApproach: [
      "Mainstream disability inclusion across all programs.",
      "Partner with OPDs to co-design accessible interventions.",
      "Train institutions to implement universal access standards.",
    ],
    keyActivities: [
      "Accessibility audits and improvement planning",
      "Assistive device referrals and support",
      "Inclusive education and workplace sensitization",
      "Advocacy for inclusive local service delivery",
    ],
    expectedImpact: [
      "Improved accessibility in community institutions",
      "Higher participation of persons with disabilities",
      "Stronger policy implementation for inclusion",
    ],
    beneficiaryStory: {
      name: "David",
      location: "Inclusive learning partner school",
      quote:
        "Accessible classrooms and teacher support helped me stay in school and participate confidently.",
    },
    impactStats: [
      { label: "Persons with disabilities reached", value: "2,100+" },
      { label: "Institutions assessed for accessibility", value: "95" },
      { label: "Inclusion champions trained", value: "320" },
    ],
    gallery: [
      { type: "photo", title: "Accessible classroom setup", src: "/images/main_uploads/main-9.jpg", category: "disability" },
      { type: "photo", title: "Community inclusion dialogue", src: "/images/main_uploads/main-4.jpg", category: "disability" },
      { type: "video", title: "Accessibility innovation", src: "https://www.youtube.com/embed/K4TOrB7at0Y", category: "disability" },
    ],
  },
  {
    slug: "health-services-inclusive-education",
    title: "Health Services & Inclusive Education",
    image: "/images/impact/impact-health-education.jpg",
    heroSummary:
      "We connect families to essential health and education services through equitable, inclusive community systems.",
    whyItMatters:
      "Health and learning outcomes are deeply connected. Underserved families need reliable services that remove financial, geographic, and social barriers.",
    ourApproach: [
      "Link communities with frontline health and education providers.",
      "Support inclusive and gender-responsive learning environments.",
      "Use community volunteers for referral, awareness, and follow-up.",
    ],
    keyActivities: [
      "Mobile outreach and health awareness sessions",
      "School readiness and retention support",
      "Teacher and health worker inclusion workshops",
      "Community referral and follow-up pathways",
    ],
    expectedImpact: [
      "Improved health-seeking behaviors and school attendance",
      "Better continuity of care and learning for vulnerable households",
      "Increased local confidence in public services",
    ],
    beneficiaryStory: {
      name: "Mariam",
      location: "Community health and learning cluster",
      quote:
        "My children now receive regular checkups and attend school consistently because support is nearby and inclusive.",
    },
    impactStats: [
      { label: "Households reached", value: "5,700+" },
      { label: "Community service sessions delivered", value: "420" },
      { label: "Referral completion rate", value: "87%" },
    ],
    gallery: [
      { type: "photo", title: "Community health session", src: "/images/main_uploads/main-7.jpg", category: "health" },
      { type: "photo", title: "Inclusive classroom activity", src: "/images/main_uploads/main-6.jpg", category: "health" },
      { type: "video", title: "Parent engagement forum", src: "https://www.youtube.com/embed/C0DPdy98e4c", category: "health" },
    ],
  },
  {
    slug: "crisis-response-humanitarian-relief",
    title: "Crisis Response & Humanitarian Relief",
    image: "/images/impact/impact-crisis-response.jpg",
    heroSummary:
      "We provide rapid, accountable humanitarian assistance while helping communities recover with dignity and resilience.",
    whyItMatters:
      "Emergencies disrupt lives, protection systems, and essential services. Timely relief and long-term recovery support are critical to protect dignity and reduce long-term vulnerability.",
    ourApproach: [
      "Deliver timely relief using community-led targeting and accountability.",
      "Integrate protection, health, and education into emergency responses.",
      "Support recovery planning and resilience-building post-crisis.",
    ],
    keyActivities: [
      "Emergency cash and in-kind support",
      "Rapid needs and protection assessments",
      "Temporary safe learning and child-friendly spaces",
      "Community recovery and preparedness planning",
    ],
    expectedImpact: [
      "Lives stabilized during acute emergencies",
      "Safer transitions from relief to recovery",
      "Greater preparedness for future shocks",
    ],
    beneficiaryStory: {
      name: "Asha",
      location: "Emergency response zone",
      quote:
        "Immediate support helped my family recover after displacement and rebuild our livelihood.",
    },
    impactStats: [
      { label: "People supported in emergencies", value: "12,000+" },
      { label: "Rapid response deployments", value: "24" },
      { label: "Community recovery plans developed", value: "31" },
    ],
    gallery: [
      { type: "photo", title: "Emergency distribution", src: "/images/main_uploads/main-8.jpg", category: "crisis" },
      { type: "photo", title: "Community recovery workshop", src: "/images/main_uploads/main-3.jpg", category: "crisis" },
      { type: "video", title: "Rapid response coordination", src: "https://www.youtube.com/embed/G9TdA8d5aaU", category: "crisis" },
    ],
  },
];

export const ABOUT_STORY_PLACEHOLDER =
  "Founder story content was requested to be pasted exactly as provided, but the full story text was not included in the project brief. Replace this block with the approved founder narrative from World Impact Initiative leadership.";

export const INSPIRATIONS = [
  {
    name: "Nelson Mandela",
    focus: "Justice, reconciliation, and dignity for all.",
  },
  {
    name: "Wole Soyinka",
    focus: "Human rights advocacy and principled leadership.",
  },
  {
    name: "Viola Desmond",
    focus: "Courage against injustice and structural discrimination.",
  },
  {
    name: "Terry Fox",
    focus: "Service, resilience, and action for public good.",
  },
  {
    name: "Jean Vanier",
    focus: "Inclusion, compassion, and shared humanity.",
  },
  {
    name: "Malala Yousafzai",
    focus: "Education equity and youth voice.",
  },
] as const;

export const TIMELINE = [
  {
    year: "Foundation",
    title: "Community first",
    detail:
      "World Impact Initiative was formed to deliver practical, community-driven responses to inequity and humanitarian need.",
  },
  {
    year: "Growth",
    title: "Partnership-centered programs",
    detail:
      "Programs expanded through partnerships with local leaders, volunteers, and service providers.",
  },
  {
    year: "Today",
    title: "Integrated impact model",
    detail:
      "WII now integrates protection, skills, inclusion, health, and emergency response for sustainable outcomes.",
  },
] as const;

export const CORE_VALUES = [
  "Dignity",
  "Inclusion",
  "Partnership",
  "Accountability",
  "Equity",
  "Sustainability",
] as const;

export const BLOG_POSTS = [
  {
    id: "post-1",
    title: "How Community-Led Protection Reduces Vulnerability",
    category: "Child Protection",
    excerpt:
      "A practical look at community safeguarding systems that improve child wellbeing and family resilience.",
    image: "/images/blog-1.jpg",
    date: "2026-05-12",
    author: "WII Editorial Team",
    featured: true,
  },
  {
    id: "post-2",
    title: "Building Inclusive Skills Pipelines for Youth Employment",
    category: "Youth Empowerment",
    excerpt:
      "Designing training pathways with employers to convert technical skills into sustainable livelihoods.",
    image: "/images/blog-2.jpg",
    date: "2026-04-22",
    author: "Programs Desk",
    featured: true,
  },
  {
    id: "post-3",
    title: "Accessible Services: From Policy to Daily Practice",
    category: "Disability Inclusion",
    excerpt:
      "How practical accessibility audits and local champions close inclusion gaps quickly and effectively.",
    image: "/images/blog-3.jpg",
    date: "2026-03-29",
    author: "Inclusion Unit",
    featured: false,
  },
  {
    id: "post-4",
    title: "Emergency Response with Accountability and Dignity",
    category: "Crisis Response",
    excerpt:
      "Lessons from rapid humanitarian response models that prioritize transparency and local leadership.",
    image: "/images/blog-4.jpg",
    date: "2026-02-18",
    author: "Humanitarian Team",
    featured: false,
  },
] as const;

export const EVENT_LIST = [
  {
    id: "event-1",
    title: "Global Volunteer Orientation",
    date: "2026-07-20",
    location: "Virtual",
    type: "upcoming",
    description:
      "Monthly onboarding for prospective volunteers supporting program delivery and advocacy.",
  },
  {
    id: "event-2",
    title: "Youth Skills Innovation Forum",
    date: "2026-08-06",
    location: "Toronto, Canada",
    type: "upcoming",
    description:
      "A collaboration forum connecting youth, employers, and training institutions.",
  },
  {
    id: "event-3",
    title: "Inclusive Development Roundtable",
    date: "2026-05-10",
    location: "Ottawa, Canada",
    type: "past",
    description:
      "Cross-sector policy dialogue on disability inclusion, accessible systems, and outcomes.",
  },
  {
    id: "event-4",
    title: "Emergency Preparedness Community Training",
    date: "2026-04-14",
    location: "Virtual",
    type: "past",
    description:
      "Practical drills and planning for local crisis response teams and volunteers.",
  },
] as const;

export const GALLERY_ITEMS = [
  { id: "g-1", title: "Field outreach", type: "photo", category: "field", src: "/images/main_uploads/main-5.jpg" },
  { id: "g-2", title: "Youth workshop", type: "photo", category: "youth", src: "/images/main_uploads/main-1.jpg" },
  { id: "g-3", title: "Inclusion training", type: "photo", category: "inclusion", src: "/images/main_uploads/main-9.jpg" },
  { id: "g-4", title: "Health education day", type: "photo", category: "health", src: "/images/main_uploads/main-7.jpg" },
  { id: "g-5", title: "Rapid response deployment", type: "photo", category: "humanitarian", src: "/images/main_uploads/main-8.jpg" },
  { id: "g-6", title: "Community impact story", type: "video", category: "video", src: "https://www.youtube.com/embed/tgbNymZ7vqY" },
  { id: "g-7", title: "Volunteer reflections", type: "video", category: "video", src: "https://www.youtube.com/embed/C0DPdy98e4c" },
  { id: "g-8", title: "Programs highlights", type: "video", category: "video", src: "https://www.youtube.com/embed/OY4n4M7CVyY" },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "World Impact Initiative combines compassion with measurable systems. Their programs are both human-centered and accountable.",
    name: "Strategic Partner",
    role: "Community Development Coalition",
  },
  {
    quote:
      "Every donation feels meaningful because we can see transparent impact and real outcomes for children and families.",
    name: "Monthly Donor",
    role: "Toronto, Canada",
  },
] as const;

export const SOCIAL_LINKS = [
  { label: "Linktree", href: "https://linktr.ee/worldimpactinitiative.org" },
  { label: "Facebook", href: "https://linktr.ee/worldimpactinitiative.org" },
  { label: "Instagram", href: "https://linktr.ee/worldimpactinitiative.org" },
  { label: "LinkedIn", href: "https://linktr.ee/worldimpactinitiative.org" },
  { label: "X (Twitter)", href: "https://linktr.ee/worldimpactinitiative.org" },
  { label: "YouTube", href: "https://linktr.ee/worldimpactinitiative.org" },
] as const;

export const ADMIN_ROLES = [
  "super_admin",
  "program_manager",
  "content_editor",
  "volunteer_coordinator",
] as const;

export type AdminRole = (typeof ADMIN_ROLES)[number];

export const ROLE_PERMISSIONS: Record<AdminRole, string[]> = {
  super_admin: [
    "Manage all users and permissions",
    "View and edit all beneficiary records",
    "Publish and moderate all content",
    "Access organization-wide reports",
  ],
  program_manager: [
    "Manage assigned program pages",
    "View and update beneficiary program assignments",
    "Generate program performance reports",
  ],
  content_editor: [
    "Create, edit, and publish blog/news posts",
    "Update events, gallery, and media assets",
  ],
  volunteer_coordinator: [
    "Review volunteer applications",
    "Manage volunteer records and event staffing",
    "Coordinate volunteer communications",
  ],
};

export const DONATION_OPTIONS = [
  {
    name: "One-Time Donation",
    description: "Support urgent and immediate needs across our programs.",
  },
  {
    name: "Monthly Donation",
    description: "Sustain long-term impact through predictable recurring support.",
  },
] as const;
