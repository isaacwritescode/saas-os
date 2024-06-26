import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import { AccordionGroup } from "./AccordionGroup";

const FAQ = () => {
  const [expanded, setExpanded] = useState("panel0");
  const handleChange = (panel) => (_, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <Box width="100%" py={12} id="FAQ">
      <Box width={{ xs: "90%", lg: "70%" }} maxWidth={1000} m="auto">
        <Box>
          <Stack spacing={8}>
            <Box data-sal="slide-up" data-sal-delay="100">
              <Typography
                variant={"h2"}
                textAlign="center"
                color="text.primary"
              >
                Frequently Asked Questions
              </Typography>
            </Box>
            <AccordionGroup expanded={expanded} handleChange={handleChange} />
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default FAQ;
