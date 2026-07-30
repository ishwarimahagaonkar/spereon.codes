import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Target } from "lucide-react";
import { services } from "@/lib/data";
import { Icon } from "@/components/icon";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { Cta } from "@/components/sections/cta";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return { title: service.title, description: service.short };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <div className="blob left-[-12%] top-[-30%] h-96 w-96 bg-accent/30" />
          <div
            className="blob right-[-10%] top-[20%] h-80 w-80 bg-secondary/25"
            style={{ animationDelay: "-6s" }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,var(--background)_80%)]" />
        </div>
        <div className="container-site py-16 sm:py-24">
          <Reveal>
            <Link
              href="/services"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent"
            >
              <ArrowLeft size={16} /> All Services
            </Link>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary to-accent text-white shadow-lg shadow-accent/30">
                <Icon name={service.icon} size={30} />
              </span>
              <div>
                <h1 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
                  {service.title}
                </h1>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                  {service.long}
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary text-sm">
                Book Free Consultation <ArrowRight size={16} />
              </Link>
              <Link href="/pricing" className="btn-secondary text-sm">
                View Pricing
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="container-site grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <Reveal>
            <div className="card-surface p-8 sm:p-10">
              <h2 className="font-display text-xl font-bold sm:text-2xl">
                What&apos;s included
              </h2>
              <Stagger className="mt-6 grid gap-4 sm:grid-cols-2">
                {service.features.map((f) => (
                  <StaggerItem key={f}>
                    <div className="flex items-start gap-3 rounded-xl border border-line bg-background p-4 text-sm font-medium">
                      <Check size={17} className="mt-0.5 shrink-0 text-success" />
                      {f}
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="dark card-surface bg-navy p-8 text-white sm:p-10">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <Target size={21} />
              </span>
              <h2 className="font-display mt-5 text-xl font-bold">
                Outcomes you can expect
              </h2>
              <ul className="mt-5 space-y-3.5">
                {service.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-site">
          <Reveal>
            <h2 className="font-display mb-8 text-xl font-bold sm:text-2xl">
              Related services
            </h2>
          </Reveal>
          <Stagger className="grid gap-6 sm:grid-cols-3">
            {related.map((s) => (
              <StaggerItem key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="card-surface card-hover group flex h-full flex-col p-6"
                >
                  <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-secondary to-accent text-white">
                    <Icon name={s.icon} size={19} />
                  </span>
                  <h3 className="font-display font-semibold">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted">{s.short}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    Learn More
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
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
