import React from "react";

import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import withAuthRedirect from "./withAuthRedirect";

function User({ signOut }) {
  return (
    <Box p={4}>
      <Grid align="center" container direction="column" spacing={2}>
        <Grid item>
          <Typography variant="h5">Hello there!</Typography>
        </Grid>
        <Grid item>
          <Typography>
            You signed in successfully. Click the button below to get out of
            here.
          </Typography>
        </Grid>
        <Grid item>
          <Button
            color="inherit"
            variant="outlined"
            onClick={async () => {
              await signOut();
            }}
          >
            Sign Out
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default withAuthRedirect({ secure: true })(User);
