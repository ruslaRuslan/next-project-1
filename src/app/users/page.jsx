import axios from "axios";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import Link from "next/link";

const url = "https://jsonplaceholder.typicode.com/users";

export default async function index() {
  const { data } = await axios.get(url);
  return (
    <>
      {data.map(({ id, name }) => {
        return (
          <Box>
            <Card
              sx={{
                maxWidth: 345,
                border: "1px solid #000",
                display: "blok",
                margin: "0 auto",
              }}
            >
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <Link
                      href={`/users/${id}`}
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      {id}. {name}
                    </Link>
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  ></Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
        );
      })}
    </>
  );
}
