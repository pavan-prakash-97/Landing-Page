import React from "react";
import { LenisScroll } from "../components/layout/LenisScroll";
import { DesertCrown } from "../components/sections/DesertCrown";
import { TreeOfLife } from "../components/sections/TreeOfLife";
import { SacredExtraction } from "../components/sections/SacredExtraction";
import { EternalLabs } from "../components/sections/EternalLabs";
import { CoreComplexReveal } from "../components/sections/CoreComplexReveal";
import ScrollObject from "../components/ScrollObject";

const LandingPage: React.FC = () => {
  return (
    <LenisScroll>
      {/* <main className="snap-y snap-mandatory"> */}
      <div className="max-w-[1440px]">
        <ScrollObject />
      </div>
      <DesertCrown />
      <TreeOfLife />
      <SacredExtraction />
      <EternalLabs />
      <CoreComplexReveal />
      {/* </main> */}
    </LenisScroll>
  );
};

export default LandingPage;

