"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Megaphone,
  Repeat2,
  ShoppingCart,
  Search,
} from "lucide-react";

const departments = [
  {
    title: "Software Development",
    description: "Building robust applications",
    icon: Code2,
  },
  {
    title: "Digital Marketing",
    description: "Building brand presence online",
    icon: Megaphone,
  },
  {
    title: "SaaS Subscription",
    description: "Recurring revenue model",
    icon: Repeat2,
  },
  {
    title: "E-commerce",
    description: "Online sales channels",
    icon: ShoppingCart,
  },
  {
    title: "Research",
    description: "Market research & growth",
    icon: Search,
  },
];

export function Departments() {
  return (
    <section className="relative overflow-hidden border-t border-line bg-white py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container-site relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            What We Do
          </p>

          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Departments in Company
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-500">
            Five core departments driving our business forward.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map((department, index) => {
            const Icon = department.icon;

            return (
              <motion.div
                key={department.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl"
              >
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent/5 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:bg-accent/10" />

                <div className="relative">
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/15 via-accent/10 to-transparent text-accent ring-1 ring-accent/10 shadow-sm"
                  >
                    <Icon size={30} strokeWidth={1.8} />
                  </motion.div>

                  <h3 className="mt-7 font-display text-xl font-semibold text-navy">
                    {department.title}
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">
                    {department.description}
                  </p>

                  <div className="mt-6 h-1 w-10 rounded-full bg-accent/40 transition-all duration-300 group-hover:w-16 group-hover:bg-accent" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}