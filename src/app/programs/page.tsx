import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { programs } from "@/lib/data/programs";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore World Impact Initiative programs: gender equality, child protection, youth empowerment, disability inclusion, health services, and crisis response.",
};

export default function ProgramsPage() {
  return (
    <>
      <section className="gradient-primary text-white py-20 md:py-28">
        <div className="container-narrow">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Programs</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Six interconnected programs driving sustainable change in vulnerable communities.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program) => (
            <Card key={program.slug} className="overflow-hidden group">
              <div className="relative h-56">
                <Image src={program.heroImage} alt={program.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="50vw" />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-primary mb-3">{program.title}</h2>
                <p className="text-muted mb-4">{program.shortDescription}</p>
                <Link
                  href={`/programs/${program.slug}`}
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
                >
                  View Program Details
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
