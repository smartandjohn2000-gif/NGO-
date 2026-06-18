import type { Metadata } from "next";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "World Impact Initiative terms of use.",
};

export default function TermsPage() {
  return (
    <>
      <section className="relative pt-32 pb-12 bg-primary">
        <div className="container-custom">
          <AnimateOnScroll>
            <h1 className="text-4xl font-heading font-bold text-white">Terms of Use</h1>
            <p className="text-white/70 mt-2">Last updated: June 2025</p>
          </AnimateOnScroll>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement.</p>

            <h2>2. Use of Website</h2>
            <p>This website is provided for informational purposes about World Impact Initiative&apos;s programs and activities. You agree to use this website lawfully and in accordance with these terms.</p>

            <h2>3. Intellectual Property</h2>
            <p>All content on this website, including text, images, and logos, is the property of World Impact Initiative and is protected by copyright law. You may not reproduce or distribute content without explicit permission.</p>

            <h2>4. Donations</h2>
            <p>Donations made through this website are processed securely by Charitable Impact. World Impact Initiative is a registered Canadian nonprofit organization. Donations may be tax-deductible in accordance with applicable law.</p>

            <h2>5. Volunteer Applications</h2>
            <p>Volunteer application submissions are subject to review and approval by World Impact Initiative. Submission does not guarantee a volunteer position.</p>

            <h2>6. Limitation of Liability</h2>
            <p>World Impact Initiative shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website.</p>

            <h2>7. Changes to Terms</h2>
            <p>We reserve the right to modify these terms at any time. Continued use of the website after changes constitutes acceptance of the new terms.</p>

            <h2>8. Contact</h2>
            <p>Questions about these terms? Contact us at info@worldimpactinitiative.org.</p>
          </div>
        </div>
      </section>
    </>
  );
}
