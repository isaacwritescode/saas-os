import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  Grid,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";

const Banner = ({ setModalOpen }) => {
  const theme = useTheme();
  const newTheme = createTheme({
    ...theme,
    palette: {
      mode: "dark",
      primary: {
        contrastText: "#fff",
        light: "#F8FFF5",
        main: "#71E83A",
      },
    },
  });
  return (
    <Box maxWidth={1000} width={{ xs: "90%", md: "100%" }} m="auto">
      <Grid
        container
        alignItems="center"
        borderRadius={6}
        bgcolor="#1B1B2C"
        overflow="hidden"
        columns={{ xs: 6, md: 12 }}
      >
        <Grid item xs={6}>
          <Stack spacing={1} px={6} alignItems="start" py={{ xs: 6, md: 0 }}>
            <Typography
              color="white"
              variant="h3"
              data-sal="slide-up"
              data-sal-delay={100}
            >
              SaaS Development made easy
            </Typography>
            <Typography
              color="grey.500"
              variant="body1"
              data-sal="slide-up"
              data-sal-delay={200}
            >
              Join our newsletter and never miss out on the fun!
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              alignItems={{ xs: "start", sm: "center" }}
              spacing={2}
              py={1}
            >
              <Box flex={1}>
                <ThemeProvider theme={newTheme}>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    label="Email"
                    type="email"
                  />
                </ThemeProvider>
              </Box>
              <Box data-sal="slide-up" data-sal-delay={300}>
                <Button onClick={() => setModalOpen(true)} variant="contained">
                  Join newsletter
                </Button>
              </Box>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <img
            src="/banner/screenshots.png"
            alt=""
            style={{ maxHeight: 300, width: "100%" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
