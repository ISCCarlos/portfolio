import { Divider, ThemeProvider } from "@mui/material";
import "./App.css";
import theme from "./assets/Theme";
import Experience from "./components/Experience";
import Landing from "./components/Landing";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Landing />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Divider />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
