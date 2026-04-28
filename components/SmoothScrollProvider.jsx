"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScrollProvider({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8, // Lower for snappier feel
      // Use default easing for natural scroll
      smoothWheel: true,
      smoothTouch: true, // Enable for touch devices
      lerp: 0.08, // Lower = more responsive
      wheelMultiplier: 1.1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return <div>{children}</div>;
}