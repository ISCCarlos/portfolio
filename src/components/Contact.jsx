import { Paper, Typography, Box, Button } from "@mui/material";
import React from "react";

const Contact = () => {
  return (
    <Paper sx={{ maxWidth: "98%", margin: "1%" }} id="contact">
      <Typography variant="h3" sx={{ m: 3 }}>
        Contact
      </Typography>

      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          marginLeft: { xs: "none", md: "25%" },
        }}
      >
        <form>
          <Box sx={{ mb: 1, mt: 0.5 }}>
            <input type="text" name="name" id="name" placeholder="Name" />
          </Box>
          <Box sx={{ mb: 1, mt: 0.5 }}>
            <input type="email" name="mail" id="mail" placeholder="Email" />
          </Box>
          <Box sx={{ mb: 1, mt: 0.5 }}>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Phone number"
            />
          </Box>
          <Box sx={{ mb: 1, mt: 0.5 }}>
            <textarea
              name="moreInfo"
              id="moreInfo"
              cols="30"
              rows="10"
              placeholder="Tell me more about your project, job offer or something interesting ..."
            ></textarea>
          </Box>
          <Button variant="contained" sx={{ mb: 1, mt: 1 }}>
            Submit
          </Button>
        </form>
      </Box>
    </Paper>
  );
};

export default Contact;
