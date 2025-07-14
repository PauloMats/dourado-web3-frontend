import React from "react";
import HeroSection from "../components/hero";
import SistemasParaWeb3 from "../components/sistemasWeb3/sistemasWeb3";
import TecnologiaDouradoSection from "../components/TecnologiasDourado/tecnologiasDourado";
import FeaturesSection from "../components/FeaturesSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SistemasParaWeb3 />
      <TecnologiaDouradoSection />
      <FeaturesSection />
    </>
  );
}
