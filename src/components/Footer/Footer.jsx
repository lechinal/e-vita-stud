// src/components/Footer/Footer.jsx

import React from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./Footer.module.css";
import SocialIcons from "../SocialIcons/SocialIcons";

import LogoImg from "../../assets/images/footer/logoFooter-200x161.png";
import LogoPng from "../../assets/logo/logo-desktop.png";

function Footer() {
  const footerNav = [
    { name: "Acasa", path: "/" },
    { name: "Despre Noi", path: "/about-us" },
    { name: "E Vita Legacy", path: "/legacy" },
    { name: "E Vita Stables", path: "/stables" },
    { name: "Experiența", path: "/experience" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.containerConstrained}>
        <div className={styles.footerGrid}>
          <div className={styles.colBrand}>
            <Link to="/" className={styles.logoLink}>
              <img
                src={LogoPng}
                alt="E Vita Stud Logo"
                className={styles.footerLogoPng}
              />
            </Link>
            <p className={styles.missionText}>
              Sângele celor mai buni cai arabi din Europa, cultivat cu pasiune
              în Transilvania.
            </p>
            <div className={styles.socialWrapper}>
              <SocialIcons color="var(--color-primary-bg)" />
            </div>
          </div>

          <div className={styles.colNav}>
            <h4 className={styles.colTitle}>Navigare Rapidă</h4>
            <ul className={styles.navList}>
              {footerNav.map((item) => (
                <li key={item.path}>
                  <NavLink to={item.path} className={styles.navLink}>
                    {item.name}
                  </NavLink>
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
