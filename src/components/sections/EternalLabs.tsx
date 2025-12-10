import React from "react";
// import { motion } from "framer-motion";
import { SectionShell } from "./SectionShell";

export const EternalLabs: React.FC = () => {
  return (
    <SectionShell
      id="eternal-labs"
      label="Chapter IV"
      // title="Eternal Labs Enters"
      subtitle="We mastered the extraction ritual with cellular-level purification."
    >
      {/* <motion.div
        className="relative mt-10 h-80 w-full rounded-[2.5rem] bg-gradient-to-br from-neutral-100 via-white to-neutral-200/80 p-[1px] md:mt-0 md:h-96 md:w-1/2"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <div className="relative h-full w-full rounded-[2.4rem] bg-gradient-to-br from-white to-neutral-50 shadow-[0_20px_70px_rgba(0,0,0,0.35)] overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-700" />

          <div className="flex h-full flex-col justify-between p-6 md:p-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-neutral-500">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Cellular Purification Protocol</span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-[11px] md:text-xs">
                {[
                  "Filtration",
                  "Cold-Press",
                  "Micro-Polish",
                  "Spectral Scan",
                ].map((step, idx) => (
                  <motion.div
                    key={step}
                    className="rounded-xl border border-neutral-200/80 bg-neutral-50/90 px-3 py-2 shadow-sm"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      delay: 0.3 + idx * 0.1,
                      duration: 0.7,
                      ease: "easeOut",
                    }}
                  >
                    <p className="text-[10px] font-semibold text-neutral-500">
                      STEP {idx + 1}
                    </p>
                    <p className="text-neutral-900">{step}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              className="self-end rounded-2xl bg-neutral-900/95 px-4 py-3 text-right text-xs text-neutral-100 shadow-[0_0_50px_rgba(0,0,0,0.9)]"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <p className="text-[10px] uppercase tracking-[0.25em] text-amber-300/80">
                Purity Index
              </p>
              <p className="mt-1 text-lg font-semibold text-amber-100">99.8%</p>
              <p className="text-[10px] text-neutral-400">
                Single-origin argan oil, refined at a cellular level.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div> */}
    </SectionShell>
  );
};


// import { motion } from "framer-motion";
// import EternalLabsImage from "../../assets/landing-page/1.jpeg";

// export default function EternalLabs() {
//   return (
//     <section className="h-screen snap-start flex flex-col items-center justify-center bg-white text-black px-6">
//       <motion.img
//         src={EternalLabsImage}
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.8 }}
//         className="w-96 rounded-xl shadow-xl"
//       />

//       <motion.p
//         className="text-2xl max-w-3xl text-center mt-6"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         “We mastered the extraction ritual with cellular-level purification.”
//       </motion.p>
//     </section>
//   );
// }
