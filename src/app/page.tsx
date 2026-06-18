import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { ImpactAreas } from "@/components/home/ImpactAreas";
import { WhoWeAre } from "@/components/home/WhoWeAre";
import { MissionVision } from "@/components/home/MissionVision";
import { CallToAction } from "@/components/home/CallToAction";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ImpactAreas />
      <WhoWeAre />
      <MissionVision />
      <CallToAction />
    </>
  );
}
