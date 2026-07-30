"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

// Splash-specific palette — intentionally distinct from the site's design
// tokens per the brief (Primary #112250, Secondary #2563EB, Accent #60A5FA).
const NAVY = "#112250";
const SECONDARY = "#2563EB";
const ACCENT = "#60A5FA";

const MARK_SRC = "/brand/spereon-mark.png";

const EASE_IN_OUT_EXPO = [0.87, 0, 0.13, 1] as const;
const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

export const SPLASH_SESSION_KEY = "spereon-splash-shown";

// Full sequence, in seconds from mount.
const FULL_TIMELINE = {
  total: 3.0,
  // opacity 0 -> 1 by 0.25s, hold until 2.6s, fade out by 3.0s
  containerTimes: [0, 0.083, 0.867, 1],
  logoDelay: 1.5,
  logoDuration: 0.55,
  textSpereonDelay: 1.75,
  textDuration: 0.45,
  textCodesDelay: 1.95,
  sweepDelay: 2.3,
  sweepDuration: 0.55,
  pulseDelay: 2.4,
  pulseDuration: 0.6,
  // When to reveal the site underneath — just before the overlay fade-out,
  // so the homepage rises in while the splash dissolves (no visible jump).
  revealAt: 2.5,
};

// Condensed, opacity-only sequence for prefers-reduced-motion.
const REDUCED_TIMELINE = {
  total: 0.9,
  containerTimes: [0, 0.17, 0.72, 1],
  logoDelay: 0.12,
  logoDuration: 0.25,
  textSpereonDelay: 0.28,
  textDuration: 0.25,
  textCodesDelay: 0.38,
  revealAt: 0.5,
};

// ---- Canvas particle-sphere timing (ms), independent of the DOM timeline ----
const CANVAS_MS = {
  bgFadeIn: 200,
  convergeStart: 150,
  convergeDuration: 800,
  particleStagger: 150,
  fadeStart: 1450,
  fadeDuration: 350,
  stop: 1850,
};

const PARTICLE_COUNT = 64;

type Vec3 = { x: number; y: number; z: number };

function easeInOutExpo(t: number) {
  if (t <= 0) return 0;
  if (t >= 1) return 1;
  return t < 0.5
    ? Math.pow(2, 20 * t - 10) / 2
    : (2 - Math.pow(2, -20 * t + 10)) / 2;
}

function clamp01(t: number) {
  return t < 0 ? 0 : t > 1 ? 1 : t;
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function fibonacciSphere(count: number): Vec3[] {
  const points: Vec3[] = [];
  const offset = 2 / count;
  const increment = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = i * offset - 1 + offset / 2;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const phi = i * increment;
    points.push({ x: Math.cos(phi) * r, y, z: Math.sin(phi) * r });
  }
  return points;
}

function distance(a: Vec3, b: Vec3) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  const dz = a.z - b.z;
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

function rotateX(p: Vec3, angle: number): Vec3 {
  const c = Math.cos(angle);
  const s = Math.sin(angle);
  return { x: p.x, y: p.y * c - p.z * s, z: p.y * s + p.z * c };
}

function rotateY(p: Vec3, angle: number): Vec3 {
  const c = Math.cos(angle);
  const s = Math.sin(angle);
  return { x: p.x * c + p.z * s, y: p.y, z: -p.x * s + p.z * c };
}

function buildNeighborEdges(points: Vec3[]): [number, number][] {
  const edges: [number, number][] = [];
  const seen = new Set<string>();
  for (let i = 0; i < points.length; i++) {
    const distances = points
      .map((p, j) => ({ j, d: i === j ? Infinity : distance(points[i], p) }))
      .sort((a, b) => a.d - b.d);
    for (let k = 0; k < 3; k++) {
      const j = distances[k].j;
      const key = i < j ? `${i}-${j}` : `${j}-${i}`;
      if (!seen.has(key)) {
        seen.add(key);
        edges.push([i, j]);
      }
    }
  }
  return edges;
}

function ParticleSphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const basePoints = fibonacciSphere(PARTICLE_COUNT);
    const starts: Vec3[] = basePoints.map((p) => {
      const mul = 2.2 + Math.random() * 1.8;
      const jitter = () => (Math.random() - 0.5) * 0.5;
      return {
        x: p.x * mul + jitter(),
        y: p.y * mul + jitter(),
        z: p.z * mul + jitter(),
      };
    });
    const delays = basePoints.map(
      (_, i) => (i / PARTICLE_COUNT) * CANVAS_MS.particleStagger
    );
    const edges = buildNeighborEdges(basePoints);

    const start = performance.now();
    let raf = 0;
    let stopped = false;

    const tick = (now: number) => {
      if (stopped) return;
      const elapsed = now - start;

      if (elapsed >= CANVAS_MS.stop) {
        ctx.clearRect(0, 0, width, height);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      const R = Math.min(width, height) * 0.15;
      const spinAngle = elapsed * 0.00035;
      const tilt = 0.45;

      const fadeIn = clamp01(elapsed / CANVAS_MS.bgFadeIn);
      const fadeOut =
        elapsed < CANVAS_MS.fadeStart
          ? 1
          : 1 - clamp01((elapsed - CANVAS_MS.fadeStart) / CANVAS_MS.fadeDuration);
      const globalAlpha = fadeIn * fadeOut;

      if (globalAlpha > 0.002) {
        const rendered: {
          x: number;
          y: number;
          scale: number;
          depthT: number;
          alpha: number;
        }[] = new Array(PARTICLE_COUNT);

        for (let i = 0; i < PARTICLE_COUNT; i++) {
          const progress = clamp01(
            (elapsed - CANVAS_MS.convergeStart - delays[i]) /
              CANVAS_MS.convergeDuration
          );
          const e = easeInOutExpo(progress);
          const bx = lerp(starts[i].x, basePoints[i].x, e) * R;
          const by = lerp(starts[i].y, basePoints[i].y, e) * R;
          const bz = lerp(starts[i].z, basePoints[i].z, e) * R;

          const tilted = rotateX({ x: bx, y: by, z: bz }, tilt);
          const spun = rotateY(tilted, spinAngle);

          const cameraZ = R * 3.2;
          const denom = cameraZ - spun.z;
          const scale = cameraZ / denom;
          const sx = width / 2 + spun.x * scale;
          const sy = height / 2 + spun.y * scale;
          const depthT = clamp01((spun.z + R) / (2 * R));

          rendered[i] = { x: sx, y: sy, scale, depthT, alpha: e };
        }

        ctx.lineWidth = 1;
        for (const [a, b] of edges) {
          const pa = rendered[a];
          const pb = rendered[b];
          const edgeAlpha =
            Math.min(pa.alpha, pb.alpha) *
            ((pa.depthT + pb.depthT) / 2) *
            0.5 *
            globalAlpha;
          if (edgeAlpha <= 0.01) continue;
          ctx.strokeStyle = `rgba(96,165,250,${edgeAlpha.toFixed(3)})`;
          ctx.beginPath();
          ctx.moveTo(pa.x, pa.y);
          ctx.lineTo(pb.x, pb.y);
          ctx.stroke();
        }

        for (const p of rendered) {
          const a = (0.35 + 0.65 * p.depthT) * p.alpha * globalAlpha;
          if (a <= 0.01) continue;
          const r = (1.3 + p.depthT * 2.4) * Math.max(p.scale, 0.4);
          ctx.beginPath();
          ctx.fillStyle = `rgba(255,255,255,${a.toFixed(3)})`;
          ctx.shadowColor = "rgba(96,165,250,0.9)";
          ctx.shadowBlur = 8 * p.depthT + 4;
          ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.shadowBlur = 0;
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => {
      stopped = true;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    />
  );
}

function AmbientBackground({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <>
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 45%, ${SECONDARY}59, transparent 60%)`,
        }}
        animate={reducedMotion ? undefined : { scale: [1, 1.08, 1] }}
        transition={
          reducedMotion
            ? undefined
            : { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }
      />
      <motion.div
        className="absolute inset-[-25%] opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
        animate={reducedMotion ? undefined : { x: [0, -14, 0], y: [0, -14, 0] }}
        transition={
          reducedMotion
            ? undefined
            : { duration: 10, repeat: Infinity, ease: "easeInOut" }
        }
      />
    </>
  );
}

const markMaskStyle: React.CSSProperties = {
  WebkitMaskImage: `url(${MARK_SRC})`,
  maskImage: `url(${MARK_SRC})`,
  WebkitMaskSize: "contain",
  maskSize: "contain",
  WebkitMaskRepeat: "no-repeat",
  maskRepeat: "no-repeat",
  WebkitMaskPosition: "center",
  maskPosition: "center",
};

type SplashScreenProps = {
  onComplete?: () => void;
};

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const reducedMotion = Boolean(useReducedMotion());
  const [phase, setPhase] = useState<"checking" | "playing" | "done">(
    "checking"
  );

  const onCompleteRef = useRef(onComplete);
  useEffect(() => {
    onCompleteRef.current = onComplete;
  });

  const revealedRef = useRef(false);
  const reveal = useCallback(() => {
    if (revealedRef.current) return;
    revealedRef.current = true;
    onCompleteRef.current?.();
  }, []);

  useEffect(() => {
    let alreadyShown = false;
    try {
      alreadyShown = sessionStorage.getItem(SPLASH_SESSION_KEY) === "1";
    } catch {
      alreadyShown = false;
    }

    if (alreadyShown) {
      setPhase("done");
      reveal();
      return;
    }

    try {
      sessionStorage.setItem(SPLASH_SESSION_KEY, "1");
    } catch {
      // sessionStorage unavailable (private mode, etc.) — play once anyway.
    }

    document.documentElement.style.overflow = "hidden";
    setPhase("playing");

    const prefersReduced =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = prefersReduced ? REDUCED_TIMELINE : FULL_TIMELINE;

    // Reveal the site shortly before the overlay fade-out so the handoff is
    // seamless, plus a safety net in case the animation callback never fires
    // (e.g. heavily throttled background tabs).
    const revealTimer = window.setTimeout(reveal, t.revealAt * 1000);
    const safetyTimer = window.setTimeout(() => {
      setPhase("done");
      reveal();
    }, t.total * 1000 + 1200);

    // Symmetric cleanup: React Strict Mode mounts, unmounts, and remounts
    // every component once in development to surface non-idempotent effects.
    // Without undoing the sessionStorage write here, that synthetic remount
    // would see "already shown" and the splash would never actually render
    // in dev. This never fires on the real, lasting mount.
    return () => {
      window.clearTimeout(revealTimer);
      window.clearTimeout(safetyTimer);
      document.documentElement.style.overflow = "";
      try {
        sessionStorage.removeItem(SPLASH_SESSION_KEY);
      } catch {
        // ignore
      }
    };
  }, [reveal]);

  useEffect(() => {
    if (phase !== "done") return;
    document.documentElement.style.overflow = "";
  }, [phase]);

  if (phase !== "playing") return null;

  const t = reducedMotion ? REDUCED_TIMELINE : FULL_TIMELINE;

  return (
    <motion.div
      role="presentation"
      aria-hidden="true"
      className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden"
      style={{ background: NAVY }}
      initial={{ opacity: 0, scale: 1 }}
      animate={
        reducedMotion
          ? { opacity: [0, 1, 1, 0] }
          : { opacity: [0, 1, 1, 0], scale: [1, 1, 1, 0.94] }
      }
      transition={{
        duration: t.total,
        times: t.containerTimes,
        ease: EASE_IN_OUT_EXPO,
      }}
      onAnimationComplete={() => {
        setPhase("done");
        reveal();
      }}
    >
      <AmbientBackground reducedMotion={reducedMotion} />

      {!reducedMotion && <ParticleSphere />}

      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          className="relative flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.82 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: t.logoDelay,
            duration: t.logoDuration,
            ease: EASE_OUT_EXPO,
          }}
        >
          {!reducedMotion && (
            <motion.div
              className="pointer-events-none absolute rounded-full border"
              style={{
                top: "50%",
                left: "50%",
                width: 100,
                height: 100,
                borderColor: `${ACCENT}99`,
              }}
              initial={{ opacity: 0, scale: 0.6, x: "-50%", y: "-50%" }}
              animate={{
                opacity: [0, 0.6, 0],
                scale: [0.6, 2.3, 2.3],
                x: "-50%",
                y: "-50%",
              }}
              transition={{
                delay: FULL_TIMELINE.pulseDelay,
                duration: FULL_TIMELINE.pulseDuration,
                ease: "easeOut",
                times: [0, 0.4, 1],
              }}
            />
          )}

          <div className="relative h-[88px] w-[88px]">
            {/* Official mark, recolored white via filters, with a soft glow. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={MARK_SRC}
              alt=""
              className="h-full w-full object-contain brightness-0 invert drop-shadow-[0_0_18px_rgba(96,165,250,0.55)]"
              draggable={false}
            />

            {/* Light sweep, clipped to the mark itself via CSS mask. */}
            {!reducedMotion && (
              <div
                className="pointer-events-none absolute inset-0 overflow-hidden"
                style={markMaskStyle}
              >
                <motion.div
                  className="absolute inset-y-0 w-1/3 -skew-x-12"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.75), transparent)",
                  }}
                  initial={{ x: "-160%", opacity: 0 }}
                  animate={{ x: "260%", opacity: [0, 1, 1, 0] }}
                  transition={{
                    delay: FULL_TIMELINE.sweepDelay,
                    duration: FULL_TIMELINE.sweepDuration,
                    ease: "easeInOut",
                    times: [0, 0.15, 0.7, 1],
                  }}
                />
              </div>
            )}
          </div>
        </motion.div>

        <div className="font-display mt-6 flex items-baseline gap-0.5 text-4xl font-bold tracking-tight sm:text-5xl">
          <motion.span
            style={{ color: "#FFFFFF" }}
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{
              delay: t.textSpereonDelay,
              duration: t.textDuration,
              ease: EASE_OUT_EXPO,
            }}
          >
            spereon
          </motion.span>
          <motion.span
            style={{ color: ACCENT }}
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{
              delay: t.textCodesDelay,
              duration: t.textDuration,
              ease: EASE_OUT_EXPO,
            }}
          >
            .codes
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
}
