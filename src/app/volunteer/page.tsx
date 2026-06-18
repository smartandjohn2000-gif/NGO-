"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export default function VolunteerPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());
    try {
      const res = await fetch("/api/volunteer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClass = "w-full px-4 py-3 rounded-lg border border-gray-200 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors";

  return (
    <>
      <section className="gradient-primary text-white py-20 md:py-28">
        <div className="container-narrow">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Volunteer With Us</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Join our community of changemakers and help create lasting impact.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <SectionHeader title="Why Volunteer?" centered={false} />
            <div className="space-y-4 text-muted">
              <p>Volunteers are the heart of World Impact Initiative. Your skills, passion, and time directly transform lives in communities across Canada and beyond.</p>
              <ul className="space-y-3">
                {[
                  "Make a tangible difference in vulnerable communities",
                  "Develop new skills and gain humanitarian experience",
                  "Join a diverse, passionate team of changemakers",
                  "Flexible opportunities to match your availability",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Card className="p-8">
            <h2 className="text-2xl font-bold text-primary mb-6">Volunteer Registration</h2>
            {status === "success" ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">Thank You!</h3>
                <p className="text-muted">Your application has been submitted. Our team will contact you soon.</p>
                <button type="button" onClick={() => setStatus("idle")} className="mt-4 text-primary font-semibold hover:text-accent">
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="full_name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input id="full_name" name="full_name" required className={inputClass} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input id="email" name="email" type="email" required className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                    <input id="phone" name="phone" type="tel" required className={inputClass} />
                  </div>
                </div>
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country *</label>
                  <input id="country" name="country" required defaultValue="Canada" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-1">Skills</label>
                  <input id="skills" name="skills" placeholder="e.g. Teaching, Healthcare, IT, Translation" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="interests" className="block text-sm font-medium text-gray-700 mb-1">Interests</label>
                  <select id="interests" name="interests" className={inputClass}>
                    <option value="">Select a program area</option>
                    <option value="gender-equality">Gender Equality & Protection</option>
                    <option value="child-protection">Child Protection & Human Rights</option>
                    <option value="youth-empowerment">Youth Empowerment & Skills Training</option>
                    <option value="disability-inclusion">Disability Inclusion & Accessibility</option>
                    <option value="health-education">Health Services & Inclusive Education</option>
                    <option value="crisis-response">Crisis Response & Humanitarian Relief</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-1">Availability</label>
                  <select id="availability" name="availability" className={inputClass}>
                    <option value="">Select availability</option>
                    <option value="weekdays">Weekdays</option>
                    <option value="weekends">Weekends</option>
                    <option value="flexible">Flexible</option>
                    <option value="full-time">Full-time (3+ months)</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-1">Motivation Statement *</label>
                  <textarea id="motivation" name="motivation" required rows={4} placeholder="Tell us why you want to volunteer..." className={inputClass} />
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors disabled:opacity-50"
                >
                  <Send className="w-5 h-5" aria-hidden="true" />
                  {status === "loading" ? "Submitting..." : "Submit Application"}
                </button>
                {status === "error" && <p className="text-red-600 text-sm text-center">Submission failed. Please try again.</p>}
              </form>
            )}
          </Card>
        </div>
      </Section>
    </>
  );
}
