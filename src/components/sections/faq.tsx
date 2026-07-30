"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 sm:py-28">
      <div className="container-site max-w-3xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          subtitle="Everything you need to know before starting a project with us."
        />
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const open = openIndex === i;
            return (
              <Reveal key={faq.q} delay={i * 0.05}>
                <div
                  className={`card-surface overflow-hidden transition-colors ${
                    open ? "border-accent/50" : ""
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : i)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-display text-base font-semibold sm:text-lg">
                      {faq.q}
                    </span>
                    <motion.span
                      animate={{ rotate: open ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                        open
                          ? "bg-accent text-white"
                          : "bg-accent/10 text-accent"
                      }`}
                    >
                      <Plus size={17} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-sm leading-relaxed text-muted sm:text-base">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
