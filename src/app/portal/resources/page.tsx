import Link from "next/link";
import { FileText, Download, BookOpen } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

const resources = [
  { title: "2025 Annual Impact Report", type: "PDF", category: "Reports" },
  { title: "Volunteer Handbook", type: "PDF", category: "Guides" },
  { title: "Child Protection Policy", type: "PDF", category: "Policies" },
  { title: "Program Implementation Guide", type: "PDF", category: "Guides" },
  { title: "Disability Inclusion Toolkit", type: "PDF", category: "Toolkits" },
  { title: "Crisis Response Protocol", type: "PDF", category: "Protocols" },
];

export default function ResourcesPage() {
  return (
    <Section>
      <SectionHeader title="Resource Center" subtitle="Access reports, guides, and training materials." centered={false} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {resources.map((resource) => (
          <Card key={resource.title} className="p-5">
            <BookOpen className="w-8 h-8 text-primary mb-3" />
            <span className="text-xs text-accent font-medium">{resource.category}</span>
            <h3 className="font-semibold text-primary mt-1 mb-3">{resource.title}</h3>
            <button type="button" className="flex items-center gap-2 text-sm text-primary font-semibold hover:text-accent">
              <Download className="w-4 h-4" /> Download {resource.type}
            </button>
          </Card>
        ))}
      </div>
      <div className="mt-8 p-6 bg-surface rounded-xl flex items-start gap-4">
        <FileText className="w-6 h-6 text-primary shrink-0" />
        <div>
          <p className="text-muted text-sm">Additional resources are available to registered members. Contact <Link href="/contact" className="text-primary font-semibold">info@worldimpactinitiative.org</Link> for access requests.</p>
        </div>
      </div>
    </Section>
  );
}
