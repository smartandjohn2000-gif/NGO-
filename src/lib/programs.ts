import {
  Scale,
  Shield,
  GraduationCap,
  Accessibility,
  HeartPulse,
  LifeBuoy,
  type LucideIcon,
} from "lucide-react";

export type ProgramSlug =
  | "gender-equality-protection"
  | "child-protection-human-rights"
  | "youth-empowerment-skills"
  | "disability-inclusion-accessibility"
  | "health-services-inclusive-education"
  | "crisis-response-humanitarian-relief";

export interface Program {
  slug: ProgramSlug;
  title: string;
  shortTitle: string;
  Icon: LucideIcon;
  tagline: string;
  summary: string;
  whyItMatters: string;
  ourApproach: string[];
  keyActivities: string[];
  expectedImpact: string[];
  story: { name: string; location: string; quote: string };
  stats: { label: string; value: string }[];
  galleryAlt: string;
  heroImage: string;
  color: string;
}

export const programs: Program[] = [
  {
    slug: "gender-equality-protection",
    title: "Gender Equality & Protection",
    shortTitle: "Gender Equality",
    Icon: Scale,
    tagline:
      "Building safer communities where women and girls can live, learn, and lead without fear.",
    summary:
      "We advance the rights, safety, and economic opportunity of women and girls through prevention, response, advocacy, and survivor-centered support.",
    whyItMatters:
      "Around the world, one in three women experiences gender-based violence in her lifetime. In conflict, displacement, and poverty, these risks multiply. Without coordinated protection, education, and economic opportunity, the cycle continues into the next generation. World Impact Initiative believes gender equality is foundational—when women and girls are safe and empowered, entire communities thrive.",
    ourApproach: [
      "Survivor-centered protection grounded in dignity, consent, and confidentiality.",
      "Community-led prevention engaging women, men, boys, and faith leaders.",
      "Economic empowerment through skills, micro-grants, and cooperatives.",
      "Policy advocacy with local partners to strengthen legal protection.",
    ],
    keyActivities: [
      "Safe space programming for women and girls",
      "Gender-based violence (GBV) case management and referrals",
      "Mentorship and leadership academies for young women",
      "Livelihood training and small business start-up grants",
      "Community dialogues with men and boys as allies",
      "Legal aid, counseling, and psychosocial support",
    ],
    expectedImpact: [
      "Reduced incidence and tolerance of gender-based violence",
      "Increased school retention and leadership for girls",
      "Greater economic independence for women heads-of-household",
      "Stronger community systems that protect rights",
    ],
    story: {
      name: "Amina, 28",
      location: "Northern Region",
      quote:
        "When I joined the women's cooperative, I learned tailoring and how to save. Today I run my own shop and pay school fees for my daughters. The fear I once lived with is gone—I am building a future.",
    },
    stats: [
      { label: "Women & girls supported", value: "12,400+" },
      { label: "Cooperatives launched", value: "84" },
      { label: "GBV cases responded to", value: "2,100+" },
      { label: "Communities reached", value: "37" },
    ],
    galleryAlt: "Women leading community workshop",
    heroImage: "/images/programs/gender-equality.jpg",
    color: "from-rose-500/20 to-brand-800/30",
  },
  {
    slug: "child-protection-human-rights",
    title: "Child Protection & Human Rights",
    shortTitle: "Child Protection",
    Icon: Shield,
    tagline:
      "Every child deserves to be safe, heard, and free to dream.",
    summary:
      "We safeguard children from violence, exploitation, and neglect, and uphold their fundamental rights to identity, family, education, and protection.",
    whyItMatters:
      "Children are the most vulnerable members of any community in crisis. Hundreds of millions live without legal identity, access to school, or safe family care. Our work places child protection at the center of every program—because rights protected in childhood become opportunities seized in adulthood.",
    ourApproach: [
      "Family-strengthening and kinship care over institutionalization.",
      "Child-friendly spaces in displaced and crisis-affected communities.",
      "Trained child protection officers embedded in every program site.",
      "Rights-based education for children, parents, and authorities.",
    ],
    keyActivities: [
      "Child-friendly spaces and psychosocial support",
      "Birth registration and legal identity drives",
      "Family tracing and reunification for separated children",
      "Anti-trafficking awareness and rapid response",
      "Foster and kinship care strengthening",
      "Safeguarding training for partner organizations",
    ],
    expectedImpact: [
      "Children removed from harm into safe family-based care",
      "Reduced rates of child labor and early marriage",
      "Increased school enrollment for at-risk children",
      "Stronger national and community child protection systems",
    ],
    story: {
      name: "Daniel, 12",
      location: "Crisis-affected community",
      quote:
        "Before, I sold things on the street. Now I go to school. I want to be a teacher so I can help children like me find a way back to learning.",
    },
    stats: [
      { label: "Children reached", value: "28,900+" },
      { label: "Child-friendly spaces", value: "62" },
      { label: "Reunifications completed", value: "470" },
      { label: "Communities served", value: "54" },
    ],
    galleryAlt: "Children learning in a safe space",
    heroImage: "/images/programs/child-protection.jpg",
    color: "from-amber-500/20 to-brand-800/30",
  },
  {
    slug: "youth-empowerment-skills",
    title: "Youth Empowerment & Technical Skills Training",
    shortTitle: "Youth Empowerment",
    Icon: GraduationCap,
    tagline:
      "Equipping the next generation with the skills, confidence, and networks to lead.",
    summary:
      "We invest in young people through technical training, entrepreneurship, mentorship, and civic leadership—turning potential into livelihoods and lasting change.",
    whyItMatters:
      "Globally, more than one in five young people are not in education, employment, or training. With the right opportunities, youth become engines of innovation and stability for their communities. Our programs meet young people where they are and prepare them for the economy of today—and tomorrow.",
    ourApproach: [
      "Demand-driven curriculum aligned with local labor markets.",
      "Industry mentorship and supported transitions to work.",
      "Hands-on training in trades, ICT, and creative industries.",
      "Youth-led councils that shape program design and policy.",
    ],
    keyActivities: [
      "Vocational training: tailoring, carpentry, electrical, welding",
      "Digital skills and ICT bootcamps",
      "Entrepreneurship incubation and seed grants",
      "Career mentorship and apprenticeship placements",
      "Youth leadership and civic engagement labs",
      "Soft-skills, financial literacy, and life skills",
    ],
    expectedImpact: [
      "Higher youth employment and self-employment rates",
      "Increased youth participation in civic and political life",
      "Greater income for young women in non-traditional sectors",
      "Resilient local economies powered by young entrepreneurs",
    ],
    story: {
      name: "Joseph, 21",
      location: "Urban training center",
      quote:
        "The ICT bootcamp changed my life. I built my first website during the program and now I freelance for small businesses across the country. I am paying for my own university now.",
    },
    stats: [
      { label: "Youth trained", value: "9,600+" },
      { label: "Job & internship placements", value: "3,200" },
      { label: "Youth-led businesses launched", value: "510" },
      { label: "Mentors engaged", value: "240" },
    ],
    galleryAlt: "Young people in vocational training",
    heroImage: "/images/programs/youth-empowerment.jpg",
    color: "from-emerald-500/20 to-brand-800/30",
  },
  {
    slug: "disability-inclusion-accessibility",
    title: "Disability Inclusion & Accessibility",
    shortTitle: "Disability Inclusion",
    Icon: Accessibility,
    tagline:
      "Designing programs, places, and policies where everyone belongs.",
    summary:
      "We partner with persons with disabilities and their organizations to remove barriers, expand access, and embed inclusion across every part of community life.",
    whyItMatters:
      "Persons with disabilities make up 15% of the world's population yet remain among the most excluded—from schools, workplaces, healthcare, and humanitarian response. Inclusion is not an add-on; it is essential. We co-design every initiative with disability-led organizations to ensure access by right, not by exception.",
    ourApproach: [
      "'Nothing about us without us'—co-design with DPOs at every step.",
      "Universal design across infrastructure, learning, and digital tools.",
      "Twin-track: targeted support and inclusion in mainstream services.",
      "Caregivers and families as full partners in inclusion.",
    ],
    keyActivities: [
      "Assistive devices: wheelchairs, hearing aids, mobility tools",
      "Inclusive education and individualized learning support",
      "Accessibility audits of schools, clinics, and public spaces",
      "Sign language, Braille, and alternative formats",
      "Inclusive employment readiness and workplace partnerships",
      "Disability rights advocacy and awareness campaigns",
    ],
    expectedImpact: [
      "Increased school attendance for children with disabilities",
      "Greater workforce participation of persons with disabilities",
      "Accessible public services in target communities",
      "Stronger disability rights ecosystems and policies",
    ],
    story: {
      name: "Sarah, 17",
      location: "Inclusive school program",
      quote:
        "I am the first deaf student in my school. With sign language interpreters and a teacher who learned with me, I am now top of my class. I want to study law.",
    },
    stats: [
      { label: "People with disabilities supported", value: "7,800+" },
      { label: "Assistive devices distributed", value: "2,650" },
      { label: "Schools made accessible", value: "48" },
      { label: "DPO partners", value: "22" },
    ],
    galleryAlt: "Inclusive classroom with accessibility features",
    heroImage: "/images/programs/disability-inclusion.jpg",
    color: "from-sky-500/20 to-brand-800/30",
  },
  {
    slug: "health-services-inclusive-education",
    title: "Health Services & Inclusive Education",
    shortTitle: "Health & Education",
    Icon: HeartPulse,
    tagline:
      "Healthier minds and bodies, in classrooms where every learner thrives.",
    summary:
      "We connect health and education because they are inseparable. Our integrated programs deliver primary care, mental health support, school feeding, and inclusive learning to communities that need them most.",
    whyItMatters:
      "A child cannot learn when they are hungry, sick, or unsafe. Communities cannot prosper without resilient health systems. By linking health and education, we tackle root causes—malnutrition, preventable disease, learning loss—and create the conditions for lifelong wellbeing.",
    ourApproach: [
      "Integrated school-health platforms with the Ministry of Health.",
      "Trained community health workers as the front line of care.",
      "Inclusive pedagogy that meets every learner's needs.",
      "Mental health and psychosocial support across the lifespan.",
    ],
    keyActivities: [
      "Maternal, newborn, and child health services",
      "Immunization, nutrition, and WASH (water, sanitation, hygiene)",
      "Mental health and psychosocial counseling",
      "Teacher training and learning materials",
      "School feeding and back-to-school campaigns",
      "Adolescent and reproductive health education",
    ],
    expectedImpact: [
      "Reduced child mortality and stunting in target communities",
      "Higher school attendance and learning outcomes",
      "Earlier mental health support for children and youth",
      "Stronger community-led primary health systems",
    ],
    story: {
      name: "Mama Rose",
      location: "Rural health worker",
      quote:
        "I have walked these hills for ten years. With the supplies and training from World Impact Initiative, I helped over a thousand mothers safely deliver their babies. Health is a right, not a privilege.",
    },
    stats: [
      { label: "Patients served", value: "41,200+" },
      { label: "Children immunized", value: "18,500" },
      { label: "Teachers trained", value: "1,150" },
      { label: "Schools supported", value: "96" },
    ],
    galleryAlt: "Community health workers in the field",
    heroImage: "/images/programs/health-education.jpg",
    color: "from-teal-500/20 to-brand-800/30",
  },
  {
    slug: "crisis-response-humanitarian-relief",
    title: "Crisis Response & Humanitarian Relief",
    shortTitle: "Crisis Response",
    Icon: LifeBuoy,
    tagline:
      "Rapid, dignified relief when disaster strikes—and a path back to recovery.",
    summary:
      "We mobilize quickly with trusted local partners to deliver food, shelter, water, protection, and a bridge from emergency to long-term recovery.",
    whyItMatters:
      "Climate shocks, conflict, and displacement are pushing more communities into crisis than at any time in recent memory. The first hours and days matter—but so do the months that follow. Our response is fast, principled, and rooted in community leadership, ensuring relief that restores dignity and lays the groundwork for recovery.",
    ourApproach: [
      "Localization first: partner with community responders already there.",
      "Cash and voucher assistance to preserve dignity and choice.",
      "Protection mainstreamed across every form of response.",
      "Linking relief to recovery, resilience, and disaster preparedness.",
    ],
    keyActivities: [
      "Emergency food, water, and shelter distribution",
      "Cash and voucher assistance for displaced families",
      "Hygiene kits, dignity kits, and WASH infrastructure",
      "Mobile clinics and emergency health response",
      "Child protection and GBV response in emergencies",
      "Early recovery: livelihoods, rebuilding, and DRR planning",
    ],
    expectedImpact: [
      "Lives saved through rapid, principled humanitarian action",
      "Dignity preserved through cash-based and choice-driven aid",
      "Faster recovery for displaced and host communities",
      "Stronger local capacity to prepare for future shocks",
    ],
    story: {
      name: "Hassan, 45",
      location: "Displaced family of seven",
      quote:
        "We lost everything in the floods. Within days, your team helped us with shelter, food, and clean water. Today our children are back in school and I have started farming again.",
    },
    stats: [
      { label: "People reached in emergencies", value: "65,000+" },
      { label: "Emergency shelters provided", value: "3,400" },
      { label: "Cash assistance disbursed", value: "$2.1M" },
      { label: "Local responders activated", value: "190" },
    ],
    galleryAlt: "Humanitarian relief distribution",
    heroImage: "/images/programs/crisis-response.jpg",
    color: "from-orange-500/20 to-brand-800/30",
  },
];

export function getProgram(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug);
}
