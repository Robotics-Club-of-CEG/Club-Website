import { Grid, Typography } from "@mui/material";
import teamMembers from "../utils/SeniorOBDetails";
import "../styles/socialMedia.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Fade from "react-reveal/Fade";

function SeniorOB() {
  return (
    <div
      style={{
        width: "100%",
        margin: "20px 0px",
        overflow: "hidden",
        padding: 1,
      }}
    >
      <Fade right>
        <Typography
          sx={{
            fontSize: 35,
            color: "#fff",
            fontFamily: "Mainfont",
            textAlign: "center",
            padding: 5,
            fontWeight: "bold",
          }}
        >
          Senior Office Bearers
        </Typography>
      </Fade>
      <>
        <Grid container spacing={2} padding={{ xs: 5, sm: 10 }}>
          {teamMembers.map((person) => (
            <Grid
              item
              className="card-wrapper"
              xs={12}
              sm={6}
              md={3}
              height={420}
            >
              <div style={{ height: "100%", padding: 10 }}>
                <div className="container">
                  <img src={person.src} alt="" />
                  <div className="details">
                    <h2>{person.name}</h2>
                    <h3>{person.title}</h3>
                    <div className="social-media">
                      <a target="_blank" href={person.instagram}>
                        <FontAwesomeIcon
                          icon={faInstagram}
                          size="3x"
                          color="#f00"
                        />
                      </a>
                      <a target="_blank" href={person.linkedin}>
                        <FontAwesomeIcon
                          icon={faLinkedin}
                          size="3x"
                          color="#00f"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </>
    </div>
  );
}

export default SeniorOB;
