import { Card, CardContent, Container, Grid, Typography } from "@mui/material";
import Fade from "react-reveal/Fade";
import React from "react";

function VisionMission() {
  return (
    <Container fixed style={{ marginTop: 30, marginBottom: 30 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card
            sx={{
              minWidth: "70%",
              borderRadius: 8,
              padding: 1,
              minHeight: 270,
            }}
          >
            <CardContent>
              <Fade left>
                <Typography
                  style={{
                    fontFamily: "Mainfont",
                    fontWeight: "bold",
                    fontSize: "1.75em",
                    marginBottom: 1,
                  }}
                >
                  Vision
                </Typography>
              </Fade>
              <Fade right>
                <Typography
                  style={{
                    fontFamily: "Mainfont",
                  }}
                >
                  Create a “CENTRE for GLOBAL EXCELLENCE in ROBOTICS”, where
                  Fundamental and Applied Research would be encouraged, to
                  enhance the creative and innovative aspects of aspiring
                  engineering minds, to help ease and accelerate the world’s
                  transition to Robotics in our daily lives. And do this in such
                  a manner which would remain sensitive to the highest moral and
                  ethical standards
                </Typography>
              </Fade>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Card
            sx={{
              minWidth: "70%",
              borderRadius: 8,
              padding: 1,
              minHeight: 270,
              flex: 1,
            }}
          >
            <CardContent>
              <Fade left>
                <Typography
                  style={{
                    fontFamily: "Mainfont",
                    fontWeight: "bold",
                    fontSize: "1.75em",
                    marginBottom: 1,
                  }}
                >
                  Mission
                </Typography>
              </Fade>
              <Fade right>
                <Typography
                  style={{
                    fontFamily: "Mainfont",
                  }}
                >
                  To inspire young engineers to be the driving force in the
                  field of robotics, by engaging them in exciting programs that
                  build engineering skills, inspire innovation, and foster
                  well-rounded life capabilities including self-confidence,
                  communication and leadership.
                </Typography>
              </Fade>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default VisionMission;
