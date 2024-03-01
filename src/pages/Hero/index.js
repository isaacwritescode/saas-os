import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Performance from "../../components/Illustrations/Performance";
import Activity from "../../components/Illustrations/Activity";
import Revenue from "../../components/Illustrations/Revenue";
import Visitors from "../../components/Illustrations/Visitors";
import SideBar from "../../components/Illustrations/SideBar";

const Hero = ({ setModalOpen }) => {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      bgcolor={
        theme.palette.mode === "dark" ? "background.default" : "primary.light"
      }
      sx={{
        backgroundImage:
          theme.palette.mode === "dark"
            ? "url(/hero/illus/boxes-dark.svg)"
            : "url(/hero/illus/boxes.svg)",
      }}
    >
      <Box position="absolute" top={32} left={0} right={0}>
        <img src="/hero/illus/glow.svg" width="100%" alt="" />
      </Box>
      <Box width={{ xs: "90%", lg: "80%" }} m="auto" maxWidth={1000}>
        <Stack spacing={4} alignItems={{ xs: "start", md: "center" }} py={12}>
          <Stack
            spacing={2}
            textAlign={{ xs: "left", md: "center" }}
            maxWidth={600}
            alignItems="center"
            mx="auto"
          >
            <Box data-sal="slide-up" data-sal-delay={400}>
              <Typography variant="h1" color="text.primary">
                Design SaaS products in minutes
              </Typography>
            </Box>
            <Box width={{ md: "80%" }}>
              <Box data-sal="slide-up" data-sal-delay={500}>
                <Typography variant="body1" color="grey.700">
                  The world's easiest-to-use SaaS Development and ideation tool,
                  powered by AI.
                  <br />
                  <br />
                  No coding experience required!
                </Typography>
              </Box>
            </Box>
          </Stack>
          <Box data-sal="slide-up" data-sal-delay={600}>
            <Button
              size="large"
              variant="contained"
              onClick={() => setModalOpen(true)}
            >
              Apply for Beta
            </Button>
          </Box>
        </Stack>
        <Box>
          {!md ? (
            <Grid
              container
              spacing={{ xs: 1.5, md: 3 }}
              sx={{ aspectRatio: "4/1.8", overflow: "hidden", width: "100%" }}
            >
              <Grid item xs={4}>
                <Stack spacing={{ xs: 1.5, md: 3 }}>
                  <Revenue />
                  <Visitors />
                </Stack>
              </Grid>
              <Grid item xs={8}>
                <Box
                  sx={{
                    filter: "drop-shadow(0px 40px 20px rgba(0, 0, 0, 0.1))",
                  }}
                >
                  <img src="/hero/illus/02.svg" width="100%" alt="" />
                </Box>
              </Grid>
            </Grid>
          ) : (
            <Grid
              container
              spacing={{ xs: 1.5, md: 3 }}
              sx={{ aspectRatio: "4/1.3", overflow: "hidden", width: "100%" }}
            >
              <Grid item xs={3}>
                <Stack spacing={{ xs: 1.5, md: 3 }}>
                  <Performance />
                  <Activity />
                </Stack>
              </Grid>
              <Grid item xs={3}>
                <Stack spacing={{ xs: 1.5, md: 3 }}>
                  <Revenue />
                  <Visitors />
                </Stack>
              </Grid>
              <Grid item xs={4.5}>
                <Box
                  sx={{
                    filter: "drop-shadow(0px 40px 20px rgba(0, 0, 0, 0.1))",
                  }}
                >
                  <img src="/hero/illus/02.svg" width="100%" alt="" />
                </Box>
              </Grid>
              <Grid item xs={1.5}>
                <SideBar />
              </Grid>
            </Grid>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
