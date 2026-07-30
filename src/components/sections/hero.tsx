"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const lineReveal = {
  hidden: { y: "110%" },
  show: (i: number) => ({
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.15 + i * 0.15,
      ease: [0.21, 0.47, 0.32, 0.98] as const,
    },
  }),
};

const spring = { type: "spring", stiffness: 400, damping: 17 } as const;

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 140]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* Floating gradient blobs with scroll parallax */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="blob left-[-10%] top-[-10%] h-[28rem] w-[28rem] bg-accent/40" />
        <div
          className="blob right-[-8%] top-[20%] h-[24rem] w-[24rem] bg-secondary/40"
          style={{ animationDelay: "-5s" }}
        />
        <div
          className="blob bottom-[-20%] left-[30%] h-[26rem] w-[26rem] bg-[#7C3AED]/30"
          style={{ animationDelay: "-9s" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,var(--background)_75%)]" />
      </motion.div>

      <div className="container-site flex flex-col items-center py-24 pb-36 text-center sm:py-32 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-secondary dark:text-accent"
        >
          <Sparkles size={15} />
          SaaS · Mobile Apps 
        </motion.div>

        <h1 className="font-display max-w-4xl text-4xl font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl">
          <span className="block overflow-hidden pb-1">
            <motion.span
              className="block"
              variants={lineReveal}
              initial="hidden"
              animate="show"
              custom={0}
            >
              Building Software That Helps
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-2">
            <motion.span
              className="heading-gradient block"
              variants={lineReveal}
              initial="hidden"
              animate="show"
              custom={1}
            >
              Businesses Grow.
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: "easeOut" }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg lg:text-xl"
        >
          Access secure, scalable business applications on a monthly subscription.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} transition={spring}>
            <Link href="/contact" className="btn-primary w-full text-base sm:w-auto">
              Book Free Consultation
              <ArrowRight size={18} />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} transition={spring}>
            <Link href="/services" className="btn-secondary w-full text-base sm:w-auto">
              Explore Solutions
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted"
        >
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-success" /> Free
            consultation
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-success" /> Transparent,
            milestone-based pricing
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-success" /> Support after
            launch
          </span>
        </motion.div>
      </div>
    </section>
  );
}
