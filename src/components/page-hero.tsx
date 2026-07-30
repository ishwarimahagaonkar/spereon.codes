import { Reveal } from "@/components/reveal";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="blob left-[-12%] top-[-30%] h-96 w-96 bg-accent/30" />
        <div
          className="blob right-[-10%] top-[10%] h-80 w-80 bg-secondary/25"
          style={{ animationDelay: "-6s" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,var(--background)_80%)]" />
      </div>
      <div className="container-site py-20 text-center sm:py-28">
        <Reveal>
          {eyebrow && (
            <span className="mb-5 inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-secondary uppercase dark:text-accent">
              {eyebrow}
            </span>
          )}
          <h1 className="font-display mx-auto max-w-3xl text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {subtitle}
            </p>
          )}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
