import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { z } from "zod";

const blogDirectory = path.join(process.cwd(), "content", "blog");

const frontmatterSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.string(),
  tags: z.array(z.string()).default([]),
  category: z.string(),
  featured: z.boolean().default(false),
  author: z.string().default("Aarav Sharma")
});

export type BlogPost = z.infer<typeof frontmatterSchema> & {
  slug: string;
  readingTime: string;
  body: string;
};

export function getBlogSlugs() {
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }

  return fs
    .readdirSync(blogDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getBlogPost(slug: string): BlogPost {
  const fullPath = path.join(blogDirectory, `${slug}.mdx`);
  const source = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(source);
  const parsed = frontmatterSchema.parse(data);

  return {
    ...parsed,
    slug,
    body: content,
    readingTime: readingTime(content).text
  };
}

export function getAllBlogPosts() {
  return getBlogSlugs()
    .map((slug) => getBlogPost(slug))
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
}

export function getFeaturedPosts() {
  return getAllBlogPosts().filter((post) => post.featured).slice(0, 3);
}

export function getAllTags() {
  return Array.from(new Set(getAllBlogPosts().flatMap((post) => post.tags))).sort();
}

export function getTableOfContents(markdown: string) {
  return markdown
    .split("\n")
    .filter((line) => /^#{2,3}\s/.test(line))
    .map((line) => {
      const depth = line.startsWith("###") ? 3 : 2;
      const text = line.replace(/^#{2,3}\s/, "").trim();
      const id = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");

      return { id, text, depth };
    });
}
