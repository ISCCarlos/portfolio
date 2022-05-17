import { Paper, Typography } from "@mui/material";
import React from "react";
import ProjectDetail from "./ProjectDetail";
import TopicIcon from "@mui/icons-material/Topic";

const Projects = () => {
  return (
    <Paper sx={{ maxWidth: "98%", margin: "1%", pb: 3 }} id="projects">
      <Typography variant="h3" sx={{ m: 3 }}>
        <TopicIcon /> Projects
      </Typography>
      <ProjectDetail />
    </Paper>
  );
};

export default Projects;
