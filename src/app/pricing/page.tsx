import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { pricingPlans } from "@/lib/data";
import { PageHero } from "@/components/page-hero";
import { Stagger, StaggerItem } from "@/components/reveal";
import { Cta } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent, milestone-based pricing for MVPs, full products, and enterprise platforms. Every project starts with a free consultation.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Transparent pricing, no surprises"
        subtitle="Every project starts with a free consultation and a fixed, milestone-based quote. These are typical starting points."
      />
      <section className="pb-20">
        <div className="container-site">
          <Stagger className="grid gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <StaggerItem key={plan.name} className="h-full">
                <div
                  className={`card-surface relative flex h-full flex-col p-8 ${
                    plan.highlighted
                      ? "border-accent shadow-xl shadow-accent/15 lg:-translate-y-2 lg:scale-[1.02]"
                      : ""
                  }`}
                >
                  {plan.highlighted && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-secondary to-accent px-4 py-1 text-xs font-bold tracking-wide text-white uppercase">
                      Most Popular
                    </span>
                  )}
                  <h2 className="font-display text-lg font-semibold">
                    {plan.name}
                  </h2>
                  <p className="mt-1 text-sm text-muted">{plan.desc}</p>
                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="font-display text-4xl font-bold">
                      {plan.price}
                    </span>
                    <span className="text-sm text-muted">{plan.unit}</span>
                  </div>
                  <ul className="mt-7 flex-1 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm">
                        <Check size={17} className="mt-0.5 shrink-0 text-success" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`${
                      plan.highlighted ? "btn-primary" : "btn-secondary"
                    } mt-8 w-full text-sm`}
                  >
                    {plan.cta}
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <p className="mt-10 text-center text-sm text-muted">
            Need something different? We also offer dedicated-team and
            hourly-retainer models.{" "}
            <Link href="/contact" className="font-semibold text-accent hover:underline">
              Let&apos;s talk →
            </Link>
          </p>
        </div>
      </section>
      <Cta />
    </>
  );
}
