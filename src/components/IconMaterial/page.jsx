"use client"

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import YouTubeIcon from "@mui/icons-material/YouTube";
import IconButton from "@mui/material/IconButton";
import styles from "./index.module.css";
import Link from "next/link";


const IconMaterial = ({}) => {
  return (
    <>

      <div className={styles.box2}>
        <IconButton>
          <FacebookOutlinedIcon className={styles.facebook}/>
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
      </div></>
  )
}

export default IconMaterial