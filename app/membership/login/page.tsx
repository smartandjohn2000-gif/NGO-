import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/page-hero";
import { LoginForm } from "@/components/forms/auth-forms";

export const metadata: Metadata = {
  title: "Membership Login",
  description:
    "Login to the World Impact Initiative membership portal to access your dashboard and resources.",
  alternates: { canonical: "/membership/login" },
};

export default function MembershipLoginPage() {
  return (
    <>
      <PageHero
        title="Membership Portal Login"
        subtitle="Securely access your account and continue supporting community impact."
        image="/images/membership-hero.jpg"
      />
      <section className="container-shell py-14 md:py-20">
        <div className="mx-auto max-w-xl space-y-4">
          <LoginForm />
          <p className="text-center text-sm text-slate-600">
            New member?{" "}
            <Link href="/membership/register" className="font-semibold text-[#0F4C81]">
              Create an account
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
