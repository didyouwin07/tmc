import React from "react";
import styles from "./styles/headerStyles.module.css";

export default function Header() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftWrapper}>
        <div className={styles.hamburgerMenu}>
          <img src="/icons/hamburger-menu.svg" alt="menu" />
        </div>
        <div className={styles.logo}>
          <img src="/icons/logo.svg" alt="The Morning Context" />
        </div>
        <div className={styles.companyName}>
          <span>THE</span>
          <span>MORNING</span>
          <span>CONTEXT</span>
        </div>
      </div>
      <div className={styles.rightWrapper}>
        <div className={styles.searchIcon}>
        <img src="/icons/search-icon.svg" alt="search" />
        </div>
        <div className={styles.signupButton}>SIGN UP</div>
      </div>
    </div>
  );
}
