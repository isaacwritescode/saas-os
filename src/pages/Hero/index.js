import { Masonry } from "@mui/lab";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";

const Hero = () => {
  return (
    <Box bgcolor="primary.light">
      <Box width={{ xs: "90%", lg: "80%" }} m="auto" maxWidth={1000}>
        <Stack spacing={4} alignItems="center" py={18}>
          <Stack spacing={2} textAlign="center">
            <Typography variant="h1">
              Design SaaS products in minutes
            </Typography>
            <Typography variant="body1" color="grey.700">
              The world's easiest-to-use SaaS Development and ideation tool -
              powered by AI.
              <br />
              <br />
              No coding experience required!
            </Typography>
          </Stack>
          <Button size="large" variant="contained">
            Join waitlist
          </Button>
        </Stack>
        <Box >
          <Grid container spacing={3} sx={{aspectRatio: "4/1.3", overflow: "hidden", width: "100%"}}>
            <Grid item xs={3}>
              <Stack spacing={3}>
                <img src="/hero/illus/05.svg" width="100%" />
                <img src="/hero/illus/04.svg" width="100%" />
              </Stack>
            </Grid>
            <Grid item xs={3}>
              <Stack spacing={3}>
                <img src="/hero/illus/03.svg" width="100%" />
                <img src="/hero/illus/06.svg" width="100%" />
              </Stack>
            </Grid>
            <Grid item xs={4.5}>
              <img src="/hero/illus/02.svg" width="100%" />
            </Grid>
            <Grid item xs={1.5}>
              <img src="/hero/illus/01.svg" width="100%" />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
