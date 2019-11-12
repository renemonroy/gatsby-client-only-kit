import React from "react";
import { Router } from "@reach/router";
import { useAuth } from "@renemn/gatsby-plugin-client-only-auth";

import Grid from "@material-ui/core/Grid";

import Topbar from "../components/Topbar";
import Splash from "../components/Splash";
import GetStarted from "../components/GetStarted";
import Home from "../components/Home";
import NotFound from "../components/NotFound";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import User from "../components/User";

import {
  PRIVATE_DEFAULT_ROUTE,
  PUBLIC_DEFAULT_ROUTE,
  HOME_ROUTES,
  SIGN_IN_ROUTE,
  SIGN_UP_ROUTE,
  USER_ROUTE,
} from "../constants/routes";

function App() {
  const [{ isLoading, isSignedIn }] = useAuth();
  return isLoading ? (
    <Splash />
  ) : (
    <Grid container direction="column">
      {isSignedIn && (
        <Grid item>
          <Router primary={false}>
            <Topbar path={HOME_ROUTES} />
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
