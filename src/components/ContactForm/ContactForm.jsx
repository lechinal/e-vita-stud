import { useState } from "react";
import styles from "./ContactForm.module.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aici va fi logica de trimitere a formularului
    console.log("Formular trimis:", formData);
    alert("Mesajul a fost trimis! Vă vom contacta în curând.");

    // Resetare formular
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className={styles.contact}>
      <div className={styles.inner}>
        <header className={styles.sectionHeader}>
          <h2>Contactați-ne</h2>
          <p>Vă stăm la dispoziție pentru orice întrebări sau programări</p>
        </header>

        <div className={styles.contactContent}>
          {/* Informații de contact */}
          <div className={styles.contactInfo}>
            <h3>Informații de contact</h3>
            <div className={styles.infoItems}>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>📍</span>
                <div>
                  <strong>Adresă</strong>
                  <p>Sat Herghelia, Jud. Cluj, Romania</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>📞</span>
                <div>
                  <strong>Telefon</strong>
                  <p>+40 724 123 456</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>✉️</span>
                <div>
                  <strong>Email</strong>
                  <p>contact@evitastud.ro</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>🕒</span>
                <div>
                  <strong>Program</strong>
                  <p>Luni - Duminică: 8:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formular de contact */}
          <div className={styles.formContainer}>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Nume complet *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Introduceți numele dvs."
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Adresă email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="exemplu@email.com"
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject">Subiect *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Subiectul mesajului"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Mesaj *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Scrieți mesajul dvs. aici..."
                ></textarea>
              </div>

              <button type="submit" className={styles.submitButton}>
                Trimite mesaj
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
