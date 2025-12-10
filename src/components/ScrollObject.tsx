import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import {
  useScroll,
  useSpring,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

type ImageModule = {
  default: string;
};

// Load all frames
const modules = import.meta.glob<ImageModule>(
  "../assets/product/perfume.*.webp",
  { eager: true }
);

const frames = Object.values(modules)
  .map((m) => m.default)
  .sort();

// Preload frames in memory
const images: HTMLImageElement[] = [];
frames.forEach((url) => {
  const img = new Image();
  img.src = url;
  images.push(img);
});

export default function ScrollObject() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { scrollY } = useScroll();
  const smoothScroll = useSpring(scrollY, { stiffness: 120, damping: 40 });

  const imageIndex = useTransform(
    smoothScroll,
    [0, 4000],
    [0, frames.length - 1]
  );

  // Draw frame to canvas
  useMotionValueEvent(imageIndex, "change", (latest) => {
    const idx = Math.min(frames.length - 1, Math.max(0, Math.round(latest)));
    const ctx = canvasRef.current?.getContext("2d");

    if (ctx && images[idx].complete) {
      ctx.clearRect(0, 0, canvasRef.current!.width, canvasRef.current!.height);
      ctx.drawImage(
        images[idx],
        0,
        0,
        canvasRef.current!.width,
        canvasRef.current!.height
      );
    }
  });

  // Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
      wheelMultiplier: 1.2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={400}
      height={400}
      className="
        fixed 
        top-1/2 left-1/2 
        -translate-x-1/2 -translate-y-1/2
        pointer-events-none 
        z-[999]
      "
    />
  );
}
