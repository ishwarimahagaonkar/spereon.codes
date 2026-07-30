import Link from "next/link";
import { ArrowRight, Check, MonitorPlay } from "lucide-react";
import { products } from "@/lib/data";
import { ProductCarousel } from "@/components/product-carousel";
import { SectionHeading } from "@/components/section-heading";
import { RevealX } from "@/components/reveal";

export function FeaturedProducts() {
  return (
    <section className="bg-gradient-to-b from-transparent via-accent/5 to-transparent py-20 sm:py-28">
      <div className="container-site">
        <SectionHeading
          eyebrow="Featured Products"
          title="Products we've built and battle-tested"
          subtitle="Ready-to-deploy platforms that can be customized and white-labeled for your business."
        />
        <div className="space-y-16">
          {products.map((product, i) => (
            <RevealX key={product.slug} x={i % 2 === 1 ? 56 : -56}>
              <div
                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <ProductCarousel
                  name={product.name}
                  accent={product.accent}
                  screenshots={product.screenshots}
                />
                <div>
                  <h3 className="font-display flex flex-wrap items-center gap-3 text-2xl font-bold sm:text-3xl">
                    {product.name}
                    {product.status === "in-progress" && (
                      <span className="rounded-full border border-amber-400/40 bg-amber-400/10 px-3 py-1 text-xs font-semibold tracking-wide text-amber-500 uppercase">
                        In Development
                      </span>
                    )}
                  </h3>
                  <p className="mt-1.5 text-base font-medium text-accent">
                    {product.tagline}
                  </p>
                  <p className="mt-4 leading-relaxed text-muted">
                    {product.description}
                  </p>
                  <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                    {product.features.slice(0, 6).map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <Check
                          size={17}
                          className="mt-0.5 shrink-0 text-success"
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Link
                      href={`/contact?demo=${product.slug}`}
                      className="btn-primary !px-6 !py-3 text-sm"
                    >
                      <MonitorPlay size={17} />
                      {product.status === "in-progress"
                        ? "Get Early Access"
                        : "Request Demo"}
                    </Link>
                    <Link
                      href={`/products/${product.slug}`}
                      className="btn-secondary !px-6 !py-3 text-sm"
                    >
                      Learn More
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </RevealX>
          ))}
        </div>
      </div>
    </section>
  );
}
