import * as React from "react";
import styles from "./index.module.css";
import { Box, Button, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function Home() {
  return (
    <>
      <Grid container>
        <Grid xs={12} md={6} lg={5}>
          <Card style={{ borderRadius: "0px" }}>
            <CardMedia
              style={{ border: "0 solid" }}
              component="img"
              height="500"
              image="https://www.jedacademy.az/image/teacher/891676291256.jpg"
              alt=""
            />
          </Card>
        </Grid>

        <Grid xs={12} md={6} lg={7}>
          <Card
            className={styles.center}
            style={{
              background: "#607070",
              height: "100%",
              color: "#fff",
              borderRadius: "0px",
            }}
            height="500"
          >
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className={styles.center}
              >
                Ali Muelim <br /> kursun bas direktoru ve telimcisi
              </Typography>
              <Button className={styles.button} variant="contained">
                Contained
              </Button>
            </CardContent>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
              nemo Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Inventore maiores amet ex nisi odio aliquid iusto. Ipsa debitis
            </p>
          </Card>
        </Grid>
      </Grid>

      <Box className={styles.container2}>
        <div className={styles.verticalLine}>
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
      </Box>

      <Typography className={styles.help} variant="h4">
        How we can help
      </Typography>

      <Grid
        margin="5px"
        gap={2}
        container
        justifyContent="center"
        style={{ padding: "0 10px 0 11px" }}
        width="auto"
      >
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
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className={styles.center}
                >
                  Italiya
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
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className={styles.center}
                >
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
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className={styles.center}
                >
                  Niderland
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>

      <Box className={styles.endButton}>
        <Button variant="contained">Explore Our Services</Button>
      </Box>
    </>
  );
}
