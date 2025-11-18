import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.css";

function Header({ className }) {
  return (
    <header className={`${styles.header} ${className}`}>
      <div className={styles.inner}>
        <Logo title="Eleganta, Calitate, Gene Nobile" />
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
