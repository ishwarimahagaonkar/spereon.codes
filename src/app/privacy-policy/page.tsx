import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Spereon.codes collects, uses, and protects your data.",
};

const sections = [
  {
    title: "1. Information We Collect",
    body: "We collect information you provide directly — such as your name, email address, phone number, and project details submitted through our contact forms — along with basic technical data like browser type and pages visited, collected through standard analytics tools to improve our website.",
  },
  {
    title: "2. How We Use Your Information",
    body: "We use your information to respond to your enquiries, prepare proposals, deliver and improve our services, send updates you have opted into, and comply with legal obligations. We never sell your personal data to third parties.",
  },
  {
    title: "3. Data Sharing",
    body: "We only share data with trusted service providers (such as email and hosting platforms) that help us operate our business, and only to the extent necessary. All providers are bound by confidentiality and data-protection obligations.",
  },
  {
    title: "4. Data Security",
    body: "We apply industry-standard safeguards — encryption in transit, access controls, and regular security reviews — to protect your information. Client project data is covered by separate agreements with stricter controls.",
  },
  {
    title: "5. Cookies",
    body: "Our website uses essential cookies for core functionality (such as remembering your theme preference) and analytics cookies to understand how visitors use the site. You can disable cookies in your browser settings.",
  },
  {
    title: "6. Your Rights",
    body: "You may request access to, correction of, or deletion of your personal data at any time. You can also unsubscribe from our newsletter with one click. To exercise these rights, contact us at the email below.",
  },
  {
    title: "7. Changes to This Policy",
    body: "We may update this policy from time to time. Significant changes will be announced on this page with an updated effective date.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="Effective date: July 1, 2026 · How Spereon.codes collects, uses, and protects your information."
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
              Questions about this policy? Contact us at{" "}
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
