import { Swiper, SwiperSlide } from 'swiper/react';

import iconCheck from "../assets/Check.svg"

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Autoplay, Pagination, Navigation } from 'swiper/modules';
import styles from "./Pricing.module.css";


export function Pricing() {
  return (

    <>
      <div className={styles.containerColor}>
        <header className={styles.header}>
          <span className={styles.headerSpan}>Planos e preços</span>
          <h2 className={styles.headerHeading}>Serviços em destaque</h2>
        </header>
        <Swiper
          className={`container mySwiper ${styles.cardSwiper}`}
          effect={'coverflow'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 500,
            modifier: 1,
            slideShadows: false
          }}
          watchSlidesProgress={true}
          pagination={true}
          centeredSlides={true}
          loop={true}
          modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
          Pagination={{
            clickable: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 1,
            },
            1280: {
              slidesPerView: 3,
            }
          }}
        >
          <SwiperSlide className={styles.cardSwiperSlide}>
            <div className={styles.cardBorder}>
              <div className={styles.cardContainer}>
                <h3 className={styles.heading}>Pack Sobrancelha e buço</h3>
                <p className={styles.paragraph}>
                  Ideal para quem está exausto de lidar pelos no rosto</p>
                <span className={styles.pricing}>€ 16 <small>,50</small></span>
                <button className={styles.button}>Agende agora</button>
                <div className={styles.separator}></div>
                <ul role="list" className={styles.ulContainer}>
                  <li className={styles.item}><img src={iconCheck}>
                  </img>Remove pelos de grandes áreas rapidamente e de maneira uniforme</li>
                  <li className={styles.item}><img src={iconCheck}>
                  </img>Pode ser menos doloroso do que a cera ou pinça, tornando o processo mais confortável.</li>
                  <li className={styles.item}><img src={iconCheck}>
                  </img>Proporciona uma reução mais prolongada dos pelos.</li>
                </ul>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.cardSwiperSlide}>
            <div className={styles.cardBorder}>
              <div className={styles.cardContainer}>
                <h3 className={styles.heading}>Hidragloss Lips</h3>
                <p className={styles.paragraph}>
                  Ideal para quem está exausto de ter os lábios secos</p>
                <span className={styles.pricing}>€ 25 <small>,50</small></span>
                <button className={styles.button}>Agende agora</button>
                <div className={styles.separator}></div>
                <ul role="list" className={styles.ulContainer}>
                  <li className={styles.item}><img src={iconCheck}>
                  </img>Hidrata profundamente os lábios</li>
                  <li className={styles.item}><img src={iconCheck}>
                  </img>Promove brilho intenso</li>
                  <li className={styles.item}><img src={iconCheck}>
                  </img>Protege contra ressecamento</li>
                </ul>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.cardSwiperSlide}>
            <div className={styles.cardBorder}>
              <div className={styles.cardContainer}>
                <h3 className={styles.heading}>Lifting com Tintura</h3>
                <p className={styles.paragraph}>
                  Ideal para quem está exausto de passar rimel todos os dias</p>
                <span className={styles.pricing}>€ 35 <small>,50</small></span>
                <button className={styles.button}>Agende agora</button>
                <div className={styles.separator}></div>
                <ul role="list" className={styles.ulContainer}>
                  <li className={styles.item}><img src={iconCheck}>
                  </img>efeito de alongamento.</li>
                  <li className={styles.item}><img src={iconCheck}>
                  </img>Proporciona volume e comprimento imediato</li>
                  <li className={styles.item}><img src={iconCheck}>
                  </img>olhar mais marcante.</li>
                </ul>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.cardSwiperSlide}>
            <div className={styles.cardBorder}>
              <div className={styles.cardContainer}>
                <h3 className={styles.heading}>Extensão de pestanas</h3>
                <p className={styles.paragraph}>
                  Ideal para quem está exausto de lidar pelos no rosto</p>
                <span className={styles.pricing}>€ 35 <small>,50</small></span>
                <button className={styles.button}>Agende agora</button>
                <div className={styles.separator}></div>
                <ul role="list" className={styles.ulContainer}>
                  <li className={styles.item}><img src={iconCheck}>
                  </img>Efeito de extensão duradouro</li>
                  <li className={styles.item}><img src={iconCheck}>
                  </img>Proporciona volume e comprimento imediato</li>
                  <li className={styles.item}><img src={iconCheck}>
                  </img>Personalização: Disponível em várias curvaturas e comprimentos</li>
                </ul>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.cardSwiperSlide}>
            <div className={styles.cardBorder}>
              <div className={styles.cardContainer}>
                <h3 className={styles.heading}>Pack Tintura com Epilação de Sobrancelhas</h3>
                <p className={styles.paragraph}>
                  Ideal para quem está exausto de lidar pelos no rosto</p>
                <span className={styles.pricing}>€ 23 <small>,50</small></span>
                <button className={styles.button}>Agende agora</button>
                <div className={styles.separator}></div>
                <ul role="list" className={styles.ulContainer}>
                  <li className={styles.item}><img src={iconCheck}>
                  </img>Garante uma coloração uniforme e natural</li>
                  <li className={styles.item}><img src={iconCheck}>
                  </img>A tintura dura cerca de 4 semanas  </li>
                  <li className={styles.item}><img src={iconCheck}>
                  </img>Define melhor as sobrancelhas</li>
                </ul>
              </div>
            </div>
          </SwiperSlide>


        </Swiper>
      </div>

    </>



  )
}