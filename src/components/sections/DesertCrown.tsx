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
