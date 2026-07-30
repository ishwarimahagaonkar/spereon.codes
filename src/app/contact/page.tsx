import type { Metadata } from "next";
import { Suspense } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free consultation with Spereon.codes. Tell us about your project and we'll reply within one business day.",
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email us",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Phone,
    label: "Call us",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
  },
  {
    icon: MapPin,
    label: "Visit us",
    value: siteConfig.address,
  },
  {
    icon: Clock,
    label: "Response time",
    value: "Within 1 business day",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your project"
        subtitle="Book a free consultation — no commitment, no sales pressure. Just an honest conversation about what you're building."
      />
      <section className="pb-20">
        <div className="container-site grid gap-10 lg:grid-cols-[1fr_1.8fr]">
          <Reveal>
            <div className="space-y-4">
              {contactInfo.map(({ icon: IconCmp, label, value, href }) => (
                <div
                  key={label}
                  className="card-surface flex items-center gap-4 p-5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <IconCmp size={20} />
                  </span>
                  <div>
                    <p className="text-xs font-medium tracking-wide text-muted uppercase">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm font-semibold transition-colors hover:text-accent"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold">{value}</p>
                    )}
                  </div>
                </div>
              ))}
              <div className="dark card-surface bg-navy p-6 text-white">
                <h3 className="font-display font-semibold">
                  Prefer a quick call?
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  We&apos;re happy to jump on a 20-minute discovery call and give
                  you a rough estimate on the spot.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Suspense fallback={<div className="card-surface h-96 animate-pulse" />}>
              <ContactForm />
            </Suspense>
          </Reveal>
        </div>
      </section>
    </>
  );
}
