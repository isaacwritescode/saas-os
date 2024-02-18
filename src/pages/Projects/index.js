import { Box, Grid, Stack, Typography } from "@mui/material";
import PROJECTS from "./constants";

const Projects = () => {
  return (
    <Box
      id="projects"
      maxWidth={1000}
      width={{ xs: "90%", md: "100%" }}
      mx="auto"
      mb={16}
      pt={16}
    >
      <Stack spacing={1} mb={8} textAlign="center">
        <Typography variant="h2">What would you like to build?</Typography>
        <Typography variant="body1" color="text.secondary">
          See what you can build with SaaS OS
        </Typography>
      </Stack>
      <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }}>
        {PROJECTS.map(({ title, desc, src }, idx) => {
          return (
            <Grid key={idx} item xs={4}>
              <Stack
                spacing={2}
                sx={{
                  "&:hover img": {
                    transform: "scale(0.8) !important",
                  },
                  cursor: "pointer",
                }}
              >
                <Box bgcolor="#f2f3f5" flex={1} borderRadius={2}>
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
                <Typography textAlign="center" variant="h6">
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
