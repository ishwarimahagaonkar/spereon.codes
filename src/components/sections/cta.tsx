import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";

export function Cta() {
  return (
    <section className="pb-20 py-24 sm:pb-28">
      <div className="container-site">
        <Reveal>
          <div className="dark relative overflow-hidden rounded-3xl bg-navy px-6 py-16 text-center text-white sm:px-12 sm:py-20">
            <div className="absolute inset-0" aria-hidden="true">
              <div className="blob left-[-5%] top-[-30%] h-80 w-80 bg-accent/30" />
              <div
                className="blob right-[-5%] bottom-[-30%] h-80 w-80 bg-[#7C3AED]/25"
                style={{ animationDelay: "-6s" }}
              />
              <div className="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2">
                <div className="glow-pulse h-full w-full rounded-full bg-accent/20 blur-[100px]" />
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(8,17,32,0.6)_100%)]" />
            </div>
            <div className="relative">
              <h2 className="font-display mx-auto max-w-2xl text-3xl font-bold tracking-tight text-balance sm:text-5xl">
                Ready to{" "}
                <span className="heading-gradient">Transform Your Business?</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base text-slate-400 sm:text-lg">
                Join businesses using Spereon's cloud solutions to automate everyday operations, reduce manual work, and improve productivity.
              </p>
              <div className="mt-9">
                <Link href="/contact" className="btn-primary text-base">
                  Talk to sales
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
