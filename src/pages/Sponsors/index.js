import { Box, Stack } from "@mui/material";
import SPONSORS from "./constants";
import Marquee from "react-fast-marquee";

const Sponsors = () => {
  return (
    <Box bgcolor="white">
      <Box maxWidth={1000} width="100%" m="auto">
        <Stack
          py={8}
          gap={4}
          direction="row"
          flexWrap="wrap"
          alignItems="center"
          justifyContent={{ md: "space-between" }}
        >
          <Marquee>
            {SPONSORS.map(({ src }, idx) => (
              <Box px={4}>
                <img
                  src={src}
                  idx={idx}
                  alt={"sponsor"}
                  style={{ filter: "grayscale(1)" }}
                />
              </Box>
            ))}
            {SPONSORS.map(({ src }, idx) => (
              <Box px={4}>
                <img
                  src={src}
                  idx={idx}
                  alt={"sponsor"}
                  style={{ filter: "grayscale(1)" }}
                />
              </Box>
            ))}
          </Marquee>
        </Stack>
      </Box>
    </Box>
  );
};

export default Sponsors;
