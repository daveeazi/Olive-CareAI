/** @format */

import React, { useEffect, useRef, useState } from "react";
import styles from "./Testimonial.module.css";

// ✅ Assets from src/assets
import leftArrow from "../../assets/leftarrow.png";
import rightArrow from "../../assets/rightarrow.png";
import img1 from "../../assets/image1.png";
import img2 from "../../assets/image2.png";
import img3 from "../../assets/image3.png";

const testimonials = [
  {
    id: 1,
    outline: "#9DFFA3",
    body: "#EFFFF0",
    image: img1,
    text: `AI can analyze patient data in real-time, allowing for early identification of potential 
health risks.`,
    name: "Chiamaka Obi",
  },
  {
    id: 2,
    outline: "#D9EEFF",
    body: "#F0F8FF",
    image: img2,
    text: `AI can analyze patient data in real-time, allowing for early identification of potential 
health risks.`,
    name: "Chiamaka Obi",
  },
  {
    id: 3,
    outline: "#FFA13C",
    body: "#FFF5EA",
    image: img3,
    text: `AI can analyze patient data in real-time, allowing for early identification of potential 
health risks.`,
    name: "Chiamaka Obi",
  },
];

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const total = testimonials.length;

  // Duplicate ends for infinite effect
  const extendedTestimonials = [
    testimonials[total - 1],
    ...testimonials,
    testimonials[0],
  ];

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => prev + 1);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => prev - 1);
    setTimeout(() => setIsAnimating(false), 500);
  };

// Auto scroll (removed)
//   useEffect(() => {
//     const auto = setInterval(handleNext, 5000);
//     return () => clearInterval(auto);
//   }, []);

  // Swipe Gesture
  const touchStart = useRef(0);
  const touchEnd = useRef(0);

  const onTouchStart = (e) => (touchStart.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    touchEnd.current = e.changedTouches[0].clientX;
    if (touchStart.current - touchEnd.current > 40) handleNext();
    else if (touchEnd.current - touchStart.current > 40) handlePrev();
  };

  // Reset index for seamless infinite scroll
  const viewportRef = useRef(null);
  useEffect(() => {
    if (activeIndex === total + 1) {
      setTimeout(() => {
        setIsAnimating(false);
        setActiveIndex(1);
      }, 500);
    } else if (activeIndex === 0) {
      setTimeout(() => {
        setIsAnimating(false);
        setActiveIndex(total);
      }, 500);
    }
  }, [activeIndex, total]);

  return (
    <section
      className={styles.testimonialSection}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.titleSphere}>Testimonial</div>
        <h2 className={styles.heading}>Real people Real Impact</h2>
      </div>

      {/* Wrapper */}
      <div className={styles.wrapperBox}>
        <div
          ref={viewportRef}
          className={`${styles.viewport} ${styles.bounce}`}
          style={{
            transform: `translateX(-${activeIndex * (100 / extendedTestimonials.length)}%)`,
            width: `${extendedTestimonials.length * 100}%`,
            transition: isAnimating
              ? "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
              : "none",
          }}
        >
          {extendedTestimonials.map((t, i) => (
            <div
              key={`${t.id}-${i}`}
              className={styles.card}
              style={{
                border: `2px solid ${t.outline}`,
                backgroundColor: t.body,
              }}
            >
              <img
                src={t.image}
                alt={`testimonial-${t.id}`}
                className={styles.image}
              />
              <p className={styles.text}>{t.text}</p>
              <p className={styles.name}>{t.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className={styles.controls}>
        <button onClick={handlePrev} className={styles.arrowBtn}>
          <img src={leftArrow} alt="Previous" />
        </button>

        <div className={styles.dots}>
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`${styles.dot} ${
                (activeIndex - 1 + total) % total === i
                  ? styles.activeDot
                  : ""
              }`}
            />
          ))}
        </div>

        <button onClick={handleNext} className={styles.arrowBtn}>
          <img src={rightArrow} alt="Next" />
        </button>
      </div>
    </section>
  );
}
