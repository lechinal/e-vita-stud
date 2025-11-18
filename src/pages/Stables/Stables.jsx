import { useState } from "react";
import styles from "./Stables.module.css";
function Stables() {
  const [activeTab, setActiveTab] = useState("breeding");

  const services = {
    breeding: {
      title: "Creșterea Cailor",
      description: "Servicii complete de creștere și îngrijire a cailor",
      features: [
        "Creștere cai de rasă pur-sânge",
        "Îngrijire veterinară specializată",
        "Nutriție personalizată",
        "Spații moderne și sigure",
        "Monitorizare 24/7",
      ],
      image: "https://picsum.photos/id/158/600/400",
    },
    training: {
      title: "Dresaj și Antrenament",
      description: "Programe de dresaj pentru toate nivelurile",
      features: [
        "Dresaj pentru începători",
        "Antrenament competițional",
        "Terapie ecvestră",
        "Pregătire pentru show-uri",
        "Consultanță specializată",
      ],
      image: "https://picsum.photos/id/160/600/400",
    },
    lessons: {
      title: "Lecții de Echitație",
      description: "Cursuri pentru toate vârstele și nivelurile",
      features: [
        "Lecții pentru copii și adulți",
        "Cursuri pentru începători",
        "Perfecționare avansată",
        "Echitație terapeutică",
        "Pachete corporate",
      ],
      image: "https://picsum.photos/id/165/600/400",
    },
    boarding: {
      title: "Pensiune pentru Cai",
      description: "Spații de cazare premium pentru cai",
      features: [
        "Boxe moderne și spațioase",
        "Pășune naturală",
        "Îngrijire zilnică",
        "Program de antrenament",
        "Transport inclus",
      ],
      image: "https://picsum.photos/id/159/600/400",
    },
  };

  return (
    <div className={styles.services}>
      {/* Banner Section */}
      <section className={styles.banner}>
        <div className={styles.bannerContent}>
          <h1>Serviciile Noastre</h1>
          <p>Gamă completă de servicii pentru iubitorii de cai</p>
        </div>
      </section>

      <div className={styles.container}>
        {/* Services Navigation */}
        <nav className={styles.servicesNav}>
          {Object.keys(services).map((serviceKey) => (
            <button
              key={serviceKey}
              className={`${styles.navButton} ${
                activeTab === serviceKey ? styles.active : ""
              }`}
              onClick={() => setActiveTab(serviceKey)}
            >
              {services[serviceKey].title}
            </button>
          ))}
        </nav>

        {/* Active Service Content */}
        <section className={styles.serviceContent}>
          <div className={styles.serviceInfo}>
            <h2>{services[activeTab].title}</h2>
            <p className={styles.serviceDescription}>
              {services[activeTab].description}
            </p>

            <div className={styles.features}>
              <h3>Ce include:</h3>
              <ul>
                {services[activeTab].features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className={styles.actions}>
              <button className={styles.primaryButton}>
                Programează-te acum
              </button>
              <button className={styles.secondaryButton}>Află mai multe</button>
            </div>
          </div>

          <div className={styles.serviceImage}>
            <img
              src={services[activeTab].image}
              alt={services[activeTab].title}
            />
          </div>
        </section>

        {/* Pricing Section */}
        <section className={styles.pricing}>
          <div className={styles.pricingContent}>
            <div className={styles.sectionHeader}>
              <h2>Pachete și Prețuri</h2>
              <p>Alege pachetul care se potrivește nevoilor tale</p>
            </div>

            <div className={styles.pricingGrid}>
              <div className={styles.pricingCard}>
                <h3>Basic</h3>
                <div className={styles.price}>
                  500€<span>/lună</span>
                </div>
                <ul>
                  <li>Îngrijire de bază</li>
                  <li>Alimentație standard</li>
                  <li>Acces la pășune</li>
                  <li>Asistență veterinară</li>
                </ul>
                <button className={styles.pricingButton}>Alege</button>
              </div>

              <div className={`${styles.pricingCard} ${styles.featured}`}>
                <div className={styles.badge}>Popular</div>
                <h3>Premium</h3>
                <div className={styles.price}>
                  800€<span>/lună</span>
                </div>
                <ul>
                  <li>Toate serviciile Basic</li>
                  <li>Antrenament personalizat</li>
                  <li>Nutriție premium</li>
                  <li>Transport inclus</li>
                  <li>Asistență 24/7</li>
                </ul>
                <button className={styles.pricingButtonFeatured}>Alege</button>
              </div>

              <div className={styles.pricingCard}>
                <h3>VIP</h3>
                <div className={styles.price}>
                  1200€<span>/lună</span>
                </div>
                <ul>
                  <li>Toate serviciile Premium</li>
                  <li>Box privat luxos</li>
                  <li>Antrenor dedicat</li>
                  <li>Program competițional</li>
                  <li>Consultanță exclusivă</li>
                </ul>
                <button className={styles.pricingButton}>Alege</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Stables;
