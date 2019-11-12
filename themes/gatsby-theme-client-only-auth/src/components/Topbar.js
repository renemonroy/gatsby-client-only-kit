import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
}));

function Topbar() {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton className={classes.menuButton} color="inherit" edge="start">
          <MenuIcon />
        </IconButton>
        <Typography className={classes.title} variant="h6">
          Home
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Topbar;
