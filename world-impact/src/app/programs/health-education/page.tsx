import type { Metadata } from "next";
import { HeartPulse } from "lucide-react";
import ProgramPageTemplate from "@/components/programs/ProgramPageTemplate";

export const metadata: Metadata = {
  title: "Health Services & Inclusive Education",
  description:
    "Expanding access to quality healthcare and education for marginalized communities, ensuring no one is left behind.",
};

export default function HealthEducationPage() {
  return (
    <ProgramPageTemplate
      icon={HeartPulse}
      title="Health Services & Inclusive Education"
      subtitle="Ensuring every person has access to quality healthcare and education — the two greatest equalizers of our time."
      heroImage="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&q=85"
      iconColor="text-red-500"
      iconBg="bg-red-50"
      whyItMatters="Millions of people in underserved communities lack access to basic healthcare and quality education. Without health, people cannot learn or work. Without education, poverty is perpetuated across generations. These two rights are inseparable, and addressing them together creates the most powerful foundation for lasting community development."
      approach="We take an integrated approach to health and education — delivering community health services alongside school support programs. We train community health workers, support mobile health clinics, build and equip schools, and work with governments to strengthen health and education systems. Everything we do is evidence-based and community-led."
      activities={[
        { title: "Community Health Clinics", description: "Operating and supporting mobile and fixed health clinics delivering primary care, maternal health, and disease prevention services." },
        { title: "School Construction & Rehabilitation", description: "Building and rehabilitating schools in underserved areas, ensuring safe, functional learning environments." },
        { title: "Health Worker Training", description: "Training community health workers to deliver basic healthcare services and health education at the community level." },
        { title: "Nutrition Programs", description: "Implementing school feeding and community nutrition programs to combat malnutrition and improve cognitive development." },
        { title: "Maternal & Child Health", description: "Delivering antenatal care, skilled birth attendance, and postnatal support to reduce maternal and infant mortality." },
        { title: "Adult Literacy Programs", description: "Providing literacy and numeracy education for adults who missed formal schooling opportunities." },
      ]}
      stats={[
        { value: "20,000+", label: "Health Consultations" },
        { value: "40", label: "Schools Built" },
        { value: "90%", label: "Literacy Improvement" },
        { value: "85%", label: "Maternal Health Coverage" },
      ]}
      expectedImpact={[
        "Provide primary healthcare to 50,000 additional community members",
        "Achieve 100% school enrollment in 50 target communities",
        "Reduce child malnutrition rates by 60% in program areas",
        "Train 2,000 community health workers across 10 countries",
        "Build or rehabilitate 80 schools serving 40,000 students",
        "Reduce maternal mortality by 70% in target communities",
      ]}
      beneficiaryStory={{
        name: "Grace O., 35",
        location: "Rural Kenya",
        story: "Our village had no clinic and the nearest hospital was 4 hours away. Three women died in childbirth the year before World Impact Initiative came. They set up a health post and trained a midwife. Since then, not one mother has died during childbirth. They gave us back our lives.",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&q=80",
      }}
      galleryImages={[
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
        "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=600&q=80",
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80",
        "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&q=80",
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80",
        "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&q=80",
      ]}
    />
  );
}
