"use client";
import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";

const drawerWidth = 240;
const navItems = [
  // <Link style={{ color: "#fff", textDecoration: "none" }} href="/" passHref>
  //   Home
  // </Link>,
  // <Link
  //   style={{ color: "#fff", textDecoration: "none" }}
  //   href="/about"
  //   passHref
  // >
  //   About
  // </Link>,
  // <Link
  //   style={{ color: "#fff", textDecoration: "none" }}
  //   href="/contact"
  //   passHref
  // >
  //   Contact
  // </Link>,
  // <Link
  //   style={{ color: "#fff", textDecoration: "none" }}
  //   href="/users"
  //   passHref
  // >
  //   Users
  // </Link>,

  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "About",
    href: "/about",
  },
  {
    id: 3,
    title: "Contact",
    href: "/contact",
  },
  {
    id: 4,
    title: "Users",
    href: "/users",
  },
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", backgroundColor: "#1976D2" }}
    >
      <Typography
        variant="h6"
        sx={{
          backgroundColor: "#1976D2",
          padding: "15px",
          color: "#fff",
        }}
      >
        Ruslan
      </Typography>
      <Divider />
      <List>
        {navItems.map(({ id, title, href }) => (
          <div key={id}>
            <a href={href} style={{ color: "#fff", textDecoration: "none" }}>
              {title}
            </a>
          </div>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Ruslanin ilk lahiyesi 🧐
          </Typography>
          <Box
            sx={{
              display: { xs: "none", sm: "flex", lg: "flex" },
              gap: 5,
            }}
          >
            {navItems.map(({ id, title, href }) => (
              <div key={id}>
                <a
                  href={href}
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  {title}
                </a>
              </div>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              bgcolor: "#1976D2",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography></Typography>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
