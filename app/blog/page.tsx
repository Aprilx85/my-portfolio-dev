import type { Metadata } from "next";
import { getAllPosts } from "@/lib/mdx";
import BlogIndex from "@/components/blog/blog-index";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on web development, design patterns, and building for the web.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  return <BlogIndex posts={posts} />;
}
