import type { Metadata } from "next";
import { ProjectGrid } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Projects",
  description: "Gen AI, full-stack, and campus product projects by Aarav Sharma."
};

export default function ProjectsPage() {
  return (
    <section className="container py-20">
      <SectionHeading
        eyebrow="Projects"
        title="AI-first projects with a student-product heartbeat"
        description="Placeholder-ready project cards for deployed apps, demos, writeups, and GitHub repositories."
      />
      <ProjectGrid />
    </section>
  );
}
