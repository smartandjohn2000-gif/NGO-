export type UserRole = "super_admin" | "program_manager" | "content_editor" | "volunteer_coordinator" | "member";

export interface Profile {
  id: string;
  email: string;
  full_name: string;
  phone?: string;
  country?: string;
  bio?: string;
  avatar_url?: string;
  role: UserRole;
  created_at: string;
  updated_at: string;
}

export interface Program {
  slug: string;
  title: string;
  shortDescription: string;
  icon: string;
  heroImage: string;
  whyItMatters: string;
  ourApproach: string;
  keyActivities: string[];
  expectedImpact: string[];
  beneficiaryStory: {
    name: string;
    quote: string;
    image: string;
  };
  statistics: { label: string; value: string }[];
  gallery: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  image: string;
  featured?: boolean;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  endDate?: string;
  location: string;
  category: string;
  image: string;
  isPast: boolean;
  registrationUrl?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  type: "photo" | "video";
  src: string;
  thumbnail: string;
}

export interface VolunteerSubmission {
  full_name: string;
  email: string;
  phone: string;
  country: string;
  skills: string;
  interests: string;
  availability: string;
  motivation: string;
}

export interface Beneficiary {
  id: string;
  full_name: string;
  date_of_birth?: string;
  gender?: string;
  country: string;
  program_id: string;
  status: "active" | "graduated" | "inactive";
  notes?: string;
  created_at: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  subject: string;
  message: string;
}
