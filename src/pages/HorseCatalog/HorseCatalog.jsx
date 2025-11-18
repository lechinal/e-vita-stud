import React from "react";
import { Link } from "react-router-dom";
import styles from "./HorseCatalog.module.css";

// 🎯 Datele simulate ale cailor (Presupunem că acest fișier există la calea: ../../data/horses)
// Odată ce ai baza de date, vei înlocui acest import cu fetch-ul de date real.
import { HORSES_FOR_SALE } from "../../assets/data/horses";

function HorseCatalog() {
  // 🎯 CLASA GLOBALĂ: Folosită pentru a constrânge lățimea conținutului central
  const containerConstrained = "containerConstrained";

  return (
    <div className={styles.catalogPage}>
      {/* 1. HERO/INTRO SECTION */}
      <section className={styles.heroSection}>
        {/* 🎯 FOLOSIM CLASA GLOBALĂ PENTRU CONSTRÂNGEREA LĂȚIMII */}
        <div className={styles[containerConstrained]}>
          <span className={styles.sectionLabel}>Cai Disponibili</span>
          <h1 className={styles.pageTitle}>Catalogul E Vita Stud</h1>
          <p className={styles.leadText}>
            O Investiție în Noblețe. Descoperiți exemplarele noastre Pur-Sânge
            Arab disponibile pentru vânzare, selectate pentru excelență genetică
            și performanță de elită.
          </p>
        </div>
      </section>

      {/* 2. CATALOG GRID */}
      <section className={styles.catalogSection}>
        {/* 🎯 FOLOSIM CLASA GLOBALĂ */}
        <div className={styles[containerConstrained]}>
          <div className={styles.horsesGrid}>
            {HORSES_FOR_SALE.map((horse) => (
              // CARDUL INDIVIDUAL AL CALULUI
              <Link
                key={horse.id}
                to={`/cai-de-vanzare/${horse.id}`}
                className={styles.horseCard}
              >
                <div className={styles.imageWrapper}>
                  <img
                    src={horse.image}
                    alt={`Portret ${horse.name}`}
                    className={styles.horseImage}
                  />
                </div>

                <div className={styles.infoBlock}>
                  <h2 className={styles.horseName}>{horse.name}</h2>
                  <p className={styles.horseBreed}>
                    {horse.breed} | {horse.pedigree}
                  </p>

                  <div className={styles.detailsList}>
                    <span>
                      Vârstă: <strong>{horse.age} ani</strong>
                    </span>
                    <span>
                      Sex: <strong>{horse.gender}</strong>
                    </span>
                  </div>

                  <div className={styles.priceTag}>{horse.priceCategory}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CTA FOOTER */}
      <section className={styles.ctaSection}>
        {/* 🎯 FOLOSIM CLASA GLOBALĂ */}
        <div className={styles[containerConstrained]}>
          <p className={styles.ctaText}>
            Pentru detalii complete despre pedigree, vizionări private sau
            întrebări legate de preț, vă rugăm să ne contactați direct.
          </p>
          <Link to="/contact" className={styles.ctaButton}>
            Contactează un Specialist
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HorseCatalog;
