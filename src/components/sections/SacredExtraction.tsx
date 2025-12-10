import React from "react";
import { motion } from "framer-motion";
import { SectionShell } from "./SectionShell";

export const SacredExtraction: React.FC = () => {
  return (
    <SectionShell
      id="sacred-extraction"
      label="Chapter III"
      // title="The Sacred Extraction"
      subtitle="Only 1% of the fruit becomes oil. Only a handful become supreme."
    >
      <motion.div
        className="relative mt-10 flex h-72 w-full items-center justify-center md:mt-0 md:h-80 md:w-1/2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Dark obsidian basin */}
        <div className="relative h-52 w-52 rounded-full bg-[radial-gradient(circle_at_top,_#181818,_#020202_70%)] shadow-[0_30px_90px_rgba(0,0,0,0.8)]">
          {/* Oil surface */}
          <div className="absolute inset-4 rounded-full border border-amber-200/10 bg-[radial-gradient(circle_at_top,_rgba(255,215,128,0.4),_transparent_55%),radial-gradient(circle_at_bottom,_#000,_#020202)]" />
        </div>

        {/* Falling droplets */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-6 w-3 rounded-full bg-gradient-to-b from-amber-200 via-amber-400 to-amber-700"
            style={{
              top: "10%",
              left: `${48 + i * 2}%`,
            }}
            initial={{ y: -40, opacity: 0 }}
            whileInView={{ y: 120, opacity: [0, 1, 0] }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{
              delay: 0.3 + i * 0.35,
              duration: 1.6,
              repeat: Infinity,
              repeatDelay: 1.2,
              ease: "easeIn",
            }}
          />
        ))}
      </motion.div>
    </SectionShell>
  );
};


// import { motion } from "framer-motion";
// import SacredExtractionImage from "../../assets/landing-page/3.jpeg";

// export default function SacredExtraction() {
//   return (
//     <section className="h-screen snap-start bg-black flex flex-col items-center justify-center px-6 text-gold text-center">
//       <motion.img
//         src={SacredExtractionImage}
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.8 }}
//         className="w-64"
//       />

//       <motion.p
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 2 }}
//         className="text-2xl max-w-2xl mt-6"
//       >
//         “Only 1% of the fruit becomes oil.  
//         Only a handful become supreme.”
//       </motion.p>
//     </section>
//   );
// }
