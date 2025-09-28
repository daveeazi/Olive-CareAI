/** @format */

import styles from './Navbar.module.css'
import burgerIcon from '../../assets/burger.svg' // import the SVG

function Navbar() {
  return (
    <nav className={styles.navbar}>
      {/* Logo/Brand */}
      <div className={styles.logo}>OliveCareAI</div>

      {/* Burger Menu Button */}
      <button className={styles.menuButton}>
        <img src={burgerIcon} alt="Menu" className={styles.menuIcon} />
      </button>
    </nav>
  )
}

export default Navbar
