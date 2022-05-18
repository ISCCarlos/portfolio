import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import SettingsMenu from "./SettingsMenu";

const Header = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          {"<CCA /> Portfolio"}
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <SettingsMenu />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
