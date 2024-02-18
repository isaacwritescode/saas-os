import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Sponsors from "./pages/Sponsors";
import Features from "./pages/Features";
import Projects from "./pages/Projects";
import Banner from "./pages/Banner";
import Footer from "./pages/Footer";
import FAQ from "./pages/FAQ";
import { useEffect, useState } from "react";
import Modal from "./pages/Modal";
import Menu from "./components/Menu";
import sal from "sal.js";
import "sal.js/dist/sal.css";
import { useLocation } from "react-router-dom";

function App() {
  const { pathname } = useLocation();
  const [modalOpen, setModalOpen] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  useEffect(() => {
    if (isMenuVisible) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isMenuVisible]);

  useEffect(() => {
    sal({ threshold: 0.3 });
  }, [pathname]);

  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
