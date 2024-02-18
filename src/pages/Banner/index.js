import { Box, Button, Grid, Stack, Typography } from "@mui/material";

const Banner = ({ setModalOpen }) => {
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
          <Stack spacing={1} px={8} alignItems="start" py={{ xs: 8, md: 0 }}>
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
              Anyone can have a great idea, now everyone can bring them to life.
            </Typography>
            <Box pt={2} data-sal="slide-up" data-sal-delay={300}>
              <Button onClick={() => setModalOpen(true)} variant="contained">
                Join waitlist
              </Button>
            </Box>
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
