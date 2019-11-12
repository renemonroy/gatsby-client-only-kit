import React from "react";
import { Link as RouterLink, navigate } from "gatsby";

import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import withAuthRedirect from "./withAuthRedirect";
import { SIGN_IN_ROUTE, SIGN_UP_ROUTE } from "../constants/routes";

function GetStarted() {
  return (
    <Box p={4}>
      <Grid align="center" container direction="column" spacing={2}>
        <Grid item>
          <Typography variant="h5">Let's get started</Typography>
        </Grid>
        <Grid item>
          <Typography>
            Welcome to this app. Sign up if you don't have an account yet.
          </Typography>
        </Grid>
        <Grid item>
          <Button
            color="primary"
            variant="contained"
            onClick={() => navigate(SIGN_UP_ROUTE)}
          >
            Sign Up
          </Button>
        </Grid>
        <Grid item>
          <Button color="primary" component={RouterLink} to={SIGN_IN_ROUTE}>
            Sign In
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default withAuthRedirect()(GetStarted);
