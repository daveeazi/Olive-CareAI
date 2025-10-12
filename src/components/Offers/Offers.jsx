/** @format */
import styles from './Offers.module.css';
import toggleIcon from '../../assets/toggle.svg';

const Offers = () => {
  const offers = Array(6).fill({
    title: 'Predicative Analysis',
    description:
      'AI can analyze patient data in real-time, allowing for early identification of potential health risks.',
  });

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
              <img src={toggleIcon} alt="Toggle Icon" />
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
