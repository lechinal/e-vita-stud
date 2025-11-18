import React from "react";
import styles from "./ValuePilar.module.css";
import GradientText from "../GradientText/GradientText";
function ValuePilar({ title, body }) {
  return (
    <div className={styles.pillarContainer}>
      <div className={styles.pillarContent}>
        {/* <h3 className={styles.title}>{title}</h3> */}
        <GradientText className={styles.title}>{title}</GradientText>
        <p className={styles.body}>{body}</p>
        {/* <GradientText className={styles.body}>{body}</GradientText> */}
      </div>
    </div>
  );
}

export default ValuePilar;
