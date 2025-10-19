/** @format */

import styles from "./Test.module.css";
import whatsappImage from "../../assets/whatsapp.png";

const Whatsapp = () => {
  const cards = [
    {
      title: "Chat us on WhatsApp",
      desc: "Speak to a doctor from the comfort of your home",
      button: "Talk to a doctor now →",
    },
    {
      title: "Instant Support",
      desc: "Get immediate responses from verified health experts",
      button: "Get help instantly →",
    },
    {
      title: "Personalized Care",
      desc: "Receive tailored advice and ongoing medical guidance",
      button: "Talk to a doctor now →",
    },
  ];

  return (
    <section className={styles.whatsappSection}>
      <h2 className={styles.title}>
        Works with you <span>in mind</span>
      </h2>
      <p className={styles.subtitle}>Your health, your way</p>

      <div className={styles.cardsContainer}>
        {cards.map((card, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.textContent}>
              <h3 className={styles.chatTitle}>{card.title}</h3>
              <p className={styles.description}>{card.desc}</p>
              <button className={styles.ctaButton}>{card.button}</button>
            </div>

            <div className={styles.imageContainer}>
              <img
                src={whatsappImage}
                alt="WhatsApp Chat"
                className={styles.whatsappImage}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Whatsapp;
