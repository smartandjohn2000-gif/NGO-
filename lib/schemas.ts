import { z } from "zod";

export const volunteerApplicationSchema = z.object({
  fullName: z.string().min(2, "Full name is required."),
  email: z.string().email("Valid email is required."),
  phone: z.string().min(7, "Phone is required."),
  country: z.string().min(2, "Country is required."),
  skills: z.string().min(2, "Please share your skills."),
  interests: z.string().min(2, "Please share your interests."),
  availability: z.string().min(2, "Availability is required."),
  motivation: z
    .string()
    .min(20, "Please provide at least 20 characters for motivation."),
});

export const contactSchema = z.object({
  fullName: z.string().min(2, "Name is required."),
  email: z.string().email("Valid email is required."),
  subject: z.string().min(3, "Subject is required."),
  message: z.string().min(20, "Please provide a detailed message."),
});

export const eventRsvpSchema = z.object({
  eventId: z.string().min(1),
  fullName: z.string().min(2, "Name is required."),
  email: z.string().email("Valid email is required."),
  attendees: z.number().int().min(1).max(10),
  notes: z.string().optional(),
});

export const newsletterSchema = z.object({
  email: z.string().email("Valid email is required."),
});

export const memberRegistrationSchema = z.object({
  fullName: z.string().min(2, "Full name is required."),
  email: z.string().email("Valid email is required."),
});

export const profileUpdateSchema = z.object({
  full_name: z.string().min(2),
  country: z.string().min(2),
  profession: z.string().min(2),
  bio: z.string().min(10),
});

export type VolunteerApplicationInput = z.infer<typeof volunteerApplicationSchema>;
export type ContactInput = z.infer<typeof contactSchema>;
export type EventRsvpInput = z.infer<typeof eventRsvpSchema>;
