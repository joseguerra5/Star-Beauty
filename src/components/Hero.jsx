import profilePic from "../assets/profile.png"
import styles from "./Hero.module.css";

export function Hero() {
  return(
    <section className={`${styles.profileContainer}`}>
      <div className={`container even-columns ${styles.profileContent}`}>
      <div className={styles.profile}>

        <img src={profilePic} alt="" className={styles.profilePic}/>
      </div>
      <div className={`even-columns ${styles.titleHero}`}>
        <h1 className={styles.h1Hero}>Estar sempre linda, com a Star Beauty</h1>
        <p className={styles.paragraphHero}>Agende sua transformação na Star Beauty e brilhe com confiança. ✨</p>
        <div className={styles.buttonContainer}>
          <a href="#pricing" className={styles.pricing}>Ver preços</a>
          <a href="http://wa.me/351916037561" className={styles.schedule} target="_blank">Agende agora</a>
        </div>
      </div>
      </div>
    </section>
  )
}