import { Box, Button, Stack } from "@mui/material";

export default function Navbar() {
  return (
    <Box borderBottom={1} borderColor="grey.300">
      <Box width="70%" m="auto" py={1}>
        <Stack direction="row" justifyContent="space-between">
          <img src="logo.svg" height={36} alt="logo" />
          <Button size="small" variant="contained">Join waitlist</Button>
        </Stack>
      </Box>
    </Box>
  );
}
