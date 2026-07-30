"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";

const PER_PAGE = 2;
const AUTOPLAY_MS = 6000;

const pages: (typeof testimonials)[] = [];
for (let i = 0; i < testimonials.length; i += PER_PAGE) {
  pages.push(testimonials.slice(i, i + PER_PAGE));
}

export function Testimonials() {
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (paused || reducedMotion || pages.length < 2) return;
    const id = setInterval(
      () => setPage((p) => (p + 1) % pages.length),
      AUTOPLAY_MS
    );
    return () => clearInterval(id);
  }, [paused, reducedMotion]);

  return (
    <section className="py-20 sm:py-28">
      <div className="container-site">
        <SectionHeading
          eyebrow="Testimonials"
          title="What our clients say"
          subtitle="Real feedback from the businesses we've helped transform."
        />
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
          aria-roledescription="carousel"
          aria-label="Client testimonials"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={page}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="grid gap-6 sm:grid-cols-2"
            >
              {pages[page].map((t) => (
                <figure
                  key={t.name}
                  className="card-surface card-hover flex h-full flex-col p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Quote size={18} />
                    </span>
                    <span
                      className="flex gap-0.5 text-amber-400"
                      aria-label="5 out of 5 stars"
                    >
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={15} fill="currentColor" />
                      ))}
                    </span>
                  </div>
                  <blockquote className="mt-5 flex-1 leading-relaxed text-foreground/90">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                    <span className="font-display flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-accent text-sm font-bold text-white">
                      {t.name.charAt(0)}
                    </span>
                    <div>
                      <p className="text-sm font-semibold">{t.name}</p>
                      <p className="text-xs text-muted">{t.role}</p>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </motion.div>
          </AnimatePresence>

          {pages.length > 1 && (
            <div className="mt-8 flex justify-center gap-2.5">
              {pages.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setPage(i)}
                  aria-label={`Show testimonials page ${i + 1}`}
                  aria-current={page === i}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    page === i
                      ? "w-7 bg-accent"
                      : "w-2 bg-line hover:bg-accent/40"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
