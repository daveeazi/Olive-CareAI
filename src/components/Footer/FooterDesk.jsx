/** @format */

import styles from "./Footer.module.css";
import oliveLogo from "../../assets/olive.png"; // actual OliveCareAI logo

const FooterDesk = () => {
  return (
    <footer className={styles.footerDeskWrapper}>
      {/* Centered background logo */}
      <div className={styles.footerDeskBgLogo}></div>

      {/* OlivecareAI logo (top right corner) */}
      <img
        src={oliveLogo}
        alt="OlivecareAI Logo"
        className={styles.footerDeskTopLogo}
      />
      <div className={styles.logoContainer}>
        <span className={styles.logoTitle}>OliveCareAI</span>
      </div>

      {/* Main content */}
      <div className={styles.footerDeskContent}>
        <h2>
          Start your care journey
          <br />
          on WhatsApp
        </h2>
        <p>Healthcare is just a message away</p>
        <button>Talk to a doctor now</button>
      </div>

      {/* 🔹 Bottom row */}
      <div className={styles.footerDeskBottom}>
        <span className={styles.footerDeskLeft}>OliveCareAI</span>
        <span className={styles.footerDeskRight}>Terms & Services</span>
      </div>

      {/* 🔹 Separator line */}
      <div className={styles.footerDeskLine}></div>

      {/* 🔹 Copyright */}
      <p className={styles.footerDeskCopy}>All rights reserved @OlivecareAI</p>
    </footer>
  );
};

export default FooterDesk;
