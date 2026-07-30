"use client";

import { useCallback, useState } from "react";
import { SplashScreen } from "@/components/splash-screen";

type SplashScreenLoaderProps = {
  children: React.ReactNode;
};

export function SplashScreenLoader({ children }: SplashScreenLoaderProps) {
  // Always start hidden (matching the server HTML) and reveal via a real
  // state transition — SplashScreen calls onComplete immediately when the
  // splash is skipped, so returning visitors reveal right after hydration.
  const [isRevealed, setIsRevealed] = useState(false);

  const revealSite = useCallback(() => {
    document.body.classList.remove("splash-pending");
    setIsRevealed(true);
  }, []);

  return (
    <>
      <div
        className={`site-content flex min-h-full flex-1 flex-col transition-[opacity,transform] duration-700 ease-out ${
          isRevealed
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-2 opacity-0"
        }`}
      >
        {children}
      </div>
      <SplashScreen onComplete={revealSite} />
    </>
  );
}
