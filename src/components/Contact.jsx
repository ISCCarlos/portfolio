import { Paper, Typography, Box, Link } from "@mui/material";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Contact = () => {
  return (
    <Paper sx={{ maxWidth: "95%", margin: 6 }}>
      <Typography variant="h3" sx={{ m: 3 }}>
        Contact
      </Typography>

      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          marginLeft: { xs: "none", md: "25%" },
        }}
      >
        <Link href="#">
          <LinkedInIcon
            sx={{ fontSize: { xs: 60, md: 100 }, margin: { xs: 1, md: 6 } }}
          />
        </Link>
        <Link href="#">
          <GitHubIcon
            sx={{ fontSize: { xs: 60, md: 100 }, margin: { xs: 1, md: 6 } }}
          />
        </Link>
        <Link href="#">
          <TelegramIcon
            sx={{ fontSize: { xs: 60, md: 100 }, margin: { xs: 1, md: 6 } }}
          />
        </Link>
        <Link href="#">
          <WhatsAppIcon
            sx={{ fontSize: { xs: 60, md: 100 }, margin: { xs: 1, md: 6 } }}
          />
        </Link>
      </Box>
    </Paper>
  );
};

export default Contact;
