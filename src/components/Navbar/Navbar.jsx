/** @format */

import styles from './Navbar.module.css';
import burgerIcon from '../../assets/burger.svg'; // Import the SVG

function Navbar() {
  return (
    <nav className={styles.navbar}>
      {/* Logo/Brand with centered olive image and text */}
      <div className={styles.logo}>
        <span>OliveCareAI</span>
      </div>
      {/* Burger Menu Button */}
      <button className={styles.menuButton}>
        <img src={burgerIcon} alt="Menu" className={styles.menuIcon} />
      </button>
    </nav>
  );
}

export default Navbar;