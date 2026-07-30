import { whyChoose } from "@/lib/data";
import { Icon } from "@/components/icon";
import { SectionHeading } from "@/components/section-heading";
import { Stagger, StaggerItem } from "@/components/reveal";

export function WhyChoose() {
  return (
    <section className="dark relative overflow-hidden bg-navy py-20 text-white sm:py-28">
      <div className="absolute inset-0 -z-0" aria-hidden="true">
        <div className="blob left-[-10%] top-[10%] h-96 w-96 bg-accent/25" />
        <div
          className="blob right-[-10%] bottom-[0%] h-96 w-96 bg-secondary/30"
          style={{ animationDelay: "-7s" }}
        />
      </div>
      <div className="container-site relative">
        <SectionHeading
          eyebrow="Why Spereon?"
          title="A partner, not just a vendor"
          subtitle="We measure our success by the growth of the businesses we build for."
        />
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((item) => (
            <StaggerItem key={item.title}>
              <div className="group h-full rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-white/10">
                <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                  <Icon name={item.icon} size={21} />
                </span>
                <h3 className="font-display text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {item.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
