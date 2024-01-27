import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import { Link } from "@mui/material";
import { FOOTER_LINKS } from "./constants";
import { SocialLinks } from "./SocialLinks";

const Footer = () => {
  return (
    <Box width="100%" pt={16} pb={8} maxWidth={1000} m="auto">
      <Box width={{ xs: "90%", lg: "80%" }} m="auto">
        <Grid container columns={{ xs: 6, md: 12 }} spacing={{ xs: 4, md: 0 }}>
          <Grid item xs={6}>
            <Stack spacing={2} alignItems="start" pr={8}>
              <img src="/logo.svg" height={48} alt="logo" />
              <Typography variant="body1" color="text.secondary">
                Build production ready apps using our AI powered chatbot
              </Typography>
              <SocialLinks />
            </Stack>
          </Grid>
          <Grid item xs={6} borderLeft={{ md: 1 }} borderColor="grey.300">
            <Box display="grid" gridTemplateColumns="1fr 1fr" pl={{ md: 8 }}>
              {FOOTER_LINKS.map(({ title, path }, idx) => {
                return (
                  <Link
                    variant="h6"
                    color="text.secondary"
                    textAlign={{ xs: "left", md: "center" }}
                    py={4}
                    href={path}
                    underline="none"
                    sx={{
                      "&:hover": {
                        color: "text.primary",
                        textDecoration: "underline",
                      },
                    }}
                  >
                    {title}
                  </Link>
                );
              })}
            </Box>
          </Grid>
        </Grid>
        <Stack
          spacing={2}
          mx="auto"
          mt={8}
          textAlign={{ xs: "left", md: "center" }}
        >
          <Typography variant="body1" color="text.primary" fontWeight={500}>
            ©2024 SaaS OS. All Rights Reserved
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
