import { process } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Stagger, StaggerItem } from "@/components/reveal";

export function Process() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-site">
        <SectionHeading
          eyebrow="Our Process"
          title="From idea to launch — transparently"
          subtitle="A proven seven-step process with working software and clear communication at every stage."
        />
        <Stagger className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((item, i) => (
            <StaggerItem key={item.step}>
              <div className="card-surface card-hover relative h-full p-6">
                <span className="font-display bg-gradient-to-br from-secondary to-accent bg-clip-text text-4xl font-bold text-transparent">
                  {item.step}
                </span>
                <h3 className="font-display mt-3 text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.desc}
                </p>
                {i < process.length - 1 && (
                  <span
                    className="absolute top-1/2 -right-4 hidden h-px w-8 bg-gradient-to-r from-accent/60 to-transparent lg:block"
                    aria-hidden="true"
                  />
                )}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
