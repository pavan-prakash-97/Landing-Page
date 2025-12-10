import React from "react";
import { motion } from "framer-motion";
import { SectionShell } from "./SectionShell";

export const CoreComplexReveal: React.FC = () => {
  return (
    <SectionShell
      id="core-complex"
      label="Chapter V"
      title="The Eternal Argan Core Complex™"
      subtitle="Liquid Gold engineered for deep cellular renewal."
    >
      <motion.div
        className="relative mt-10 flex h-72 w-full items-center justify-center md:mt-0 md:h-80 md:w-1/2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Sphere core */}
        <motion.div
          className="relative h-52 w-52 rounded-full bg-[radial-gradient(circle_at_top,_rgba(255,215,128,0.8),_rgba(32,17,0,0.9)_60%,_#020202)] shadow-[0_0_120px_rgba(255,215,128,0.6)]"
          initial={{ scale: 0.7 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          {/* Filaments swirling */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-3 rounded-full border border-amber-200/20"
              style={{
                rotate: i * 22,
              }}
              animate={{
                rotate: [i * 22, i * 22 + 360],
              }}
              transition={{
                duration: 18 - i * 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}

          {/* Inner nucleus */}
          <motion.div
            className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-200/90 shadow-[0_0_45px_rgba(255,215,128,0.9)]"
            animate={{ scale: [1, 1.15, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </SectionShell>
  );
};


// import { motion } from "framer-motion";
// import CoreComplexRevealImage from "../../assets/landing-page/1.jpeg";

// export default function CoreComplexReveal() {
//   return (
//     <section className="h-screen snap-start bg-black flex flex-col items-center justify-center px-6 text-gold text-center">
//       <motion.img
//         src={CoreComplexRevealImage}
//         initial={{ opacity: 0, scale: 0.5 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 2 }}
//         className="w-72"
//       />

//       <motion.p
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 2 }}
//         className="text-2xl max-w-2xl mt-6"
//       >
//         “Introducing the Eternal Argan Core Complex™ — Liquid Gold engineered for deep cellular renewal.”
//       </motion.p>
//     </section>
//   );
// }
