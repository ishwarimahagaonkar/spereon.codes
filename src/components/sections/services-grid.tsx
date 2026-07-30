import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/data";
import { Icon } from "@/components/icon";
import { SectionHeading } from "@/components/section-heading";
import { Stagger, StaggerItem } from "@/components/reveal";

export function ServicesGrid({ limit }: { limit?: number }) {
  const list = limit ? services.slice(0, limit) : services;
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="container-site">
        <SectionHeading
          eyebrow="Our Services"
          title="Everything you need to build, launch, and scale"
          subtitle="From first prototype to enterprise platform — one team covering design, development, cloud, and support."
        />
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((service) => (
            <StaggerItem key={service.slug}>
              <Link
                href={`/services/${service.slug}`}
                className="card-surface card-hover group flex h-full flex-col p-7"
              >
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-accent text-white shadow-md shadow-accent/25 transition-transform duration-300 ease-out group-hover:-rotate-3 group-hover:scale-110">
                  <Icon name={service.icon} size={22} />
                </span>
                <h3 className="font-display text-lg font-semibold">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {service.short}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  Learn More
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
        {limit && (
          <div className="mt-10 text-center">
            <Link href="/services" className="btn-secondary text-sm">
              View All Services
              <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
