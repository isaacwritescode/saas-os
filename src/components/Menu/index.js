import { useTheme } from "@emotion/react";
import { Box, Button, Stack, Typography, useMediaQuery } from "@mui/material";
import LINKS from "../Navbar/constants";
import { HashLink } from "react-router-hash-link";

const Menu = ({ isMenuVisible, setIsMenuVisible, setModalOpen }) => {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("md"));

  if (!md)
    return (
      <>
        <Stack
          className={isMenuVisible ? "pop-in" : "pop-out"}
          sx={{
            position: "fixed",
            top: 0,
            background: "#1A1C1E",
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: 99,
            transition: "all ease 0.3s",
          }}
        >
          <Stack m="auto" spacing={2} alignSelf="center" textAlign="center">
            {LINKS.map(({ url, title }, idx) => (
              <HashLink
                key={idx}
                style={{
                  textDecoration: "none",
                }}
                onClick={() => setIsMenuVisible(false)}
                to={url}
              >
                <Typography
                  sx={{ opacity: 0.5, "&:hover": { opacity: 1 } }}
                  variant="h3"
                  color="white"
                >
                  {title}
                </Typography>
              </HashLink>
            ))}
          </Stack>
          <Box mb={4} width="90%" mx="auto">
            <Box onClick={() => setModalOpen(true)}>
              <Button
                color="primary"
                size="medium"
                variant="contained"
                fullWidth
              >
                Apply for Beta
              </Button>
            </Box>
          </Box>
        </Stack>
      </>
    );
};

export default Menu;
