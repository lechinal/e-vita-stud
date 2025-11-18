import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

import logoDesktop from "../../assets/logo/logo-desktop.png";
import logoTablet from "../../assets/logo/logo-tablet.png";
import logoMobile from "../../assets/logo//logo-mobile.png";
import GradientText from "../GradientText/GradientText";

function Logo({ title }) {
  return (
    <div className={styles.logoContainer}>
      <Link to="/" className={styles.logoLink}>
        <picture className={styles.logo}>
          <source media="(max-width: 500px)" srcSet={logoMobile} />
          {/* mobile */}
          <source media="(max-width: 700px)" srcSet={logoTablet} />{" "}
          {/* tableta */}
          <img
            src={logoDesktop}
            alt="Logo eVitaStud"
            className={styles.logoImg}
          />
        </picture>
      </Link>
      <div className={styles.mottoWrapper}>
        {/* Mottoul care apare doar pe desktop */}
        <GradientText>{title}</GradientText>
      </div>
    </div>
  );
}

export default Logo;
