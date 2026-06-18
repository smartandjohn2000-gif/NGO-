import type { Program } from "@/types";

export const programs: Program[] = [
  {
    slug: "gender-equality-protection",
    title: "Gender Equality & Protection",
    shortDescription:
      "Promoting equal rights, safety, and opportunity for women, girls, and marginalized genders through advocacy, protection services, and community education.",
    icon: "Shield",
    heroImage: "/images/programs/gender-equality.jpg",
    whyItMatters:
      "Gender inequality remains one of the most persistent barriers to human development worldwide. Women and girls face disproportionate rates of violence, discrimination, and limited access to education and economic opportunities. In crisis settings, these vulnerabilities are amplified. World Impact Initiative recognizes that achieving sustainable development requires addressing the root causes of gender inequality and creating safe spaces where all individuals can thrive with dignity.",
    ourApproach:
      "Our gender equality program takes a holistic, community-centered approach. We work with local leaders, women's groups, and youth advocates to challenge harmful norms, provide protection services for survivors of gender-based violence, and create economic empowerment opportunities. We integrate gender perspectives across all our programs and ensure meaningful participation of women and girls in decision-making processes that affect their lives.",
    keyActivities: [
      "Gender-based violence prevention and response services",
      "Women's economic empowerment and micro-enterprise support",
      "Leadership training for women and girls",
      "Community awareness campaigns on gender equality",
      "Safe spaces and counseling for survivors",
      "Policy advocacy for gender-inclusive legislation",
      "Male engagement programs promoting positive masculinity",
    ],
    expectedImpact: [
      "Reduced incidence of gender-based violence in target communities",
      "Increased economic independence for women entrepreneurs",
      "Greater representation of women in community leadership",
      "Improved access to education for girls",
      "Stronger community support systems for survivors",
    ],
    beneficiaryStory: {
      name: "Amara K.",
      quote:
        "Before joining the program, I had no voice in my community. Today, I lead a women's cooperative that supports 40 families. World Impact Initiative didn't just give us resources—they gave us the confidence to believe change is possible.",
      image: "/images/programs/beneficiary-gender.jpg",
    },
    statistics: [
      { label: "Women empowered annually", value: "2,500+" },
      { label: "Safe spaces established", value: "18" },
      { label: "Women-led enterprises supported", value: "120" },
      { label: "Community advocates trained", value: "350" },
    ],
    gallery: [
      "/images/gallery/gender-1.jpg",
      "/images/gallery/gender-2.jpg",
      "/images/gallery/gender-3.jpg",
    ],
  },
  {
    slug: "child-protection-human-rights",
    title: "Child Protection & Human Rights",
    shortDescription:
      "Safeguarding children from exploitation, abuse, and neglect while advocating for the universal protection of human rights for all.",
    icon: "Heart",
    heroImage: "/images/programs/child-protection.jpg",
    whyItMatters:
      "Every child deserves to grow up safe, protected, and free from harm. Yet millions of children worldwide face violence, exploitation, trafficking, and denial of their fundamental rights. Conflict, poverty, and displacement create environments where children are especially vulnerable. Protecting children is not just a moral imperative—it is essential for building peaceful, prosperous societies.",
    ourApproach:
      "We implement comprehensive child protection systems that prevent harm, respond to violations, and promote children's rights. Our approach includes community-based monitoring, family strengthening programs, legal advocacy, and psychosocial support. We train community members to identify and report child protection concerns and work with governments to strengthen child protection policies.",
    keyActivities: [
      "Community-based child protection committees",
      "Family reunification for separated children",
      "Psychosocial support and trauma counseling",
      "Legal aid for child rights violations",
      "Birth registration and documentation campaigns",
      "Anti-trafficking awareness and prevention",
      "Child-friendly spaces in crisis settings",
    ],
    expectedImpact: [
      "Reduced child exploitation and abuse cases",
      "Increased birth registration rates",
      "Stronger community child protection systems",
      "Improved psychosocial wellbeing for vulnerable children",
      "Enhanced government accountability for child rights",
    ],
    beneficiaryStory: {
      name: "David M.",
      quote:
        "I was separated from my family during the conflict. The child protection team found my parents and helped us rebuild our lives together. They gave me hope when I had none.",
      image: "/images/programs/beneficiary-child.jpg",
    },
    statistics: [
      { label: "Children protected annually", value: "5,000+" },
      { label: "Families reunited", value: "280" },
      { label: "Child protection committees", value: "45" },
      { label: "Birth registrations facilitated", value: "1,200" },
    ],
    gallery: [
      "/images/gallery/child-1.jpg",
      "/images/gallery/child-2.jpg",
      "/images/gallery/child-3.jpg",
    ],
  },
  {
    slug: "youth-empowerment-skills",
    title: "Youth Empowerment & Technical Skills Training",
    shortDescription:
      "Equipping young people with technical skills, leadership capabilities, and entrepreneurial mindsets to build brighter futures.",
    icon: "GraduationCap",
    heroImage: "/images/programs/youth-empowerment.jpg",
    whyItMatters:
      "Young people represent the largest demographic in many of the communities we serve, yet they often face the highest rates of unemployment and limited access to quality education. Without opportunities for skills development and meaningful engagement, youth become vulnerable to exploitation, radicalization, and despair. Investing in youth is investing in the future of entire communities.",
    ourApproach:
      "Our youth empowerment program combines technical skills training with life skills, mentorship, and entrepreneurship support. We partner with local businesses and technology companies to provide market-relevant training in areas such as digital literacy, vocational trades, and soft skills. Youth participants also engage in community service projects that develop leadership and civic responsibility.",
    keyActivities: [
      "Technical and vocational skills training",
      "Digital literacy and coding workshops",
      "Entrepreneurship and business development",
      "Youth leadership and civic engagement programs",
      "Mentorship matching with professionals",
      "Job placement and internship coordination",
      "Youth-led community improvement projects",
    ],
    expectedImpact: [
      "Increased youth employment and self-employment rates",
      "Enhanced digital and technical competencies",
      "Stronger youth participation in community governance",
      "Reduced youth involvement in harmful activities",
      "Creation of youth-led social enterprises",
    ],
    beneficiaryStory: {
      name: "Sarah L.",
      quote:
        "The technical skills program changed my life. I learned web development and now run my own digital services business, employing three other young women from my community.",
      image: "/images/programs/beneficiary-youth.jpg",
    },
    statistics: [
      { label: "Youth trained annually", value: "3,200+" },
      { label: "Job placements achieved", value: "680" },
      { label: "Youth enterprises launched", value: "95" },
      { label: "Training centers operating", value: "12" },
    ],
    gallery: [
      "/images/gallery/youth-1.jpg",
      "/images/gallery/youth-2.jpg",
      "/images/gallery/youth-3.jpg",
    ],
  },
  {
    slug: "disability-inclusion",
    title: "Disability Inclusion & Accessibility",
    shortDescription:
      "Ensuring persons with disabilities have equal access to education, employment, healthcare, and full participation in community life.",
    icon: "Accessibility",
    heroImage: "/images/programs/disability-inclusion.jpg",
    whyItMatters:
      "Over one billion people worldwide live with some form of disability, yet they remain among the most marginalized populations. Barriers to accessibility, discriminatory attitudes, and lack of inclusive policies prevent persons with disabilities from realizing their full potential. Inclusion is not charity—it is a fundamental human right and a catalyst for community-wide progress.",
    ourApproach:
      "We work to remove physical, attitudinal, and systemic barriers that exclude persons with disabilities. Our program includes accessibility audits, assistive device provision, inclusive education support, employment training, and advocacy for disability rights legislation. We ensure persons with disabilities are leaders in designing and implementing inclusion initiatives.",
    keyActivities: [
      "Accessibility assessments and infrastructure improvements",
      "Provision of assistive devices and mobility aids",
      "Inclusive education teacher training",
      "Employment skills training for persons with disabilities",
      "Disability rights advocacy and awareness campaigns",
      "Support groups and peer mentoring networks",
      "Inclusive sports and recreational programs",
    ],
    expectedImpact: [
      "Increased school enrollment for children with disabilities",
      "Improved employment rates for persons with disabilities",
      "Enhanced accessibility in public spaces and services",
      "Stronger disability rights advocacy networks",
      "Reduced stigma and discrimination in communities",
    ],
    beneficiaryStory: {
      name: "James O.",
      quote:
        "For years, I was told my disability meant I couldn't work or contribute. World Impact Initiative helped me get training and an assistive device. Today, I teach computer skills to other persons with disabilities.",
      image: "/images/programs/beneficiary-disability.jpg",
    },
    statistics: [
      { label: "Persons with disabilities served", value: "1,800+" },
      { label: "Assistive devices provided", value: "450" },
      { label: "Accessible facilities created", value: "32" },
      { label: "Inclusive education teachers trained", value: "200" },
    ],
    gallery: [
      "/images/gallery/disability-1.jpg",
      "/images/gallery/disability-2.jpg",
      "/images/gallery/disability-3.jpg",
    ],
  },
  {
    slug: "health-education",
    title: "Health Services & Inclusive Education",
    shortDescription:
      "Delivering essential health services and ensuring equitable access to quality, inclusive education for underserved communities.",
    icon: "Stethoscope",
    heroImage: "/images/programs/health-education.jpg",
    whyItMatters:
      "Access to healthcare and education are fundamental human rights that remain out of reach for millions. In underserved communities, preventable diseases, maternal mortality, and lack of educational resources perpetuate cycles of poverty. Quality, inclusive education and healthcare are the foundation upon which individuals and communities build prosperous, dignified lives.",
    ourApproach:
      "Our integrated health and education program addresses both immediate needs and systemic gaps. We operate mobile health clinics, support community health workers, train teachers in inclusive pedagogy, and provide educational materials and infrastructure. We prioritize maternal and child health, mental health support, and ensuring no child is left behind in education.",
    keyActivities: [
      "Mobile health clinics and community health outreach",
      "Maternal and child health programs",
      "Mental health and psychosocial support services",
      "School infrastructure development and renovation",
      "Teacher training in inclusive education methods",
      "Scholarship and educational material provision",
      "Water, sanitation, and hygiene (WASH) in schools",
    ],
    expectedImpact: [
      "Reduced maternal and child mortality rates",
      "Increased school enrollment and retention",
      "Improved health outcomes in target communities",
      "Enhanced teacher capacity for inclusive education",
      "Better WASH facilities in schools and communities",
    ],
    beneficiaryStory: {
      name: "Grace N.",
      quote:
        "The mobile clinic saved my daughter's life when she had complications during childbirth. The health workers were compassionate and skilled. Now my granddaughter is healthy and attending the school they helped build.",
      image: "/images/programs/beneficiary-health.jpg",
    },
    statistics: [
      { label: "Patients served annually", value: "15,000+" },
      { label: "Schools supported", value: "28" },
      { label: "Scholarships awarded", value: "500" },
      { label: "Health workers trained", value: "180" },
    ],
    gallery: [
      "/images/gallery/health-1.jpg",
      "/images/gallery/health-2.jpg",
      "/images/gallery/health-3.jpg",
    ],
  },
  {
    slug: "crisis-response",
    title: "Crisis Response & Humanitarian Relief",
    shortDescription:
      "Providing rapid, coordinated humanitarian assistance to communities affected by conflict, natural disasters, and displacement.",
    icon: "AlertTriangle",
    heroImage: "/images/programs/crisis-response.jpg",
    whyItMatters:
      "Humanitarian crises—whether caused by conflict, natural disasters, or displacement—affect millions of people each year. When crises strike, vulnerable populations face immediate threats to survival, safety, and dignity. Rapid, effective humanitarian response can mean the difference between life and death, and between despair and hope for affected communities.",
    ourApproach:
      "Our crisis response program is built on preparedness, rapid deployment, and community-centered relief. We maintain emergency response teams, pre-position supplies, and coordinate with local partners to deliver life-saving assistance within 72 hours of a crisis. Our response includes food security, shelter, WASH, protection services, and early recovery support to help communities rebuild.",
    keyActivities: [
      "Emergency food and nutrition assistance",
      "Temporary shelter and non-food item distribution",
      "Emergency WASH and sanitation services",
      "Protection monitoring and referral services",
      "Emergency medical care and mobile clinics",
      "Cash and voucher assistance programs",
      "Early recovery and livelihood restoration",
    ],
    expectedImpact: [
      "Timely delivery of life-saving assistance within 72 hours",
      "Reduced mortality and morbidity in crisis-affected populations",
      "Safe shelter for displaced families",
      "Restored access to clean water and sanitation",
      "Accelerated community recovery and resilience building",
    ],
    beneficiaryStory: {
      name: "Fatima H.",
      quote:
        "When the floods destroyed our home, we lost everything. World Impact Initiative arrived with food, clean water, and temporary shelter. They stayed with us through recovery and helped us rebuild stronger than before.",
      image: "/images/programs/beneficiary-crisis.jpg",
    },
    statistics: [
      { label: "People reached in crises", value: "25,000+" },
      { label: "Emergency response deployments", value: "15" },
      { label: "Shelter kits distributed", value: "2,400" },
      { label: "Average response time", value: "48 hrs" },
    ],
    gallery: [
      "/images/gallery/crisis-1.jpg",
      "/images/gallery/crisis-2.jpg",
      "/images/gallery/crisis-3.jpg",
    ],
  },
];

export function getProgramBySlug(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug);
}
