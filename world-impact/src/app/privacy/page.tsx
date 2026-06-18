import type { Metadata } from "next";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "World Impact Initiative privacy policy.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="relative pt-32 pb-12 bg-primary">
        <div className="container-custom">
          <AnimateOnScroll>
            <h1 className="text-4xl font-heading font-bold text-white">Privacy Policy</h1>
            <p className="text-white/70 mt-2">Last updated: June 2025</p>
          </AnimateOnScroll>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <h2>1. Information We Collect</h2>
            <p>We collect information you provide directly to us, including when you make a donation, register as a volunteer, sign up for our newsletter, or contact us. This may include your name, email address, phone number, and payment information.</p>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to process donations, communicate with you about our programs, send newsletters (with your consent), and improve our services.</p>

            <h2>3. Information Sharing</h2>
            <p>We do not sell or share your personal information with third parties except as necessary to process donations (through Charitable Impact), comply with legal obligations, or with your explicit consent.</p>

            <h2>4. Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, or disclosure.</p>

            <h2>5. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal information. Contact us at info@worldimpactinitiative.org to exercise these rights.</p>

            <h2>6. Cookies</h2>
            <p>We use cookies to improve your experience on our website. You can control cookies through your browser settings.</p>

            <h2>7. Contact Us</h2>
            <p>If you have questions about this privacy policy, please contact us at info@worldimpactinitiative.org.</p>
          </div>
        </div>
      </section>
    </>
  );
}
