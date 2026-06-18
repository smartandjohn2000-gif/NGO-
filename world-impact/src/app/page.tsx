import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import ImpactAreas from "@/components/home/ImpactAreas";
import WhoWeAre from "@/components/home/WhoWeAre";
import CallToAction from "@/components/home/CallToAction";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export const metadata: Metadata = {
  title: "Home | World Impact Initiative — Canadian Nonprofit Organization",
  description:
    "World Impact Initiative is a Canadian nonprofit advancing human dignity, equality, and opportunity. We support vulnerable communities through child protection, gender equality, youth empowerment, and crisis response programs.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ImpactAreas />
      <WhoWeAre />
      <TestimonialsSection />
      <CallToAction />
    </>
  );
}
