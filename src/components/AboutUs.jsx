import mockup from "../assets/hand.png"
import styles from "./AboutUs.module.css";

export function AboutUs() {
  return (
    <section className={styles.section}>
      <div className={`container even-columns ${styles.sectionContainer}`}>
      <div className={styles.text}>
        <span className={styles.span}>Nosso serviço</span>
        <h2 className={styles.heading}>O espaço perfeito para cuidar da sua Beleza</h2>
        <p className={styles.paragraph}>Na Star Beauty, oferecemos serviços de beleza especialmente pensados para realçar sua beleza natural. Utilizamos técnicas modernas e produtos de alta qualidade para garantir resultados impecáveis e personalizados.
        Com opções que incluem epilação de precisão, lifting de pestanas e hidratação labial, você pode escolher entre nossos pacotes exclusivos ou personalizar o seu tratamento. Na Star Beauty, o foco é em proporcionar uma experiência única, para que você se sinta mais confiante e radiante.</p>
      </div>
      <img src={mockup} alt="" className={styles.imageService}/>
      </div>
    </section>
  )
}