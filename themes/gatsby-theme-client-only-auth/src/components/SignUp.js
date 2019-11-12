import React from "react";
import { Link as RouterLink, navigate } from "gatsby";
import useForm from "react-hook-form";

import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Close from "@material-ui/icons/Close";

import withAuthRedirect from "./withAuthRedirect";
import { PUBLIC_DEFAULT_ROUTE } from "../constants/routes";

function SignUp({ newUser, signUp }) {
  const { errors, handleSubmit, register } = useForm();

  async function onClose() {
    navigate(PUBLIC_DEFAULT_ROUTE);
  }

  async function signUpHandler({ email, password, confirmPassword }) {
    await signUp(email, password);
  }

  async function confirmHandler() {
    console.log("Confirmed!");
  }

  function renderSignUpForm() {
    return (
      <Box pl={2} pr={2}>
        <Typography variant="h4" gutterBottom>
          Sign Up
        </Typography>
        <Typography variant="body1" paragraph>
          Create your account below to fully experience the app.
        </Typography>
        <form onSubmit={handleSubmit(signUpHandler)}>
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
                key="email"
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
                key="password"
                label="Password *"
                margin="normal"
                name="password"
                placeholder="p@ssW0rd"
                type="password"
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <TextField
                error={!!(errors && errors.confirmPassword)}
                fullWidth
                InputLabelProps={{ shrink: true }}
                inputRef={register({
                  minLength: 8,
                  required: true,
                })}
                key="confirmPassword"
                label="Confirm Password *"
                margin="normal"
                name="confirmPassword"
                placeholder="p@ssW0rd"
                type="password"
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <Box mt={2}>
                <Button
                  color="primary"
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Sign Up
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Box>
    );
  }

  function renderConfirmForm() {
    return (
      <Box pl={2} pr={2}>
        <Typography variant="h4" gutterBottom>
          Confirm
        </Typography>
        <Typography variant="body1" paragraph>
          Check your email and enter your confirmation code.
        </Typography>
        <form onSubmit={handleSubmit(confirmHandler)}>
          <Grid container direction="column" spacing={1}>
            <Grid item>
              <TextField
                autoFocus
                error={!!(errors && errors.code)}
                fullWidth
                InputLabelProps={{ shrink: true }}
                inputRef={register({ required: true })}
                key="confirmationCode"
                label="Confirmation Code *"
                margin="normal"
                name="confirmationCode"
                placeholder="XXXX"
                type="tel"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </form>
      </Box>
    );
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
            <Button color="primary" component={RouterLink} to="/sign-in">
              Sign In
            </Button>
          </Grid>
        </Grid>
      </Box>
      {newUser ? renderConfirmForm() : renderSignUpForm()}
    </Box>
  );
}

export default withAuthRedirect()(SignUp);
