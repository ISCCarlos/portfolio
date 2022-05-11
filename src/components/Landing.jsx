import { Avatar, IconButton, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import React from "react";

const Landing = () => {
  return (
    <>
      <Avatar alt="<CCA />" src="" />
      <Typography
        variant="h1"
        sx={{ fontStyle: "bold", color: "text.primary" }}
      >
        Carlos Chávez Arias
      </Typography>
      <Typography
        variant="h3"
        sx={{ fontStyle: "italic", color: "text.secondary" }}
      >
        Full Stack | Sr. Software Developer
      </Typography>
      <Typography variant="subtitle1">
        <IconButton size="large">
          <LocationOnIcon /> Mexico City
        </IconButton>
      </Typography>
    </>
  );
};

export default Landing;
