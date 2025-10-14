/** @format */
import React, { useState } from "react";
import styles from "./Faq.module.css";
import arrow1 from "../../assets/arrow1.svg";
import arrow2 from "../../assets/arrow2.svg";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What services do you offer ?",
      answer:
        "We offer services like consultation, first response, lab test analysis, AI symptom checker.",
    },
    {
      question: "What services do you offer ?",
      answer:
        "We offer services like consultation, first response, lab test analysis, AI symptom checker.",
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

              {isOpen && (
                <p id={`faq-answer-${idx}`} className={styles.answer}>
                  {item.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;
