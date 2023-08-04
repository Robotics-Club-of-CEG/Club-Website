import { Typography } from "@mui/material";
import desktopBackground from "../images/background-lg.jpg";
import mobileBackground from "../images/background-mobile.jpg";
import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";

function TitleCard() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const imageUrl = windowWidth >= 650 ? desktopBackground : mobileBackground;
  //   const titleBoxStyle = windowWidth <= 480 ? [""]

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div style={{ width: "100%", position: "relative" }}>
      <Fade right>
        <img
          src={imageUrl}
          alt="background"
          style={{
            objectFit: "cover",
            height: "90vh",
            width: "100%",
          }}
        />
      </Fade>
      <div
        style={{
          position: "absolute",
          color: "#fff",
          top: windowWidth <= 600 ? "20%" : "40%",
          left: "5%",
          maxWidth: windowWidth <= 600 ? "85%" : "40%",
          textAlign: "center",
        }}
      >
        <Fade left>
          <Typography
            sx={{
              fontFamily: "Titlefont",
              fontSize: { xs: "3em", md: "4em", sm: "3em" },
            }}
          >
            Robotics Club of CEG
          </Typography>
        </Fade>
      </div>
    </div>
  );
}

export default TitleCard;
