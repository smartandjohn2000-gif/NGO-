import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Heart, Handshake } from "lucide-react";
import { programs, getProgramBySlug } from "@/lib/data/programs";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) return { title: "Program Not Found" };
  return {
    title: program.title,
    description: program.shortDescription,
    openGraph: {
      title: `${program.title} | World Impact Initiative`,
      description: program.shortDescription,
      images: [{ url: program.heroImage }],
    },
  };
}

export default async function ProgramDetailPage({ params }: Props) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) notFound();

  const programSchema = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: program.title,
    description: program.shortDescription,
    provider: { "@type": "NGO", name: SITE_CONFIG.name, url: SITE_CONFIG.url },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(programSchema) }} />

      <section className="relative min-h-[50vh] flex items-end">
        <Image src={program.heroImage} alt={program.title} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-primary/30" />
        <div className="container-narrow relative z-10 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{program.title}</h1>
          <p className="text-xl text-white/85 max-w-2xl">{program.shortDescription}</p>
        </div>
      </section>

      <Section>
        <SectionHeader title="Why It Matters" centered={false} />
        <p className="text-muted leading-relaxed text-lg">{program.whyItMatters}</p>
      </Section>

      <Section background="surface">
        <SectionHeader title="Our Approach" centered={false} />
        <p className="text-muted leading-relaxed text-lg">{program.ourApproach}</p>
      </Section>

      <Section>
        <SectionHeader title="Key Activities" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {program.keyActivities.map((activity) => (
            <div key={activity} className="flex items-start gap-3 p-4 bg-surface rounded-xl">
              <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" aria-hidden="true" />
              <p className="text-muted">{activity}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section background="surface">
        <SectionHeader title="Expected Impact" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {program.expectedImpact.map((impact) => (
            <Card key={impact} className="p-5" hover={false}>
              <p className="text-muted text-sm">{impact}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative h-80 rounded-2xl overflow-hidden">
            <Image src={program.beneficiaryStory.image} alt={program.beneficiaryStory.name} fill className="object-cover" sizes="50vw" />
          </div>
          <div>
            <SectionHeader title="Beneficiary Story" centered={false} />
            <blockquote className="text-lg text-muted italic border-l-4 border-accent pl-6 mb-4">
              &ldquo;{program.beneficiaryStory.quote}&rdquo;
            </blockquote>
            <p className="font-semibold text-primary">— {program.beneficiaryStory.name}</p>
          </div>
        </div>
      </Section>

      <Section background="primary">
        <SectionHeader title="Impact Statistics" light />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {program.statistics.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.value}</div>
              <div className="text-white/70 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader title="Program Gallery" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {program.gallery.map((img, i) => (
            <div key={img} className="relative h-56 rounded-xl overflow-hidden">
              <Image src={img} alt={`${program.title} gallery ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="33vw" />
            </div>
          ))}
        </div>
      </Section>

      <Section background="surface">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-8 text-center">
            <Handshake className="w-12 h-12 text-primary mx-auto mb-4" aria-hidden="true" />
            <h3 className="text-2xl font-bold text-primary mb-3">Partnership Opportunities</h3>
            <p className="text-muted mb-6">Partner with us to amplify impact in {program.title.toLowerCase()}.</p>
            <Button href="/contact" variant="primary">Become a Partner</Button>
          </Card>
          <Card className="p-8 text-center bg-primary text-white">
            <Heart className="w-12 h-12 text-accent mx-auto mb-4" aria-hidden="true" />
            <h3 className="text-2xl font-bold mb-3">Support This Program</h3>
            <p className="text-white/70 mb-6">Your donation directly funds life-changing work in this program area.</p>
            <Button href="/donate" variant="accent">Donate Now</Button>
          </Card>
        </div>
      </Section>
    </>
  );
}
