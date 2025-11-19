import styles from "./AboutUs.module.css";

import TextType from "../../components/TextType/TextType";
import ValuePilar from "../../components/ValuePilar/ValuePilar";

const values = [
  {
    title: "EXCELENȚA",
    body: "Fiecare decizie și fiecare detaliu reflectă devotamentul nostru pentru perfecțiune și noblețe.",
  },
  {
    title: "ECHILIBRU",
    body: "Armonia dintre om și cal este centrul filosofiei noastre — o relație bazată pe încredere și respect.",
  },
  {
    title: "TRADIȚIE",
    body: "Păstrăm vie moștenirea transilvăneană, îmbinând rafinamentul cu rigoarea disciplinei ecvestre.",
  },
];
function AboutUs() {
  return (
    <section className={styles.aboutPage}>
      {/* INTRO SECTION */}
      <section className={styles.introSection}>
        <div className={styles.containerConstrained}>
          <h1 className={styles.mainTitle}>
            Moștenirea și Viziunea <br />E VITA STUD
          </h1>
          <p className={styles.leadParagraph}>
            O poveste de pasiune, dedicare și excelență în lumea ecvestră, din
            Transilvania.
          </p>
        </div>
      </section>

      {/* ORIGIN SECTION */}
      <section className={styles.originSection}>
        <div
          className={`${styles.containerConstrained} ${styles.originContent}`}
        >
          <div className={styles.originText}>
            <span className={styles.sectionLabel}>Originile Noastre</span>
            <h2 className={styles.sectionTitle}>Pasiune cu radacini adanci</h2>
            <p className={styles.paragraph}>
              Pe domeniul regal din Căpușu Mare, viziunea E VITA STUD a prins
              rădăcini, inspirată de o tradiție nobilă și de pasiunea
              nemărginită pentru caii Pur-Sânge Arab. Astfel, a fost creat un
              sanctuar al grației și al excelenței ecvestre, unde forța naturii
              se îmbină cu precizia omului.
            </p>
            <div className={styles.originQuote}>
              <TextType
                text={[
                  "Nu măsurăm timpul în ani,",
                  "Ci în generații de pasiune.",
                ]}
                typingSpeed={100}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
              />
            </div>
          </div>

          <img
            src="https://picsum.photos/id/357/800/600"
            alt="E Vita Stud estate"
            className={styles.originImg}
          />
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className={styles.valuesSection}>
        <div className={styles.containerConstrained}>
          <span className={styles.sectionLabelLight}>Valorile Noastre</span>
          <h2 className={styles.sectionTitleLight}>
            Excelență, Echilibru și Tradiție.
          </h2>
          <div className={styles.pillarsGrid}>
            {values.map((value, index) => (
              <ValuePilar key={index} title={value.title} body={value.body} />
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className={styles.servicesSection}>
        <div className={styles.containerConstrained}>
          {/* Folosim sectionLabel pentru consistență */}
          <span className={styles.sectionLabel}>Serviciile Noastre</span>

          <h2 className={styles.sectionTitle}>
            Creșterea, Performanța și Experiența E Vita Stud
          </h2>

          <p className={styles.servicesLead}>
            E Vita Stud nu este doar o herghelie, ci un sanctuar dedicat celei
            mai înalte forme de excelență ecvestră. Viziunea noastră se
            materializează în trei piloni principali, fiecare definit de
            rigoare, respect și tradiție:
          </p>

          <div className={styles.servicesGrid}>
            <details className={styles.serviceItem}>
              <summary className={styles.serviceTitle}>
                Bloodline of Champions
              </summary>
              <p className={styles.serviceBody}>
                Creșterea și vânzarea cailor Pur-Sânge Arabi din linii
                genealogice de elită, destinați show-urilor de prestigiu și
                performanței de vârf.
              </p>
            </details>
            <details className={styles.serviceItem}>
              <summary className={styles.serviceTitle}>
                Whispered Training Art
              </summary>
              <p className={styles.serviceBody}>
                Dresaj și antrenament profesionist, bazat pe filozofia noastră
                de "conversație tăcută" și echilibru, pentru a atinge
                potențialul maxim al fiecărui exemplar.
              </p>
            </details>
            <details className={styles.serviceItem}>
              <summary className={styles.serviceTitle}>
                The Private Experience
              </summary>
              <p className={styles.serviceBody}>
                Experiențe ecvestre private și vizite exclusive pe domeniu,
                rezervate celor care doresc să înțeleagă intimitatea și ritualul
                E Vita Stud.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className={styles.teamSection}>
        <div className={styles.containerConstrained}>
          <span className={styles.sectionLabel}>Creatorul Viziunii</span>
          <div className={styles.teamContent}>
            <img
              src="https://picsum.photos/id/355/200/300"
              alt="Florin Suta, Fondator E Vita Stud"
              className={styles.founderPhoto}
            />
            <div className={styles.founderBio}>
              <h3 className={styles.founderName}>Florin Sută</h3>
              <p className={styles.founderTitle}>Fondator & Master Trainer</p>
              <p className={styles.paragraphTeam}>
                "Încăpățânarea de a paria totul pe un vis" a dat naștere{" "}
                <strong>E Vita Stud.</strong> <br />
                De la o mică herghelie din Bavaria, viziunea lui Florin Sută
                este aceea de a crea o linie de Pur-Sânge Arabi care să
                reprezinte excelența ecvestră transilvăneană.
              </p>
              <p className={styles.paragraphTeam}>
                El este forța motrice din spatele filozofiei antrenamentului
                bazat pe respect și "conversatia tăcută" dintre om și cal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section className={styles.philosophySection}>
        <div className={styles.containerConstrained}>
          <div className={styles.philosophyContent}>
            <span className={styles.sectionLabel}>Filozofia Noastră</span>
            <h2 className={styles.philosophyTitle}>
              Forta Naturii. Precizia Omului.
            </h2>
            <p className={styles.philosophyLead}>
              Pe un domeniu de 8 hectare, la umbra padurilor seculare din
              Transilvania, natura si omul coopereaza intr-un ritual al
              perfectiunii.
            </p>
            <p className={styles.philosophyText}>
              Dresajul nu este o simpla repetitie, ci o conversatie tacuta intre
              doua fiinte care se respecta reciproc.
            </p>
            <div className={styles.signatureWrapper}>
              <span className={styles.signature}>E Vita Stud</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className={styles.ctaSection}>
        <div className={styles.containerConstrained}>
          <h2 className={styles.ctaTitle}>
            Vino sa simti tacerea care precede un galop
          </h2>
          <div className={styles.ctaButtons}>
            <a
              href="/contact"
              className={`${styles.ctaButton} ${styles.ctaPrimary}`}
            >
              Programeaza o Vizita
            </a>
            <a
              href="/experienta"
              className={`${styles.ctaButton} ${styles.ctaSecondary}`}
            >
              Descopera Experienta
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}

export default AboutUs;
