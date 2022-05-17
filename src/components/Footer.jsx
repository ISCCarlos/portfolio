import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Link,
} from "@mui/material";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <BottomNavigation>
        <BottomNavigationAction
          label="View LinkedIn profile"
          icon={
            <Link
              href="https://www.linkedin.com/in/carlos-giovanni-ch%C3%A1vez-arias-5502b3212/"
              target="_blank"
            >
              <LinkedInIcon />
            </Link>
          }
        />
        <BottomNavigationAction
          label="View GitHub repo"
          icon={
            <Link href="https://github.com/ISCCarlos" target="_blank">
              <GitHubIcon />
            </Link>
          }
        />
        <BottomNavigationAction
          label="Send me a Telegram"
          icon={
            <Link href="https://t.me/carlos_chavez" target="_blank">
              <TelegramIcon />
            </Link>
          }
        />
        <BottomNavigationAction
          label="Send me a WhatsApp"
          icon={
            <Link
              href="https://wa.me/15554747918/?text=Carlos%20Chavez"
              target="_blank"
            >
              <WhatsAppIcon />
            </Link>
          }
        />
      </BottomNavigation>
    </Box>
  );
};

export default Footer;
