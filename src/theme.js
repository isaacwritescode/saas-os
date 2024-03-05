import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontWeight: 500,
        },
        h1: {
          letterSpacing: "-3px",
          lineHeight: 1.2,
          fontSize: "56px",
        },
        h2: {
          letterSpacing: "-4px",
          lineHeight: 1.1,
          fontSize: "48px",
        },
        h3: {
          letterSpacing: "-3px",
          fontSize: "36px",
        },
        h4: {
          letterSpacing: "-2px",
        },
        h5: {
          letterSpacing: "-1px",
          lineHeight: 1.3,
        },
        h6: {
          letterSpacing: "-0.5px",
          lineHeight: 1.3,
        },
        body1:{
          fontSize: "17px"
        }
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 100,
        },
      },
    },
  },
  typography: {
    fontFamily: "NeurialGrotesk-Private",
  },
  palette: {
    mode: "light",
    primary: {
      contrastText: "#000",
      light: "#F4FFEF",
      main: "#71E83A",
    },
    primaryInverted: {
      contrastText: "#fff",
      light: "#F8FFF5",
      main: "#71E83A",
    },
    black: {
      contrastText: "#ffffff",
      main: "#000000",
    },
  },
});

export default theme;
