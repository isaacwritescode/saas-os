import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root:{
            fontWeight: 500,
        },
        h1: {
          letterSpacing: "-4px",
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
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
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
      light: "#F8FFF5",
      main: "#71E83A",
    },
  },
});

export default theme;
