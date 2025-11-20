// src/components/SocialIcons/SocialIcons.jsx

import React from "react";
import styles from "./SocialIcons.module.css";

import { CiFacebook } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";

// Acceptăm prop-ul 'color' (pentru a seta culoarea de bază) și 'size'
const SocialIcons = ({ color, size = 35 }) => {
  // Dacă componenta este folosită doar în Footer, putem scoate 'section' și 'h4' pentru curățenie.
  // Dar pentru a păstra flexibilitatea, le lăsăm și stilizăm.

  // Setăm culoarea de bază prin style prop
  const iconSize = 35;

  return (
    <section className={styles.socialSection}>
      <h4 className={styles.sectionTitle}>Urmărește-ne</h4>
      <ul className={styles.social}>
        <li>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook E Vita Stud"
          >
            <CiFacebook size={iconSize} />
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram E Vita Stud"
          >
            <FaInstagram size={iconSize} />
          </a>
        </li>
        <li>
          <a
            href="https://tiktom.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok E Vita Stud"
          >
            <FaTiktok size={iconSize} />
          </a>
        </li>
        <li>
          <a
            href="www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Youtube e Vita Stud"
          ></a>
          <AiOutlineYoutube size={iconSize} />
        </li>
      </ul>
    </section>
  );
};

export default SocialIcons;
