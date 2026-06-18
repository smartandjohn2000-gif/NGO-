export const siteConfig = {
  name: "World Impact Initiative",
  shortName: "WII",
  tagline: "Creating Lasting Impact Through Compassion, Protection, and Opportunity",
  description:
    "World Impact Initiative is a Canadian nonprofit advancing human dignity, equality, and opportunity by supporting vulnerable and underserved communities through sustainable, community-driven programs.",
  url: "https://worldimpactinitiative.org",
  email: "info@worldimpactinitiative.org",
  location: "Canada",
  donationUrl: "https://charitableimpact.com/",
  linktree: "https://linktr.ee/worldimpactinitiative.org",
  social: {
    facebook: "https://facebook.com/worldimpactinitiative",
    instagram: "https://instagram.com/worldimpactinitiative",
    linkedin: "https://linkedin.com/company/worldimpactinitiative",
    twitter: "https://twitter.com/wiinitiative",
    youtube: "https://youtube.com/@worldimpactinitiative",
  },
  keywords: [
    "Canadian nonprofit organization",
    "humanitarian aid",
    "child protection",
    "youth empowerment",
    "disability inclusion",
    "gender equality",
    "crisis response",
    "community development",
    "NGO Canada",
    "World Impact Initiative",
  ],
} as const;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Events", href: "/events" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerLinks = {
  organization: [
    { label: "About Us", href: "/about" },
    { label: "Our Programs", href: "/programs" },
    { label: "Membership", href: "/membership" },
    { label: "Annual Reports", href: "/blog?category=reports" },
  ],
  getInvolved: [
    { label: "Donate", href: "/donate" },
    { label: "Volunteer", href: "/volunteer" },
    { label: "Events", href: "/events" },
    { label: "Partner With Us", href: "/contact?subject=partnership" },
  ],
  resources: [
    { label: "Blog & News", href: "/blog" },
    { label: "Gallery", href: "/gallery" },
    { label: "Resource Center", href: "/membership/resources" },
    { label: "Contact", href: "/contact" },
  ],
};
