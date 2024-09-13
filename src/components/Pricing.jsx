import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCards, Autoplay, Pagination, Navigation } from 'swiper/modules';
import styles from "./Pricing.module.css";

export function Pricing() {
  return (
    <section className={`${styles.serviceContainer}`}>
      <div className={`container even-columns ${styles.container}`}>
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards, Autoplay, Pagination, Navigation]}
          className="mySwiper"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
        >
          <SwiperSlide className={styles.card}>
            <div class="card py-lg px-lg">
              <h3>Lâminas para Humano </h3>
              <p>
                Ideal para quem está exausto de lidar com máquinas que puxam os pelos</p>
              <zin-pricing>€ 8 <small>,95</small></zin-pricing>
              <a href="https://wa.me/message/NXS7M5FBRKHCI1" target="_blank" class="btn btn-md"
                aria-label="Afias agora"></a>
              <div class="separator"></div>
              <ul role="list" class="grip gap-1">
                <li>Cortes mais precisos e limpos</li>
                <li>Menos esforço e maior eficiência.</li>
                <li>Maior durabilidade da lâmina</li>
              </ul>
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.card}>
            <div class="card py-lg px-lg">
              <h3>Lâminas para Humano </h3>
              <p>
                Ideal para quem está exausto de lidar com máquinas que puxam os pelos</p>
              <zin-pricing>€ 8 <small>,95</small></zin-pricing>
              <a href="https://wa.me/message/NXS7M5FBRKHCI1" target="_blank" class="btn btn-md"
                aria-label="Afias agora"></a>
              <div class="separator"></div>
              <ul role="list" class="grip gap-1">
                <li>Cortes mais precisos e limpos</li>
                <li>Menos esforço e maior eficiência.</li>
                <li>Maior durabilidade da lâmina</li>
              </ul>
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.card}>
            <div class="card py-lg px-lg">
              <h3>Lâminas para Humano </h3>
              <p>
                Ideal para quem está exausto de lidar com máquinas que puxam os pelos</p>
              <zin-pricing>€ 8 <small>,95</small></zin-pricing>
              <a href="https://wa.me/message/NXS7M5FBRKHCI1" target="_blank" class="btn btn-md"
                aria-label="Afias agora"></a>
              <div class="separator"></div>
              <ul role="list" class="grip gap-1">
                <li>Cortes mais precisos e limpos</li>
                <li>Menos esforço e maior eficiência.</li>
                <li>Maior durabilidade da lâmina</li>
              </ul>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div class="card py-lg px-lg">
              <h3>Lâminas para Humano </h3>
              <p>
                Ideal para quem está exausto de lidar com máquinas que puxam os pelos</p>
              <zin-pricing>€ 8 <small>,95</small></zin-pricing>
              <a href="https://wa.me/message/NXS7M5FBRKHCI1" target="_blank" class="btn btn-md"
                aria-label="Afias agora"></a>
              <div class="separator"></div>
              <ul role="list" class="grip gap-1">
                <li>Cortes mais precisos e limpos</li>
                <li>Menos esforço e maior eficiência.</li>
                <li>Maior durabilidade da lâmina</li>
              </ul>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}