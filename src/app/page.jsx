import Image from "next/image";
import styles from "./index.module.css";
import { Button } from "@mui/material";
export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Image
          className={styles.image}
          src="https://www.jedacademy.az/image/teacher/891676291256.jpg"
          alt=""
          width={500 * 0.5}
          height={300}
        />

        <div className={styles.info}>
          <h3>
            Ali Muelim <br /> kursun bas direktoru ve telimcisi
          </h3>
          <Button className={styles.button} variant="contained">
            Contained
          </Button>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt nemo
          </p>
        </div>
      </div>

      <div class={styles.verticalLine}>
        <ul>
          <li className={styles.liOne}>Are you experlencing</li>
          <li>Первый пункт</li>
          <li>Второй пункт</li>
          <li>Третий пункт</li>
          <li>Третий пункт</li>
          <li>Третий пункт</li>
          <li>Тbhgvfcvgbvf</li>
          <li>Тbhgvfcvgbvf</li>
          <li>Тbhgvfcvgbvf</li>
          <li>Тbhgvfcvgbvf</li>
          <li>Тbhgvfcvgbvf</li>
          <li>Тbhgvfcvgbvf</li>
          <li>Тbhgvfcvgbvf</li>
        </ul>
      </div>
    </>
  );
}
