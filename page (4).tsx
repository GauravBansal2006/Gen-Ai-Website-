import type { Metadata } from "next";
import { getAllBlogPosts, getAllTags } from "@/lib/blog";
import { BlogSearch } from "@/components/blog-search";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Blog",
  description: "Gen AI build logs, hackathon stories, coding notes, and college-life essays."
};

export default function BlogPage() {
  const posts = getAllBlogPosts();
  const tags = getAllTags();

  return (
    <section className="container py-20">
      <SectionHeading
        eyebrow="Blog"
        title="Build logs, code notes, and campus dispatches"
        description="Searchable MDX posts with tags, reading time, code highlighting, and a content workflow that stays delightfully simple."
      />
      <BlogSearch posts={posts} tags={tags} />
    </section>
  );
}
