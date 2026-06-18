import type { Metadata } from "next";
import Link from "next/link";
import { LogIn, UserPlus, Shield, BookOpen, Users, LayoutDashboard } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Member Portal",
  description: "Access the World Impact Initiative member portal — login, register, and manage your membership.",
};

const memberBenefits = [
  { icon: LayoutDashboard, title: "Personal Dashboard", desc: "Track your donations, volunteer hours, and impact in one place." },
  { icon: BookOpen, title: "Resource Center", desc: "Access exclusive reports, toolkits, and program resources." },
  { icon: Users, title: "Member Directory", desc: "Connect with fellow supporters and volunteers worldwide." },
  { icon: Shield, title: "Early Access", desc: "Get first access to events, programs, and volunteer opportunities." },
];

export default function MembershipPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-primary">
        <div className="container-custom relative z-10">
          <AnimateOnScroll>
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-4">Member Portal</p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              Join Our Community
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Become a member and access exclusive resources, connect with changemakers, and track your impact.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Auth Options */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-16">
            <AnimateOnScroll delay={0.1}>
              <div className="card p-8 text-center hover:border-primary hover:border-2 transition-all">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <LogIn className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-xl font-heading font-bold text-primary mb-3">Sign In</h2>
                <p className="text-gray-600 text-sm mb-6">Already a member? Sign in to access your dashboard.</p>
                <Link href="/membership/login" className="btn-primary w-full justify-center">
                  Sign In
                </Link>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.2}>
              <div className="card p-8 text-center border-2 border-gold">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserPlus className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-xl font-heading font-bold text-primary mb-3">Register</h2>
                <p className="text-gray-600 text-sm mb-6">New here? Create your free member account today.</p>
                <Link href="/membership/register" className="btn-gold w-full justify-center">
                  Create Account
                </Link>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Benefits */}
          <AnimateOnScroll className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="section-title mb-4">Member Benefits</h2>
            <p className="section-subtitle">Membership is free and open to all supporters of World Impact Initiative.</p>
          </AnimateOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {memberBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <AnimateOnScroll key={benefit.title} delay={index * 0.08} className="text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-primary mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.desc}</p>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
