import {
  AppBar,
  Avatar,
  Box,
  Button,
  Toolbar,
  Typography,
} from "@mui/material";
import logo from "../images/logo.jpg";
import React from "react";
import Fade from "react-reveal/Fade";

function NavBar() {
  return (
    <Box>
      <Fade top>
        <AppBar
          sx={{ flexGrow: 1, padding: 1 }}
          color="transparent"
          elevation={2}
          position="sticky"
        >
          <Toolbar>
            <Avatar
              alt="logo"
              src={logo}
              style={{ borderRadius: "50%", height: 80, width: 80 }}
            />
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                color: "#fff",
                fontFamily: "Mainfont",
                marginLeft: 1.8,
                fontSize: { xs: 18, sm: 20, md: 28 },
              }}
            >
              Robotics Club of CEG
            </Typography>
            <Button
              sx={{
                fontFamily: "Mainfont",
                color: "#fff",
                fontSize: 18,
                display: { xs: "none", sm: "flex" },
              }}
            >
              Home
            </Button>
          </Toolbar>
        </AppBar>
      </Fade>
    </Box>
  );
}

export default NavBar;
