import { Box, Button, Grid, Stack, Typography } from "@mui/material";

const Hero = ({ setModalOpen }) => {
  return (
    <Box
      bgcolor="primary.light"
      sx={{ backgroundImage: "url(/hero/illus/boxes.svg)" }}
    >
      <Box width={{ xs: "90%", lg: "80%" }} m="auto" maxWidth={1000}>
        <Stack spacing={4} alignItems={{ xs: "start", md: "center" }} py={12}>
          <Stack
            spacing={2}
            textAlign={{ xs: "left", md: "center" }}
            maxWidth={600}
            alignItems="center"
            mx="auto"
          >
            <Typography variant="h1">
              Design SaaS products in minutes
            </Typography>
            <Box width={{ md: "80%" }}>
              <Typography variant="body1" color="grey.700">
                The world's easiest-to-use SaaS Development and ideation tool,
                powered by AI.
                <br />
                <br />
                No coding experience required!
              </Typography>
            </Box>
          </Stack>
          <Button
            size="large"
            variant="contained"
            onClick={() => setModalOpen(true)}
          >
            Join waitlist
          </Button>
        </Stack>
        <Box>
          <Grid
            container
            display={{ xs: "flex", md: "none" }}
            spacing={{ xs: 1.5, md: 3 }}
            sx={{ aspectRatio: "4/1.8", overflow: "hidden", width: "100%" }}
          >
            <Grid item xs={4}>
              <Stack spacing={{ xs: 1.5, md: 3 }}>
                <img src="/hero/illus/03.svg" width="100%" />
                <img src="/hero/illus/06.svg" width="100%" />
              </Stack>
            </Grid>
            <Grid item xs={8}>
              <img src="/hero/illus/02.svg" width="100%" />
            </Grid>
          </Grid>
          <Grid
            container
            display={{ xs: "none", md: "flex" }}
            spacing={{ xs: 1.5, md: 3 }}
            sx={{ aspectRatio: "4/1.3", overflow: "hidden", width: "100%" }}
          >
            <Grid item xs={3}>
              <Stack spacing={{ xs: 1.5, md: 3 }}>
                <img src="/hero/illus/05.svg" width="100%" />
                <img src="/hero/illus/04.svg" width="100%" />
              </Stack>
            </Grid>
            <Grid item xs={3}>
              <Stack spacing={{ xs: 1.5, md: 3 }}>
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
