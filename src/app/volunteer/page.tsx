import type { Metadata } from "next";
import { ActionForm } from "@/components/forms";
import { submitVolunteer } from "@/app/actions";

export const metadata: Metadata = {
  title: "Volunteer",
  description:
    "Become a World Impact Initiative volunteer and support humanitarian aid, child protection, youth empowerment, disability inclusion, and community development."
};

export default function VolunteerPage() {
  return (
    <>
      <section className="hero-pattern section text-white">
        <div className="container max-w-5xl">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-[#F4B400]">Volunteer</p>
          <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-7xl">
            Serve with compassion, skill, and accountability.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-50">
            Volunteers help World Impact Initiative deliver outreach, training, referrals, events,
            communications, and community support.
          </p>
        </div>
      </section>
      <section className="section bg-[#F7F9FC]">
        <div className="container grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Registration form</p>
            <h2 className="section-title mt-3">Tell us how you want to contribute.</h2>
            <p className="lead mt-5">
              Admin users can review submissions in Supabase and through the volunteer coordinator
              area of the dashboard.
            </p>
          </div>
          <ActionForm
            action={submitVolunteer}
            submitLabel="Submit Volunteer Application"
            fields={[
              { name: "full_name", label: "Full Name", required: true },
              { name: "email", label: "Email", type: "email", required: true },
              { name: "phone", label: "Phone", type: "tel", required: true },
              { name: "country", label: "Country", required: true },
              { name: "skills", label: "Skills", placeholder: "Training, logistics, communications..." },
              { name: "interests", label: "Interests", placeholder: "Programs or causes you care about" },
              { name: "availability", label: "Availability", placeholder: "Weekdays, weekends, remote..." },
              {
                name: "motivation",
                label: "Motivation Statement",
                textarea: true,
                required: true,
                placeholder: "Why do you want to volunteer with World Impact Initiative?"
              }
            ]}
          />
        </div>
      </section>
    </>
  );
}
