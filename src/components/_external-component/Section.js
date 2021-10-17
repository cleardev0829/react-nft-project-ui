import React from "react";
import { Container, Grid, Typography, Stack } from "@material-ui/core";
import { varFadeInUp, MotionInView } from "../animate";
import { experimentalStyled as styled } from "@material-ui/core/styles";

const ContentStyle = styled("div")(({ theme }) => ({
  width: "100%",
  textAlign: "left",
  marginBottom: theme.spacing(0),
  paddingBottom: theme.spacing(4),
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
    marginBottom: 0,
  },
}));

export default function Section({ children, components }) {
  return (
    <ContentStyle>
      <Container maxWidth="xlg">
        <Grid
          container
          justifyContent="space-between"
          alignItems="flex-start"
          spacing={4}
        >
          <Grid item xs={12} md={6} dir="ltr">
            <MotionInView variants={varFadeInUp}></MotionInView>

            <MotionInView variants={varFadeInUp}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontStyle: "normal",
                  fontWeight: "normal",
                }}
                color="white"
              >
                {children}
              </Typography>
            </MotionInView>
          </Grid>

          <Grid item xs={12} md={6} dir="ltr">
            <MotionInView variants={varFadeInUp}>
              <Stack justifyContent="center" alignItems="center" spacing={4}>
                {components &&
                  components.map((c, index) => {
                    return c;
                  })}
              </Stack>
            </MotionInView>
          </Grid>
        </Grid>

        <Grid
          container
          xs={12}
          md={12}
          dir="ltr"
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 4 }}
        >
          <img
            width={41.5}
            height={41.5}
            src="https://drive.google.com/uc?id=1MVLZWavVAZsEv2cIcDA50BqxfhxLMziD"
            data-src="https://drive.google.com/uc?id=1MVLZWavVAZsEv2cIcDA50BqxfhxLMziD"
            alt=""
          />
        </Grid>
      </Container>
    </ContentStyle>
  );
}
