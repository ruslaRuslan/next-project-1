import axios from "axios";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import Link from "next/link";

const url = "https://jsonplaceholder.typicode.com/users/";

export default async function index({ params }) {
  const { data } = await axios.get(url + params.id);

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ height: "100vh" }}
    >
      <Card
        sx={{
          border: "1px solid #000",
          background: "#000",
          color: "#fff",
        }}
      >
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <p style={{ textAlign: "center" }}>
                <b>№ {data.id}</b>
              </p>
              <p>
                <b>name: </b>
                {data.name}
              </p>
              <p>
                <b>username: </b>
                {data.username}
              </p>
              <p>
                <b>email: </b>
                <Link href="">{data.email}</Link>
              </p>
              <p>
                <b>street: </b>
                {data.address.street}
              </p>
              <p>
                <b>suite: </b>
                {data.address.suite}
              </p>
              <p>
                <b>city: </b>
                {data.address.city}
              </p>
              <p>
                <b>zipcode: </b>
                {data.address.zipcode}
              </p>
              <p>
                <b>lat: </b>
                {data.address.geo.lat}
              </p>
              <p>
                <b>lng: </b>
                {data.address.geo.lng}
              </p>
            </Typography>
            <Typography variant="body2" color="text.secondary"></Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
