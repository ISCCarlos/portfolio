import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import SettingsMenu from "./SettingsMenu";
import { useTranslation } from "./dependencies/react-i18next";
import { darkTheme, lightTheme } from "../assets/Theme";
import { useLocalStorage } from "./common/useLocalStorage";

const Header = () => {
  const [translations] = useTranslation("global");
  const [darkMode] = useLocalStorage("darkMode", false);

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <AppBar position="sticky" sx={{ background: theme.primary }}>
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          {translations("header.title")}
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <SettingsMenu />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
