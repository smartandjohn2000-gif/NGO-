import type { Metadata } from "next";
import Image from "next/image";
import { founderStory, inspirations, coreValues, timeline, mission, vision } from "@/lib/data/about";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about World Impact Initiative, a Canadian nonprofit founded to advance human dignity, equality, and opportunity through community-driven humanitarian programs.",
  openGraph: {
    title: "About Us | World Impact Initiative",
    description:
      "Discover our founder story, mission, vision, core values, and the inspiration behind our humanitarian work.",
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="gradient-primary text-white py-20 md:py-28">
        <div className="container-narrow">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            A Canadian nonprofit committed to empowering communities through compassion, protection, and opportunity.
          </p>
        </div>
      </section>

      <Section>
        <SectionHeader title="Why World Impact Initiative Was Founded" centered={false} />
        <div className="prose prose-lg max-w-none text-muted leading-relaxed whitespace-pre-line">
          {founderStory}
        </div>
      </Section>

      <Section background="surface">
        <SectionHeader
          title="Our Inspiration"
          subtitle="Leaders whose courage and vision guide our commitment to human dignity and equality."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {inspirations.map((person) => (
            <Card key={person.name} className="overflow-hidden">
              <div className="relative h-48">
                <Image src={person.image} alt={person.name} fill className="object-cover" sizes="33vw" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary">{person.name}</h3>
                <p className="text-accent text-sm font-medium mb-3">{person.role}</p>
                <blockquote className="text-muted text-sm italic border-l-4 border-accent pl-4">
                  &ldquo;{person.quote}&rdquo;
                </blockquote>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader title="Our Journey" subtitle="Key milestones in our mission to create lasting impact." />
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2" aria-hidden="true" />
          {timeline.map((item, index) => (
            <div
              key={item.year}
              className={`relative flex items-center gap-6 mb-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} pl-12 md:pl-0`}>
                <Card className="p-5 inline-block" hover={false}>
                  <span className="text-accent font-bold text-lg">{item.year}</span>
                  <h3 className="text-primary font-bold text-lg">{item.title}</h3>
                  <p className="text-muted text-sm mt-1">{item.description}</p>
                </Card>
              </div>
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-accent border-4 border-white shadow -translate-x-1/2" aria-hidden="true" />
              <div className="flex-1 hidden md:block" />
            </div>
          ))}
        </div>
      </Section>

      <Section background="surface">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8" hover={false}>
            <h2 className="text-2xl font-bold text-primary mb-4">Mission</h2>
            <p className="text-muted leading-relaxed">{mission}</p>
          </Card>
          <Card className="p-8" hover={false}>
            <h2 className="text-2xl font-bold text-primary mb-4">Vision</h2>
            <p className="text-muted leading-relaxed">{vision}</p>
          </Card>
        </div>
        <SectionHeader title="Core Values" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map((value) => (
            <Card key={value.title} className="p-6" hover={false}>
              <h3 className="text-lg font-bold text-primary mb-2">{value.title}</h3>
              <p className="text-muted text-sm">{value.description}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
