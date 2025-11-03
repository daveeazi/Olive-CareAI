/** @format */
import React, { useState, useRef } from "react";
import styles from "./Consulting.module.css";
import leftArrow from "../../assets/leftarrow.svg";
import rightArrow from "../../assets/rightarrow.svg";
import docImage from "../../assets/docimage1.png";

const Consulting = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const doctors = [
    {
      name: "James Favor(MD)",
      hospital: "UCH(Ibadan)",
      quote:
        '"OlivecareAI is a good platform for delivering fast and informed healthcare services."',
      image: docImage,
    },
    {
      name: "James Favor(MD)",
      hospital: "UCH(Ibadan)",
      quote:
        '"OlivecareAI is a good platform for delivering fast and informed healthcare services."',
      image: docImage,
    },
    {
      name: "James Favor(MD)",
      hospital: "UCH(Ibadan)",
      quote:
        '"OlivecareAI is a good platform for delivering fast and informed healthcare services."',
      image: docImage,
    },
  ];

  // Animate + Move to previous doctor
  const prevDoctor = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? doctors.length - 1 : prev - 1));
      setFade(false);
    }, 300);
  };

  // Animate + Move to next doctor
  const nextDoctor = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === doctors.length - 1 ? 0 : prev + 1));
      setFade(false);
    }, 300);
  };

  // Handle swipe gesture
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      diff > 0 ? nextDoctor() : prevDoctor();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const currentDoctor = doctors[currentIndex];

  return (
    <section className={styles.consultingSection}>
      {/* Section Label */}
      <div className={styles.headerTag}>Consulting</div>

      {/* Headings */}
      <h2 className={styles.heading}>Meet our Doctors</h2>
      <p className={styles.subtext}>
        We have licensed and experienced <br /> doctors to help with your needs
      </p>

      {/* Carousel Section */}
      <div className={styles.carouselContainer}>
        {/* Left Button */}
        <button className={styles.arrowButton} onClick={prevDoctor}>
          <img src={leftArrow} alt="Previous" />
        </button>

        {/* Doctor Card with fade animation and swipe */}
        <div
          className={`${styles.card} ${fade ? styles.fade : ""}`}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <img
            src={currentDoctor.image}
            alt={currentDoctor.name}
            className={styles.docImage}
          />
          <div className={styles.textContent}>
            <p className={styles.quote}>{currentDoctor.quote}</p>
            <p className={styles.name}>{currentDoctor.name}</p>
            <p className={styles.hospital}>{currentDoctor.hospital}</p>
          </div>
        </div>

        {/* Right Button */}
        <button className={styles.arrowButton} onClick={nextDoctor}>
          <img src={rightArrow} alt="Next" />
        </button>
      </div>
    </section>
  );
};

export default Consulting;
