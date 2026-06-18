import type { Metadata } from "next";
import { Baby } from "lucide-react";
import ProgramPageTemplate from "@/components/programs/ProgramPageTemplate";

export const metadata: Metadata = {
  title: "Child Protection & Human Rights",
  description:
    "Safeguarding children from exploitation, abuse, and neglect while advocating for universal human rights.",
};

export default function ChildProtectionPage() {
  return (
    <ProgramPageTemplate
      icon={Baby}
      title="Child Protection & Human Rights"
      subtitle="Safeguarding every child's right to safety, dignity, and the opportunity to thrive — because children are the foundation of our future."
      heroImage="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&q=85"
      iconColor="text-blue-500"
      iconBg="bg-blue-50"
      whyItMatters="Over 1 billion children worldwide experience violence, abuse, or exploitation. Child labor, trafficking, and neglect rob children of their childhood and their future. Without strong child protection systems, entire generations lose access to education, health, and opportunity. Every child deserves to grow up safe, loved, and supported."
      approach="We take a holistic child protection approach that combines prevention, response, and rehabilitation. Our programs work with families, communities, schools, and governments to build robust child protection systems. We use the UN Convention on the Rights of the Child as our guiding framework and partner with local organizations for sustainable implementation."
      activities={[
        { title: "Child-Friendly Spaces", description: "Establishing safe, nurturing spaces where children can play, learn, and heal — especially in crisis settings." },
        { title: "Anti-Trafficking Programs", description: "Identifying, rescuing, and rehabilitating child trafficking victims while educating communities on prevention." },
        { title: "School-Based Protection", description: "Training teachers and school staff to recognize abuse and supporting child protection committees in schools." },
        { title: "Family Strengthening", description: "Supporting vulnerable families with economic assistance and parenting education to prevent child neglect." },
        { title: "Legal Advocacy", description: "Advocating for stronger child protection laws and providing pro bono legal support to child victims." },
        { title: "Psychosocial Support", description: "Offering trauma-informed counseling and mental health support to children who have experienced violence or abuse." },
      ]}
      stats={[
        { value: "10,000+", label: "Children Protected" },
        { value: "30", label: "Schools Supported" },
        { value: "95%", label: "Reintegration Success" },
        { value: "500+", label: "Rescue Operations" },
      ]}
      expectedImpact={[
        "Protect 25,000 additional children from violence and exploitation by 2026",
        "Establish child protection committees in 100 schools across 10 countries",
        "Rescue and rehabilitate 2,000 child trafficking victims",
        "Achieve 100% birth registration in target communities",
        "Train 10,000 caregivers in positive parenting practices",
        "Advocate for child protection legislation in 8 countries",
      ]}
      beneficiaryStory={{
        name: "James T., 14",
        location: "Kampala, Uganda",
        story: "I was working in a brick factory instead of going to school. World Impact Initiative found me, brought me to a safe house, and enrolled me back in school. Now I am in grade 8 and I want to become a doctor. Education changed everything for me.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
      }}
      galleryImages={[
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80",
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80",
        "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&q=80",
        "https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&q=80",
        "https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?w=600&q=80",
        "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&q=80",
      ]}
    />
  );
}
