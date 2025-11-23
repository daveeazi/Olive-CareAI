/** @format */
import React, { useState } from "react";
import styles from "./Faq.module.css";
import arrow1 from "../../assets/arrow1.svg";
import arrow2 from "../../assets/arrow2.svg";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Whats OlivecareAI?",
      answer:
        "OlivecareAI is an AI-powered health assistant designed to provide personalized medical information and support. It allows you to ask questions about symptoms, medications, lifestyle tips, and more. With advanced AI technology it proffers instant responses to help you make informed decisions about your health.",
    },
    {
      question: "How long does it take to get a response?",
      answer:
        "We reply in less than 5 minutes.",
    },
    {
      question: "How do i get started?",
      answer:
        "Getting started is easy. Save +15026270621 on your phone. Then go to WhatsApp. Just type in your questions or concerns, and the assistant will provide helpful insights and recommendations",
    },
    {
      question: "What services do you offer ?",
      answer:
        "We offer services like consultation, first response, lab test analysis, AI symptom checker.",
    },
  ];

  const toggleFaq = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.titleSphere}>FAQs</div>

      <h2 className={styles.mainHeading}>
        Have questions? well we <br /> have answers
      </h2>

      <p className={styles.subHeading}>
        Get your lab results analyzed and talk <br /> to doctors
      </p>

      <div className={styles.faqList}>
        {faqs.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`${styles.faqBox} ${isOpen ? styles.active : ""}`}
            >
              {/* make the entire row clickable and accessible */}
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${idx}`}
                className={styles.questionRow}
                onClick={() => toggleFaq(idx)}
              >
                <p className={styles.question}>{item.question}</p>
                <img
                  src={isOpen ? arrow2 : arrow1}
                  alt={isOpen ? "collapse" : "expand"}
                  className={styles.arrowIcon}
                />
              </button>
              <div
                id={`faq-answer-${idx}`}
                className={`${styles.answerWrapper} ${isOpen ? styles.open : ""}`}
              >
                <p className={styles.answer}>{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;
