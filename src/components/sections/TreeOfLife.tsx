import React from "react";
import { SectionShell } from "./SectionShell";
import BlurText from "../animations/BlurText";

export const TreeOfLife: React.FC = () => {
  return (
    <SectionShell id="tree-of-life" background="bg-transparent">
      <div className="relative h-80 w-2/3 md:h-96 flex items-center">
        <BlurText
          text="In the Kingdom of Sun, one substance was guarded more fiercely than diamonds — Liquid Gold."
          delay={50}
          stepDuration={0.35}
          animateBy="words"
          direction="top"
          className="text-balance text-3xl font-semibold text-amber-50 md:text-6xl"
        />
      </div>
    </SectionShell>
  );
};

// import TreeLifeImage from "../../assets/landing-page/02.png";
// import { motion } from "framer-motion";

// export default function TreeOfLife() {
//   return (
//     <section className="relative h-screen w-full snap-start flex flex-col items-center justify-center bg-black text-white px-6 overflow-hidden">

//       {/* ✨ GOLD PULSE GLOW BEHIND TREE */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.5 }}
//         whileInView={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }}
//         transition={{ duration: 4, repeat: Infinity }}
//         className="absolute w-[560px] h-[560px] rounded-full blur-3xl"
//         style={{
//           background:
//             "radial-gradient(circle, rgba(255,210,90,0.6) 0%, rgba(255,180,60,0.2) 40%, transparent 70%)",
//         }}
//       />

//       {/* 🌳 ROTATING 3D TREE WITH MICRO-DETAILS */}
//       <motion.div
//         initial={{ opacity: 0, rotateY: -20 }}
//         whileInView={{ opacity: 1, rotateY: 20 }}
//         transition={{ duration: 2, ease: "easeInOut" }}
//         style={{
//           transformStyle: "preserve-3d",
//         }}
//         className="relative"
//       >
//         {/* Tree Image */}
//         <motion.img
//           src={TreeLifeImage}
//           className="w-[350px] h-auto object-contain relative z-10"
//           initial={{ scale: 0.9 }}
//           whileInView={{ scale: 1 }}
//           transition={{ duration: 1.6, ease: "easeOut" }}
//         />

//         {/* 🌿 MICRO TEXTURE OVERLAY (bark cracking effect) */}
//         <motion.div
//           className="absolute inset-0 w-full h-full rounded-xl pointer-events-none mix-blend-overlay opacity-40"
//           style={{
//             background:
//               "url('https://www.transparenttextures.com/patterns/asfalt-light.png')",
//           }}
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 0.25 }}
//           transition={{ duration: 2 }}
//         />

//         {/* 🔥 INTERNAL GOLD LIGHT PULSE */}
//         <motion.div
//           className="absolute inset-0 rounded-xl pointer-events-none"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: [0.2, 0.5, 0.2] }}
//           transition={{ duration: 3, repeat: Infinity }}
//           style={{
//             background:
//               "radial-gradient(circle at center, rgba(255,190,80,0.4), transparent 70%)",
//             mixBlendMode: "screen",
//           }}
//         />
//       </motion.div>

//       {/* 📝 TEXT MOTION */}
//       <motion.p
//         className="text-xl md:text-3xl text-center max-w-3xl leading-relaxed text-white/90 mt-10"
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.8, ease: "easeOut" }}
//       >
//         “For thousands of years, it grew only here — in the harsh winds of the
//         Atlas. A tree that survives fire, time, and drought.”
//       </motion.p>
//     </section>
//   );
// }
