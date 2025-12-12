import { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

type ImageModule = {
  default: string;
};

const modules = import.meta.glob<ImageModule>("../assets/product/perfume.*.webp", { eager: true });

const frames = Object.values(modules)
  .map((m) => m.default)
  .sort();

const images: HTMLImageElement[] = [];
frames.forEach((url) => {
  const img = new Image();
  img.src = url;
  images.push(img);
});

// Helper function to draw image with contain sizing
const drawImageContain = (
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  canvasWidth: number,
  canvasHeight: number
) => {
  const imgAspect = img.width / img.height;
  const canvasAspect = canvasWidth / canvasHeight;

  let drawWidth, drawHeight, offsetX, offsetY;

  if (imgAspect > canvasAspect) {
    // Image is wider than canvas
    drawWidth = canvasWidth;
    drawHeight = canvasWidth / imgAspect;
    offsetX = 0;
    offsetY = (canvasHeight - drawHeight) / 2;
  } else {
    // Image is taller than canvas
    drawHeight = canvasHeight;
    drawWidth = canvasHeight * imgAspect;
    offsetX = (canvasWidth - drawWidth) / 2;
    offsetY = 0;
  }

  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
};

export default function ScrollObject() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isFixed, setIsFixed] = useState(true);
  const [stickyPosition, setStickyPosition] = useState(0);
  const lastFrameRef = useRef<number>(0);
  const { scrollY } = useScroll();

  const SCROLL_END = 1300; // Single source of truth for scroll end
  const imageIndex = useTransform(scrollY, [0, SCROLL_END], [0, frames.length - 1]);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    const canvas = canvasRef.current;
    if (ctx && canvas && images[0]?.complete) {
      drawImageContain(ctx, images[0], canvas.width, canvas.height);
    }
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > SCROLL_END) {
      if (isFixed) {
        setStickyPosition(SCROLL_END + window.innerHeight / 2);
        setIsFixed(false);
      }
    } else {
      setIsFixed(true);
    }
  });

  useMotionValueEvent(imageIndex, "change", (latest) => {
    const idx = Math.min(frames.length - 1, Math.max(0, Math.round(latest)));
    const ctx = canvasRef.current?.getContext("2d");
    const canvas = canvasRef.current;

    if (ctx && canvas && images[idx].complete) {
      if (scrollY.get() <= SCROLL_END) {
        drawImageContain(ctx, images[idx], canvas.width, canvas.height);
        lastFrameRef.current = idx;
      }
    }
  });

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
    <>
      <canvas
        ref={canvasRef}
        width={800}
        height={800}
        className={`
        ${isFixed ? "fixed" : "absolute"}
        right-0
        pointer-events-none 
        z-[999]
      `}
        style={
          isFixed
            ? { top: "50%", transform: "translateY(-50%)" }
            : { top: `${stickyPosition}px`, transform: "translateY(-50%)" }
        }
      />
    </>
  );
}
