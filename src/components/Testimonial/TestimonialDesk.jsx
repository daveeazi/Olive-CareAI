import React, { useEffect, useRef, useState } from "react";
import styles from "./TestimonialDesk.module.css";
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
  const [activeIndex, setActiveIndex] = useState(1);
  const [transitioning, setTransitioning] = useState(true);
  const total = testimonials.length;
  const viewportRef = useRef(null);
  // Clone first and last slides for smooth infinite effect
  const extendedTestimonials = [
    testimonials[total - 1],
    ...testimonials,
    testimonials[0],
  ];
  // ---- Navigation handlers ----
  const handleNext = () => {
    if (!transitioning) return;
    setTransitioning(false);
    setActiveIndex((prev) => (prev % total) + 1); // Loop within 1 to 3
  };
  const handlePrev = () => {
    if (!transitioning) return;
    setTransitioning(false);
    setActiveIndex((prev) => (prev - 2 + total) % total + 1); // Loop within 1 to 3
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
        viewport.style.transition = "none";
        setActiveIndex(total);
        requestAnimationFrame(() => {
          viewport.style.transition = "transform 0.5s ease-in-out";
        });
      } else if (activeIndex === total + 1) {
        viewport.style.transition = "none";
        setActiveIndex(1);
        requestAnimationFrame(() => {
          viewport.style.transition = "transform 0.5s ease-in-out";
        });
      }
    };
    viewport.addEventListener("transitionend", handleTransitionEnd);
    return () =>
      viewport.removeEventListener("transitionend", handleTransitionEnd);
  }, [activeIndex, total]);
  // ---- Responsive transform logic ----
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 900);
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 900);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // Show 3 cards per view on desktop
  const visibleCount = isDesktop ? 3 : 1;
  // Adjust translateX to loop within the 3 main cards
  const translateX = `translateX(-${
    ((activeIndex - 1) * 100) / total
  }%)`; // Use total (3) for desktop transform
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
            width: `${extendedTestimonials.length * (100 / visibleCount)}%`,
            transform: translateX,
            transition: "transform 0.5s ease-in-out",
            display: "flex",
          }}
        >
          {extendedTestimonials.map((t, i) => (
            <div
              key={`${t.id}-${i}`}
              className={styles.card}
              style={{
                flex: `0 0 ${80 / visibleCount}%`,
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