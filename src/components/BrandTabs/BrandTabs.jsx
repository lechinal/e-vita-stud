import React, { useState } from "react";
import styles from "../BrandTabs/BrandTabs.module.css";

// Datele vin din componenta parinte (BrandArchitectureSection)
// { title, url, description, cta }

const BrandTabs = ({ items }) => {
  // Setam starea initiala pe primul element (E VITA STABLES)
  const [activeTab, setActiveTab] = useState(items[0]);

  // Functie pentru schimbarea tab-ului
  const handleTabClick = (item) => {
    setActiveTab(item);
  };

  return (
    <div className={styles.tabsWrapper}>
      {/* 1. Meniul de Navigare al Tab-urilor */}
      <nav className={styles.tabsNav} role="tablist">
        {items.map((item) => (
          <button
            key={item.title}
            role="tab"
            aria-selected={activeTab.title === item.title}
            onClick={() => handleTabClick(item)}
            className={`${styles.tabButton} ${
              activeTab.title === item.title ? styles.activeTab : ""
            }`}
          >
            {item.title}
          </button>
        ))}
      </nav>

      {/* 2. Continutul Tab-ului Activ */}
      <div
        className={styles.tabContent}
        role="tabpanel"
        aria-labelledby={`tab-${activeTab.title
          .toLowerCase()
          .replace(/\s/g, "-")}`}
      >
        {/* Titlul Secundar in continut */}
        <h3 className={styles.contentTitle}>{activeTab.title}</h3>

        {/* Descrierea (textul de corp) */}
        <p className={styles.contentDescription}>{activeTab.description}</p>

        {/* CTA Specific Tab-ului */}
        <a href={activeTab.url} className={styles.contentCTA}>
          {activeTab.cta}
        </a>
      </div>
    </div>
  );
};

export default BrandTabs;
