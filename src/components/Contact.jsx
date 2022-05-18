import { Paper, Typography, Button, Input, Box } from "@mui/material";
import React from "react";
import MailIcon from "@mui/icons-material/Mail";

const Contact = () => {
  return (
    <Paper
      sx={{ maxWidth: "98%", margin: "1%", justifyItems: "center" }}
      id="contact"
    >
      <Typography variant="h3" sx={{ m: 3 }}>
        <MailIcon /> Contact
      </Typography>
      <Box
        sx={{ width: "90%", maxWidth: "90%", ml: "5%", textAlign: "center" }}
      >
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          sx={{ m: 1 }}
        />
        <Input
          type="email"
          name="mail"
          id="mail"
          placeholder="Email"
          sx={{ m: 1 }}
        />
        <Input
          type="tel"
          name="phone"
          id="phone"
          placeholder="Phone number"
          sx={{ m: 1 }}
        />
      </Box>
      <Box
        sx={{ width: "90%", maxWidth: "90%", ml: "5%", textAlign: "center" }}
      >
        <Button variant="contained" sx={{ m: 1 }}>
          Submit
        </Button>
        <Button variant="outlined" sx={{ m: 1 }}>
          Get my CV
        </Button>
      </Box>
    </Paper>
  );
};

export default Contact;
