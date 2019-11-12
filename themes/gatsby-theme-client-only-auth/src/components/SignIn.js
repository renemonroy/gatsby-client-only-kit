import React from "react";
import { Link as RouterLink, navigate } from "gatsby";
import useForm from "react-hook-form";

import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Close from "@material-ui/icons/Close";
import makeStyles from "@material-ui/core/styles/makeStyles";

import withAuthRedirect from "./withAuthRedirect";
import { PUBLIC_DEFAULT_ROUTE } from "../constants/routes";

const useStyles = makeStyles(() => ({
  wrapper: {
    position: "relative",
  },
  progress: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
}));

function SignIn({ signIn, isSigning }) {
  const classes = useStyles();
  const { errors, handleSubmit, register } = useForm();

  async function onClose() {
    await navigate(PUBLIC_DEFAULT_ROUTE);
  }

  async function submitHandler({ email, password }) {
    await signIn(email, password);
  }

  return (
    <Box p={1}>
      <Box pb={2} pl={1} pr={1} pt={1}>
        <Grid container direction="row" justify="space-between">
          <Grid item>
            <IconButton size="small" onClick={onClose}>
              <Close />
            </IconButton>
          </Grid>
          <Grid item>
            <Button color="primary" component={RouterLink} to="/sign-up">
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box pl={2} pr={2}>
        <Typography variant="h4" gutterBottom>
          Sign In
        </Typography>
        <Typography variant="body1" paragraph>
          Enter your email and password for sign in.
        </Typography>
        <form onSubmit={handleSubmit(submitHandler)}>
          <Grid container direction="column" spacing={1}>
            <Grid item>
              <TextField
                error={!!(errors && errors.email)}
                fullWidth
                InputLabelProps={{ shrink: true }}
                inputRef={register({
                  pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  required: true,
                })}
                label="Email Address *"
                margin="normal"
                name="email"
                placeholder="email@example.com"
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <TextField
                error={!!(errors && errors.password)}
                fullWidth
                InputLabelProps={{ shrink: true }}
                inputRef={register({
                  minLength: 8,
                  required: true,
                })}
                label="Password *"
                margin="normal"
                name="password"
                placeholder="p@ssW0rd"
                type="password"
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <Box pt={1}>
                <Typography
                  align="center"
                  display="block"
                  paragraph
                  variant="body2"
                >
                  Forgot your password?{" "}
                  <Link component={RouterLink} to="/">
                    Reset here
                  </Link>
                  .
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <div className={classes.wrapper}>
                <Button
                  color="primary"
                  disabled={isSigning}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Sign In
                  {isSigning && (
                    <CircularProgress size={24} className={classes.progress} />
                  )}
                </Button>
              </div>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
}

export default withAuthRedirect()(SignIn);
