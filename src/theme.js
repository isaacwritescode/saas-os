import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
        },
      },
    },
  },

  palette:{
    mode: "light",
    primary:{
        contrastText: "#000",
        main: "#71E83A"
    }
  }
});

export default theme;
