import {
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import LINKS from "./constants";
import { HashLink } from "react-router-hash-link";
import { Close, Menu } from "@mui/icons-material";
import { useTheme } from "@emotion/react";

export default function Navbar({
  isMenuVisible,
  setIsMenuVisible,
  setModalOpen,
}) {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("md"));

  return isMenuVisible ? (
    <Box position="sticky" top={0} bgcolor="transparent" zIndex={999}>
      <Box width={{ xs: "90%", md: "70%" }} m="auto" py={1}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <img src="logos/light.svg" height={36} alt="logo" />
          <Box display={{ xs: "none", md: "block" }}>
            <Stack
              direction="row"
              spacing={3}
              data-sal="slide-up"
              data-sal-delay={200}
            >
              {LINKS.map(({ url, title }, idx) => {
                return (
                  <HashLink
                    key={idx}
                    to={url}
                    style={{ textDecoration: "none" }}
                  >
                    <Typography color="text.secondary" variant="body2">
                      {title}
                    </Typography>
                  </HashLink>
                );
              })}
            </Stack>
          </Box>
          <Box display={{ xs: "none", md: "block" }}>
            <Button
              data-sal="slide-up"
              data-sal-delay={300}
              size="small"
              variant="contained"
            >
              Apply for Beta
            </Button>
          </Box>
          <Box display={{ xs: "block", md: "none" }}>
            <IconButton
              sx={{ color: "white" }}
              onClick={() => setIsMenuVisible(!isMenuVisible)}
            >
              <Close />
            </IconButton>
          </Box>
        </Stack>
      </Box>
    </Box>
  ) : (
    <Box
      position="sticky"
      top={0}
      bgcolor="background.default"
      borderBottom={1}
      borderColor="divider"
      zIndex={999}
    >
      <Box width={{ xs: "90%", md: "70%" }} m="auto" py={1}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <img
            src={
              theme.palette.mode === "dark"
                ? "logos/light.svg"
                : "logos/dark.svg"
            }
            height={36}
            alt="logo"
          />

          <Box display={{ xs: "none", md: "block" }}>
            <Stack
              direction="row"
              spacing={3}
              data-sal="slide-up"
              data-sal-delay={200}
            >
              {LINKS.map(({ url, title }, idx) => {
                return (
                  <HashLink
                    key={idx}
                    to={url}
                    style={{ textDecoration: "none" }}
                  >
                    <Typography color="text.secondary" variant="body2">
                      {title}
                    </Typography>
                  </HashLink>
                );
              })}
            </Stack>
          </Box>
          <Box display={{ xs: "none", md: "block" }}>
            <Box data-sal="slide-up" data-sal-delay={300}>
              <Button
                onClick={() => setModalOpen(true)}
                size="small"
                variant="contained"
              >
                Apply for Beta
              </Button>
            </Box>
          </Box>
          <Box display={{ xs: "block", md: "none" }}>
            <IconButton onClick={() => setIsMenuVisible(!isMenuVisible)}>
              <Menu />
            </IconButton>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
