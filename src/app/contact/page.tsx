import type { Metadata } from "next";
import { Mail, MapPin, Share2 } from "lucide-react";
import { ActionForm } from "@/components/forms";
import { submitContact } from "@/app/actions";
import { site, socialLinks } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact World Impact Initiative in Canada for partnerships, volunteering, donations, programs, and community support."
};

export default function ContactPage() {
  return (
    <>
      <section className="hero-pattern section text-white">
        <div className="container max-w-5xl">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-[#F4B400]">Contact</p>
          <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-7xl">
            Connect with World Impact Initiative.
          </h1>
        </div>
      </section>
      <section className="section bg-[#F7F9FC]">
        <div className="container grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div className="grid gap-5">
            <div className="card p-6">
              <Mail className="text-[#0F4C81]" aria-hidden />
              <h2 className="mt-4 text-xl font-black">Email</h2>
              <a href={`mailto:${site.email}`} className="mt-2 block font-bold text-[#0F4C81]">
                {site.email}
              </a>
            </div>
            <div className="card p-6">
              <MapPin className="text-[#0F4C81]" aria-hidden />
              <h2 className="mt-4 text-xl font-black">Office Information</h2>
              <p className="mt-2 text-slate-600">Location: {site.location}</p>
              <p className="mt-1 text-slate-600">Website: {site.domain}</p>
            </div>
            <div className="card p-6">
              <Share2 className="text-[#0F4C81]" aria-hidden />
              <h2 className="mt-4 text-xl font-black">Social Media</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {socialLinks.map((link) => (
                  <a key={link.label} href={link.href} className="rounded-full bg-[#F7F9FC] px-4 py-2 text-sm font-black text-[#0F4C81]">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <iframe
              title="Map showing Canada"
              className="min-h-72 w-full rounded-[2rem] border-0 shadow-xl"
              loading="lazy"
              src="https://www.google.com/maps?q=Canada&output=embed"
            />
          </div>
          <ActionForm
            action={submitContact}
            submitLabel="Send Message"
            fields={[
              { name: "name", label: "Name", required: true },
              { name: "email", label: "Email", type: "email", required: true },
              { name: "subject", label: "Subject", required: true },
              { name: "message", label: "Message", textarea: true, required: true }
            ]}
          />
        </div>
      </section>
    </>
  );
}
