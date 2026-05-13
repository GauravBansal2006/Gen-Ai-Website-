"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import type { BlogPost } from "@/lib/blog";
import { BlogCard } from "@/components/blog-card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export function BlogSearch({ posts, tags }: { posts: BlogPost[]; tags: string[] }) {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState("All");

  const filtered = useMemo(() => {
    return posts.filter((post) => {
      const q = query.toLowerCase();
      const matchesQuery =
        post.title.toLowerCase().includes(q) ||
        post.description.toLowerCase().includes(q) ||
        post.tags.some((item) => item.toLowerCase().includes(q));
      const matchesTag = tag === "All" || post.tags.includes(tag);
      return matchesQuery && matchesTag;
    });
  }, [posts, query, tag]);

  return (
    <div>
      <div className="glass mb-8 rounded-lg p-4">
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            className="pl-11"
            placeholder="Search posts, tags, categories..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {["All", ...tags].map((item) => (
            <button key={item} onClick={() => setTag(item)} type="button">
              <Badge className={item === tag ? "bg-primary text-primary-foreground" : ""}>{item}</Badge>
            </button>
          ))}
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
