import type { Metadata } from "next";
import { Zap } from "lucide-react";
import ProgramPageTemplate from "@/components/programs/ProgramPageTemplate";

export const metadata: Metadata = {
  title: "Youth Empowerment & Technical Skills Training",
  description:
    "Equipping young people with vocational training, entrepreneurship skills, and mentorship to build sustainable livelihoods.",
};

export default function YouthEmpowermentPage() {
  return (
    <ProgramPageTemplate
      icon={Zap}
      title="Youth Empowerment & Technical Skills Training"
      subtitle="Unlocking the potential of young people through skills training, mentorship, and entrepreneurship so they can build their own futures."
      heroImage="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1920&q=85"
      iconColor="text-amber-500"
      iconBg="bg-amber-50"
      whyItMatters="Over 1.2 billion young people globally lack access to quality education and employment opportunities. Youth unemployment fuels poverty, instability, and exclusion. When young people are denied skills and opportunities, entire communities stagnate. Investing in youth is investing in the future — their potential is the most powerful engine for sustainable development."
      approach="Our youth empowerment model combines technical skills training with entrepreneurship, mentorship, and personal development. We partner with businesses and governments to create clear pathways from training to employment or business ownership. Programs are demand-driven, culturally relevant, and designed to meet the needs of both youth and local economies."
      activities={[
        { title: "Vocational Training Centers", description: "Operating skills training centers offering courses in ICT, construction, tailoring, culinary arts, auto mechanics, and more." },
        { title: "Entrepreneurship Program", description: "Teaching business planning, financial literacy, and marketing skills to young entrepreneurs, paired with seed funding support." },
        { title: "Mentorship & Coaching", description: "Connecting youth with experienced professionals and business leaders for guided mentorship and career development." },
        { title: "Digital Skills Training", description: "Providing ICT literacy, coding, graphic design, and digital marketing skills for the modern economy." },
        { title: "Youth Leadership Development", description: "Building civic leadership skills and empowering youth to become community advocates and change-makers." },
        { title: "Job Placement Support", description: "Connecting trained youth with employers through job fairs, internship programs, and employer partnerships." },
      ]}
      stats={[
        { value: "8,000+", label: "Youth Trained" },
        { value: "75%", label: "Employment Rate" },
        { value: "200+", label: "Businesses Launched" },
        { value: "15", label: "Training Centers" },
      ]}
      expectedImpact={[
        "Train 20,000 youth in technical and entrepreneurship skills by 2026",
        "Achieve 80% employment or business ownership for program graduates",
        "Support 500 youth-led businesses with seed funding and mentorship",
        "Establish 30 vocational training centers across 15 countries",
        "Create 50,000 new jobs through youth-led enterprises",
        "Engage 1,000 business mentors in structured mentorship programs",
      ]}
      beneficiaryStory={{
        name: "Kwame A., 23",
        location: "Accra, Ghana",
        story: "I dropped out of school at 16 because my family couldn't afford fees. World Impact Initiative trained me in ICT and entrepreneurship. Today I run a digital marketing agency with 5 employees. I've paid my siblings' school fees and built a house for my mother. This program saved my life.",
        image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=600&q=80",
      }}
      galleryImages={[
        "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&q=80",
        "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&q=80",
        "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&q=80",
        "https://images.unsplash.com/photo-1561489396-888724a1543d?w=600&q=80",
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80",
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80",
      ]}
    />
  );
}
