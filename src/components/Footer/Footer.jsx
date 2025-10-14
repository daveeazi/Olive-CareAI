/** @format */

import styles from "./Footer.module.css";
import blocks from "../../assets/blocks.png"; // background image

const Footer = () => {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.mainFooter}>
        <div className={styles.content}>
          <h2>Start your care journey<br />on whatsapp</h2>
          <p>Healthcare is just a message away</p>
          <button>Talk to a doctor now</button>
        </div>
        <div className={styles.imageOverlay}></div>
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.leftText}>OliveCareAI</div>
        <div className={styles.rightText}>Terms & Services</div>
      </div>

      {/* 👇 Thin line separator */}
      <div className={styles.lineSeparator}></div>

      <p className={styles.copyright}>
        All rights reserved @OlivecareAI
      </p>
    </footer>
  );
};

export default Footer;
