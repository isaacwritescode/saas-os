import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const Modal = ({ modalOpen, setModalOpen }) => {
  return (
    modalOpen && (
      <Stack
        alignItems="center"
        justifyContent="center"
        className={modalOpen ? "fade-in" : "fade-out"}
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#00000050",
          zIndex: 999,
          transition: "all ease 0.3s",
        }}
      >
        <Box
          maxWidth={600}
          mx="auto"
          bgcolor="white"
          p={{ xs: 4, sm: 8 }}
          width={{ xs: "90%", md: "auto" }}
          borderRadius={4}
          position="relative"
          className={modalOpen ? "pop-in" : "pop-out"}
        >
          <IconButton
            onClick={() => setModalOpen(false)}
            sx={{ position: "absolute", right: 16, top: 16 }}
          >
            <Close />
          </IconButton>
          <form netlify>
            <Stack spacing={2} alignItems="start">
              <img src="logo.svg" alt="logo" />
              <Typography variant="h3">Be the first to try it!</Typography>
              <Typography variant="body1" color="text.secondary">
                Our beta program is going to be truly exciting, be a part of it
                today so you don't miss out on the fun
              </Typography>
              <Box width="100%">
                <Stack direction="row" spacing={2}>
                  <TextField
                    size="small"
                    type="text"
                    name="first-name"
                    label="First name"
                    color="black"
                    fullWidth
                    required
                  />
                  <TextField
                    size="small"
                    type="text"
                    name="last-name"
                    label="Last name"
                    color="black"
                    fullWidth
                    required
                  />
                </Stack>
              </Box>
              <TextField
                size="small"
                type="email"
                fullWidth
                name="email"
                label="Email"
                color="black"
                required
              />
              <Button type="submit" variant="contained">
                Apply for Beta
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    )
  );
};

export default Modal;
