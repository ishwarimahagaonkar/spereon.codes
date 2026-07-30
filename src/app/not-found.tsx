import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="blob left-[-10%] top-[-20%] h-96 w-96 bg-accent/30" />
        <div className="blob right-[-10%] bottom-[-20%] h-96 w-96 bg-secondary/25" />
      </div>
      <div className="container-site flex flex-col items-center py-32 text-center sm:py-44">
        <p className="font-display heading-gradient text-7xl font-bold sm:text-9xl">
          404
        </p>
        <h1 className="font-display mt-4 text-2xl font-bold sm:text-3xl">
          Page not found
        </h1>
        <p className="mt-3 max-w-md text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="btn-primary mt-8 text-sm">
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>
    </section>
  );
}
