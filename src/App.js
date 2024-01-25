import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Sponsors from "./pages/Sponsors";
import Features from "./pages/Features";
import Projects from "./pages/Projects";
import Banner from "./pages/Banner";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Hero />
      <Sponsors />
      <Features />
      <Projects />
      <Banner />
    </ThemeProvider>
  );
}

export default App;
