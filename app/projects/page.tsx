import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { PageHero } from "@/components/sections/page-hero";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore World Impact Initiative's active and completed projects advancing child protection, youth empowerment, disability inclusion, health, education, and humanitarian relief.",
  alternates: { canonical: "/projects" },
};

const PROJECTS = [
  {
    title: "Safe Spaces for Children & Families",
    status: "Ongoing",
    location: "Community partner network",
    image: "/images/main_uploads/main-2.jpg",
    description:
      "Community-led child protection desks, caregiver support groups, and school-based rights clubs that keep vulnerable children safe at home, in school, and in their communities.",
    program: "/programs/child-protection-human-rights",
  },
  {
    title: "Youth Skills & Livelihood Pathways",
    status: "Ongoing",
    location: "Skills innovation hubs",
    image: "/images/main_uploads/main-6.jpg",
    description:
      "Technical and digital training, mentorship, and internship placements that turn youth potential into dignified, sustainable employment and enterprise.",
    program: "/programs/youth-empowerment-technical-skills-training",
  },
  {
    title: "Inclusive Access Initiative",
    status: "Ongoing",
    location: "Partner schools & institutions",
    image: "/images/main_uploads/main-9.jpg",
    description:
      "Accessibility audits, assistive-device referrals, and inclusion training that remove barriers for persons with disabilities across education, health, and public services.",
    program: "/programs/disability-inclusion-accessibility",
  },
  {
    title: "Community Health & Learning Outreach",
    status: "Ongoing",
    location: "Underserved community clusters",
    image: "/images/main_uploads/main-7.jpg",
    description:
      "Mobile health awareness, school readiness and retention support, and referral pathways that connect families to essential, inclusive services.",
    program: "/programs/health-services-inclusive-education",
  },
  {
    title: "Gender Equality & Protection Program",
    status: "Ongoing",
    location: "Local safeguarding committees",
    image: "/images/main_uploads/main-5.jpg",
    description:
      "Survivor-centered referrals, leadership training for women-led groups, and prevention work that builds safer, more equitable communities.",
    program: "/programs/gender-equality-protection",
  },
  {
    title: "Rapid Crisis Response & Recovery",
    status: "Active response",
    location: "Emergency response zones",
    image: "/images/main_uploads/main-8.jpg",
    description:
      "Accountable emergency relief, protection assessments, and community recovery planning that protect dignity and accelerate resilience after crisis.",
    program: "/programs/crisis-response-humanitarian-relief",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        title="Projects that create measurable lasting change"
        subtitle="A closer look at the Initiatives, we are implementing in collaboration with communities, volunteers, and partners across our impact areas."
        image="/images/projects-hero-build.jpg"
        mono
      />

      <div className="container-shell py-14 md:py-20">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Our Projects"
            title="Community-driven projects with real outcomes"
            description="Each project pairs immediate support with long-term systems so impact continues well beyond our involvement."
            align="center"
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project) => (
              <article
                key={project.title}
                className="flex flex-col overflow-hidden rounded-2xl border border-[#CFE4FF] bg-white shadow-[0_8px_28px_rgba(11,87,208,0.08)] transition hover:shadow-[0_12px_36px_rgba(11,87,208,0.16)]"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-[#0B57D0] px-3 py-1 text-xs font-semibold text-white shadow">
                    {project.status}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#0B57D0]">
                    {project.location}
                  </p>
                  <h3 className="text-lg font-bold text-[#0A245D]">{project.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-700">
                    {project.description}
                  </p>
                  <Link
                    href={project.program}
                    className="mt-auto inline-flex items-center text-sm font-semibold text-[#0B57D0] underline-offset-4 hover:underline"
                  >
                    View related program →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-[#CFE4FF] bg-[#EAF3FF] px-6 py-10 text-center">
            <h2 className="text-2xl font-bold text-[#0A245D] md:text-3xl">
              Help us bring the next project to life
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-slate-700">
              Your support and time make these projects possible. Partner with us, volunteer, or
              give to expand our reach to more communities.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <ButtonLink href="/donate" variant="primary" size="lg">
                Donate
              </ButtonLink>
              <ButtonLink href="/volunteer" variant="ghost" size="lg">
                Volunteer
              </ButtonLink>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </>
  );
}
