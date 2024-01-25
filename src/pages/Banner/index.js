import { Box, Button, Grid, Stack, Typography } from "@mui/material";

const Banner = () => {
  return (
    <Box maxWidth={1000} width="100%" m="auto">
      <Grid container alignItems="center" borderRadius={6} bgcolor="#1B1B2C" overflow="hidden">
        <Grid item xs={6}>
          <Stack spacing={1} px={8} alignItems="start">
            <Typography color="white" variant="h3">
              SaaS Development made easy
            </Typography>
            <Typography color="grey.500" variant="body1">
              Anyone can have a great idea, now everyone can bring them to life.
            </Typography>
            <Box pt={2}>
              <Button variant="contained">Join waitlist</Button>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <img src="/banner/screenshots.png" style={{maxHeight: 300, width: "100%"}} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;