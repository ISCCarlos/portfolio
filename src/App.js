import { Divider, Paper, ThemeProvider } from "@mui/material";
import "./App.css";
import Experience from "./components/Experience";
import Landing from "./components/Landing";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useLocalStorage } from "./components/common/useLocalStorage";
import { darkTheme, lightTheme } from "./assets/Theme";

function App() {
  const [darkMode] = useLocalStorage("darkMode", false);

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <>
      <Paper>
        <Header />
        <Landing />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Divider />
        <Footer />
      </Paper>
    </>
  );
}

export default App;
