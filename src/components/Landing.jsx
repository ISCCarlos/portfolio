import { Avatar, Box, Grid, IconButton, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import React from "react";

const Landing = () => {
  return (
    <>
      <Box sx={{ maxWidth: "98%" }}>
        <Grid container m={2}>
          <Grid item xs={11} md={4}>
            <Avatar
              alt="<CCA />"
              src="../../assets/me.jpg"
              sx={{ width: "100%", height: "100%" }}
            />
          </Grid>
          <Grid item xs={11} md={8}>
            <Box mt={10} ml={1}>
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
                  <LocationOnIcon sx={{ color: "lightBlue" }} /> Mexico City
                </IconButton>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Landing;
