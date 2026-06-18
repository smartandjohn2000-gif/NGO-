import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export const SITE_CONFIG = {
  name: "World Impact Initiative",
  domain: "worldimpactinitiative.org",
  url: "https://worldimpactinitiative.org",
  email: "info@worldimpactinitiative.org",
  location: "Canada",
  description:
    "World Impact Initiative is a Canadian nonprofit organization advancing human dignity, equality, and opportunity through sustainable, community-driven humanitarian programs.",
  keywords: [
    "Canadian nonprofit organization",
    "humanitarian aid",
    "child protection",
    "youth empowerment",
    "disability inclusion",
    "gender equality",
    "crisis response",
    "community development",
  ],
  social: {
    linktree: "https://linktr.ee/worldimpactinitiative.org",
    facebook: "https://linktr.ee/worldimpactinitiative.org",
    instagram: "https://linktr.ee/worldimpactinitiative.org",
    linkedin: "https://linktr.ee/worldimpactinitiative.org",
    twitter: "https://linktr.ee/worldimpactinitiative.org",
    youtube: "https://linktr.ee/worldimpactinitiative.org",
  },
  donateUrl: "https://charitableimpact.com/",
};

export const ROLE_PERMISSIONS = {
  super_admin: ["dashboard", "beneficiaries", "users", "content", "volunteers", "reports", "settings"],
  program_manager: ["dashboard", "beneficiaries", "reports", "programs"],
  content_editor: ["dashboard", "content", "blog", "gallery", "events"],
  volunteer_coordinator: ["dashboard", "volunteers", "events"],
  member: ["portal"],
} as const;

export function hasPermission(role: keyof typeof ROLE_PERMISSIONS, permission: string): boolean {
  return ROLE_PERMISSIONS[role]?.includes(permission as never) ?? false;
}
