import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Briefcase, MapPin } from "lucide-react";
import { jobs, whyChoose } from "@/lib/data";
import { Icon } from "@/components/icon";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Stagger, StaggerItem } from "@/components/reveal";
import { Cta } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Spereon.codes and build SaaS, mobile, and AI products used by real businesses every day. See open roles.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Do the best work of your career"
        subtitle="We're a small, senior team shipping real products for real businesses. No bureaucracy — just interesting problems and people who care about the craft."
      />

      <section className="pb-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="Open Roles"
            title="We're hiring"
            subtitle="Don't see your role? Write to us anyway — we're always looking for exceptional people."
          />
          <Stagger className="mx-auto max-w-3xl space-y-4">
            {jobs.map((job) => (
              <StaggerItem key={job.title}>
                <Link
                  href={`/contact?role=${encodeURIComponent(job.title)}`}
                  className="card-surface card-hover group flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <h3 className="font-display text-lg font-semibold">
                      {job.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{job.desc}</p>
                    <div className="mt-3 flex flex-wrap gap-4 text-xs font-medium text-muted">
                      <span className="flex items-center gap-1.5">
                        <Briefcase size={13} className="text-accent" />
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={13} className="text-accent" />
                        {job.location}
                      </span>
                    </div>
                  </div>
                  <span className="btn-secondary shrink-0 !px-5 !py-2.5 text-sm group-hover:border-accent">
                    Apply Now
                    <ArrowRight size={15} />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="dark relative overflow-hidden bg-navy py-20 text-white sm:py-24">
        <div className="container-site relative">
          <SectionHeading
            eyebrow="Life at Spereon"
            title="Why you'll love working here"
          />
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((item) => (
              <StaggerItem key={item.title}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6">
                  <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/15 text-accent">
                    <Icon name={item.icon} size={19} />
                  </span>
                  <h3 className="font-display font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-400">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <div className="mt-20" />
      <Cta />
    </>
  );
}
