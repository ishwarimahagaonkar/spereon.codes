import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, MonitorPlay } from "lucide-react";
import { products } from "@/lib/data";
import { ProductCarousel } from "@/components/product-carousel";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { Cta } from "@/components/sections/cta";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return { title: product.name, description: product.description };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

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
              href="/products"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent"
            >
              <ArrowLeft size={16} /> All Products
            </Link>
          </Reveal>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <h1 className="font-display flex flex-wrap items-center gap-3 text-3xl font-bold tracking-tight sm:text-5xl">
                {product.name}
                {product.status === "in-progress" && (
                  <span className="rounded-full border border-amber-400/40 bg-amber-400/10 px-3 py-1.5 text-xs font-semibold tracking-wide text-amber-500 uppercase">
                    In Development
                  </span>
                )}
              </h1>
              <p className="mt-2 text-lg font-medium text-accent">
                {product.tagline}
              </p>
              <p className="mt-5 leading-relaxed text-muted">
                {product.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href={`/contact?demo=${product.slug}`}
                  className="btn-primary text-sm"
                >
                  <MonitorPlay size={17} />
                  {product.status === "in-progress"
                    ? "Get Early Access"
                    : "Request a Demo"}
                </Link>
                <Link href="/contact" className="btn-secondary text-sm">
                  Talk to Sales <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <ProductCarousel
                name={product.name}
                accent={product.accent}
                screenshots={product.screenshots}
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="container-site">
          <Reveal>
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              Key features
            </h2>
          </Reveal>
          <Stagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {product.features.map((f) => (
              <StaggerItem key={f}>
                <div className="card-surface card-hover flex items-start gap-3 p-5 text-sm font-medium">
                  <Check size={18} className="mt-0.5 shrink-0 text-success" />
                  {f}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-site">
          <Reveal>
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              Modules
            </h2>
          </Reveal>
          <Stagger className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {product.modules.map((m, i) => (
              <StaggerItem key={m.title}>
                <div className="card-surface card-hover h-full p-6">
                  <span className="font-display bg-gradient-to-br from-secondary to-accent bg-clip-text text-3xl font-bold text-transparent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display mt-3 font-semibold">{m.title}</h3>
                  <p className="mt-2 text-sm text-muted">{m.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <Cta />
    </>
  );
}
