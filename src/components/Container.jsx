import { Box } from "@mui/material";
import React from "react";
import Contact from "./Contact";
import Experience from "./Experience";
import Landing from "./Landing";
import Projects from "./Projects";
import Skills from "./Skills";

const Container = () => {
  return (
    <>
      <Box
        sx={{
          background: "url(../../assets/landing_bg.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={{
            bgcolor: "rgba(255, 255, 255, 0.09)",
            backdropFilter: "blur(3px)",
          }}
        >
          <Landing />
        </Box>
      </Box>
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default Container;
