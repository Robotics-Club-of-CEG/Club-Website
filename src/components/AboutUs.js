import { Card, CardContent, Container, Typography } from "@mui/material";
import Fade from "react-reveal/Fade";
import React from "react";

function AboutUs() {
  return (
    <Fade>
      <Container fixed style={{ marginTop: 30, marginBottom: 30 }}>
        <Card sx={{ minWidth: "70%", borderRadius: 8, padding: 1 }}>
          <CardContent>
            <Fade left>
              <Typography
                style={{
                  fontFamily: "Mainfont",
                  fontWeight: "bold",
                  fontSize: "1.75em",
                }}
              >
                About Us
              </Typography>
            </Fade>
            <Fade right>
              <Typography
                style={{
                  fontFamily: "Mainfont",
                }}
              >
                The main motto of The Robotics Club of CEG is to unite students
                in an educational environment and provide students a place to
                pursue their interest in mechanical, electronic, and software
                design by working on both large and small scale robotics
                projects. Having said that we take pride in talking about our
                projects, be it autonomous bots, humanoids, robotic arms or
                aerial vehicles, we haven't left any stone unturned. However,
                the club provides much more than just technical growth to its
                members, from team-building to cooperation, from perseverance to
                sincerity, the club teaches you a myriad of interpersonal skills
                essential in our daily life. The club is open to all interested
                students, with or without experience. You just need to show up
                and the club and its people will take care of the rest. The
                club's environment encourages the sharing of wisdom and
                experience amongst its members. We cater to every individual who
                ever aspires to design their own circuit and control their own
                bot. All we need from you is enthusiasm!
              </Typography>
            </Fade>
          </CardContent>
        </Card>
      </Container>
    </Fade>
  );
}

export default AboutUs;
