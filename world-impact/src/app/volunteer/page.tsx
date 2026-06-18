"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Globe, Heart, CheckCircle2, AlertCircle } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const skillOptions = [
  "Healthcare / Medical", "Education / Teaching", "IT / Technology", "Marketing / Communications",
  "Project Management", "Legal / Advocacy", "Finance / Accounting", "Social Work / Counseling",
  "Construction / Engineering", "Translation / Languages", "Photography / Media", "Other",
];

const interestAreas = [
  "Gender Equality & Protection", "Child Protection & Human Rights",
  "Youth Empowerment", "Disability Inclusion", "Health & Education", "Crisis Response",
  "Fundraising", "Administration & Operations",
];

const availabilityOptions = [
  "Weekdays (9am–5pm)", "Weekday Evenings", "Weekends", "Flexible / Remote",
  "Part-time (10–20 hrs/week)", "Full-time", "One-time events only",
];

const benefits = [
  { icon: Globe, title: "Global Network", desc: "Connect with a passionate global community of changemakers." },
  { icon: Heart, title: "Meaningful Impact", desc: "Every hour you give transforms lives in real, measurable ways." },
  { icon: Users, title: "Skill Development", desc: "Grow personally and professionally through impactful work." },
  { icon: CheckCircle2, title: "Recognition", desc: "Receive official recognition and certificates for your service." },
];

export default function VolunteerPage() {
  const [formData, setFormData] = useState({
    fullName: "", email: "", phone: "", country: "",
    skills: [] as string[], interests: [] as string[],
    availability: "", motivation: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/volunteer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({
          fullName: "", email: "", phone: "", country: "",
          skills: [], interests: [], availability: "", motivation: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const toggleArray = (key: "skills" | "interests", val: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: prev[key].includes(val)
        ? prev[key].filter((v) => v !== val)
        : [...prev[key], val],
    }));
  };

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&q=85"
            alt="Volunteers working together"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/30" />
        </div>
        <div className="container-custom relative z-10 pt-32">
          <AnimateOnScroll>
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-4">Make a Difference</p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              Volunteer With Us
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Join our global network of passionate volunteers and contribute your skills to creating lasting, meaningful change.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimateOnScroll className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="section-title mb-4">Why Volunteer With Us?</h2>
            <p className="section-subtitle">Be part of something bigger than yourself.</p>
          </AnimateOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <AnimateOnScroll key={benefit.title} delay={index * 0.1} className="text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-primary mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.desc}</p>
                </AnimateOnScroll>
              );
            })}
          </div>

          {/* Volunteer Form */}
          <AnimateOnScroll>
            <div className="max-w-2xl mx-auto">
              <div className="bg-gray-50 rounded-3xl p-8 lg:p-10">
                <h2 className="text-2xl font-heading font-bold text-primary mb-2">
                  Volunteer Registration
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and a member of our team will be in touch.
                </p>

                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-heading font-bold text-primary mb-2">
                      Application Received!
                    </h3>
                    <p className="text-gray-600">
                      Thank you for your interest in volunteering. Our team will review your application and contact you within 5 business days.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="label" htmlFor="v-name">Full Name *</label>
                        <input
                          id="v-name"
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="input-field"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="label" htmlFor="v-email">Email *</label>
                        <input
                          id="v-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="input-field"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="label" htmlFor="v-phone">Phone Number</label>
                        <input
                          id="v-phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="input-field"
                          placeholder="+1 (000) 000-0000"
                        />
                      </div>
                      <div>
                        <label className="label" htmlFor="v-country">Country *</label>
                        <input
                          id="v-country"
                          type="text"
                          required
                          value={formData.country}
                          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                          className="input-field"
                          placeholder="Your country"
                        />
                      </div>
                    </div>

                    {/* Skills */}
                    <div>
                      <label className="label">Skills / Expertise *</label>
                      <div className="flex flex-wrap gap-2">
                        {skillOptions.map((skill) => (
                          <button
                            key={skill}
                            type="button"
                            onClick={() => toggleArray("skills", skill)}
                            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                              formData.skills.includes(skill)
                                ? "bg-primary text-white border-primary"
                                : "bg-white text-gray-600 border-gray-200 hover:border-primary hover:text-primary"
                            }`}
                          >
                            {skill}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Interests */}
                    <div>
                      <label className="label">Program Interests *</label>
                      <div className="flex flex-wrap gap-2">
                        {interestAreas.map((area) => (
                          <button
                            key={area}
                            type="button"
                            onClick={() => toggleArray("interests", area)}
                            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                              formData.interests.includes(area)
                                ? "bg-gold text-primary border-gold"
                                : "bg-white text-gray-600 border-gray-200 hover:border-gold hover:text-primary"
                            }`}
                          >
                            {area}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Availability */}
                    <div>
                      <label className="label" htmlFor="v-availability">Availability *</label>
                      <select
                        id="v-availability"
                        required
                        value={formData.availability}
                        onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                        className="input-field"
                      >
                        <option value="">Select availability...</option>
                        {availabilityOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    {/* Motivation */}
                    <div>
                      <label className="label" htmlFor="v-motivation">
                        Motivation Statement *
                      </label>
                      <textarea
                        id="v-motivation"
                        required
                        rows={4}
                        value={formData.motivation}
                        onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                        className="input-field resize-none"
                        placeholder="Tell us why you want to volunteer with World Impact Initiative and what you hope to contribute..."
                      />
                    </div>

                    {status === "error" && (
                      <div className="flex items-center gap-2 text-red-600 bg-red-50 rounded-xl p-4">
                        <AlertCircle className="w-5 h-5 shrink-0" />
                        <p className="text-sm">Something went wrong. Please try again later.</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="btn-primary w-full justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === "submitting" ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Users className="w-4 h-4" />
                          Submit Application
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
