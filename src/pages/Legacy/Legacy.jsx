import React from "react";
import { Link } from "react-router-dom";
import styles from "./Legacy.module.css";
import profilePhoto from "../../assets/images/ameretto/ameretto-profile-698x592.jpg";

function Legacy() {
  // 🎯 REFACTORIZARE NECESARĂ: Această clasă ar trebui să fie globală.
  const containerConstrained = "containerConstrained";

  const amerettoDetails = {
    born: "Născut în 2006 în Franța",
    videoLink: "https://www.youtube.com/embed/IzSgrRTplWc",

    pedigreeSummary:
      "AMERETTO are un pedigree exceptional. Tatal sau este celebrul Amer, armasarul saudit considerat cel mai influent cal pur sange arab al curselor de galop. Mama sa, Win Taouy (Drug x Edwina (Dormane) a dat mai multi campioni de galop, printre care Djet Taouy, Ramiz Al Aziz, Neckhen Taouy.",

    careerHighlights: [
      "Carieră lungă pe hipodrom, debutând la vârsta de 3 ani cu victorii în toate cursele din acel an.",
      "A alergat până la vârsta de 9 ani, cu 13 victorii în țări ca Germania, Polonia, Italia, Suedia și Olanda.",
      "În 2015 (ultimul an de carieră), a reușit 3 victorii și două plasări pe locul doi.",
    ],

    progenySuccess: [
      {
        location: "Roma, Italia",
        achievement: "Victorie în cursa de 2000 de metri",
        horse: "Octopus Premier (Ameretto x Mak’leopatre)",
      },
      {
        location: "Toulouse, Franța",
        achievement: "Locul 3 în cursa Prix Val D’adour- Wathba Stallions Cup",
        horse: "Lila Star (Ameretto x Araba Star by Dormane)",
        note: "Clasare importantă la doar a doua cursă din carieră.",
      },
      {
        location: "Ploiești, România",
        achievement:
          "Locul 2 pe pista din Ploiești în cursa Elite Junior Speed (1800m)",
        horse: "Aquila Nera (Ameretto x Toeris)",
      },
    ],
    focus:
      "Ameretto detine acel pedigree extraordinar care combina cele mai importante linii de sport ale rasei Pur Sange Arab. Sa aiba picioare bune, talie corespunzatoare, musculatura puternica, dar si un temperament exceptional, toate acestea pentru a putea ameliora iepele romanesti. Pentru detalii despre preț nu ezitați să ne contactați.",
    availability:
      "Ameretto se află în ferma noastră din Căpușu Mare și este disponibil pentru monta în România și pe tot mapamondul!!!",
  };

  const breedingPhilosophyText = `
    La E Vita Stud, creșterea nu este un proces biologic, ci un act de viziune și o promisiune. Pornind de la moștenirea unor linii genetice verificate, ne concentrăm pe arta selecției. Fiecare mânz este rezultatul unei planificări meticuloase, urmărind nu doar excelența estetică, ci și confirmarea temperamentului nobil și a abilităților atletice. De la naștere și până la debut, fiecare etapă este guvernată de cele mai înalte standarde de îngrijire, asigurând că viitoarea generație poartă cu mândrie noblețea sângelui E Vita Stud.
  `;

  return (
    <div className={styles.legacyPage}>
      {/* 1. INTRO / HERO SECTION */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Moștenirea Noastră.
            <br />
            Bloodline of Champions.
          </h1>
          <p className={styles.heroLead}>
            Aici se scrie istoria. Viziunea E Vita Stud este construită pe
            ADN-ul performanței absolute și pe angajamentul față de excelența
            genetică.
          </p>
        </div>
      </section>

      {/* 2. AMERETTO SECTION (THE ANCHOR) - Cal de Montă / Montă artificială */}
      <section className={styles.amerettoSection}>
        <div className={styles[containerConstrained]}>
          <span className={styles.sectionLabel}>
            ANCORA GENEALOGICĂ: ARMASARUL DE BAZĂ
          </span>

          <h2 className={styles.amerettoTitle}>
            AMERETTO. Legenda care continuă.
          </h2>

          <div className={styles.amerettoGrid}>
            <div className={styles.amerettoImage}>
              {/* Imaginea importată direct */}
              <img
                src={profilePhoto}
                alt="Ameretto, Armăsarul E Vita Stud"
                className={styles.amerettoImg}
              />
              {/* Wrapper pentru titlul video și player, așa cum ai solicitat */}
              <div className={styles.videoLinkWrapper}>
                <h3 className={styles.videoTitle}>Ultima cursă din carieră:</h3>
                <div className={styles.videoPlayerWrapper}>
                  {" "}
                  {/* Wrapper-ul 16:9 */}
                  <iframe
                    className={styles.videoFrame}
                    src={amerettoDetails.videoLink}
                    title="Ultima Cursă din Carieră - Ameretto"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

            <div className={styles.amerettoDetails}>
              <p className={styles.birthDetails}>
                <span className={styles.detailLabel}>Născut:</span>{" "}
                {amerettoDetails.born}
              </p>

              <div className={styles.detailsBlock}>
                <h3 className={styles.detailTitle}>Pedigree</h3>
                <p className={styles.paragraph}>
                  {amerettoDetails.pedigreeSummary}
                </p>
              </div>

              <div className={styles.detailsBlock}>
                <h3 className={styles.detailTitle}>Carieră și Performanță</h3>
                <ul className={styles.performanceList}>
                  {amerettoDetails.careerHighlights.map((highlight, index) => (
                    <li key={index} className={styles.highlightItem}>
                      <span className={styles.bullet}></span> {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.detailsBlock}>
                <h3 className={styles.detailTitle}>Impactul Genetic</h3>
                <p className={styles.paragraph}>{amerettoDetails.focus}</p>
              </div>

              <div className={styles.ctaBlock}>
                <p className={styles.availabilityText}>
                  {amerettoDetails.availability}
                </p>
                <Link to="/contact" className={styles.contactButton}>
                  Detalii despre Montă
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.progenySuccess}>
            <h3 className={styles.progenyTitle}>Succesele Progeniturilor</h3>

            <ul className={styles.progenyList}>
              {amerettoDetails.progenySuccess.map((success, index) => (
                <li key={index} className={styles.progenyItem}>
                  <p className={styles.progenyAchievement}>
                    <span className={styles.bullet}>&starf;</span>
                    <strong>{success.achievement}</strong> la{" "}
                    <strong>{success.location}</strong>
                  </p>
                  <p className={styles.progenyHorse}>
                    Cal: <i>{success.horse}</i>{" "}
                    {success.note ? ` (${success.note})` : ""}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. BREEDING PHILOSOPHY SECTION - Reproducere & Manji */}
      <section className={styles.philosophySection}>
        <div className={styles[containerConstrained]}>
          <span className={styles.sectionLabel}>Viziunea de Crescătorie</span>
          <h2 className={styles.philosophyTitle}>
            Programe de Creștere: Viitorul Heredității
          </h2>
          <div className={styles.philosophyContent}>
            <p className={styles.paragraph}>{breedingPhilosophyText.trim()}</p>
            <img
              src="/assets/images/placeholder/foto_iapă_mânz.jpg"
              alt="Iapă cu mânz, E Vita Stud"
              className={styles.philosophyImage}
            />
          </div>
        </div>
      </section>

      {/* 4. HORSES FOR SALE / CTA SECTION - Cai de Vânzare */}
      <section className={styles.salesSection}>
        <div className={styles[containerConstrained]}>
          <span className={styles.sectionLabel}>Cai Disponibili</span>
          <h2 className={styles.salesTitle}>O Investiție în Noblețe</h2>
          <p className={styles.salesLead}>
            Fiecare exemplar Pur-Sânge Arab care părăsește domeniul nostru este
            un ambasador al calității și al standardului E Vita Stud.
            Descoperiți caii, iapăile sau mânjii disponibili pentru vânzare,
            potriviți pentru show-uri de elită, performanță sau crescătorii.
          </p>
          <div className={styles.salesButtons}>
            <Link to="/cai-de-vanzare" className={styles.salesButton}>
              Vezi Catalogul Complet
            </Link>
            <Link to="/contact" className={styles.salesButton}>
              Contactează-ne
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Legacy;
