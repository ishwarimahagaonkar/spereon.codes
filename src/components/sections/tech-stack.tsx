import { techStack } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Stagger, StaggerItem } from "@/components/reveal";

export function TechStack() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-site">
        <SectionHeading
          eyebrow="Technology Stack"
          title="Built with the tools that power the modern web"
          subtitle="We choose proven, modern technologies so your product stays fast, secure, and easy to evolve."
        />
        <Stagger className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3 sm:gap-4">
          {techStack.map((tech) => (
            <StaggerItem key={tech}>
              <span className="group flex items-center gap-2.5 rounded-full border border-line bg-card px-5 py-2.5 text-sm font-medium shadow-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.05] hover:border-accent/60 hover:shadow-md">
                <span className="font-display flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-secondary to-accent text-[11px] font-bold text-white">
                  {tech.charAt(0)}
                </span>
                {tech}
              </span>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
