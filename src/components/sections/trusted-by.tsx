import { trustedBy } from "@/lib/data";
import { Reveal } from "@/components/reveal";

export function TrustedBy() {
  const logos = [...trustedBy, ...trustedBy];
  return (
    <section className="border-y border-line py-12">
      <div className="container-site">
        <Reveal>
          <p className="text-center text-sm font-medium tracking-wider text-muted uppercase">
            Trusted by growing businesses
          </p>
        </Reveal>
      </div>
      <div
        className="relative mt-8 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        }}
      >
        <div className="marquee-track gap-14 px-7">
          {logos.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="font-display flex items-center gap-2 text-xl font-semibold whitespace-nowrap text-muted/70 transition-colors hover:text-foreground"
              aria-hidden={i >= trustedBy.length}
            >
              <span className="h-2.5 w-2.5 rounded-md bg-gradient-to-br from-secondary to-accent" />
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
