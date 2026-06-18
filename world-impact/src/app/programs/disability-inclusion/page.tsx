import type { Metadata } from "next";
import { Accessibility } from "lucide-react";
import ProgramPageTemplate from "@/components/programs/ProgramPageTemplate";

export const metadata: Metadata = {
  title: "Disability Inclusion & Accessibility",
  description:
    "Breaking down barriers and creating inclusive environments where persons with disabilities can fully participate in all aspects of society.",
};

export default function DisabilityInclusionPage() {
  return (
    <ProgramPageTemplate
      icon={Accessibility}
      title="Disability Inclusion & Accessibility"
      subtitle="Building a world where every person, regardless of ability, can fully participate, contribute, and belong."
      heroImage="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1920&q=85"
      iconColor="text-green-500"
      iconBg="bg-green-50"
      whyItMatters="Over 1 billion people — 15% of the world's population — live with some form of disability, making it the world's largest minority group. Yet they face systemic exclusion from education, employment, healthcare, and civic life. Without deliberate inclusion efforts, persons with disabilities remain among the most marginalized people in the world."
      approach="Our disability inclusion approach is rooted in the social model of disability — which recognizes that barriers are created by society, not by individuals' impairments. We advocate for policy change, adapt programs to be universally accessible, build capacity among organizations, and center the leadership of persons with disabilities in everything we do."
      activities={[
        { title: "Accessible Education", description: "Adapting schools and learning materials to be accessible, and training teachers in inclusive education practices." },
        { title: "Employment Support", description: "Training persons with disabilities in marketable skills and connecting them with inclusive employers." },
        { title: "Assistive Technology", description: "Providing wheelchairs, hearing aids, white canes, and other assistive devices to improve independence and mobility." },
        { title: "Community Awareness", description: "Combating stigma and discrimination through community education campaigns led by persons with disabilities." },
        { title: "Policy Advocacy", description: "Advocating for disability-inclusive policies in education, employment, healthcare, and infrastructure." },
        { title: "Independent Living Support", description: "Supporting persons with disabilities to live independently through personal assistance services and peer support networks." },
      ]}
      stats={[
        { value: "3,000+", label: "Persons Supported" },
        { value: "50+", label: "Accessible Facilities" },
        { value: "12", label: "Policy Wins" },
        { value: "10", label: "Countries" },
      ]}
      expectedImpact={[
        "Support 10,000 persons with disabilities to access education and employment",
        "Create 100% accessible environments in 200 public facilities",
        "Achieve policy changes in 15 countries promoting disability rights",
        "Provide assistive technology to 5,000 persons with disabilities",
        "Train 20,000 professionals in disability-inclusive practices",
        "Establish 30 independent living centers for persons with disabilities",
      ]}
      beneficiaryStory={{
        name: "Maria C., 19",
        location: "Philippines",
        story: "I was born deaf and schools told my parents I couldn't learn. World Impact Initiative advocated for my enrollment, provided a sign language interpreter, and I graduated top of my class. Now I am studying engineering. Being deaf doesn't limit me — exclusion did. And they helped end that exclusion.",
        image: "https://images.unsplash.com/photo-1614644147724-2d4785d69962?w=600&q=80",
      }}
      galleryImages={[
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80",
        "https://images.unsplash.com/photo-1588421357574-87938a86fa28?w=600&q=80",
        "https://images.unsplash.com/photo-1519648023493-d82b813168b7?w=600&q=80",
        "https://images.unsplash.com/photo-1574279606130-09958dc756f7?w=600&q=80",
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80",
        "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&q=80",
      ]}
    />
  );
}
