import type { Metadata } from "next";
import { personalInfo } from "@/lib/site";
import { ContributionGrid } from "@/components/contribution-grid";
import { FadeIn } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "About",
  description: "About Aarav Sharma, a B.Tech CSE student focused on Gen AI, hackathons, events, coding, and college life."
};

export default function AboutPage() {
  return (
    <section className="container py-20">
      <SectionHeading
        eyebrow="About"
        title="A CSE student turning campus friction into AI products"
        description="I like building useful, good-looking software that starts as a messy idea and ends as something people can actually click."
      />
      <div className="grid gap-8 lg:grid-cols-[1fr_.85fr]">
        <FadeIn className="glass rounded-lg p-8">
          <h2 className="font-display text-3xl font-semibold">Hey, I am {personalInfo.name}.</h2>
          <p className="mt-5 text-muted-foreground">
            I am a {personalInfo.role} from {personalInfo.location}, focused on Gen AI, full-stack apps, hackathons,
            campus events, and the everyday discipline of becoming a better engineer. This site is my public lab:
            build logs, lessons, experiments, and the occasional college-life reflection.
          </p>
          <p className="mt-4 text-muted-foreground">
            My current taste in software is simple: fast interfaces, clear writing, helpful AI, and systems that look
            calm even when they do serious work.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {personalInfo.interests.map((item) => (
              <Badge key={item}>{item}</Badge>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <ContributionGrid />
        </FadeIn>
      </div>
    </section>
  );
}
