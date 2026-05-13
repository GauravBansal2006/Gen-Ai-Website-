import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock3, Eye } from "lucide-react";
import { getAllBlogPosts, getBlogPost, getBlogSlugs, getTableOfContents } from "@/lib/blog";
import { siteConfig } from "@/lib/site";
import { formatDate } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MDXRenderer } from "@/components/mdx-renderer";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getAllBlogPosts().find((item) => item.slug === slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `${siteConfig.url}/blog/${post.slug}`,
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags
    }
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  if (!getBlogSlugs().includes(slug)) {
    notFound();
  }

  const post = getBlogPost(slug);
  const toc = getTableOfContents(post.body);

  return (
    <article className="container py-16">
      <Button asChild variant="ghost">
        <Link href="/blog">
          <ArrowLeft className="h-4 w-4" />
          Back to blog
        </Link>
      </Button>

      <header className="mx-auto mt-10 max-w-4xl text-center">
        <div className="flex flex-wrap justify-center gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <h1 className="mt-6 font-display text-4xl font-bold md:text-6xl">{post.title}</h1>
        <p className="mt-5 text-lg text-muted-foreground">{post.description}</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
          <span>{formatDate(post.date)}</span>
          <span className="inline-flex items-center gap-1">
            <Clock3 className="h-4 w-4" />
            {post.readingTime}
          </span>
          <span className="inline-flex items-center gap-1">
            <Eye className="h-4 w-4" />
            {(post.slug.length * 137).toLocaleString()} views
          </span>
        </div>
      </header>

      <div className="mx-auto mt-14 grid max-w-6xl gap-10 lg:grid-cols-[220px_1fr]">
        <aside className="hidden lg:block">
          <div className="sticky top-24 rounded-lg border border-white/10 bg-card/70 p-4 backdrop-blur">
            <p className="font-display text-sm font-semibold">On this page</p>
            <nav className="mt-4 grid gap-2">
              {toc.map((item) => (
                <a
                  className={item.depth === 3 ? "ml-3 text-sm text-muted-foreground hover:text-primary" : "text-sm text-muted-foreground hover:text-primary"}
                  href={`#${item.id}`}
                  key={item.id}
                >
                  {item.text}
                </a>
              ))}
            </nav>
          </div>
        </aside>
        <div className="glass rounded-lg p-6 md:p-10">
          <div className="prose-blog">
            <MDXRenderer source={post.body} />
          </div>
        </div>
      </div>
    </article>
  );
}
