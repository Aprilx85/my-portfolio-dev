"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, Clock, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Post } from "@/lib/mdx";
import { cn } from "@/lib/utils";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndex({ posts }: { posts: Post[] }) {
  const allTags = Array.from(new Set(posts.flatMap((p) => p.frontmatter.tags)));
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = activeTag
    ? posts.filter((p) => p.frontmatter.tags.includes(activeTag))
    : posts;

  return (
    <main className="min-h-screen py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="font-mono text-sm text-indigo-400 mb-2">Writing</p>
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-muted-foreground">
            Thoughts on web development, design patterns, and building for the web.
          </p>
        </div>

        {allTags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-10">
            <button
              onClick={() => setActiveTag(null)}
              className={cn(
                "px-3 py-1 rounded-full text-xs font-medium border transition-all",
                !activeTag
                  ? "bg-indigo-500 text-white border-indigo-500"
                  : "border-border/60 text-muted-foreground hover:border-indigo-500/40"
              )}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                className={cn(
                  "px-3 py-1 rounded-full text-xs font-medium border transition-all",
                  activeTag === tag
                    ? "bg-indigo-500 text-white border-indigo-500"
                    : "border-border/60 text-muted-foreground hover:border-indigo-500/40"
                )}
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        <div className="space-y-6">
          {filtered.length === 0 ? (
            <p className="text-muted-foreground text-center py-12">No posts found.</p>
          ) : (
            filtered.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block group rounded-xl border border-border/40 bg-card/50 p-6 hover:border-indigo-500/40 transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/5"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {formatDate(post.frontmatter.date)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {post.readTime} min read
                  </span>
                </div>
                <h2 className="text-lg font-semibold mb-2 group-hover:text-indigo-400 transition-colors">
                  {post.frontmatter.title}
                </h2>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {post.frontmatter.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {post.frontmatter.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs font-mono">
                      <Tag className="h-2.5 w-2.5 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </main>
  );
}
