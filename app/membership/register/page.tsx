import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { RegisterForm } from "@/components/forms/auth-forms";

export const metadata: Metadata = {
  title: "Membership Registration",
  description:
    "Create a World Impact Initiative membership account to access the portal and resources.",
  alternates: { canonical: "/membership/register" },
};

export default function MembershipRegisterPage() {
  return (
    <>
      <PageHero
        title="Membership Portal Registration"
        subtitle="Create your account to access the dashboard, profile management, member directory, and resources."
        image="/images/main_uploads/main-7.jpg"
      />
      <section className="container-shell py-14 md:py-20">
        <div className="mx-auto max-w-xl">
          <RegisterForm />
        </div>
      </section>
    </>
  );
}
