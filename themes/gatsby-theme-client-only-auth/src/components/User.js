import React from "react";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import withAuthRedirect from "./withAuthRedirect";

function User(props) {
  console.log(props);
  return (
    <Box p={4}>
      <Grid align="center" container direction="column" spacing={2}>
        <Grid item>
          <Typography variant="h5">Hello User!</Typography>
        </Grid>
        <Grid item>
          <Typography>
            You signed in successfully. Click the button below to get out of
            here.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default withAuthRedirect({ secure: true })(User);
