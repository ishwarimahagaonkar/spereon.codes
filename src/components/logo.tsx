import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
  variant?: "default" | "light";
};

export function Logo({ className = "", variant = "default" }: LogoProps) {
  const textColor =
    variant === "light" ? "text-white" : "text-foreground";

  const accentColor =
    variant === "light" ? "text-white/80" : "text-accent";

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3 ${className}`}
      aria-label="Spereon.codes home"
    >
      <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-accent">
      <Image
        src="/brand/logo-spereon-dark.jpeg"
        alt="Spereon.codes"
        width={44}
        height={44}
        className="h-full w-full object-cover"
      />
    </div>
      
      <div className="flex flex-col leading-none">
        <span
          className={`font-display text-2xl font-bold ${textColor}`}
        >
          Spereon
        </span>
        <span
          className={`text-sm font-semibold #112250 ${accentColor}`}
        >
          .codes
        </span>
      </div>
    </Link>
  );
}