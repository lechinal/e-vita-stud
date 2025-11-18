import { useState } from "react";
import styles from "./Experience.module.css";

function Experience() {
  const [activeFilter, setActiveFilter] = useState("all");

  const events = [
    {
      id: 1,
      title: "Competiția Națională de Sărituri",
      date: "15 Martie 2024",
      location: "București",
      type: "competition",
      image: "https://picsum.photos/id/165/400/250",
      description:
        "Competiție națională de sărituri peste obstacole pentru toate categoriile de vârstă.",
      status: "upcoming",
    },
    {
      id: 2,
      title: "Workshop Dresaj Cai Tineri",
      date: "22 Martie 2024",
      location: "eVitaStud",
      type: "workshop",
      image: "https://picsum.photos/id/159/400/250",
      description:
        "Workshop practic de dresaj pentru caii tineri, condus de antrenori cu experiență.",
      status: "upcoming",
    },
    {
      id: 3,
      title: "Expoziția de Toamnă",
      date: "5 Octombrie 2023",
      location: "Cluj-Napoca",
      type: "exhibition",
      image: "https://picsum.photos/id/158/400/250",
      description:
        "Expoziție anuală unde prezentăm cei mai frumoși cai din fermă.",
      status: "past",
    },
    {
      id: 4,
      title: "Campionatul Regional",
      date: "12 Noiembrie 2023",
      location: "Sibiu",
      type: "competition",
      image: "https://picsum.photos/id/160/400/250",
      description:
        "Campionat regional cu participarea celor mai buni călăreți din zonă.",
      status: "past",
    },
    {
      id: 5,
      title: "Ziua Porților Deschise",
      date: "8 Iunie 2024",
      location: "eVitaStud",
      type: "open-day",
      image: "https://picsum.photos/id/161/400/250",
      description:
        "Vino să ne cunoști! Tur al fermei, demonstrații și activități pentru copii.",
      status: "upcoming",
    },
    {
      id: 6,
      title: "Curs de Echitație Terapeutică",
      date: "30 Aprilie 2024",
      location: "eVitaStud",
      type: "workshop",
      image: "https://picsum.photos/id/162/400/250",
      description:
        "Curs specializat de echitație terapeutică pentru persoane cu dizabilități.",
      status: "upcoming",
    },
  ];

  const filters = [
    { key: "all", label: "Toate Evenimentele" },
    { key: "upcoming", label: "Viitoare" },
    { key: "past", label: "Trecute" },
    { key: "competition", label: "Competiții" },
    { key: "workshop", label: "Workshop-uri" },
  ];

  const filteredEvents = events.filter(
    (event) =>
      activeFilter === "all" ||
      event.status === activeFilter ||
      event.type === activeFilter
  );

  return (
    <div className={styles.events}>
      {/* Banner Section */}
      <section className={styles.banner}>
        <div className={styles.bannerContent}>
          <h1>Evenimente</h1>
          <p>Descoperă competițiile, workshop-urile și evenimentele noastre</p>
        </div>
      </section>

      <div className={styles.container}>
        {/* Events Filter */}
        <div className={styles.eventsFilter}>
          {filters.map((filter) => (
            <button
              key={filter.key}
              className={`${styles.filterButton} ${
                activeFilter === filter.key ? styles.active : ""
              }`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className={styles.eventsGrid}>
          {filteredEvents.map((event) => (
            <div key={event.id} className={styles.eventCard}>
              <div className={styles.eventImage}>
                <img src={event.image} alt={event.title} />
                <div
                  className={`${styles.eventStatus} ${styles[event.status]}`}
                >
                  {event.status === "upcoming" ? "Viitor" : "Trecut"}
                </div>
                <div className={styles.eventType}>{event.type}</div>
              </div>

              <div className={styles.eventContent}>
                <h3>{event.title}</h3>
                <div className={styles.eventMeta}>
                  <span className={styles.eventDate}>📅 {event.date}</span>
                  <span className={styles.eventLocation}>
                    📍 {event.location}
                  </span>
                </div>
                <p>{event.description}</p>

                <div className={styles.eventActions}>
                  {event.status === "upcoming" ? (
                    <>
                      <button className={styles.primaryButton}>
                        Înscrie-te
                      </button>
                      <button className={styles.secondaryButton}>
                        Detalii
                      </button>
                    </>
                  ) : (
                    <button className={styles.pastButton}>Vezi Galerie</button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Events Message */}
        {filteredEvents.length === 0 && (
          <div className={styles.noEvents}>
            <h3>Nu există evenimente care să corespundă filtrului selectat.</h3>
            <p>
              Încearcă să selectezi un alt filtru sau verifică din nou mai
              târziu.
            </p>
          </div>
        )}

        {/* Newsletter Section */}
        <section className={styles.newsletter}>
          <div className={styles.newsletterContent}>
            <h2>Nu rata niciun eveniment!</h2>
            <p>
              Abonează-te la newsletter-ul nostru pentru a primi actualizări
              despre evenimentele viitoare.
            </p>

            <form className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="Introdu adresa ta de email"
                className={styles.newsletterInput}
              />
              <button type="submit" className={styles.newsletterButton}>
                Abonează-te
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Experience;
