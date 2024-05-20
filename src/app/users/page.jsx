import axios from "axios";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Grid } from "@mui/material";
import Link from "next/link";

const url = "https://jsonplaceholder.typicode.com/users";

const { data } = await axios.get(url);

export default function index() {
  return (
    <>
      {data.map(({ id, name }) => {
        return (
          <Box>
            <Grid>
              <Card
                sx={{
                  maxWidth: 345,
                  border: "1px solid #000",

                  display: "blok", // почему не работают?  я хочу чтобы они все были на середине по вертикали на
                  margin: "0 auto", // почему не работают?  я хочу чтобы они все были на середине по вертикали на одной линии
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
            </Grid>
          </Box>
        );
      })}
    </>
  );
}
