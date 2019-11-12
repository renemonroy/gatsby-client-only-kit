import React from "react";
import { Router } from "@reach/router";
import { useAuth } from "@renemn/gatsby-plugin-client-only-auth";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";

import GetStarted from "../components/GetStarted";
import Home from "../components/Home";
import NotFound from "../components/NotFound";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import Splash from "../components/Splash";
import User from "../components/User";

import {
  PRIVATE_DEFAULT_ROUTE,
  PUBLIC_DEFAULT_ROUTE,
  HOME_ROUTES,
  SIGN_IN_ROUTE,
  SIGN_UP_ROUTE,
  USER_ROUTE,
} from "../constants/routes";

// const useStyles = makeStyles(theme => ({
//   toolbar: {
//     flexGrow: 1
//   },
//   menuButton: {
//     marginRight: theme.spacing(2)
//   },
//   title: {
//     flexGrow: 1
//   }
// }));

function App() {
  const [{ isLoading, isSignedIn }] = useAuth();
  // const classes = useStyles();
  return isLoading ? (
    <Splash />
  ) : (
    <Grid container direction="column">
      {isSignedIn && (
        <Grid item>
          <Router>
            <AppBar path={HOME_ROUTES} position="static">
              <Toolbar>
                <IconButton edge="start">
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6">Home</Typography>
              </Toolbar>
            </AppBar>
          </Router>
        </Grid>
      )}
      <Grid item>
        <Router>
          <NotFound default />
          <GetStarted path={PUBLIC_DEFAULT_ROUTE} />
          <SignIn path={SIGN_IN_ROUTE} />
          <SignUp path={SIGN_UP_ROUTE} />
          <Home path={PRIVATE_DEFAULT_ROUTE} />
          <User path={USER_ROUTE} />
        </Router>
      </Grid>
    </Grid>
  );
}

export default App;
