import type { Metadata } from "next";
import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Aarav Sharma for collaborations, hackathons, projects, and Gen AI discussions."
};

export default function ContactPage() {
  return (
    <section className="container py-20">
      <SectionHeading
        eyebrow="Contact"
        title="Let us build something useful"
        description="For hackathons, event collabs, AI product ideas, internships, or just a good engineering conversation."
      />
      <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[.8fr_1.2fr]">
        <div className="glass rounded-lg p-6">
          <h2 className="font-display text-2xl font-semibold">Find me online</h2>
          <div className="mt-6 grid gap-3">
            {[
              { href: siteConfig.links.github, icon: Github, label: "GitHub" },
              { href: siteConfig.links.linkedin, icon: Linkedin, label: "LinkedIn" },
              { href: siteConfig.links.twitter, icon: Twitter, label: "Twitter" },
              { href: siteConfig.links.email, icon: Mail, label: "Email" }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <Link className="flex items-center gap-3 rounded-md border border-white/10 p-3 transition hover:border-primary/40" href={item.href} key={item.label}>
                  <Icon className="h-5 w-5 text-primary" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
        <form className="glass rounded-lg p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <Input aria-label="Name" placeholder="Your name" />
            <Input aria-label="Email" placeholder="Email address" type="email" />
          </div>
          <Input aria-label="Subject" className="mt-4" placeholder="Subject" />
          <textarea
            aria-label="Message"
            className="mt-4 min-h-40 w-full rounded-md border border-border bg-background/60 p-4 text-sm outline-none backdrop-blur placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-primary"
            placeholder="Tell me what you are building..."
          />
          <Button className="mt-4" type="button">
            Send message
          </Button>
        </form>
      </div>
    </section>
  );
}
