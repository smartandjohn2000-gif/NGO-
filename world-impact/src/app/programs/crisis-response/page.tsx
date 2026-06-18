import type { Metadata } from "next";
import { AlertTriangle } from "lucide-react";
import ProgramPageTemplate from "@/components/programs/ProgramPageTemplate";

export const metadata: Metadata = {
  title: "Crisis Response & Humanitarian Relief",
  description:
    "Delivering rapid, effective humanitarian assistance to communities affected by conflict, natural disasters, and displacement.",
};

export default function CrisisResponsePage() {
  return (
    <ProgramPageTemplate
      icon={AlertTriangle}
      title="Crisis Response & Humanitarian Relief"
      subtitle="When disaster strikes, we are there — delivering life-saving aid, rebuilding hope, and restoring dignity to communities in crisis."
      heroImage="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=1920&q=85"
      iconColor="text-primary"
      iconBg="bg-primary/10"
      whyItMatters="Natural disasters, conflicts, and displacement create some of the world's most acute humanitarian crises. Hundreds of millions of people are affected by emergencies each year, losing their homes, livelihoods, and loved ones. Rapid, coordinated humanitarian response is critical to saving lives and laying the foundation for long-term recovery."
      approach="Our crisis response approach is guided by the humanitarian principles of humanity, neutrality, impartiality, and independence. We deploy pre-positioned resources rapidly, coordinate with UN agencies and local partners, and prioritize the most vulnerable populations — women, children, elderly, and persons with disabilities. We also build local resilience to reduce the impact of future crises."
      activities={[
        { title: "Emergency Relief Distribution", description: "Rapidly distributing food, clean water, emergency shelter, and essential non-food items to crisis-affected populations." },
        { title: "Search & Rescue Coordination", description: "Supporting and coordinating search and rescue operations in disaster zones to save lives immediately after emergencies." },
        { title: "Temporary Shelter", description: "Erecting emergency shelters and transitional housing for displaced communities while permanent solutions are developed." },
        { title: "Psychosocial Support", description: "Providing trauma counseling and mental health support for survivors of conflict, disaster, and displacement." },
        { title: "Health & WASH", description: "Delivering emergency healthcare and water, sanitation, and hygiene (WASH) services to prevent disease outbreaks." },
        { title: "Early Recovery & Rehabilitation", description: "Supporting communities to rebuild livelihoods, infrastructure, and systems in the transition from relief to recovery." },
      ]}
      stats={[
        { value: "15,000+", label: "People Aided" },
        { value: "20", label: "Crisis Responses" },
        { value: "48hrs", label: "Deployment Time" },
        { value: "10", label: "Countries Reached" },
      ]}
      expectedImpact={[
        "Reach 50,000 crisis-affected people with life-saving humanitarian assistance",
        "Achieve 48-hour deployment capability in all target regions",
        "Reduce malnutrition rates in crisis settings by 75%",
        "Ensure 100% of displaced persons access safe water and sanitation",
        "Provide psychosocial support to 10,000 crisis survivors",
        "Support early recovery for 5,000 families through livelihoods programs",
      ]}
      beneficiaryStory={{
        name: "Fatima R., 42",
        location: "Sindh, Pakistan",
        story: "When the floods destroyed our home and crops, we had nothing. World Impact Initiative arrived within two days with food, tents, and clean water. They helped us through the worst months and then helped us restart our farm. Without them, I don't know if we would have survived.",
        image: "https://images.unsplash.com/photo-1614644147724-2d4785d69962?w=600&q=80",
      }}
      galleryImages={[
        "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=600&q=80",
        "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=600&q=80",
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80",
        "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80",
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80",
        "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&q=80",
      ]}
    />
  );
}
