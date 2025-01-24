import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    text: {
      primary: "#5a3d29",
      secondary: "#4b6f44",
    },
  },
  typography: {
    fontFamily: "Amasis MT Pro Medium",
    h1: {
      fontWeight: "bold",
      fontSize: "3rem",
      color: "#5a3d29",
    },
    h2: {
      fontWeight: "bold",
      fontSize: "2.5rem",
      color: "#5a3d29",
    },
    h3: {
      fontWeight: "600",
      fontSize: "2rem",
      color: "#5a3d29",
    },
    h4: {
      fontWeight: "600",
      fontSize: "1.8rem",
      color: "#5a3d29",
    },
    body1: {
      fontSize: "1rem",
      color: "#5a3d29",
    },
    body2: {
      fontSize: "0.875rem",
      color: "#5a3d29",
    },
    subtitle1: {
      fontSize: "1.5rem",
      fontWeight: "400",
      color: "#4b6f44",
    },
    subtitle2: {
      fontSize: "1rem",
      fontWeight: "400",
      color: "#4b6f44",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#5a3d29",
          borderColor: "#5a3d29",
          "&:hover": {
            backgroundColor: "#5a3d29",
            color: "#ffffff",
          },
        },
        contained: {
          backgroundColor: "#5a3d29",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#7b5a42",
          },
        },
      },
    },
  },
});

export default theme;
