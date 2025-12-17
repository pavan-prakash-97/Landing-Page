import React from "react";
import { TopNav } from "../components/sections/TopNavSection";
import { DesertCrown } from "../components/sections/DesertCrown";
import { TreeOfLife } from "../components/sections/TreeOfLife";
import { SacredExtraction } from "../components/sections/SacredExtraction";
import { EternalLabs } from "../components/sections/EternalLabs";
import { CoreComplexReveal } from "../components/sections/CoreComplexReveal";
import { ScrollObject } from "../components/ScrollObject";
import SilkEffect from "../components/animations/SilkEffect";

const LandingPage: React.FC = () => {
  return (
    <div>
      <TopNav />
      <div style={{ position: "relative" }} id="canvas-wrapper">
        <div className="absolute inset-0 -z-10">
          <SilkEffect
            speed={6}
            scale={1}
            color="#17252b"
            noiseIntensity={1}
            rotation={0}
          />
        </div>
        <ScrollObject />
        <DesertCrown />
        <TreeOfLife />
      </div>
      <SacredExtraction />
      <EternalLabs />
      <CoreComplexReveal />
    </div>
  );
};

export default LandingPage;
