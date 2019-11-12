import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

function Splash() {
  return (
    <Grid
      alignItems="center"
      container
      direction="column"
      justify="center"
      spacing={3}
      style={{ minHeight: "100vh" }}
    >
      <Grid item>
        <Typography variant="h2">Welcome</Typography>
      </Grid>
      <Grid item>
        <CircularProgress />
      </Grid>
    </Grid>
  );
}

export default Splash;
