import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { AuthForm } from "@/components/forms/AuthForm";

export const metadata: Metadata = {
  title: "Member Registration",
  description: "Create a free World Impact Initiative member account.",
  robots: { index: false, follow: false },
};

export default function RegisterPage() {
  return (
    <>
      <PageHero
        eyebrow="Membership"
        title="Join our community."
        description="Create a free account to access the member dashboard, directory, and resources."
        crumbs={[{ label: "Membership", href: "/membership" }, { label: "Register" }]}
      />
      <section className="py-16 md:py-20 bg-ink-50">
        <div className="container-page max-w-md mx-auto">
          <div className="rounded-3xl bg-white p-8 ring-1 ring-ink-100 shadow-[0_2px_24px_rgba(7,34,60,0.05)]">
            <AuthForm mode="register" />
          </div>
        </div>
      </section>
    </>
  );
}
