import starLogo from "../assets/Logo.svg"
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <a href="#"><img src={starLogo} alt="" className={styles.logo} /></a>
        <nav className={styles.anchorNav}>
          <a href="#aboutUs" className={`${styles.anchor} desktop-only`}>Sobre nós</a>
          <a href="#service" className={`${styles.anchor} desktop-only`}>Vantagens</a>
          <a href="#pricing" className={`${styles.anchor} desktop-only`}>Planos e preços</a>
          <a href="http://wa.me/351916037561" className={styles.button} target="_blank">Agende agora</a>
        </nav>
      </div>
    </header>
  )
}