/** @format */

import { useState, useEffect } from "react";
import styles from "./Whatsapp.module.css";
import whatsappImage from "../../assets/whatsapp.png";

const Whatsapp = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 3;

  const showSlide = (index) => setCurrentIndex(index);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % totalSlides);

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.whatsappSection}>
      {/* Carousel */}
      <div className={styles.carousel}>
        {[...Array(totalSlides)].map((_, index) => (
          <div
            key={index}
            className={`${styles.carouselItem} ${
              currentIndex === index ? styles.active : ""
            }`}
          >
            <h2 className={styles.title}>
              Works with you <span>in mind</span>
            </h2>
            <p className={styles.subtitle}>Your health, your way</p>

            {/* Card */}
            <div className={styles.card}>
              <div className={styles.textContent}>
                <h3 className={styles.chatTitle}>Chat us on Whatsapp</h3>
                <p className={styles.description}>
                  Speak to a doctor from the comfort of your home
                </p>
                <button className={styles.ctaButton}>
                  Talk to a doctor now →
                </button>
              </div>

              <div className={styles.imageContainer}>
                <img
                  src={whatsappImage}
                  alt="WhatsApp Chat"
                  className={styles.whatsappImage}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className={styles.carouselControls}>
        {[...Array(totalSlides)].map((_, index) => (
          <span
            key={index}
            className={`${styles.controlButton} ${
              currentIndex === index ? styles.active : ""
            }`}
            onClick={() => showSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Whatsapp;
