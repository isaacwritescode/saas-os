import { Box, Button, Stack } from "@mui/material";

export default function Navbar() {
  return (
    <Box
      position="sticky"
      top={0}
      bgcolor="white"
      borderBottom={1}
      borderColor="grey.300"
      zIndex={999}
    >
      <Box width={{ xs: "90%", md: "70%" }} m="auto" py={1}>
        <Stack direction="row" justifyContent="space-between">
          <img src="logo.svg" height={36} alt="logo" />
          <Button size="small" variant="contained">
            Join waitlist
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
