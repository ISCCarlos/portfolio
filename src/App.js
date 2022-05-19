import { Divider, Paper } from "@mui/material";
import "./App.css";
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
