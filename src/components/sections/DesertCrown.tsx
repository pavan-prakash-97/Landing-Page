import React from "react";
import { motion } from "framer-motion";
import { SectionShell } from "./SectionShell";

const grains = Array.from({ length: 18 }).map(() => ({
  left: 10 + Math.random() * 80,
  top: 20 + Math.random() * 40,
}));

export const DesertCrown: React.FC = () => {
  // Generate grain positions ONCE
  // const grains = useMemo(() => {
  //   return [...Array(18)].map(() => ({
  //     left: 10 + Math.random() * 80,
  //     top: 20 + Math.random() * 40,
  //   }));
  // }, []);

  return (
    <SectionShell
      id="desert-crown"
      label="Chapter I"
      // title="The Desert Crown"
      subtitle="In the Kingdom of Sun, one substance was guarded more fiercely than diamonds — Liquid Gold."
    >
      {/* Right visual: shimmering grain → dunes */}
      <motion.div
        className="relative mt-10 h-72 w-full md:mt-0 md:h-80 md:w-1/2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Gold grain streak */}
        <motion.div
          className="absolute left-0 top-10 h-1 w-40 rounded-full bg-gradient-to-r from-amber-200 via-amber-400 to-amber-700 blur-[2px]"
          initial={{ x: -120, opacity: 0 }}
          whileInView={{ x: 60, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />

        {/* Dunes silhouette */}
        <motion.div
          className="absolute inset-x-0 bottom-0 h-52 rounded-[3rem] bg-[radial-gradient(circle_at_top,_rgba(255,215,128,0.7),_transparent_60%),linear-gradient(to_top,_#020202_5%,_#111111_40%,_transparent_100%)] shadow-[0_0_90px_rgba(255,215,128,0.5)]"
          initial={{ y: 80, scale: 0.95, opacity: 0 }}
          whileInView={{ y: 0, scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        />

        {/* Tiny sparkling grains */}
        {grains.map((grain, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-amber-300/90"
            style={{
              left: `${grain.left}%`,
              top: `${grain.top}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 0.9, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              delay: 0.4 + i * 0.04,
              duration: 0.8,
              ease: "easeOut",
            }}
          />
        ))}
      </motion.div>
    </SectionShell>
  );
};

// import { motion } from "framer-motion";
// import DesertImage from "../../assets/landing-page/02.png";

// // Generate particles ONCE at module load (never during render)
// const generateParticles = () =>
//   Array.from({ length: 40 }).map(() => {
//     const side = Math.floor(Math.random() * 4); // 0 = left, 1 = top, 2 = right, 3 = bottom

//     let startX = 0;
//     let startY = 0;

//     if (side === 0) startX = -300;                   // left
//     if (side === 2) startX = 300;                    // right
//     if (side === 1) startY = -300;                   // top
//     if (side === 3) startY = 300;                    // bottom

//     // Random offset so spawn points feel natural
//     if (side === 0 || side === 2) startY = -200 + Math.random() * 400;
//     if (side === 1 || side === 3) startX = -200 + Math.random() * 400;

//     return {
//       startX,
//       startY,
//       midX: (Math.random() * 100) - 50,               // center swirl offset
//       midY: (Math.random() * 100) - 50,
//       finalX: (Math.random() > 0.5 ? 1 : -1) * (300 + Math.random() * 200),
//       finalY: (Math.random() > 0.5 ? 1 : -1) * (300 + Math.random() * 200),
//       rotate: Math.random() * 360,
//       duration: 2.2 + Math.random() * 1.8,
//       delay: Math.random() * 1,
//       scale: 0.6 + Math.random() * 0.6,
//     };
//   });

// // precomputed once when file loads
// const PARTICLES = generateParticles();

// export default function DesertCrown() {
//   return (
//     <section className="relative h-screen snap-start flex flex-col items-center justify-center text-center bg-black text-gold px-6 overflow-hidden">

//       {/* ✨ MULTI-PARTICLE SHIMMER */}
//       {PARTICLES.map((p, i) => (
//         <motion.div
//           key={i}
//           initial={{
//             opacity: 0,
//             scale: 0.3,
//             x: p.startX,
//             y: p.startY,
//             rotate: 0,
//             filter: "blur(12px)",
//           }}
//           whileInView={{
//             opacity: [0, 1, 0.8, 0],
//             x: [p.startX, p.midX, p.finalX],
//             y: [p.startY, p.midY, p.finalY],
//             rotate: [0, p.rotate, p.rotate * 2],
//             scale: [0.3, p.scale, 0.8],
//             filter: ["blur(12px)", "blur(4px)", "blur(12px)"],
//           }}
//           transition={{
//             duration: p.duration,
//             ease: "easeInOut",
//             repeat: Infinity,
//             repeatDelay: p.delay,
//           }}
//           className="pointer-events-none absolute w-3 h-3 rounded-full"
//           style={{
//             background:
//               "radial-gradient(circle, rgba(255,220,120,1) 0%, rgba(255,185,55,0.7) 40%, rgba(255,170,0,0) 80%)",
//             boxShadow: "0 0 16px 6px rgba(255,215,140,0.7)",
//           }}
//         />
//       ))}

//       {/* 🌅 Dunes image */}
//       <motion.img
//         src={DesertImage}
//         initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
//         whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
//         transition={{ duration: 2.2, ease: "easeOut" }}
//         className="w-72 relative z-10 mt-10"
//       />

//       {/* 📝 Heading */}
//       <motion.h1
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.8 }}
//         className="text-3xl md:text-5xl font-light max-w-3xl leading-relaxed mt-6"
//       >
//         “In the Kingdom of Sun, one substance was guarded more fiercely than diamonds —
//         <span className="text-yellow-500"> Liquid Gold.</span>”
//       </motion.h1>
//     </section>
//   );
// }
