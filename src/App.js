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

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [userHasScrolled, setUserHasScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      window.scrollY === 0
        ? setUserHasScrolled(false)
        : setUserHasScrolled(true);
    };

    if (isMenuVisible) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMenuVisible]);
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
