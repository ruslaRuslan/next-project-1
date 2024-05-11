"use client";
import { Button, IconButton } from "@mui/material";
import styles from "./index.module.css";

const AboutPage = ({}) => {
  return (
    <>
      <div className={styles.H1p}>
        <h1>About Us Page</h1>
        <p>Some text who we are and what we do</p>
        <p>
          Resize the browswer window to see that page is responsive by the way
        </p>
      </div>
    </>
  );
};

export default AboutPage;
