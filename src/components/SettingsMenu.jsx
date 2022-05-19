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
  Tooltip,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocalStorage } from "./common/useLocalStorage";

const SettingsMenu = () => {
  const [translations, i18n] = useTranslation("global");
  const [anchorEl, setAnchorEl] = useState(null);
  const [faceParam, setFaceParam] = useLocalStorage("faceParam", false);

  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleThemeChange = () => {};

  const handleShowFaceChange = () => {
    setFaceParam(!faceParam);
    window.location.reload();
  };

  const handleLanguageChange = () => {
    const value = document.getElementById("language").value;
    i18n.changeLanguage(value);
  };

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
            label={translations("header.settings.darkMode")}
          />
        </MenuItem>
        <MenuItem>
          <FormControlLabel
            control={
              <Switch onChange={handleShowFaceChange} checked={faceParam} />
            }
            label={translations("header.settings.showFace")}
          />
        </MenuItem>
        <MenuItem>
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="language">
              {translations("header.settings.language")}
            </InputLabel>
            <NativeSelect
              id="language"
              onChange={handleLanguageChange}
              defaultValue={i18n.language}
            >
              <option value="en">{translations("common.english")}</option>
              <option value="es">{translations("common.spanish")}</option>
            </NativeSelect>
          </FormControl>
        </MenuItem>
      </Menu>
    </Paper>
  );

  return (
    <>
      <Tooltip title={translations("header.settings.title")}>
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
      </Tooltip>

      {renderMenu}
    </>
  );
};

export default SettingsMenu;
