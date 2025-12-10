import React from "react";
import { motion } from "framer-motion";
import { SectionShell } from "./SectionShell";

export const TreeOfLife: React.FC = () => {
  return (
    <SectionShell
      id="tree-of-life"
      label="Chapter II"
      // title="The Tree of Life"
      subtitle="For thousands of years, it grew only here — in the harsh winds of the Atlas. A tree that survives fire, time, and drought."
    >
      <motion.div
        className="relative mt-10 h-80 w-full md:mt-0 md:h-96 md:w-1/2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* 3D-esque rotating orb with trunk */}
        <motion.div
          className="absolute inset-6 rounded-[3rem] bg-[radial-gradient(circle_at_center,_rgba(255,215,128,0.3),_transparent_60%),conic-gradient(from_220deg,_#020202,_#020202,_#111111,_#43302b,_#020202)] shadow-[0_0_120px_rgba(255,215,128,0.25)]"
          initial={{ rotateY: -18 }}
          whileInView={{ rotateY: 18 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            duration: 3.2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        {/* Bark crack lines with pulsing gold */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-32 w-px bg-gradient-to-b from-amber-500/80 via-amber-200/20 to-transparent"
            style={{
              left: `${35 + i * 7}%`,
              top: `${25 + (i % 2) * 6}%`,
            }}
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              delay: 0.3 + i * 0.15,
              duration: 1.1,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Pulsing core light */}
        <motion.div
          className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300/20 blur-2xl"
          animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
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
