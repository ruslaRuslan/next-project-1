import Image from "next/image";
import styles from "./index.module.css";
import { Button } from "@mui/material";
export default function Home({}) {
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

      <div className={styles.container2}>
        <div class={styles.verticalLine}>
          <p className={styles.liOne}>Are you experlencing</p>
          <ul>
            <li>Первый пункт</li>
            <li>Второй пункт</li>
            <li>Третий пункт</li>
          </ul>
        </div>
        <div className={styles.text}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            neque deleniti nulla dolorem quos labore officia rem molestiae
            similique ut, possimus, porro tempora fuga earum fugiat cumque
            ratione? Vero, praesentium! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Suscipit tempore facere, quasi architecto
            consectetur optio in numquam beatae veniam soluta asperiores nam
            dolore corrupti sequi non assumenda ut saepe nobis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            neque deleniti nulla dolorem quos labore officia rem molestiae
            similique ut, possimus, porro tempora fuga earum fugiat cumque
            ratione? Vero, praesentium! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Suscipit tempore facere, quasi architecto
            consectetur optio in numquam beatae veniam soluta asperiores nam
            dolore corrupti sequi non assumenda ut saepe nobis.
          </p>
        </div>
      </div>
    </>
  );
}
