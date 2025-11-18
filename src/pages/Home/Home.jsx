import React from "react";
import styles from "./Home.module.css";

import HeroSection from "../../components/HeroSection/HeroSection";
import IntroSection from "../../components/IntroSection/IntroSection";
import BrandArchitectureSection from "../../components/BrandArchitectureSection/BrandArchitectureSection";
import FullWidthCTASection from "../../components/FullWidthCTASection/FullWidthCTASection";

function Home() {
  return (
    <main className={styles.home}>
      <HeroSection />
      <IntroSection />
      <BrandArchitectureSection />
      <FullWidthCTASection />
    </main>
  );
}

export default Home;
