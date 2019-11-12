import React from "react";
import { Redirect } from "@reach/router";
import { useAuth } from "@renemn/gatsby-plugin-client-only-auth";

import {
  PRIVATE_DEFAULT_ROUTE,
  PUBLIC_DEFAULT_ROUTE,
} from "../constants/routes";

function withAuth(config = { secure: false }) {
  return function configure(WrappedComponent) {
    return function AuthComponent(props) {
      const [authState, authActions] = useAuth();
      if (config.secure === true) {
        return authState.isSignedIn ? (
          <WrappedComponent {...props} {...authState} {...authActions} />
        ) : (
          <Redirect to={PUBLIC_DEFAULT_ROUTE} noThrow />
        );
      } else {
        return !authState.isSignedIn ? (
          <WrappedComponent {...props} {...authState} {...authActions} />
        ) : (
          <Redirect to={PRIVATE_DEFAULT_ROUTE} noThrow />
        );
      }
    };
  };
}

export default withAuth;
