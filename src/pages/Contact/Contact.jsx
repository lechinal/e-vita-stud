import styles from "./Contact.module.css";
import ContactForm from "../../components/ContactForm/ContactForm";

function Contact() {
  return (
    <div className={styles.contactPage}>
      <ContactForm />
    </div>
  );
}

export default Contact;
