import React from "react";
import { Redirect } from "@reach/router";

import { PUBLIC_DEFAULT_ROUTE } from "../constants/routes";

function NotFound() {
  return <Redirect from="" noThrow to={PUBLIC_DEFAULT_ROUTE} />;
}

export default NotFound;
