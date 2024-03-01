import { Box, Grid, Stack, Typography } from "@mui/material";
import PROJECTS from "./constants";
import { useTheme } from "@emotion/react";

const Projects = () => {
  const theme = useTheme();
  return (
    <Box
      id="projects"
      maxWidth={1000}
      width={{ xs: "90%", md: "100%" }}
      mx="auto"
      mb={8}
      pt={8}
    >
      <Stack spacing={1} mb={8} textAlign="center">
        <Box data-sal="slide-up" data-sal-delay={100}>
          <Typography variant="h2" color="text.primary">
            What would you like to build?
          </Typography>
        </Box>
        <Box data-sal="slide-up" data-sal-delay={100}>
          <Typography variant="body1" color="text.secondary">
            See what you can build with SaaS OS
          </Typography>
        </Box>
      </Stack>
      <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }}>
        {PROJECTS.map(({ title, src }, idx) => {
          return (
            <Grid
              data-sal="slide-up"
              data-sal-delay={idx * 100}
              key={idx}
              item
              xs={4}
            >
              <Stack
                spacing={2}
                sx={{
                  "&:hover img": {
                    transform: "scale(0.8) !important",
                  },
                  cursor: "pointer",
                }}
              >
                <Box
                  bgcolor={
                    theme.palette.mode === "dark" ? "grey.900" : "grey.200"
                  }
                  flex={1}
                  borderRadius={2}
                >
                  <img
                    src={src}
                    alt={title}
                    width="100%"
                    style={{
                      transform: "scale(0.7)",
                      transition: "all ease 0.3s",
                      boxShadow: "8px 8px 24px 8px #00000020",
                      borderRadius: 8,
                    }}
                  />
                </Box>
                <Typography
                  textAlign="center"
                  variant="h6"
                  color="text.primary"
                >
                  {title}
                </Typography>
              </Stack>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Projects;
