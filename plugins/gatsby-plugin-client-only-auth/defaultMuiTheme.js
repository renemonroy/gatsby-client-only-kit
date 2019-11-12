export default {
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      light: "#6b9dff",
      main: "#1e6fea",
      dark: "#0045b7",
      contrastText: "#ffffff",
    },
  },
  shape: {
    borderRadius: 8,
  },
  overrides: {
    MuiButton: {
      contained: {
        boxShadow: "none",
        textTransform: "none",
        "&:hover": {
          boxShadow: "none",
          // removes on touch devices too
          "@media (hover:none)": {
            boxShadow: "none",
          },
        },
      },
      outlined: {
        textTransform: "none",
      },
      text: {
        textTransform: "none",
      },
    },
  },
};
