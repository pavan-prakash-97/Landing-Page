import React, { useEffect, type ReactNode } from "react";
import Lenis from "@studio-freight/lenis";

interface LenisScrollProps {
  children: ReactNode;
}

export const LenisScroll: React.FC<LenisScrollProps> = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08, // smoothness
      smoothWheel: true,
      //   smoothTouch: false,
      wheelMultiplier: 1.1,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <div className="bg-black text-white">{children}</div>;
};
