import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Clock } from "lucide-react";
import { blogPosts } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { Cta } from "@/components/sections/cta";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <article className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <div className="blob left-[-12%] top-[-30%] h-96 w-96 bg-accent/25" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,var(--background)_80%)]" />
        </div>
        <div className="container-site max-w-3xl py-16 sm:py-24">
          <Reveal>
            <Link
              href="/blog"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent"
            >
              <ArrowLeft size={16} /> All Articles
            </Link>
            <span className="mb-4 block">
              <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-secondary dark:text-accent">
                {post.category}
              </span>
            </span>
            <h1 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-5xl">
              {post.title}
            </h1>
            <div className="mt-5 flex items-center gap-5 text-sm text-muted">
              <span className="flex items-center gap-1.5">
                <CalendarDays size={15} />
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={15} />
                {post.readTime}
              </span>
            </div>
            <div className="mt-10 space-y-6 text-base leading-relaxed text-foreground/85 sm:text-lg">
              {post.content.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </article>
      <Cta />
    </>
  );
}
