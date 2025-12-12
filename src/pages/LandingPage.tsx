import React from "react";
import { LenisScroll } from "../components/layout/LenisScroll";
import { DesertCrown } from "../components/sections/DesertCrown";
import { TreeOfLife } from "../components/sections/TreeOfLife";
import { SacredExtraction } from "../components/sections/SacredExtraction";
import { EternalLabs } from "../components/sections/EternalLabs";
import { CoreComplexReveal } from "../components/sections/CoreComplexReveal";
import ScrollObject from "../components/ScrollObject";
import { TopNav } from "../components/sections/TopNavSection";

const LandingPage: React.FC = () => {
  return (
    <LenisScroll>
      <ScrollObject />
      <TopNav />
      <DesertCrown />
      <TreeOfLife />
      <SacredExtraction />
      <EternalLabs />
      <CoreComplexReveal />
    </LenisScroll>
  );
};

export default LandingPage;
