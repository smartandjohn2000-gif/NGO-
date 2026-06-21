import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { VolunteerForm } from "@/components/forms/volunteer-form";

export const metadata: Metadata = {
  title: "Volunteer",
  description:
    "Join World Impact Initiative as a volunteer by completing our registration form and sharing your skills and interests.",
  alternates: { canonical: "/volunteer" },
};

export default function VolunteerPage() {
  return (
    <>
      <PageHero
        title="Volunteer with World Impact Initiative"
        subtitle="Bring your skills, time, and compassion to support vulnerable and underserved communities."
        image="/images/gallery-6.jpg"
      />
      <section className="container-shell py-14 md:py-20">
        <SectionHeading
          eyebrow="Volunteer Registration"
          title="Become a volunteer"
          description="Complete the form below. Submissions are sent to the volunteer coordination system for review."
        />
        <div className="mt-8 rounded-2xl bg-white p-6 shadow-lg md:p-8">
          <VolunteerForm />
        </div>
      </section>
    </>
  );
}
