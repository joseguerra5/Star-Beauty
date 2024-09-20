import styles from "./Footer.module.css";

import Logo from "../assets/Logo.svg";
import tikTok from "../assets/tiktok.svg";
import instagram from "../assets/instagram.svg";
// import whatsapp from "../assets/whatsapp.svg";
// import trustPilot from "../assets/trustPilot.svg";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContainer} container`}>
        <section className={`even-columns ${styles.section}`}>
          <a href="#"><img src={Logo} alt="Star Beauty Logo" className={styles.logoFooter} /></a>
          <nav className={`${styles.nav} even-columns`}>
            <ul role="list" className={styles.ul}>
              <li className={styles.titleLi}>Serviço</li>
              <li>
                <a href="#features">Vantagens</a>
              </li>
              <li>
                <a href="#pricing">Preços</a>
              </li>
              <li>
                <a href="#download">Agendar</a>
              </li>
            </ul>

            <ul role="list" className={styles.ul}>
              <li className={styles.titleLi}>Empresa</li>
              <li>
                <a href="#about">Sobre nós</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
            </ul>

            <ul role="list" className={styles.ul}>
              <li className={styles.titleLi}>Legal</li>
              <li>
                <a href="#">Termos de uso</a>
              </li>
              <li>
                <a href="#">Política de privacidade</a>
              </li>
            </ul>
          </nav>
        </section>
        
        <section className={`even-columns ${styles.socialContainer}`}>
          <div className={styles.socialIcons}>
            <a href="#" className={styles.social} aria-label="TikTok"><img src={tikTok} alt="TikTok" /></a>
            <a href="https://instagram.com/afiadoeu" className={styles.social} aria-label="Instagram"><img src={instagram} alt="Instagram" /></a>
            {/* Adicione links e ícones reais para Twitter e Discord, se necessário */}
            <a href="#" className={styles.social} aria-label="Twitter"></a>
            <a href="#" className={styles.social} aria-label="Discord"></a>
          </div>
          <span>©2024 Star Beauty.</span>
        </section>
      </div>
    </footer>
  );
}
