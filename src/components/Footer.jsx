import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Link,
  Tooltip,
} from "@mui/material";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const [translations] = useTranslation("global");

  return (
    <Box sx={{ padding: 2 }}>
      <BottomNavigation>
        <Tooltip title={translations("footer.linkedin")}>
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
        </Tooltip>
        <Tooltip title={translations("footer.github")}>
          <BottomNavigationAction
            label="View GitHub repo"
            icon={
              <Link href="https://github.com/ISCCarlos" target="_blank">
                <GitHubIcon />
              </Link>
            }
          />
        </Tooltip>
        <Tooltip title={translations("footer.telegram")}>
          <BottomNavigationAction
            label="Send me a Telegram"
            icon={
              <Link href="https://t.me/carlos_chavez" target="_blank">
                <TelegramIcon />
              </Link>
            }
          />
        </Tooltip>
      </BottomNavigation>
    </Box>
  );
};

export default Footer;
