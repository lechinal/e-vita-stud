import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import styles from "./BackToTopButton.module.css";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 800);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`${styles.backToTop} ${isVisible ? styles.visible : ""}`}
      aria-label="Înapoi sus"
    >
      <FaArrowUp size={24} />
    </button>
  );
};

export default BackToTopButton;
