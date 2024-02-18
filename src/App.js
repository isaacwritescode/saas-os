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
import { useState } from "react";
import Modal from "./pages/Modal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Hero setModalOpen={setModalOpen} />
      <Sponsors />
      <Features />
      <Projects />
      <FAQ />
      <Banner />
      <Footer />
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </ThemeProvider>
  );
}

export default App;
