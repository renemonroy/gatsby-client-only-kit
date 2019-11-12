import React from "react";

// import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
// import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";

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

function Topbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">Home</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Topbar;
