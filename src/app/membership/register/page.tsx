import type { Metadata } from "next";
import { ActionForm } from "@/components/forms";
import { submitMemberProfile } from "@/app/actions";

export const metadata: Metadata = {
  title: "Register for Membership",
  description: "Create a World Impact Initiative member profile."
};

export default function RegisterPage() {
  return (
    <section className="section bg-[#F7F9FC]">
      <div className="container grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
        <div>
          <p className="eyebrow">Registration</p>
          <h1 className="section-title mt-3">Create your member profile.</h1>
          <p className="lead mt-5">
            This form stores the profile data Supabase Auth can connect to after credentials are
            configured.
          </p>
        </div>
        <ActionForm
          action={submitMemberProfile}
          submitLabel="Create Profile"
          fields={[
            { name: "full_name", label: "Full Name", required: true },
            { name: "email", label: "Email", type: "email", required: true },
            { name: "country", label: "Country", required: true },
            { name: "skills", label: "Skills" },
            { name: "bio", label: "Bio", textarea: true }
          ]}
        />
      </div>
    </section>
  );
}
