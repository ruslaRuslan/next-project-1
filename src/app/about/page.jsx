import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import styles from "./index.module.css";
import { Box, Button, Grid } from "@mui/material";

const AboutPage = () => {
  return (
    <>
      <Box className={styles.H1p}>
        <Typography variant="h4">About Us Page</Typography>
        <p>Some text who we are and what we do</p>
        <p>
          Resize the browswer window to see that page is responsive by the way
        </p>
      </Box>
      <h3 className={styles.OurTeam}>Our Team</h3>

      <Grid container justifyContent="center" gap={2}>
        <Grid className={styles.threeCard} item xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ maxWidth: 400 }}>
            <CardMedia
              component="img"
              height="350"
              image="https://images.ctfassets.net/i3kf1olze1gn/6fNQ8Vd9s5S5DB8JcHkDis/a5a4b8daf60b791a200567422f1fc50e/Nice_reasons_to_visit_nice.jpg"
              alt=""
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Jane Doe
              </Typography>
              <p>Some text that describes me lorem ipsum ipsum lorem</p>
              <Link className={styles.email} href="#">
                jane@example.com
              </Link>
            </CardContent>
            <Button
              sx={{
                width: "94%",
                display: "block",
                margin: "0 auto",
                marginBottom: "10px",
                borderRadius: 0,
                backgroundColor: "#000",
              }}
              variant="contained"
            >
              Contact
            </Button>
          </Card>
        </Grid>

        <Grid className={styles.threeCard} item xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ maxWidth: 400 }}>
            <CardMedia
              component="img"
              height="350"
              image="https://wanderingcarol.com/wp-content/uploads/2022/05/things-to-do-in-nice-france.jpg"
              alt=""
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Mike Ross
              </Typography>
              <p>Some text that describes me lorem ipsum ipsum lorem</p>
              <Link className={styles.email} href="#">
                mike@example.com
              </Link>
            </CardContent>
            <Button
              sx={{
                width: "94%",
                display: "block",
                margin: "0 auto",
                marginBottom: "10px",
                borderRadius: 0,
                backgroundColor: "#000",
              }}
              variant="contained"
            >
              Contact
            </Button>
          </Card>
        </Grid>
        <Grid className={styles.threeCard} item xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ maxWidth: 400 }}>
            <CardMedia
              component="img"
              height="350"
              image="https://a.cdn-hotels.com/gdcs/production94/d42/d1f6ab55-f7dd-4cef-9d0f-bf6d3a742491.jpg?impolicy=fcrop&w=800&h=533&q=medium"
              alt=""
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                John Doe
              </Typography>
              <p>Some text that describes me lorem ipsum ipsum lorem</p>
              <Link className={styles.email} href="#">
                john@example.com
              </Link>
            </CardContent>
            <Button
              sx={{
                width: "94%",
                display: "block",
                margin: "0 auto",
                marginBottom: "10px",
                borderRadius: 0,
                backgroundColor: "#000",
              }}
              variant="contained"
            >
              Contact
            </Button>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default AboutPage;
