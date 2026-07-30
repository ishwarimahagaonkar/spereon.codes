import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { WhyChoose } from "@/components/sections/why-choose";
import { Stats } from "@/components/sections/stats";
import { Process } from "@/components/sections/process";
import { Cta } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Spereon.codes is a software company building SaaS products, custom applications, and AI-powered solutions for businesses of all sizes.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Software craftsmanship, business focus"
        subtitle="Spereon.codes exists to make world-class software accessible to businesses of every size — from local companies replacing spreadsheets to startups scaling to millions of users."
      />

      <section className="pb-6">
        <div className="container-site grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="card-surface h-full p-8 sm:p-10">
              <h2 className="font-display text-xl font-bold">Our Mission</h2>
              <p className="mt-4 leading-relaxed text-muted">
                To help businesses grow by building software that fits the way
                they actually work — fast to use, reliable at scale, and
                designed with the care of a product company, not an agency
                assembly line.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="dark card-surface h-full bg-navy p-8 text-white sm:p-10">
              <h2 className="font-display text-xl font-bold">Our Vision</h2>
              <p className="mt-4 leading-relaxed text-slate-400">
                A world where every business — not just tech giants — runs on
                software tailored to its needs, powered by modern cloud
                technology it can trust.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <Stats />
      <WhyChoose />
      <Process />
      <Cta />
    </>
  );
}
