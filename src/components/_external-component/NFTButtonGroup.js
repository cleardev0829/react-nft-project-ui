import React from "react";
import { Container, Grid, Typography, Button, Stack } from "@material-ui/core";
import { experimentalStyled as styled } from "@material-ui/core/styles";
import { varFadeInUp, MotionInView } from "../animate";
import { Link as ScrollLink } from "react-scroll";

const RootStyle = styled("div")(({ theme }) => ({
  backgroundColor: "black",
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(12),
  [theme.breakpoints.down("sm")]: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

const ContentStyle = styled("div")(({ theme }) => ({
  width: "100%",
  textAlign: "center",
  marginBottom: theme.spacing(0),
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
    marginBottom: 0,
  },
}));

export default function NFTButtonGroup() {
  return (
    <RootStyle id="buttons">
      <Container maxWidth="xlg" justifyContent="space-between">
        <MotionInView variants={varFadeInUp}>
          <Typography
            variant="h4"
            sx={{
              mb: 4,
              fontWeight: "bold",
              fontFamily: (theme) => `${theme.typography.headingFontFamily}`,
            }}
            color="white"
          >
            Three categories of organism: bacteria, fungi & virus
          </Typography>
        </MotionInView>

        <Grid container justifyContent="center" alignItems="center" spacing={4}>
          <Grid item xs={12} md={5} dir="ltr">
            <ContentStyle>
              <Stack direction="column" spacing={4}>
                <MotionInView variants={varFadeInUp}>
                  <ScrollLink
                    to="virus"
                    spy
                    smooth="easeInOutQuint"
                    duration={1000}
                    offset={0}
                  >
                    <Button
                      sx={{
                        width: 242,
                        height: 75,
                        textTransform: "lowercase",
                      }}
                      variant="contained"
                      color="inherit"
                    >
                      <Typography variant="h4">
                        <b>virus</b>
                      </Typography>
                    </Button>
                  </ScrollLink>
                </MotionInView>
                <MotionInView variants={varFadeInUp}>
                  <ScrollLink to="fungi" spy smooth duration={1000} offset={0}>
                    <Button
                      sx={{
                        width: 242,
                        height: 75,
                        textTransform: "lowercase",
                      }}
                      variant="contained"
                      color="inherit"
                    >
                      <Typography variant="h4">
                        <b>fungi</b>
                      </Typography>
                    </Button>
                  </ScrollLink>
                </MotionInView>
                <MotionInView variants={varFadeInUp}>
                  <ScrollLink
                    to="bacteria"
                    spy
                    smooth
                    duration={1000}
                    offset={0}
                  >
                    <Button
                      sx={{
                        width: 242,
                        height: 75,
                        textTransform: "lowercase",
                      }}
                      variant="contained"
                      color="inherit"
                    >
                      <Typography variant="h4">
                        <b>bacteria</b>
                      </Typography>
                    </Button>
                  </ScrollLink>
                </MotionInView>
              </Stack>
            </ContentStyle>
          </Grid>

          <Grid item xs={12} md={7} dir="ltr">
            <MotionInView variants={varFadeInUp}>
              <Typography
                variant="h3"
                color="white"
                sx={{
                  fontWeight: 300,
                }}
              >
                <span
                  style={{
                    fontFamily: "NetKanzl, serif",
                  }}
                >
                  999&nbsp;
                </span>
                unique works,
                <br /> created with genuine
                <br /> scientific research as
                <br /> source material;
                <br /> contextually
                <br /> educational,
                <br /> visually stimulating,thought
                <br /> provoking and
                <br /> unexpectedly dazzling.
              </Typography>
            </MotionInView>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
