import { Paper, Typography } from "@mui/material";
import React from "react";
import SwipeableTextMobileStepper from "./ProjectDetail";

const Projects = () => {
  return (
    <Paper sx={{ maxWidth: "95%", margin: 6 }}>
      <Typography variant="h3" sx={{ m: 3 }}>
        Projects
      </Typography>
      <SwipeableTextMobileStepper />
    </Paper>
  );
};

export default Projects;
