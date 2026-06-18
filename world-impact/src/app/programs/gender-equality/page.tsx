import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import ProgramPageTemplate from "@/components/programs/ProgramPageTemplate";

export const metadata: Metadata = {
  title: "Gender Equality & Protection",
  description:
    "World Impact Initiative's Gender Equality & Protection program champions women's rights, prevents gender-based violence, and creates safe spaces for all genders to thrive.",
};

export default function GenderEqualityPage() {
  return (
    <ProgramPageTemplate
      icon={ShieldCheck}
      title="Gender Equality & Protection"
      subtitle="Championing women's rights, preventing gender-based violence, and creating safe spaces where all genders can thrive with dignity and freedom."
      heroImage="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1920&q=85"
      iconColor="text-purple-500"
      iconBg="bg-purple-50"
      whyItMatters="Gender inequality remains one of the most pervasive and deeply rooted forms of discrimination worldwide. Millions of women and girls face violence, exclusion, and denied opportunities every day. Gender-based violence affects 1 in 3 women globally, restricting their freedom, safety, and potential. Without deliberate action, systemic inequality will continue to limit entire communities from reaching their full potential."
      approach="Our gender equality approach combines community education, survivor support, legal advocacy, and economic empowerment. We work with local leaders, men, boys, women, and girls to shift harmful norms and create protective ecosystems. We use a trauma-informed, rights-based approach that centers the voices of the women and girls we serve."
      activities={[
        { title: "Safe Houses & Shelters", description: "Operating and supporting safe spaces for survivors of gender-based violence, providing emergency shelter, counseling, and legal support." },
        { title: "Community Awareness Campaigns", description: "Conducting widespread community education on gender equality, consent, and healthy relationships through workshops and media campaigns." },
        { title: "Economic Empowerment", description: "Providing women with vocational training, microfinance access, and entrepreneurship support to achieve financial independence." },
        { title: "Legal Aid & Advocacy", description: "Connecting survivors with legal aid services and advocating for stronger policy frameworks to protect women's rights." },
        { title: "Men & Boys Engagement", description: "Engaging men and boys as champions for gender equality through targeted programs addressing toxic masculinity and patriarchal norms." },
        { title: "Girls' Education Support", description: "Ensuring girls remain in school through scholarships, menstrual health support, and community engagement with families." },
      ]}
      stats={[
        { value: "5,000+", label: "Women & Girls Supported" },
        { value: "12", label: "Countries" },
        { value: "85%", label: "Reduction in GBV Cases" },
        { value: "200+", label: "Safe Houses Supported" },
      ]}
      expectedImpact={[
        "Reduce gender-based violence incidents by 90% in target communities",
        "Achieve economic independence for 10,000 women through training and microfinance",
        "Ensure 100% girls' school retention rates in program communities",
        "Train 5,000 community leaders as gender equality champions",
        "Advocate for and support passage of 15 new gender protection policies",
        "Create 50 operational safe houses across 20 countries",
      ]}
      beneficiaryStory={{
        name: "Amina S., 28",
        location: "Northern Nigeria",
        story: "After escaping a violent marriage, I had nowhere to go and no income. World Impact Initiative gave me a place to stay, counseling, and trained me in tailoring. Today I have my own shop and two employees. For the first time, I feel safe and free.",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&q=80",
      }}
      galleryImages={[
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
        "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&q=80",
        "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&q=80",
        "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&q=80",
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80",
      ]}
    />
  );
}
