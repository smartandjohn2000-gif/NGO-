import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { AuthForm } from "@/components/forms/AuthForm";

export const metadata: Metadata = {
  title: "Member Login",
  description: "Sign in to the World Impact Initiative member portal.",
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return (
    <>
      <PageHero
        eyebrow="Membership"
        title="Welcome back."
        description="Sign in to access your dashboard, the directory, and member resources."
        crumbs={[{ label: "Membership", href: "/membership" }, { label: "Login" }]}
      />
      <section className="py-16 md:py-20 bg-ink-50">
        <div className="container-page max-w-md mx-auto">
          <div className="rounded-3xl bg-white p-8 ring-1 ring-ink-100 shadow-[0_2px_24px_rgba(7,34,60,0.05)]">
            <AuthForm mode="login" />
          </div>
        </div>
      </section>
    </>
  );
}
