import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert
        sx={{
          backgroundColor: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "5rem 5rem",
        }}
        variant="filled"
        severity="error"
      >
        <Typography variant="filled" severity="error">
          ERROR not found !!!!!
        </Typography>
      </Alert>
    </Stack>
  );
};

export default NotFound;
