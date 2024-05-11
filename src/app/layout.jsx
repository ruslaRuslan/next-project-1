import Link from "next/link";
import styles from "./index.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import YouTubeIcon from "@mui/icons-material/YouTube";
import IconButton from "@mui/material/IconButton";

export const metadata = {
  title: "Esas title",
  description: "Bu esas proyektir",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <div className={styles.box}>
          <Link href="/" passHref>
            Home
          </Link>
          <Link href="/about" passHref>
            About
          </Link>
          <Link href="/contact" passHref>
            Contact
          </Link>
          <Link href="/users" passHref>
            Users
          </Link>
          <Link href="/single" passHref>
            Single User
          </Link>
        </div>
        {children}
        <div className={styles.box2}>
          <IconButton >
            <FacebookIcon />
          </IconButton>
          <IconButton>
            <InstagramIcon className={styles.instagram} />
          </IconButton>
          <IconButton>
            <TwitterIcon className={styles.twitter} />
          </IconButton>
          <IconButton>
            <GoogleIcon className={styles.google} />
          </IconButton>
          <IconButton>
            <YouTubeIcon className={styles.youtube} />
          </IconButton>
          <div className={styles.bottoms}>
            <Link href="./home">Home</Link>
            <Link href="./home">News</Link>
            <Link href="./home">About</Link>
            <Link href="./home">Contctact</Link>
            <Link href="./home">Our Team</Link>
          </div>
        </div>
        <div className={styles.endFooter}>
          <p>Copyrught @2022; Design by FAHEEM</p>
        </div>
      </body>
    </html>
  );
}
