import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { WhyChoose } from "@/components/sections/why-choose";
import { Cta } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Services",
  description:
    "SaaS development, custom software, web & mobile apps, AI solutions, HRMS, ERP, cloud applications, UI/UX design, APIs, automation, and support.",
};

export default function ServicesPage() {
  return (
    <>
      {/* <PageHero
        eyebrow="Our Services"
        title="Software services for every stage of growth"
        subtitle="Whether you're validating an idea or scaling an enterprise platform, we have the team and the process to deliver."
      /> */}
      <div className="-mt-16">
        <ServicesGrid />
      </div>
      <WhyChoose />
      <div className="mt-20" />
      <Cta />
    </>
  );
}
