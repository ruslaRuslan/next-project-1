"use client";
import Image from "next/image";
import styles from "./index.module.css";
import { TextField } from "@mui/material";
import CountrySelect from "@/components/CountrySelect";

const Contact = () => {
  return (
    <>
      <div className={styles.ContactAndText}>
        <h1>Contact Us</h1>
        <p>Swing by for a cup of coffee, or leave us a message</p>
      </div>
      <div className={styles.contactContainer}>
        <Image
          src="https://media.istockphoto.com/id/501860305/photo/small-town-main-street.jpg?s=612x612&w=0&k=20&c=K5XEDmnilpD_BfI8MVeltirOrNOvmmD9-bQOrumgxUM="
          alt=""
          width={550}
          height={350}
          className={styles.PhotoContact}
        />
        <div className={styles.inputContainer}>
          <p>First Name</p>
          <TextField id="filled-basic" label="Your name..." variant="filled" />

          <p>Last Name</p>
          <TextField
            id="filled-basic"
            label="Your last name..."
            variant="filled"
          />

          <p>Country</p>
          <CountrySelect />

          <p>Subject</p>
          <TextField
            id="filled-basic"
            label="Write something.."
            variant="filled"
            size="large"
            className={styles.subject}
          />
        </div>
      </div>
    </>
  );
};

export default Contact;
