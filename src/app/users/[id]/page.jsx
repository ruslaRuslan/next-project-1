import { CardActionArea, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Link from "next/link";
import { notFound } from "next/navigation";

const url = "https://jsonplaceholder.typicode.com/users/";

export default async function index({ params }) {
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
                <b>№ {user.id}</b>
              </p>
              <p>
                <b>name: </b>
                {user.name}
              </p>
              <p>
                <b>username: </b>
                {user.username}
              </p>
              <p>
                <b>email: </b>
                <Link href="">{user.email}</Link>
              </p>
              <p>
                <b>street: </b>
                {user.address.street}
              </p>
              <p>
                <b>suite: </b>
                {user.address.suite}
              </p>
              <p>
                <b>city: </b>
                {user.address.city}
              </p>
              <p>
                <b>zipcode: </b>
                {user.address.zipcode}
              </p>
              <p>
                <b>lat: </b>
                {user.address.geo.lat}
              </p>
              <p>
                <b>lng: </b>
                {user.address.geo.lng}
              </p>
            </Typography>
            <Typography variant="body2" color="text.secondary"></Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
