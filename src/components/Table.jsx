import styles from "./Table.module.css";
import lip from "../assets/lip.svg";
import epilacao from "../assets/epilacao.svg";
import pestanas from "../assets/pestanas.svg";
import sobrancelhas from "../assets/sobrancelha.svg";

export function Table() {
  return (
    <div className={`container`}>
      <table className={styles.table}>
        <thead className={styles.tHead}>
          <tr>
            <th>Epilação</th>
            <th>Valor</th>
            <th>Tempo (minutos)</th>
          </tr>
        </thead>
        <tbody className={styles.tBody}>
          <tr>
            <td>Sobrancelhas</td>
            <td>€ 11</td>
            <td>20</td>
          </tr>
          <tr>
            <td>Meio das Sobrancelhas</td>
            <td>€ 6</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Buço</td>
            <td>€ 6</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Queixo</td>
            <td>€ 5</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Pescoço</td>
            <td>€ 8</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Pack Rosto Completo</td>
            <td>€ 26</td>
            <td>60</td>
          </tr>
          <tr>
            <td>Pack Sobrancelha e Buço</td>
            <td>€ 16</td>
            <td>30</td>
          </tr>
        </tbody>
      </table>

      <table className={styles.table}>
        <thead className={styles.tHead}>
          <tr>
            <th>Sobrancelhas</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody className={styles.tBody}>
          <tr>
            <td>Brow Lamination</td>
            <td>€ 25</td>
            <td>45</td>
          </tr>
          <tr>
            <td>Tintura de Sobrancelha</td>
            <td>€ 15</td>
            <td>30</td>
          </tr>
          <tr>
            <td>Henna</td>
            <td>€ 15</td>
            <td>30</td>
          </tr>
          <tr>
            <td>Pack Tintura com Epilação de Sobrancelhas</td>
            <td>€ 23</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Pack Henna com Epilação de Sobrancelha</td>
            <td>€ 23</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Pack Brow Lamination com Epilação</td>
            <td>€ 33</td>
            <td>60</td>
          </tr>
          <tr>
            <td>Pack Brow Lamination com Tintura de Sobrancelhas e Epilação</td>
            <td>€ 45</td>
            <td>80</td>
          </tr>
        </tbody>
      </table>

      <table className={styles.table}>
        <thead className={styles.tHead}>
          <tr>
            <th>Lábios</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody className={styles.tBody}>
          <tr>
            <td>Spa Labial</td>
            <td>€ 18</td>
            <td>25</td>
          </tr>
          <tr>
            <td>Hidragloss Lips</td>
            <td>€ 25</td>
            <td>45</td>
          </tr>
          <tr>
            <td>Hidragloss Lips Color</td>
            <td>€ 35</td>
            <td>60</td>
          </tr>
        </tbody>
      </table>

      <table className={styles.table}>
        <thead className={styles.tHead}>
          <tr>
            <th>Pestanas</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody className={styles.tBody}>
          <tr>
            <td>Lifting</td>
            <td>€ 25</td>
            <td>60</td>
          </tr>
          <tr>
            <td>Lifting com Tintura</td>
            <td>€ 35</td>
            <td>75</td>
          </tr>
          <tr>
            <td>Tintura de Pestanas</td>
            <td>€ 15</td>
            <td>15</td>
          </tr>
          <tr>
            <td>Extensão de Pestanas</td>
            <td>€ 35</td>
            <td>150</td>
          </tr>
          <tr>
            <td>Remoção de Pestanas não colocadas na Star Beauty</td>
            <td>€ 12</td>
            <td>20</td>
          </tr>
          <tr>
            <td>Remoção de Pestanas colocadas na Star Beauty</td>
            <td>€ 6</td>
            <td>20</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}