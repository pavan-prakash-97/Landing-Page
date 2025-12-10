import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import image from "../assets/landing-page/02.png";

export default function ScrollObject() {
  // Track scroll
  const { scrollY } = useScroll();

  // Smooth scroll interpolation
  const smoothScroll = useSpring(scrollY, {
    stiffness: 120,
    damping: 50,
  });

  // Vertical movement
  const y = useTransform(smoothScroll, [500, 2000], [0, 100]);

  // ⬅➡ Oscillating left-right movement
  // amplitude = 120px, frequency = 0.005 (adjustable)
  const x = useTransform(smoothScroll, (v) => {
    return Math.sin(v * 0.005) * 120; 
  });

  // Rotation
  const rotate = useTransform(smoothScroll, [0, 1000], [0, 360]);

  // Lenis smooth scrolling
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
    <motion.img
      src={image}
      alt="scroll object"
      style={{ x, y, rotate }}
      className="
        fixed 
        top-1/2 left-1/2 
        w-40 
        -translate-x-1/3 -translate-y-1/3 
        pointer-events-none 
        z-[999]
      "
    />
  );
}
