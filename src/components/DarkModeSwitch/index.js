import { IconButton, Box } from "@mui/material";
import ContrastIcon from "@mui/icons-material/Contrast";
import { useContext } from "react";

const DarkModeSwitch = ({ ColorModeContext }) => {
  const colorMode = useContext(ColorModeContext);

  return (
    <Box position="fixed" bottom={24} right={24} >
      <IconButton onClick={colorMode.toggleColorMode} size="large">
        <ContrastIcon />
      </IconButton>
    </Box>
  );
};

export default DarkModeSwitch;
