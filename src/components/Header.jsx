import starLogo from "../assets/Logo.svg"
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <a href="#"><img src={starLogo} alt="" className={styles.logo} /></a>
        <nav className={styles.anchorNav}>
          <a href="" className={`${styles.anchor} desktop-only`}>Sobre nós</a>
          <a href="" className={`${styles.anchor} desktop-only`}>Vantagens</a>
          <a href="" className={`${styles.anchor} desktop-only`}>Planos e preços</a>
          <button className={styles.button}>Agende agora</button>
        </nav>
      </div>
    </header>
  )
}