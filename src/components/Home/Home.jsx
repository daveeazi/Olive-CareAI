import React from "react";
import styles from "./Home.module.css";
import stressIcon from "../../assets/stress.svg";
import queueIcon from "../../assets/queue.svg";
import manImage from "../../assets/man.png";

export default function Home() {
  return (
    <section className={styles.home}>
      {/* Green Card */}
      <div className={styles.card}>
        <h1 className={styles.title}>
          AI-first healthcare. Just <br /> a Message Away
        </h1>

        {/* Features side by side */}
        <div className={styles.features}>
          <div className={styles.featureItem}>
            <img src={stressIcon} alt="No Stress" />
            <span>No Stress</span>
          </div>
          <div className={styles.featureItem}>
            <img src={queueIcon} alt="No Queues" />
            <span>No Queues</span>
          </div>
        </div>

        {/* Doctor image */}
        <div className={styles.imageWrapper}>
          <img src={manImage} alt="Doctor" className={styles.manImage} />
        </div>

        {/* Description */}
        <p className={styles.description}>
          Talk to licensed doctors, nurses and check your lab results via
          WhatsApp no queues, no <br /> stress.
        </p>
      </div>

      {/* CTA Button below card */}
      <button className={styles.ctaButton}>Talk to a doctor now</button>
    </section>
  );
}
