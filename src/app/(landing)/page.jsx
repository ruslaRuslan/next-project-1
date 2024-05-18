import * as React from "react";
import Image from "next/image";
import styles from "./index.module.css";
import { Button, Grid } from "@mui/material";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

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

      <Typography className={styles.help} variant="h4">
        How we can help
      </Typography>

      <Grid container gap={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ maxWidth: 445 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="440"
                image="https://media.istockphoto.com/id/1248448159/photo/villefranche-sur-mer-village-in-france.jpg?s=612x612&w=0&k=20&c=sGQxaH_1v9lgHy9Cq5RMAx3WPPyI1sL84paxr0f3UoI="
                alt=""
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Amsterdam
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ maxWidth: 445 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="440"
                image="https://media.istockphoto.com/id/1146661437/video/nice-france-gimbal-sunrise-shot-of-street-with-color-houses-in-old-town-of-nice-france-4k.jpg?s=640x640&k=20&c=JU0Sv0nbUv9PfMc01LxC1zHTBv8-msYOblTfNOnDGqU="
                alt=""
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  America
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ maxWidth: 445 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="440"
                image="https://media.istockphoto.com/id/640923722/photo/view-of-nice-france.jpg?s=2048x2048&w=is&k=20&c=ReaUHhdsu8bo1e4y5AtCs0PMMw6wJA-kNoTZ6x4gkjo="
                alt=""
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Niderland
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>

      <div className={styles.endButton}>
        <Button variant="contained">Explore Our Services</Button>
      </div>
    </>
  );
}
