// src/components/Footer/Footer.jsx

import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import SocialIcons from "../SocialIcons/SocialIcons";

function Footer() {
  const footerNav = [
    { name: "Acasa", path: "/" },
    { name: "Despre Noi", path: "/about-us" },
    { name: "E Vita Stables", path: "/stables" },
    { name: "E Vita Legacy", path: "/legacy" },
    { name: "Experiența", path: "/experience" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.containerConstrained}>
        {/* Secțiunea Principală de Footer (Grid Layout) */}
        <div className={styles.footerGrid}>
          {/* Coloana 1: Brand & Misiune */}
          <div className={styles.colBrand}>
            <Link to="/" className={styles.footerLogo}>
              E VITA STUD
            </Link>
            <p className={styles.missionText}>
              Sângele celor mai buni cai arabi din Europa, cultivat cu pasiune
              în Transilvania.
            </p>
            <div className={styles.socialWrapper}>
              <SocialIcons color="var(--color-primary-bg)" />
            </div>
          </div>

          {/* Coloana 2: Navigare Rapidă */}
          <div className={styles.colNav}>
            <h4 className={styles.colTitle}>Navigare Rapidă</h4>
            <ul className={styles.navList}>
              {footerNav.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className={styles.navLink}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coloana 3: Contact */}
          <div className={styles.colContact}>
            <h4 className={styles.colTitle}>Contact</h4>
            <p className={styles.contactItem}>**Email:** office@evitastud.ro</p>
            <p className={styles.contactItem}>**Telefon:** +40 7xy zzz zzz</p>
            <p className={styles.contactItem}>
              **Adresă:** Căpuşu Mare, Județul Cluj, România
            </p>
          </div>
        </div>{" "}
        {/* End footerGrid */}
        {/* Secțiunea de Copyright & Legal */}
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} E VITA STUD. Toate drepturile
            rezervate.
          </p>
          <div className={styles.legalLinks}>
            <Link to="/privacy" className={styles.legalLink}>
              Politica de Confidențialitate
            </Link>
            <Link to="/terms" className={styles.legalLink}>
              Termeni & Condiții
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
