/** @format */
import React, { useEffect, useRef, useState } from "react";
import styles from "./Testimonial.module.css";

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
  const [activeIndex, setActiveIndex] = useState(1); // start from first real card
  const [transitioning, setTransitioning] = useState(true);
  const total = testimonials.length;

  // Clone first and last slides for smooth infinite effect
  const extendedTestimonials = [
    testimonials[total - 1],
    ...testimonials,
    testimonials[0],
  ];

  const viewportRef = useRef(null);

  // ---- Navigation handlers ----
  const handleNext = () => {
    if (!transitioning) return;
    setActiveIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (!transitioning) return;
    setActiveIndex((prev) => prev - 1);
  };

  // ---- Swipe gestures ----
  const touchStart = useRef(0);
  const touchEnd = useRef(0);

  const onTouchStart = (e) => (touchStart.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    touchEnd.current = e.changedTouches[0].clientX;
    const distance = touchStart.current - touchEnd.current;
    if (distance > 40) handleNext();
    else if (distance < -40) handlePrev();
  };

  // ---- Infinite scroll logic ----
  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const handleTransitionEnd = () => {
      setTransitioning(true);

      if (activeIndex === 0) {
        // jump instantly to last real slide
        viewport.style.transition = "none";
        setActiveIndex(total);
        requestAnimationFrame(() => {
          viewport.style.transition = "transform 0.5s ease-in-out";
        });
      } else if (activeIndex === total + 1) {
        // jump instantly to first real slide
        viewport.style.transition = "none";
        setActiveIndex(1);
        requestAnimationFrame(() => {
          viewport.style.transition = "transform 0.5s ease-in-out";
        });
      }
    };

    viewport.addEventListener("transitionend", handleTransitionEnd);
    return () => viewport.removeEventListener("transitionend", handleTransitionEnd);
  }, [activeIndex, total]);

  // ---- Auto-scroll control (optional) ----
  // useEffect(() => {
  //   const timer = setInterval(() => handleNext(), 5000);
  //   return () => clearInterval(timer);
  // }, []);

  // ---- Transform calculation ----
  const translateX = `translateX(-${activeIndex * (100 / extendedTestimonials.length)}%)`;

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
          className={styles.viewport}
          style={{
            width: `${extendedTestimonials.length * 100}%`,
            transform: translateX,
            transition: "transform 0.5s ease-in-out",
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
                activeIndex === i + 1 ? styles.activeDot : ""
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
