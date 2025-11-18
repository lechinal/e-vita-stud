// src/components/SocialIcons/SocialIcons.jsx

import React from "react";
import styles from "./SocialIcons.module.css";

import { CiFacebook } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

// Acceptăm prop-ul 'color' (pentru a seta culoarea de bază) și 'size'
const SocialIcons = ({ color, size = 35 }) => {
  // Dacă componenta este folosită doar în Footer, putem scoate 'section' și 'h4' pentru curățenie.
  // Dar pentru a păstra flexibilitatea, le lăsăm și stilizăm.

  // Setăm culoarea de bază prin style prop
  const iconSize = 35;

  return (
    <section className={styles.section}>
      <h4 className={styles.sectionTitle}>Urmărește-ne</h4>
      <ul className={styles.social}>
        <li>
          <a href="https://facebook.com" aria-label="Facebook">
            <CiFacebook size={iconSize} />
          </a>
        </li>
        <li>
          <a href="https://instagram.com" aria-label="Instagram">
            <FaInstagram size={iconSize} />
          </a>
        </li>
        <li>
          <a href="https://tiktom.com" aria-label="TikTok">
            <FaTiktok size={iconSize} />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default SocialIcons;
