import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import { blogPosts } from "@/lib/data";
import { PageHero } from "@/components/page-hero";
import { Stagger, StaggerItem } from "@/components/reveal";
import { Cta } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on SaaS, custom software, HRMS, ERP, and AI from the Spereon.codes team.",
};

const gradients = [
  "from-[#274690] to-[#4F7FFF]",
  "from-[#7C3AED] to-[#4F7FFF]",
  "from-[#0E7490] to-[#10B981]",
];

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Insights & engineering notes"
        subtitle="Practical thinking on SaaS, custom software, HRMS, ERP, and AI — from the team that builds them."
      />
      <section className="pb-20">
        <div className="container-site">
          <Stagger className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, i) => (
              <StaggerItem key={post.slug} className="h-full">
                <Link
                  href={`/blog/${post.slug}`}
                  className="card-surface card-hover group flex h-full flex-col overflow-hidden"
                >
                  <div
                    className={`relative flex aspect-[16/9] items-end bg-gradient-to-br p-5 ${gradients[i % gradients.length]}`}
                  >
                    <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-4 text-xs text-muted">
                      <span className="flex items-center gap-1.5">
                        <CalendarDays size={13} />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={13} />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="font-display mt-3 text-lg font-semibold leading-snug group-hover:text-accent">
                      {post.title}
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                      {post.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                      Read Article
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
      <Cta />
    </>
  );
}
