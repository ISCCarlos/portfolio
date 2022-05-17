import { Avatar, Box, Grid, IconButton, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import React from "react";

const Landing = () => {
  return (
    <>
      <Box id="home">
        <Grid container m={2}>
          <Grid item sx={{ xs: { display: "none" } }} xs={11} md={4} p={4}>
            <Avatar
              alt="<CCA />"
              src="../../assets/me.jpg"
              sx={{
                width: "100%",
                height: "100%",
                display: { xs: "none", md: "block" },
              }}
            />
          </Grid>
          <Grid item xs={11} md={8}>
            <Box mt={15} ml={1}>
              <Typography
                variant="h2"
                sx={{ fontStyle: "bold", color: "white" }}
              >
                Carlos Chávez Arias
              </Typography>
              <Typography
                variant="h4"
                sx={{ fontStyle: "italic", color: "white" }}
              >
                Full Stack Sr. Software Developer
              </Typography>
              <Typography sx={{ color: "white" }}>
                <IconButton>
                  <LocationOnIcon sx={{ color: "lightBlue" }} />
                </IconButton>
                Mexico City
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Landing;
