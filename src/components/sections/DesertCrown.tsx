import React from "react";
import { SectionShell } from "./SectionShell";
import BlurText from "../animations/BlurText";

export const DesertCrown: React.FC = () => {
  return (
    <SectionShell id="desert-crown" background="bg-transparent">
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
