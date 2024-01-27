import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Sponsors from "./pages/Sponsors";
import Features from "./pages/Features";
import Projects from "./pages/Projects";
import Banner from "./pages/Banner";
import Footer from "./pages/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Hero />
      <Sponsors />
      <Features />
      <Projects />
      <Banner />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
