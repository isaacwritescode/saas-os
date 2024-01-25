import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Sponsors from "./pages/Hero/Sponsors";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Hero />
      <Sponsors />
    </ThemeProvider>
  );
}

export default App;
