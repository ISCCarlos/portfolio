import {
  FormControl,
  FormControlLabel,
  IconButton,
  InputLabel,
  Menu,
  MenuItem,
  NativeSelect,
  Paper,
  Switch,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import React, { useState } from "react";

const SettingsMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleThemeChange = () => {};

  const handleLanguageChange = () => {};

  const renderMenu = (
    <Paper>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        id="settings-menu"
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem>
          <FormControlLabel
            control={<Switch onChange={handleThemeChange} />}
            label="Dark mode"
          />
        </MenuItem>
        <MenuItem>
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="language">
              Language
            </InputLabel>
            <NativeSelect
              id="language"
              onChange={handleLanguageChange}
              defaultValue={"en_US"}
            >
              <option value="en_US">English</option>
              <option value="es_MX">Spanish</option>
            </NativeSelect>
          </FormControl>
        </MenuItem>
      </Menu>
    </Paper>
  );

  return (
    <>
      <IconButton
        size="large"
        edge="end"
        aria-label="menu"
        aria-controls="settings-menu"
        aria-haspopup="true"
        onClick={handleMenuOpen}
        color="inherit"
      >
        <SettingsIcon />
      </IconButton>
      {renderMenu}
    </>
  );
};

export default SettingsMenu;
