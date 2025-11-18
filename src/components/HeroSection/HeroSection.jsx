import React from "react";
import styles from "./HeroSection.module.css";

import heroImage from "../../assets/images/home/bg-desktop.jpeg";
function HeroSection() {
  return (
    <header className={styles.heroSection} role="banner">
      <img
        src={heroImage}
        alt="Cai pur-sânge în ceață la răsărit, E Vita Stud, Transilvania"
        className={styles.heroImage}
        // Atributul loading="eager" sugereaza browserului sa incarce imaginea imediat, deoarece este critica
        loading="eager"
      />

      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>E VITA STUD</h1>

        <p className={styles.heroSlogan}>
          Timeless elegance. Born for excellence.
        </p>

        {/* CTA: O acțiune clară, auriu regal */}
        <a href="/legacy" className={styles.heroCTA}>
          Explorează Moștenirea
        </a>
      </div>
    </header>
  );
}

export default HeroSection;
