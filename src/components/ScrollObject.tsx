import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ImageModule = { default: string };

const modules = import.meta.glob<ImageModule>(
  "../assets/product/perfume.*.webp",
  { eager: true }
);

const frames = Object.values(modules)
  .map((m) => m.default)
  .sort();

const images: HTMLImageElement[] = [];
frames.forEach((url) => {
  const img = new Image();
  img.src = url;
  images.push(img);
});

const drawImageContain = (
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  canvasWidth: number,
  canvasHeight: number
) => {
  const imgAspect = img.width / img.height;
  const canvasAspect = canvasWidth / canvasHeight;

  let drawWidth: number;
  let drawHeight: number;
  let offsetX: number;
  let offsetY: number;

  if (imgAspect > canvasAspect) {
    drawWidth = canvasWidth;
    drawHeight = canvasWidth / imgAspect;
    offsetX = 0;
    offsetY = (canvasHeight - drawHeight) / 2;
  } else {
    drawHeight = canvasHeight;
    drawWidth = canvasHeight * imgAspect;
    offsetX = (canvasWidth - drawWidth) / 2;
    offsetY = 0;
  }

  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
};

export const ScrollObject: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const lastFrameRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (images[0]?.complete)
      drawImageContain(ctx, images[0], canvas.width, canvas.height);

    const section1 = document.getElementById("desert-crown");
    const section2 = document.getElementById("tree-of-life");
    if (!section1 || !section2) return;

    gsap.fromTo(
      canvas,
      { scale: 0.8, filter: "blur(10px)", autoAlpha: 0 },
      {
        scale: 1,
        filter: "blur(0px)",
        autoAlpha: 1,
        delay: 1.2,
        ease: "elastic.out(1,0.5)",
        duration: 1.6,
      }
    );

    ScrollTrigger.create({
      trigger: section1,
      start: "top top",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        const progress = Math.round(self.progress * (frames.length - 1));
        const idx = Math.min(frames.length - 1, Math.max(0, progress));
        if (idx !== lastFrameRef.current && images[idx]?.complete) {
          drawImageContain(ctx, images[idx], canvas.width, canvas.height);
          lastFrameRef.current = idx;
        }
      },
    });

    const section2Center = section2.offsetTop;

    ScrollTrigger.create({
      trigger: section1,
      start: "top top",
      end: () => section2Center,
      pin: canvas,
      pinSpacing: false,
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        pointerEvents: "none",
        alignItems: "center",
        height: "100vh",
        paddingRight: "50px",
        zIndex: 999,
      }}
    >
      <canvas ref={canvasRef} width={350} height={500} style={{}} />
    </div>
  );
};
