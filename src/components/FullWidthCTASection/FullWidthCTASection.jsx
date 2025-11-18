import React from "react";
import styles from "./FullWidthCTASection.module.css";

import img from "../../assets/images/home/unsplash2.jpg";
function FullWidthCTASection() {
  return (
    // Folosim o etichetă <section> full-width, imersivă
    <section className={styles.ctaSection}>
      {/* Imaginea de fundal imersivă */}
      <img
        // src="https://picsum.photos/id/110/1920/1080"
        src={img}
        alt="Equestrian scene, horses running-cemrecan-yurtman-unsplash"
        className={styles.ctaImage}
        loading="lazy"
      />

      {/* Conținutul (centrat) */}
      <div className={styles.ctaContent}>
        {/* Titlul principal al CTA (H2 pentru SEO si ierarhie) */}
        <h2 className={styles.ctaTitle}>Vrem să te invităm.</h2>

        {/* Mesajul emoțional (Cursive/Signature Font) */}
        <p className={styles.ctaMessage}>
          Vino să simți tăcerea care precede un galop.
        </p>

        {/* Butonul CTA */}
        <a href="/contact" className={styles.ctaButton}>
          Programează o Vizită
        </a>
      </div>
    </section>
  );
}

export default FullWidthCTASection;
