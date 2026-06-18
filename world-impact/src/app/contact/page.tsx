"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail, MapPin, Globe, CheckCircle2, AlertCircle, Send, ExternalLink,
} from "lucide-react";
import {
  FacebookIcon, InstagramIcon, LinkedinIcon, TwitterXIcon, YoutubeIcon,
} from "@/components/ui/SocialIcons";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const socialLinks = [
  { href: "https://facebook.com/worldimpactinitiative", icon: FacebookIcon, label: "Facebook", color: "hover:text-blue-500" },
  { href: "https://instagram.com/worldimpactinitiative", icon: InstagramIcon, label: "Instagram", color: "hover:text-pink-500" },
  { href: "https://linkedin.com/company/worldimpactinitiative", icon: LinkedinIcon, label: "LinkedIn", color: "hover:text-blue-400" },
  { href: "https://twitter.com/worldimpactini", icon: TwitterXIcon, label: "X (Twitter)", color: "hover:text-sky-400" },
  { href: "https://youtube.com/worldimpactinitiative", icon: YoutubeIcon, label: "YouTube", color: "hover:text-red-500" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", subject: "", message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-primary">
        <div className="container-custom relative z-10">
          <AnimateOnScroll>
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-4">Get In Touch</p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              We&apos;d love to hear from you. Reach out for partnerships, press inquiries, or general questions.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Contact Info Sidebar */}
            <AnimateOnScroll direction="left" className="space-y-6">
              {/* Info Card */}
              <div className="card p-6">
                <h3 className="font-heading font-bold text-primary text-lg mb-5">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:info@worldimpactinitiative.org"
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5">Email</p>
                      <p className="text-sm font-medium text-gray-800 group-hover:text-primary transition-colors">
                        info@worldimpactinitiative.org
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5">Location</p>
                      <p className="text-sm font-medium text-gray-800">Canada 🇨🇦</p>
                    </div>
                  </div>

                  <a
                    href="https://worldimpactinitiative.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Globe className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5">Website</p>
                      <p className="text-sm font-medium text-gray-800 group-hover:text-primary transition-colors flex items-center gap-1">
                        worldimpactinitiative.org
                        <ExternalLink className="w-3 h-3" />
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="card p-6">
                <h3 className="font-heading font-bold text-primary text-lg mb-5">
                  Follow Us
                </h3>
                <div className="space-y-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-3 text-gray-600 ${social.color} transition-colors`}
                        aria-label={`Visit ${social.label}`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="text-sm font-medium">{social.label}</span>
                      </a>
                    );
                  })}
                  <a
                    href="https://linktr.ee/worldimpactinitiative.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-600 hover:text-green-500 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span className="text-sm font-medium">Linktree</span>
                  </a>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="card overflow-hidden">
                <div className="relative h-48 bg-gray-100">
                  <Image
                    src="https://images.unsplash.com/photo-1569336415962-a4bd9f69c8bf?w=600&q=70"
                    alt="Canada — World Impact Initiative location"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-primary/40">
                    <div className="text-center text-white">
                      <MapPin className="w-8 h-8 mx-auto mb-1" />
                      <p className="font-semibold">Canada</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Contact Form */}
            <AnimateOnScroll direction="right" className="lg:col-span-2">
              <div className="card p-8 lg:p-10">
                <h2 className="text-2xl font-heading font-bold text-primary mb-2">
                  Send Us a Message
                </h2>
                <p className="text-gray-500 mb-8">
                  We respond to all inquiries within 48 hours on business days.
                </p>

                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-heading font-bold text-primary mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600">
                      Thank you for reaching out. We&apos;ll get back to you within 48 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="label" htmlFor="c-name">Full Name *</label>
                        <input
                          id="c-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="input-field"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="label" htmlFor="c-email">Email *</label>
                        <input
                          id="c-email"
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
                        <label className="label" htmlFor="c-phone">Phone (Optional)</label>
                        <input
                          id="c-phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="input-field"
                          placeholder="+1 (000) 000-0000"
                        />
                      </div>
                      <div>
                        <label className="label" htmlFor="c-subject">Subject *</label>
                        <select
                          id="c-subject"
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="input-field"
                        >
                          <option value="">Select a subject...</option>
                          <option value="general">General Inquiry</option>
                          <option value="partnership">Partnership Opportunity</option>
                          <option value="donation">Donation Question</option>
                          <option value="volunteer">Volunteering</option>
                          <option value="media">Media / Press</option>
                          <option value="programs">Program Information</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="label" htmlFor="c-message">Message *</label>
                      <textarea
                        id="c-message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="input-field resize-none"
                        placeholder="How can we help you?"
                      />
                    </div>

                    {status === "error" && (
                      <div className="flex items-center gap-2 text-red-600 bg-red-50 rounded-xl p-4">
                        <AlertCircle className="w-5 h-5 shrink-0" />
                        <p className="text-sm">Something went wrong. Please try again or email us directly.</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="btn-primary gap-2 disabled:opacity-60"
                    >
                      {status === "submitting" ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
