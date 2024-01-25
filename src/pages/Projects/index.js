import { Box, Grid, Stack, Typography } from "@mui/material";
import PROJECTS from "./constants";

const Projects = () => {
  return (
    <Box maxWidth={1000} width="100%" mx="auto" mb={16}>
      <Stack spacing={1} mb={8} textAlign="center">
        <Typography variant="h2">What would you like to build?</Typography>
        <Typography variant="body1">
          See what you can build with SaaS OS
        </Typography>
      </Stack>
      <Grid container spacing={3}>
        {PROJECTS.map(({ title, desc, src }, idx) => {
          return (
            <Grid item xs={4}>
              <Stack spacing={1} key={idx}>
                  <img src={src} />
                <Typography variant="h6">{title}</Typography>
                <Typography variant="body1">{desc}</Typography>
              </Stack>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Projects;