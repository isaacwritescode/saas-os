import { Box, Grid, Stack, Typography } from "@mui/material";
import FEATURES from "./constants";

const Features = () => {
  return (
    <Box maxWidth={1000} width={{ xs: "90%", md: "100%" }} m="auto">
      {FEATURES.map(({ icon, label, title, desc, gif }, idx) => (
        <Grid
          container
          key={idx}
          py={16}
          columns={{ xs: 6, md: 12 }}
          direction={idx % 2 === 0 ? "row" : "row-reverse"}
        >
          <Grid item xs={6}>
            <Stack direction="row" spacing={1} pb={1}>
              {icon}
              <Typography variant="body2">{label}</Typography>
            </Stack>
            <Stack spacing={2}>
              <Typography variant="h2">{title}</Typography>
              <Typography variant="body1">{desc}</Typography>
            </Stack>
          </Grid>
          <Grid item xs={6}></Grid>
        </Grid>
      ))}
    </Box>
  );
};

export default Features;
