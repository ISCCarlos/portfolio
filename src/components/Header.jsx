import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import SettingsMenu from "./SettingsMenu";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [translations] = useTranslation("global");
  return (
    <AppBar position="sticky">
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
