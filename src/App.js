import { ThemeProvider } from "@mui/material";

import "./App.css";

import theme from "./assets/Theme";
import Scaffold from "./components/common/Scaffold";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Scaffold />
      </ThemeProvider>
    </>
  );
}

export default App;
