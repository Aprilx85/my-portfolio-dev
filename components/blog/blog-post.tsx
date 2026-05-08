import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Post } from "@/lib/mdx";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

interface Props {
  post: Post;
  previousPost: Post | null;
  nextPost: Post | null;
}

export default function BlogPost({ post, previousPost, nextPost }: Props) {
  return (
    <main className="min-h-screen py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-4">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {formatDate(post.frontmatter.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {post.readTime} min read
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">{post.frontmatter.title}</h1>
          <p className="text-lg text-muted-foreground mb-6">{post.frontmatter.description}</p>
          <div className="flex flex-wrap gap-2">
            {post.frontmatter.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="font-mono text-xs">
                <Tag className="h-2.5 w-2.5 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>
        </header>

        <article className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-indigo-400 prose-code:font-mono prose-code:text-sm">
          <MDXRemote source={post.content} />
        </article>

        {(previousPost || nextPost) && (
          <nav className="mt-16 pt-8 border-t border-border/40 grid grid-cols-2 gap-6">
            {previousPost ? (
              <Link
                href={`/blog/${previousPost.slug}`}
                className="group col-start-1 rounded-xl border border-border/40 p-4 hover:border-indigo-500/40 transition-all"
              >
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <ArrowLeft className="h-3.5 w-3.5" />
                  Previous
                </div>
                <p className="text-sm font-medium group-hover:text-indigo-400 transition-colors line-clamp-2">
                  {previousPost.frontmatter.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
            {nextPost && (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="group col-start-2 rounded-xl border border-border/40 p-4 hover:border-indigo-500/40 transition-all text-right"
              >
                <div className="flex items-center justify-end gap-2 text-xs text-muted-foreground mb-2">
                  Next
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
                <p className="text-sm font-medium group-hover:text-indigo-400 transition-colors line-clamp-2">
                  {nextPost.frontmatter.title}
                </p>
              </Link>
            )}
          </nav>
        )}
      </div>
    </main>
  );
}
