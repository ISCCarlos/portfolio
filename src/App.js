import { ThemeProvider } from "@mui/material";
import "./App.css";
import theme from "./assets/Theme";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Container />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
