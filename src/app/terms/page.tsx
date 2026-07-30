import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for using Spereon.codes services and website.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: "By accessing this website or engaging Spereon.codes for services, you agree to these terms and conditions. If you do not agree, please do not use our website or services.",
  },
  {
    title: "2. Services",
    body: "Spereon.codes provides software design, development, deployment, and maintenance services. The specific scope, deliverables, timelines, and fees for any engagement are defined in a separate written proposal or agreement signed by both parties.",
  },
  {
    title: "3. Intellectual Property",
    body: "Unless otherwise agreed in writing, upon full payment, clients receive ownership of custom code developed specifically for their project. Spereon.codes retains rights to pre-existing tools, libraries, and general-purpose components used in delivery.",
  },
  {
    title: "4. Payments",
    body: "Projects are billed on a milestone basis as defined in the project agreement. Invoices are payable within the stated period. Work may be paused on accounts with overdue balances.",
  },
  {
    title: "5. Confidentiality",
    body: "Both parties agree to keep confidential information — including business plans, technical details, and project data — private, and to use it only for purposes of the engagement.",
  },
  {
    title: "6. Warranties & Liability",
    body: "We warrant that services will be performed with professional skill and care. To the maximum extent permitted by law, our total liability for any claim is limited to the fees paid for the specific services giving rise to the claim.",
  },
  {
    title: "7. Website Content",
    body: "Content on this website is provided for general information and may change without notice. Product names and screenshots are illustrative. All trademarks belong to their respective owners.",
  },
  {
    title: "8. Governing Law",
    body: "These terms are governed by the laws of India. Any disputes will be subject to the exclusive jurisdiction of the courts of Pune, Maharashtra.",
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        subtitle="Effective date: July 1, 2026 · The terms that govern use of our website and services."
      />
      <section className="pb-20">
        <div className="container-site max-w-3xl space-y-6">
          {sections.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.03}>
              <div className="card-surface p-7">
                <h2 className="font-display text-lg font-semibold">{s.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.body}</p>
              </div>
            </Reveal>
          ))}
          <Reveal>
            <p className="pt-4 text-sm text-muted">
              Questions about these terms? Contact us at{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-semibold text-accent hover:underline"
              >
                {siteConfig.email}
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
