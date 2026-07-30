"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AUTOPLAY_MS = 4500;

type ProductCarouselProps = {
  name: string;
  accent: string;
  screenshots?: string[];
};

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto w-[230px] rounded-[2.6rem] bg-[#0b1526] p-2.5 shadow-2xl shadow-primary/30 ring-1 ring-white/10 sm:w-[260px]">
      {/* side buttons */}
      <span className="absolute top-24 -right-[3px] h-14 w-[3px] rounded-r-md bg-[#0b1526]" />
      <span className="absolute top-20 -left-[3px] h-8 w-[3px] rounded-l-md bg-[#0b1526]" />
      <span className="absolute top-32 -left-[3px] h-12 w-[3px] rounded-l-md bg-[#0b1526]" />
      <div className="relative aspect-[9/19] w-full overflow-hidden rounded-[2.1rem] bg-navy">
        {children}
      </div>
    </div>
  );
}

/** Phone-styled placeholder shown until real screenshots are added. */
function PhoneMock({ accent, label }: { accent: string; label: string }) {
  return (
    <PhoneFrame>
      <div className={`flex h-full w-full flex-col gap-3 bg-gradient-to-br p-4 pt-8 ${accent}`}>
        <div className="h-9 w-2/3 rounded-xl bg-white/25" />
        <div className="flex gap-2.5">
          <div className="h-16 flex-1 rounded-xl bg-white/25" />
          <div className="h-16 flex-1 rounded-xl bg-white/20" />
        </div>
        <div className="h-4 w-1/2 rounded-md bg-white/15" />
        <div className="flex-1 space-y-2.5">
          <div className="h-12 rounded-xl bg-white/15" />
          <div className="h-12 rounded-xl bg-white/15" />
          <div className="h-12 rounded-xl bg-white/15" />
        </div>
        <div className="flex h-12 items-center justify-around rounded-2xl bg-white/20">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="h-2.5 w-2.5 rounded-full bg-white/60" />
          ))}
        </div>
        <span className="font-display text-center text-[11px] font-semibold tracking-wide text-white/80">
          {label}
        </span>
      </div>
    </PhoneFrame>
  );
}

export function ProductCarousel({
  name,
  accent,
  screenshots = [],
}: ProductCarouselProps) {
  const reducedMotion = useReducedMotion();
  const [failed, setFailed] = useState<Set<string>>(new Set());
  const [loaded, setLoaded] = useState<Set<string>>(new Set());
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const slides = screenshots.filter((src) => !failed.has(src));
  const count = slides.length;
  const safeIndex = count > 0 ? index % count : 0;

  const goTo = useCallback(
    (next: number) => {
      if (count === 0) return;
      setIndex(((next % count) + count) % count);
    },
    [count]
  );

  useEffect(() => {
    if (paused || reducedMotion || count < 2) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, reducedMotion, count]);

  // No usable screenshots (none configured, or all failed to load):
  // show the phone-styled placeholder.
  if (count === 0) {
    return <PhoneMock accent={accent} label={name} />;
  }

  return (
    <div
      className="group"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label={`${name} app screenshots`}
    >
      <PhoneFrame>
        <div className={`absolute inset-0 bg-gradient-to-br ${accent}`} />

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={slides[safeIndex]}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="absolute inset-0"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={slides[safeIndex]}
              alt={`${name} screenshot ${safeIndex + 1} of ${count}`}
              loading="lazy"
              draggable={false}
              className={`h-full w-full object-cover transition-opacity duration-500 ${
                loaded.has(slides[safeIndex]) ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() =>
                setLoaded((prev) => new Set(prev).add(slides[safeIndex]))
              }
              onError={() =>
                setFailed((prev) => new Set(prev).add(slides[safeIndex]))
              }
            />
          </motion.div>
        </AnimatePresence>

        {count > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous screenshot"
              onClick={() => goTo(safeIndex - 1)}
              className="absolute top-1/2 left-2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white opacity-0 backdrop-blur-sm transition-all duration-200 group-hover:opacity-100 hover:scale-110 hover:bg-black/50 focus-visible:opacity-100"
            >
              <ChevronLeft size={17} />
            </button>
            <button
              type="button"
              aria-label="Next screenshot"
              onClick={() => goTo(safeIndex + 1)}
              className="absolute top-1/2 right-2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white opacity-0 backdrop-blur-sm transition-all duration-200 group-hover:opacity-100 hover:scale-110 hover:bg-black/50 focus-visible:opacity-100"
            >
              <ChevronRight size={17} />
            </button>
          </>
        )}
      </PhoneFrame>

      {count > 1 && (
        <div className="mt-5 flex justify-center gap-2">
          {slides.map((src, i) => (
            <button
              key={src}
              type="button"
              aria-label={`Show screenshot ${i + 1}`}
              aria-current={i === safeIndex}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === safeIndex
                  ? "w-6 bg-accent"
                  : "w-1.5 bg-line hover:bg-accent/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
