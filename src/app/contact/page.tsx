"use client";

import { useState } from "react";
import { Mail, MapPin, Globe, Send } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { SITE_CONFIG } from "@/lib/utils";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    }
  }

  const inputClass = "w-full px-4 py-3 rounded-lg border border-gray-200 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20";

  return (
    <>
      <section className="gradient-primary text-white py-20 md:py-28">
        <div className="container-narrow">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-white/80">We&apos;d love to hear from you. Reach out to learn more or get involved.</p>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <SectionHeader title="Get In Touch" centered={false} />
            <div className="space-y-6 mb-8">
              <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-4 p-4 bg-surface rounded-xl hover:bg-primary/5 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-primary">Email</p>
                  <p className="text-muted text-sm">{SITE_CONFIG.email}</p>
                </div>
              </a>
              <div className="flex items-center gap-4 p-4 bg-surface rounded-xl">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-primary">Website</p>
                  <p className="text-muted text-sm">{SITE_CONFIG.domain}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-surface rounded-xl">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-primary">Location</p>
                  <p className="text-muted text-sm">{SITE_CONFIG.location}</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden h-64 bg-surface">
              <iframe
                title="World Impact Initiative location map"
                src="https://maps.google.com/maps?q=Canada&t=&z=4&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>

          <Card className="p-8">
            <h2 className="text-2xl font-bold text-primary mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Name *</label>
                  <input id="name" name="name" required className={inputClass} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email *</label>
                  <input id="email" name="email" type="email" required className={inputClass} />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject *</label>
                <input id="subject" name="subject" required className={inputClass} />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message *</label>
                <textarea id="message" name="message" required rows={5} className={inputClass} />
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full flex items-center justify-center gap-2 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark disabled:opacity-50"
              >
                <Send className="w-5 h-5" />
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
              {status === "success" && <p className="text-green-600 text-sm text-center">Message sent successfully!</p>}
              {status === "error" && <p className="text-red-600 text-sm text-center">Failed to send. Please try again.</p>}
            </form>
          </Card>
        </div>
      </Section>
    </>
  );
}
