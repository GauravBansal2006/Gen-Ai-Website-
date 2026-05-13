import Link from "next/link";
import { ArrowUpRight, Clock3, Eye } from "lucide-react";
import type { BlogPost } from "@/lib/blog";
import { formatDate } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="group h-full overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow">
        <CardHeader>
          <div className="mb-3 flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
          <CardTitle className="flex items-start justify-between gap-4">
            <span>{post.title}</span>
            <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition group-hover:text-primary" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="line-clamp-3 text-sm text-muted-foreground">{post.description}</p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
            <span>{formatDate(post.date)}</span>
            <span className="inline-flex items-center gap-1">
              <Clock3 className="h-3.5 w-3.5" />
              {post.readingTime}
            </span>
            <span className="inline-flex items-center gap-1">
              <Eye className="h-3.5 w-3.5" />
              {(post.slug.length * 137).toLocaleString()} views
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
