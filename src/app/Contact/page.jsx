"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import styles from "./index.module.css";
import { Box, Button, Grid, TextField } from "@mui/material";
import CountrySelect from "@/components/CountrySelect";

const Contact = () => {
  return (
    <>
      <Box className={styles.ContactAndText}>
        <Typography variant="h3">Contact Us</Typography>
        <p>Swing by for a cup of coffee, or leave us a message</p>
      </Box>

      <Grid container>
        <Grid item xs={12} md={6} lg={5} sx={{ padding: " 0 1rem 0 1rem" }}>
          <Box>
            <Card sx={{ maxWidth: 680 }} className={styles.photo}>
              <CardMedia
                component="img"
                height="450"
                image="https://media.istockphoto.com/id/501860305/photo/small-town-main-street.jpg?s=612x612&w=0&k=20&c=K5XEDmnilpD_BfI8MVeltirOrNOvmmD9-bQOrumgxUM="
                alt=""
              />
            </Card>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          lg={7}
          sx={{ paddingRight: "1rem", paddingLeft: "1rem" }}
        >
          <p>First Name</p>
          <TextField fullWidth label="Your name.." id="fullWidth" />
          <p>Last Name</p>
          <TextField fullWidth label="Your last name.." id="fullWidth" />
          <p>Country</p>
          <CountrySelect />

          <p>Subject</p>
          <TextField
            fullWidth
            label="Write something.."
            id="message"
            multiline
            rows={10}
          />
          <Button
            variant="contained"
            sx={{ margin: "10px 10px", bgcolor: "#04A96C" }}
            className={styles.btn}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;
