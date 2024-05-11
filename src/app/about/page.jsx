"use client";

import Link from "next/link";
import styles from "./index.module.css";
import Image from "next/image";
import { Button } from "@mui/material";

const AboutPage = () => {
  return (
    <>
      <div className={styles.H1p}>
        <h1>About Us Page</h1>
        <p>Some text who we are and what we do</p>
        <p>
          Resize the browswer window to see that page is responsive by the way
        </p>
      </div>
      <h3 className={styles.OurTeam}>Our Team</h3>
      <div className={styles.threeCardAbout}>
        <div className={styles.card1}>
          <Image
            src="https://marketinghousemedia.com/wp-content/uploads/2019/11/Blog-Post-Free-Stock-Images-River-Mountain-Forest-1080x675-1200x900.jpg"
            alt=""
            width={400}
            height={350}
          />

          <p>Ceo & Founder</p>
          <p>Some text that describes me lorem ipsum ipsum lorem</p>
          <Link href="#">jane@example.com</Link>
          <br />
          <Button variant="contained" className={styles.btnContact}>
            Contact
          </Button>
        </div>

        <div className={styles.card1}>
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCXR4zVgiiTcKXgDmYkIJX19ACX92KVhOEYA&s"
            alt=""
            width={400}
            height={350}
            loading="lazy"
          />
          <p>Ceo & Founder</p>
          <p>Some text that describes me lorem ipsum ipsum lorem</p>
          <Link href="#">jane@example.com</Link>
          <br />
          <Button variant="contained" className={styles.btnContact}>
            Contact
          </Button>
        </div>

        <div className={styles.card3}>
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgXLdJ523pCWBv334jUnOjSWL29NpygaRPoA&s"
            alt=""
            width={400}
            height={350}
          />
          <p>Ceo & Founder</p>
          <p>Some text that describes me lorem ipsum ipsum lorem</p>
          <Link href="#">jane@example.com</Link>
          <br />
          <Button variant="contained" className={styles.btnContact}>
            Contact
          </Button>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
