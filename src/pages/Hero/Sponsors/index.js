import { Box, Stack } from "@mui/material";
import SPONSORS from "./constants";

const Sponsors = () => {
  return (
    <Box maxWidth={1000} width="100%" m="auto">
      <Stack py={6} direction="row" justifyContent="space-between">
        {SPONSORS.map(({ src }, idx) => (
          <img src={src} idx={idx} />
        ))}
      </Stack>
    </Box>
  );
};

export default Sponsors;
