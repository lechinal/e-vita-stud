import React from "react";
import styles from "./HeroSection.module.css";

// import heroImage fm "../../assets/images/home/bg-desktop.jpeg";
function HeroSection() {
  return (
    <header className={styles.heroSection} role="banner">
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
