import styles from "./Footer.module.css";

import lip from "../assets/lip.svg";
import epilacao from "../assets/epilacao.svg";
import pestanas from "../assets/pestanas.svg";
import sobrancelhas from "../assets/sobrancelha.svg";

export function Footer() {
  return (
    <footer>
      <div class="container py-xl grid">
        <section class="grid top">
          <span class="logo-footer">Afiado</span>
          <nav class="even-columns">
            <ul role="list" class="grid gap-1.5">
              <li class="title">Serviço</li>
              <li>
                <a href="#features">Vantagens</a>
              </li>
              <li>
                <a href="#pricing">Preços</a>
              </li>
              <li>
                <a href="#download">Afiar</a>
              </li>
            </ul>

            <ul role="list" class="grid gap-1.5">
              <li class="title">Empresa</li>
              <li>
                <a href="#about">Sobre nós</a>
              </li>
              <li>
                <a href="#about">Blog</a>
              </li>
            </ul>

            <ul role="list" class="grid gap-1.5">
              <li class="title">Legal</li>
              <li>
                <a href="#">Termos de uso</a>
              </li>
              <li>
                <a href="#">Pólitica de privacidade</a>
              </li>
            </ul>
          </nav>
        </section>
        <section class="bottom flex gap-1.5">
          <div class="flex gap-1 5">
            <a href="" class="social" aria-label="tiktok"></a>
            <a href="instagram.com/afiadoeu" class="social" aria-label="instagram"></a>
            <a href="" class="social" aria-label="twitter"></a>
            <a href="" class="social" aria-label="discord"></a>
          </div>
          <span class="copy">©2024 Afiado, Inc.</span>
        </section>
      </div>
    </footer>
  )
}



