import React from "react";
import { Link } from "react-router-dom";
import styles from "./BrandArchitectureSection.module.css";
import BrandTabs from "../BrandTabs/BrandTabs.jsx";

function BrandArchitectureSection() {
  const brandTabsContent = [
    {
      title: "E VITA STABLES",
      url: "/stables",
      description:
        "Arhitectura Performanței. Descoperiți domeniul de 8 hectare și serviciile de Pensiune Cai care asigură excelența în îngrijirea și confortul zilnic.",
      cta: "Explorează Grajdurile și Îngrijirea",
    },
    {
      title: "E VITA LEGACY",
      url: "/legacy",
      description:
        "Moștenirea pur-sângelui. Reproducere de elită, monta naturală și artificială, și lista exemplarelor disponibile pentru vânzare.",
      cta: "Descoperă Linia de Sânge",
    },
    {
      title: "E VITA EXPERIENCE",
      url: "/experience",
      description:
        "Alege-ți calea: de la antrenamente de performanță la drumeții contemplative și terapie asistată. Descoperă legătura profundă dincolo de grajd.",
      cta: "Programează-ți Experiența",
    },
  ];

  return (
    <section className={styles.architectureSection}>
      <div className={styles.containerConstrained}>
        <h2 className={styles.architectureTitle}>Universul E VITA STUD</h2>

        <BrandTabs items={brandTabsContent} />

        <div className={styles.generalCtaWrapper}>
          <Link to="/about-us" className={styles.generalCta}>
            Citeste intreaga Poveste
          </Link>
        </div>
      </div>
    </section>
  );
}

export default BrandArchitectureSection;
