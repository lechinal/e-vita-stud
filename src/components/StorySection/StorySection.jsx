import React from "react";
import styles from "./StorySection.module.css";

const StorySection = () => {
  return (
    <section className={styles.story}>
      <div className={styles.textBlock}>
        <h2>O Mostenire Nascuta din Viziune</h2>
        <p>
          In 2021, un vis a prins radacini in Capusu Mare. Dintr-o pasiune
          pentru cai pur-sange si traditie nobila, a luat nastere E VITA STUD –
          un sanctuar al gratiei si al excelentei. Aici, fiecare pas, fiecare
          galop si fiecare privire poarta o promisiune: eleganta nu se cumpara,
          se cultiva.
        </p>
      </div>
      <div className={styles.imageBlock}>
        <img
          src="https://picsum.photos/800/600?random=11"
          alt="E Vita Stud estate"
        />
      </div>
    </section>
  );
};

export default StorySection;
