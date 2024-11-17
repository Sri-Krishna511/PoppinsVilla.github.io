import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
} from "@mui/material";
import { styled } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const StickyBox = styled(Box)(({ theme }) => ({
  position: "fixed",
  width: "100%",
  backgroundColor: "orange",
  color: "#fff",
  boxShadow: "none",
  top: 0,
  zIndex: 1100,
  animation: "fadeInDown 2.0s ease",
  "@keyframes fadeInDown": {
    from: { opacity: 0, transform: "translateY(-20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  },
}));

const navItems = [
  { key: 1, value: "Home", href: "#Home" },
  { key: 2, value: "Amenities", href: "#Amenities" },
  { key: 3, value: "Pricing", href: "#Pricing" },
  { key: 4, value: "Near By", href: "#nearByPlaces" },
  { key: 5, value: "Location", href: "#Location" },
  { key: 6, value: "About", href: "#aboutUs" },
];

function Header() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpenDrawer(open);
  };

  return (
    <StickyBox>
      <AppBar
        position="sticky"
        elevation={3}
        sx={{
          backgroundColor: "#8eebf7",
          color: "#00796b",
          boxShadow: "none",
        }}
      >
        <Toolbar sx={{ textAlign: { xs: "center", sm: "left" } }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "#00796b" }}
          >
            <b>Poppins Villa</b>
          </Typography>

          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: "block", sm: "none" } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                variant="text"
                key={item.key}
                sx={{ color: "#00796b" }}
                href={item.href}
              >
                {item.value}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "#8eebf7",
            color: "#00796b",
            maxHeight: "300px",
            height: "auto",
            paddingTop: "24px",
            top: "30%",
            overflowY: "inherit",
          },
        }}
      >
        <Box sx={{ width: 250, top: "30%" }} role="presentation">
          <IconButton
            edge="end"
            color="inherit"
            onClick={toggleDrawer(false)}
            sx={{
              position: "absolute",
              right: "10px",
              marginTop: "-24px"
            }}
          >
            <CloseIcon />
          </IconButton>
          {navItems.map((item) => (
            <Button
              variant="text"
              key={item.key}
              sx={{
                color: "#00796b",
                display: "block",
                width: "100%",
                textAlign: "center",
                top: "30%",
              }}
              onClick={toggleDrawer(false)}
              href={item.href}
            >
              {item.value}
            </Button>
          ))}
        </Box>
      </Drawer>
    </StickyBox>
  );
}

export default Header;
