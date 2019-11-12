import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Amplify from "aws-amplify";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import defaultFonts from "./defaultFonts";
import defaultMuiTheme from "./defaultMuiTheme";
import { AuthProvider } from "./AuthStore";

export function wrapRootElement(
  { element },
  {
    amplify = {},
    fonts = defaultFonts,
    initialDelay = 600,
    muiTheme = defaultMuiTheme,
  }
) {
  Amplify.configure(amplify);
  return (
    <Fragment>
      <Helmet>
        <meta
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          name="viewport"
        />
        {fonts.map((fontUrl, i) => (
          <link href={fontUrl} key={`font-${i}`} rel="stylesheet" />
        ))}
      </Helmet>
      <ThemeProvider theme={createMuiTheme(muiTheme)}>
        <CssBaseline>
          <AuthProvider initialDelay={initialDelay}>{element}</AuthProvider>
        </CssBaseline>
      </ThemeProvider>
    </Fragment>
  );
}
