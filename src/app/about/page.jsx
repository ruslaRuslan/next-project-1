"use client"
import { Button, IconButton } from "@mui/material";
import styles from "./index.module.css";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import YouTubeIcon from '@mui/icons-material/YouTube';

const AboutPage = () => {
  return (
    <>
      <div>AboutPage</div>
      <IconButton>
      <AccessAlarmIcon />
      </IconButton>
      <IconButton onClick={() => {
        alert('Ruslan')
      }}>
      <YouTubeIcon style={{color: "red"}} />
      </IconButton>
      <Button className={styles.btn} variant="outlined">
        bura klikle
      </Button>
      <Button variant="outlined">bura klikle</Button>
    </>
  );
};

export default AboutPage;
