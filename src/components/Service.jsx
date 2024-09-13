import epilation from "../assets/epilacao.svg"
import lash from "../assets/pestanas.svg"
import eyebrow from "../assets/sobrancelha.svg"
import lip from "../assets/lip.svg"
import styles from "./Service.module.css";

export function Service() {
  return (
    <section className={`${styles.serviceContainer}`}>
      <div className={`container even-columns ${styles.container}`}>

        <div className={styles.card1}>
          <div>
            <img src={epilation} alt="" />
            <h3 className={styles.heading}>Epilação</h3>
            <p>Remove os pelos indesejados com precisão e suavidade A epilação no Star Beauty proporciona uma pele lisa por mais tempo, com redução gradual do crescimento dos pelos.</p>
          </div>
          <img src="" alt="" className={`desktop-only ${styles.img}`} />
        </div>

        <div className={styles.card2}>
          <div>
            <img src={lash} alt="" />
            <h3 className={styles.heading}>Sobrancelhas</h3>
            <p>Realce o formato e a simetria do seu rosto Os procedimentos de sobrancelhas oferecem definição, durabilidade e personalização, para um visual marcante e natural.</p>
          </div>
        </div>

        <div className={styles.card3}>
          <div>
            <img src={lip} alt="" />
            <h3 className={styles.heading}>Lábios</h3>
            <p>Hidratação e volume para lábios naturalmente bonitos Tratamentos labiais que restauram a maciez e vitalidade dos lábios, com efeito duradouro e aparência saudável.</p>
          </div>
        </div>

        <div className={styles.card4}>
          <div>
            <img src={eyebrow} alt="" />
            <h3 className={styles.heading}>Pestanas</h3>
            <p>Olhar expressivo e realçado de forma natural Os tratamentos para pestanas proporcionam curvatura e alongamento duradouros, eliminando a necessidade de maquiagem diária.</p>
          </div>
          <img src="" alt="" className={`desktop-only ${styles.img}`} />
        </div>
      </div>
    </section>
  )
}