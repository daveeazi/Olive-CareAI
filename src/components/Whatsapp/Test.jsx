/** @format */

import { useState, useEffect, useRef } from "react";
import styles from "./Test.module.css";
import whatsappImage from "../../assets/whatsapp.png";
import botImage from "../../assets/bot.png";
import careBg from "../../assets/carebg.png";

const Whatsapp = () => {
  const cards = [
    {
      number: 1,
      title: "Message us on Whatsapp",
      desc: "Start a chat with OliveCareAI directly from your phone no app downloads or forms.",
      button: "Chat us now →",
      image: whatsappImage,
    },
    {
      number: 2,
      title: "Quick AI Check",
      desc: "Our smart assistant asks a few questions to understand your problem and connects you to the right clinician",
      button: "Talk to OlivecareAI now →",
      image: botImage,
    },
    {
      number: 3,
      title: "Get Care Instantly",
      desc: "Talk with a doctor or nurse, receive advice or prescriptions, and get follow-up all in the same chat.",
      button: "Talk to a doctor now →",
      background: careBg,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = cards.length;
  const [direction, setDirection] = useState("right");

  const showSlide = (index) => setCurrentIndex(index);

  const nextSlide = () => {
    setDirection("right");
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setDirection("left");
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 50000);
    return () => clearInterval(interval);
  }, []);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) nextSlide();
    if (touchStartX.current - touchEndX.current < -50) prevSlide();
  };

  return (
    <section className={styles.whatsappSection}>
      <div className={styles.carousel}>
        <h2 className={styles.title}>
          Works with you <span>in mind</span>
        </h2>
        <p className={styles.subtitle}>Your health, your way</p>

        <div
          className={styles.cardWrapper}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className={`${styles.card} ${
                card.background ? styles.careCard : ""
              } ${
                currentIndex === index
                  ? direction === "right"
                    ? styles.fadeSlideRight
                    : styles.fadeSlideLeft
                  : styles.hidden
              }`}
              style={
                card.background
                  ? { backgroundImage: `url(${card.background})` }
                  : {}
              }
            >
              {/* Card number circle */}
              <div className={styles.cardNumber}>{card.number}</div>

              <div className={styles.textContent}>
                <h3 className={styles.chatTitle}>{card.title}</h3>
                <p className={styles.description}>{card.desc}</p>
                <button className={styles.ctaButton}>{card.button}</button>
              </div>

              {card.image && (
                <div
                  className={`${styles.imageContainer} ${
                    card.number === 2 ? styles.botContainer : ""
                  }`}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className={`${styles.whatsappImage} ${
                      card.number === 2 ? styles.botImage : ""
                    }`}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={styles.carouselControls}>
          {cards.map((_, index) => (
            <span
              key={index}
              className={`${styles.controlButton} ${
                currentIndex === index ? styles.active : ""
              }`}
              onClick={() => showSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Whatsapp;
