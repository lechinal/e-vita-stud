import React from "react";
import { Link } from "react-router-dom";
import styles from "./FullWidthCTASection.module.css";

function FullWidthCTASection() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaOverlay}></div>
      {/* Conținutul (centrat) */}
      <div className={styles.ctaContent}>
        {/* Titlul principal al CTA (H2 pentru SEO si ierarhie) */}
        <h2 className={styles.ctaTitle}>Vrem să te invităm.</h2>

        {/* Mesajul emoțional (Cursive/Signature Font) */}
        <p className={styles.ctaMessage}>
          Vino să simți tăcerea care precede un galop.
        </p>

        {/* Butonul CTA */}
        <Link to="/contact" className={styles.ctaButton}>
          Programează o Vizită
        </Link>
      </div>
    </section>
  );
}

export default FullWidthCTASection;
