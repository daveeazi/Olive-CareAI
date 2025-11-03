/** @format */
import React from 'react';
import styles from './Home.module.css';
import stressIcon from '../../assets/stress2.svg';
import queueIcon from '../../assets/queues2.svg';
import manImage from '../../assets/man2.png';
import oliveImage from '../../assets/olive.png';

export default function HomeDesk() {
  // Function to scroll smoothly to the top when logo is clicked
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className={styles.home}>
      {/* Logo section */}
      <div className={styles.logo} onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
        <img
          className={styles.logoImage}
          src={oliveImage}
          alt="Olive Logo"
          style={{
            width: '52px',
            height: '50.75247573852539px',
            transform: 'rotate(0deg)',
            opacity: 1,
          }}
        />
        <span className={styles.logoTitle}>OliveCareAI</span>
      </div>

      {/* About Us Buttons */}
      <div className={styles.aboutUsButtons}>
        <button className={styles.aboutButton}>About Us</button>
        <button className={styles.aboutButton}>FAQs</button>
        <button className={styles.aboutButton}>Services</button>
      </div>

      {/* Green Card with Background */}
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
        <div>
          <img src={manImage} alt="Doctor" className={styles.manImage} />
        </div>

        {/* Description */}
        <p className={styles.description}>
          Talk to licensed doctors, nurses and check your lab results via WhatsApp no queues, <br /> no stress.
        </p>
      </div>

      {/* CTA Button below card */}
      <button className={styles.ctaButton}>Talk to a doctor now</button>
    </section>
  );
}
