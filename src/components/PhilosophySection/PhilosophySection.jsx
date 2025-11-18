import React from "react";
import styles from "./PhilosophySection.module.css";

const PhilosophySection = () => {
  return (
    <section className={styles.philosophy}>
      <div className={styles.imageBlock}>
        <img
          src="https://picsum.photos/800/600?random=22"
          alt="Equestrian excellence"
        />
      </div>
      <div className={styles.textBlock}>
        <h2>Forta Naturii. Precizia Omului.</h2>
        <p>
          Pe un domeniu de 8 hectare, la umbra padurilor seculare din
          Transilvania, natura si omul coopereaza intr-un ritual al
          perfectiunii. Dresajul nu este o simpla repetitie, ci o conversatie
          tacuta intre doua fiinte care se respecta reciproc.
        </p>
      </div>
    </section>
  );
};

export default PhilosophySection;
