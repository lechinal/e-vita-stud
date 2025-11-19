import React from "react";
import styles from "./IntroSection.module.css";

function IntroSection() {
  // Textul preluat din documentul de branding (paginile 4 și 5)
  const introText = `
    În 2021, un vis a prins rădăcini în Căpuşu Mare. 
    Astăzi, E VITA STUD este dovada că pasiunea poate bate orice prejudecată. 
    Pe un domeniu regal de 8 hectare, la umbra pădurilor seculare din Căpuşu Mare, 
    E Vita Stud îmbină forţa naturii cu precizia omului pentru a cultiva excelenţa 
    în reproducție, performanță și eleganță ecvestră.
  `;

  const quote = "Performanța nu e doar un rezultat. E o ceremonie.";

  return (
    // Folosim o etichetă <section> standard
    <section className={styles.introSection}>
      {/* Containerul care aplică Lățimea Maximă Reținută (Max-Width: 1440px) */}
      <div className={styles.containerConstrained}>
        <div className={styles.introMissionBox}>
          {/* Subtitlul/Misiunea: Finețe și Lora */}
          <span className={styles.introMission}>O Moștenire. Nu o Modă.</span>

          {/* Titlu Secțiune (H2): Impact și Playfair Display */}
          <h2 className={styles.introTitle}>
            Autoritatea Tăcută a Transilvaniei.
          </h2>
        </div>

        {/* Text de Corp (Lora - lizibilitate maximă) */}
        <p className={styles.introBody}>{introText}</p>

        {/* Citatul Semnat (Cursive/Signature Font) */}
        <p className={styles.introQuote}>{quote}</p>
      </div>
    </section>
  );
}

export default IntroSection;
