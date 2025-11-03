/** @format */

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
      desc: "Talk with a doctor or nurse, receive advice or prescriptions, and get follow-up  all in the same chat.",
      button: "Talk to a doctor now →",
      background: careBg,
    },
  ];

  return (
    <section className={styles.whatsappSection}>
      <h2 className={styles.title}>
        How it <span>works</span>
      </h2>
      <p className={styles.subtitle}>We bring healthcare to you</p>

      <div className={styles.cardsContainer}>
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${styles.card} 
              ${card.number === 2 ? styles.noShape : ""} 
              ${card.number === 3 ? styles.careCard : ""}`}
            style={
              card.number === 3
                ? { backgroundImage: `url(${card.background})` }
                : {}
            }
          >
            {/* Number Circle */}
            <div className={styles.numberCircle}>{card.number}</div>

            {/* Text Content */}
            <div className={styles.textContent}>
              <h3 className={styles.chatTitle}>{card.title}</h3>
              <p className={styles.description}>{card.desc}</p>
              <button className={styles.ctaButton}>{card.button}</button>
            </div>

            {/* Image (shown only if present) */}
            {card.image && (
              <div className={styles.imageContainer}>
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
    </section>
  );
};

export default Whatsapp;
