import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import image from "../assets/landing-page/02.png";

export default function ScrollObject() {
  const { scrollY } = useScroll();

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const half = screenWidth / 2;
  const leftEdge = -half;
  const rightEdge = half;

  // Smooth scroll interpolation for natural motion
  const smoothScroll = useSpring(scrollY, {
    stiffness: 120,
    damping: 40,
  });

  // ZIG-ZAG movement per section:
  //
  // SECTION 1: right → left
  // SECTION 2: left → right
  // SECTION 3: right → left
  //
  const x = useTransform(
    smoothScroll,
    [-180, 820, 1580, 2480, 3050, 4800], // scroll positions
    [rightEdge, leftEdge, rightEdge, leftEdge, rightEdge, leftEdge] // mapped x positions
  );

  // Vertical slight drift (optional)
  const y = useTransform(smoothScroll, [0, 3000], [0, 120]);

  // Rotation
  const rotate = useTransform(smoothScroll, [0, 500], [0, 360]);

  // Lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
      wheelMultiplier: 1.2,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
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
        w-60 
        -translate-y-1/2 
        pointer-events-none 
        z-[999]
      "
    />
  );
}
