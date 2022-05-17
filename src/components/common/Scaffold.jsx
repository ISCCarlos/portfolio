import * as React from "react";
import { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import TopicIcon from "@mui/icons-material/Topic";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  Link,
  Modal,
  NativeSelect,
  Paper,
  Switch,
} from "@mui/material";
import Landing from "./../Landing";
import Experience from "./../Experience";
import Skills from "./../Skills";
import Projects from "./../Projects";
import Contact from "./../Contact";
import Footer from "./../Footer";

const drawerWidth = 240;

const menuElements = ["Home", "Experience", "Skills", "Projects", "Contact"];

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Scaffold = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const getIconByText = (text) => {
    let result = <MenuIcon />;
    switch (text) {
      case "Home":
        result = <HomeIcon />;
        break;
      case "Experience":
        result = <WorkIcon />;
        break;
      case "Skills":
        result = <SchoolIcon />;
        break;
      case "Projects":
        result = <TopicIcon />;
        break;
      case "Contact":
        result = <MailIcon />;
        break;
      default:
        result = "";
        break;
    }
    return result;
  };

  const buildRef = (text) => {
    return "#" + text.toLowerCase();
  };

  /**
   * Settings modal
   */
  // Modal style
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  const [openSettings, setOpenSettings] = useState(false);

  const handleOpenSettings = () => setOpenSettings(true);
  const handleCloseSettings = () => setOpenSettings(false);

  const handleLanguageChange = () => {
    // Do something to save the language in cache
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/**
       * App bar
       */}
      <AppBar position="fixed" open={open}>
        {/**
         * Menu icon and header text
         */}
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {"<CCA /> Portfolio"}
          </Typography>
        </Toolbar>
        {/**
         * Menu Icon and header text end
         */}
      </AppBar>
      {/**
       * App bar end
       */
      /**
       * Drawer (side panel menu)
       */}
      <Drawer variant="permanent" open={open}>
        {/**
         * Drawer icon for close
         */}
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        {/**
         * Drawer icon for close end
         */}
        <Divider />
        {/**
         * Menu elements
         */}
        <List>
          {menuElements.map((text) => {
            return (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <Link href={buildRef(text)} color={"inherit"} underline="none">
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {getIconByText(text)}
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </Link>
              </ListItem>
            );
          })}
          <ListItem key="Settings" disablePadding sx={{ display: "block" }}>
            <Link
              onClick={handleOpenSettings}
              color={"inherit"}
              underline="none"
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Settings"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </Link>
          </ListItem>
        </List>
        {/**
         * Menu elements end
         */}
      </Drawer>
      {/**
       * Drawer (side panel menu) end
       */}

      {/**
       * Landing
       */}

      <Box sx={{ flexGrow: 1, p: 3 }}>
        {/**
         * Page content
         */}
        <Box
          sx={{
            background: "url(../../assets/landing_bg.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <Box
            sx={{
              bgcolor: "rgba(255, 255, 255, 0.09)",
              backdropFilter: "blur(3px)",
            }}
          >
            <Landing />
          </Box>
        </Box>
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Divider />
        <Footer />
      </Box>
      <Modal
        open={openSettings}
        onClose={handleCloseSettings}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Paper>
            <Typography id="modal-modal-title" variant="h3" sx={{ m: 2 }}>
              <SettingsIcon />
              Settings
            </Typography>
            <Box sx={{ mt: 2, p: 2 }}>
              {/**
               * Dark mode switch
               */}
              <FormGroup>
                <FormControlLabel control={<Switch />} label="Dark mode" />
              </FormGroup>
              {/**
               * Hide ID
               */}
              <FormGroup>
                <FormControlLabel control={<Switch />} label="Hide ID" />
              </FormGroup>
              {/**
               * Language selector
               */}
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
            </Box>
          </Paper>
        </Box>
      </Modal>
    </Box>
  );
};

export default Scaffold;
