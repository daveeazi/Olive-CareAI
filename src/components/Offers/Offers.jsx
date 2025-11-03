/** @format */
import styles from './Offers.module.css';
import predictive from '../../assets/predictive.svg';
import instant from '../../assets/instant.svg';
import smart from '../../assets/smart.svg';
import lab from '../../assets/lab.svg';
import doctor from '../../assets/doctor.svg';
import secure from '../../assets/secure.svg';

const Offers = () => {
  const offers = [
    {
      title: 'Predicative Analysis',
      description:
        'AI can analyze patient data in real-time, allowing for early identification of potential health risks.',
      icon: predictive,
    },
    {
      title: 'Instant WhatsApp Consultations',
      description:
        'Get connected to certified doctors instantly through WhatsApp. OliveCare AI simplifies healthcare access no apps, no waiting rooms, just a quick chat away from medical help.',
      icon: instant,
    },
    {
      title: 'Smart Symptom Checker',
      description:
        'Describe your symptoms and let OliveCare’s intelligent assistant provide possible causes, urgency level, and the right doctor to speak with saving time and ensuring accurate care.',
      icon: smart,
    },
    {
      title: 'Lab Result Interpretation',
      description:
        'Upload your lab results, and the AI will translate medical jargon into clear, easy to understand explanations, highlighting any abnormal values and suggesting next steps.',
      icon: lab,
    },
    {
      title: 'Doctor Availability',
      description:
        'Our system automatically matches patients with available doctors and sends instant notifications. Doctors can manage sessions directly from their dashboard or WhatsApp.',
      icon: doctor,
    },
    {
      title: 'Secure Health Records',
      description:
        'Your data is protected with advanced encryption and privacy protocols. OliveCare ensures that every consultation, test result, and chat stays confidential and accessible only to you and your doctor.',
      icon: secure,
    },
  ];

  return (
    <section className={styles.offersSection}>
      {/* Ellipse Offer Title */}
      <div className={styles.ellipse}>
        <p>Offers</p>
      </div>
      {/* Main Headings */}
      <h2 className={styles.mainHeading}>
        Bringing healthcare <span>to you</span>
      </h2>
      <p className={styles.subText}>
        Get your lab results analyzed and talk <br /> to doctors
      </p>
      {/* Offers Grid */}
      <div className={styles.offersGrid}>
        {offers.map((offer, index) => (
          <div key={index} className={styles.offerCard}>
            <div className={styles.iconContainer}>
              <img src={offer.icon} alt={`${offer.title} icon`} />
            </div>
            <div className={styles.offerText}>
              <h3>{offer.title}</h3>
              <p>{offer.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offers;