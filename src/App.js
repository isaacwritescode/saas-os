import { Box, ThemeProvider, createTheme, useMediaQuery } from "@mui/material";
import myTheme from "./theme";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Sponsors from "./pages/Sponsors";
import Features from "./pages/Features";
import Projects from "./pages/Projects";
import Banner from "./pages/Banner";
import Footer from "./pages/Footer";
import FAQ from "./pages/FAQ";
import { createContext, useEffect, useMemo, useState } from "react";
import Modal from "./pages/Modal";
import Menu from "./components/Menu";
import sal from "sal.js";
import "sal.js/dist/sal.css";
import { useLocation } from "react-router-dom";
import DarkModeSwitch from "./components/DarkModeSwitch";

const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
  const { pathname } = useLocation();
  const [modalOpen, setModalOpen] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const [mode, setMode] = useState(prefersDarkMode ? "dark" : "light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        ...myTheme,
        palette: {
          mode,
          primary: myTheme.palette.primary,
        },
      }),
    [mode]
  );

  useEffect(() => {
    if (isMenuVisible) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isMenuVisible]);

  useEffect(() => {
    sal({ threshold: 0.3 });
  }, [pathname]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Box bgcolor="background.default">
          <Navbar
            isMenuVisible={isMenuVisible}
            setIsMenuVisible={setIsMenuVisible}
            setModalOpen={setModalOpen}
          />
          <Hero setModalOpen={setModalOpen} />
          <Sponsors />
          <Features />
          <Projects />
          <FAQ />
          <Banner setModalOpen={setModalOpen} />
          <Footer setModalOpen={setModalOpen} />
          <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} />
          <Menu
            isMenuVisible={isMenuVisible}
            setModalOpen={setModalOpen}
            setIsMenuVisible={setIsMenuVisible}
          />
          <DarkModeSwitch ColorModeContext={ColorModeContext} />
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
