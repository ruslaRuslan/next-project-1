import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/users/";

export default async function index({ params }) {
  const { data } = await axios.get(url + params.id);

  return (
    <Card
      sx={{
        maxWidth: 345,
        border: "1px solid #000",
      }}
    >
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <p>{id}</p>
            <p>{name}</p>
          </Typography>
          <Typography variant="body2" color="text.secondary"></Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
