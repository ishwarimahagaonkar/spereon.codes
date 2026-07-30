"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { motion } from "framer-motion";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "@/components/social-icons";
import { Logo } from "@/components/logo";
import { services, products, siteConfig } from "@/lib/data";

const companyLinks = [
  { href: "/about", label: "About Us" },
  // { href: "/careers", label: "Careers" }, // re-enable when hiring opens
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

const resourceLinks = [
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Insights" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubscribed(true);
  };

  return (
    <footer className="border-t border-line bg-navy text-slate-300">
      <div className="container-site py-16 sm:py-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid gap-12 lg:grid-cols-[1.4fr_2fr]"
        >
          <motion.div variants={fadeUp}>
            <Logo variant="light" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              We design and build scalable SaaS platforms, mobile
              applications, and ERP & HRMS systems for businesses of all
              sizes.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-slate-400 transition-colors hover:text-accent"
              >
                <Mail size={16} className="text-accent" /> {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-slate-400 transition-colors hover:text-accent"
              >
                <Phone size={16} className="text-accent" /> {siteConfig.phone}
              </a>
              <p className="flex items-center gap-3 text-slate-400">
                <MapPin size={16} className="text-accent" /> {siteConfig.address}
              </p>
            </div>
            <div className="mt-6 flex gap-3">
              {[
                { icon: LinkedinIcon, href: siteConfig.social.linkedin, label: "LinkedIn" },
                { icon: TwitterIcon, href: siteConfig.social.twitter, label: "Twitter" },
                { icon: GithubIcon, href: siteConfig.social.github, label: "GitHub" },
                { icon: InstagramIcon, href: siteConfig.social.instagram, label: "Instagram" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-200 ease-out hover:scale-110 hover:border-accent hover:bg-accent hover:text-white"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-10 sm:grid-cols-3">
            <motion.div variants={fadeUp}>
              <h3 className="font-display text-sm font-semibold tracking-wider text-white uppercase">
                What we offer
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {services.slice(0, 7).map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="text-slate-400 transition-colors hover:text-accent"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={fadeUp}>
              <h3 className="font-display text-sm font-semibold tracking-wider text-white uppercase">
                Products
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {products.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/products/${p.slug}`}
                      className="text-slate-400 transition-colors hover:text-accent"
                    >
                      {p.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <h3 className="mt-8 font-display text-sm font-semibold tracking-wider text-white uppercase">
                Company
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {companyLinks.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-slate-400 transition-colors hover:text-accent"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={fadeUp}>
              <h3 className="font-display text-sm font-semibold tracking-wider text-white uppercase">
                Resources
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {resourceLinks.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-slate-400 transition-colors hover:text-accent"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <h3 className="mt-8 font-display text-sm font-semibold tracking-wider text-white uppercase">
                Newsletter
              </h3>
              <p className="mt-4 text-sm text-slate-400">
                Product updates and engineering insights, monthly.
              </p>
              {subscribed ? (
                <p className="mt-4 flex items-center gap-2 text-sm font-medium text-success">
                  ✓ Thanks — you&apos;re subscribed!
                </p>
              ) : (
                <form onSubmit={subscribe} className="mt-4" noValidate>
                  <div className="flex overflow-hidden rounded-full border border-white/10 bg-white/5 focus-within:border-accent">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      aria-label="Email address for newsletter"
                      className="w-full bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none"
                    />
                    <button
                      type="submit"
                      aria-label="Subscribe"
                      className="flex items-center bg-accent px-4 text-white transition-colors hover:bg-secondary"
                    >
                      <Send size={15} />
                    </button>
                  </div>
                  {error && (
                    <p className="mt-2 text-xs text-red-400">{error}</p>
                  )}
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Spereon.codes. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="transition-colors hover:text-accent">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-accent">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
