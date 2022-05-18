import { Avatar, Box, Grid, IconButton, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import React from "react";

const Landing = ({ image }) => {
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
            backdropFilter: "blur(5px)",
          }}
        >
          <Grid container>
            <Grid item xs={12} md={4}>
              <Avatar
                alt="<CCA />"
                src={image}
                sx={{
                  width: "90%",
                  height: "90%",
                  display: { xs: "inline-block", md: "block" },
                  mt: { xs: 1, md: 3 },
                  ml: { xs: "5%", md: 3 },
                }}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Box
                sx={{
                  mt: { xs: 0, md: 15 },
                  mb: { xs: 1, md: 0 },
                  ml: 1,
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontStyle: "bold",
                    color: "white",
                    textShadow: "2px 2px black",
                  }}
                >
                  Carlos Chávez Arias
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontStyle: "italic",
                    color: "white",
                    m: 1,
                    textShadow: "2px 2px black",
                  }}
                >
                  Full Stack Sr. Software Developer
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "white", textShadow: "2px 2px black" }}
                >
                  <IconButton>
                    <LocationOnIcon sx={{ color: "lightBlue" }} />
                  </IconButton>
                  Mexico City
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="white"
                  sx={{ textShadow: "2px 2px black" }}
                >
                  About me
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "white", textShadow: "2px 2px black" }}
                  wrap
                >
                  I'm a technology lover, I like innovation and stability in
                  software products. A lover of new challenges.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Landing;
