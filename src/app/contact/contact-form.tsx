"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { CircleCheck, LoaderCircle, Send } from "lucide-react";
import { products } from "@/lib/data";

type FormState = {
  name: string;
  email: string;
  company: string;
  phone: string;
  budget: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  phone: "",
  budget: "",
  message: "",
};

const inputClass =
  "w-full rounded-xl border border-line bg-card px-4 py-3 text-sm transition-[border-color,box-shadow] duration-200 placeholder:text-muted/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 focus:shadow-[0_8px_24px_-12px_rgba(79,127,255,0.45)]";

export function ContactForm() {
  const searchParams = useSearchParams();
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  useEffect(() => {
    const demo = searchParams.get("demo");
    const role = searchParams.get("role");
    if (demo) {
      const product = products.find((p) => p.slug === demo);
      if (product) {
        const intent =
          product.status === "in-progress"
            ? `get early access to ${product.name}`
            : `request a demo of ${product.name}`;
        setForm((f) => ({ ...f, message: `Hi, I'd like to ${intent}.` }));
      }
    } else if (role) {
      setForm((f) => ({
        ...f,
        message: `Hi, I'd like to apply for the ${role} position.`,
      }));
    }
  }, [searchParams]);

  const set = (key: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    setErrors((err) => ({ ...err, [key]: undefined }));
  };

  const validate = (): boolean => {
    const next: Partial<FormState> = {};
    if (form.name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Please enter a valid email address.";
    if (form.phone && !/^[+\d][\d\s\-()]{6,}$/.test(form.phone))
      next.phone = "Please enter a valid phone number.";
    if (form.message.trim().length < 10)
      next.message = "Please tell us a bit more (at least 10 characters).";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    // Simulated submission — wire this to your API route or form service.
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  };

  if (status === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card-surface flex flex-col items-center p-12 text-center"
      >
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-success/10 text-success">
          <CircleCheck size={32} />
        </span>
        <h2 className="font-display mt-6 text-2xl font-bold">
          Message sent successfully!
        </h2>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
          Thanks, {form.name.split(" ")[0]}. Our team will get back to you
          within one business day at{" "}
          <span className="font-medium text-foreground">{form.email}</span>.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="card-surface p-8 sm:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
            Full Name <span className="text-accent">*</span>
          </label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={set("name")}
            placeholder="Enter your full name"
            className={inputClass}
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
            Work Email <span className="text-accent">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={set("email")}
            placeholder="Enter your work email"
            className={inputClass}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>
          )}
        </div>
        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm font-medium">
            Company
          </label>
          <input
            id="company"
            type="text"
            value={form.company}
            onChange={set("company")}
            placeholder="Enter your company name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={set("phone")}
            placeholder="Enter your phone number"
            className={inputClass}
            aria-invalid={!!errors.phone}
          />
          {errors.phone && (
            <p className="mt-1.5 text-xs text-red-500">{errors.phone}</p>
          )}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="budget" className="mb-1.5 block text-sm font-medium">
            Estimated Budget
          </label>
          <select
            id="budget"
            value={form.budget}
            onChange={set("budget")}
            className={inputClass}
          >
            <option value="">Select a range (optional)</option>
            <option value="under-5k">Under $5,000</option>
            <option value="5k-15k">$5,000 – $15,000</option>
            <option value="15k-50k">$15,000 – $50,000</option>
            <option value="50k-plus">$50,000+</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
            Project Details <span className="text-accent">*</span>
          </label>
          <textarea
            id="message"
            rows={5}
            value={form.message}
            onChange={set("message")}
            placeholder="Tell us about your project, goals, and timeline…"
            className={`${inputClass} resize-y`}
            aria-invalid={!!errors.message}
          />
          {errors.message && (
            <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>
          )}
        </div>
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary mt-7 w-full text-sm disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "sending" ? (
          <>
            <LoaderCircle size={17} className="animate-spin" /> Sending…
          </>
        ) : (
          <>
            <Send size={16} /> Send Message
          </>
        )}
      </button>
      <p className="mt-4 text-xs text-muted">
        We reply within one business day. Your information stays private — see
        our privacy policy.
      </p>
    </form>
  );
}
