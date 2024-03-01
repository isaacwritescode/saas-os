import { Box, Grid, Stack, Typography } from "@mui/material";
import FEATURES from "./constants";
import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";

const Features = () => {
  return (
    <Box
      id="features"
      maxWidth={1000}
      width={{ xs: "90%", md: "100%" }}
      mx="auto"
      pt={12}
    >
      {FEATURES.map(({ icon, label, title, desc, lottie }, idx) => (
        <Grid
          container
          key={idx}
          spacing={{ xs: 4, md: 12 }}
          pb={{ xs: 12, md: idx === FEATURES.length - 1 ? 16 : 32 }}
          columns={{ xs: 6, md: 12 }}
          alignItems="center"
          direction={idx % 2 === 0 ? "row" : "row-reverse"}
        >
          <Grid item xs={6}>
            <Box data-sal="slide-up" data-sal-delay={100}>
              <Stack direction="row" spacing={1} pb={1} color="text.primary">
                {icon}
                <Typography variant="body2" color="text.primary">
                  {label}
                </Typography>
              </Stack>
            </Box>
            <Stack spacing={2}>
              <Box data-sal="slide-up" data-sal-delay={100}>
                <Typography color="text.primary" variant="h2">
                  {title}
                </Typography>
              </Box>
              <Box data-sal="slide-up" data-sal-delay={200}>
                <Typography variant="body1" color="text.secondary">
                  {desc.split(".")[0]}
                </Typography>
                <br />
                <Typography variant="body1" color="text.secondary">
                  {desc.split(".")[1]}
                </Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <DotLottiePlayer src={lottie} autoplay loop />
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};

export default Features;
