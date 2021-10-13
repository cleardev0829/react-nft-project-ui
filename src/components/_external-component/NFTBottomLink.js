import React from "react";
import { experimentalStyled as styled } from "@material-ui/core/styles";
import { Grid, Container, Typography, Link, useTheme } from "@material-ui/core";
import { varFadeInUp, MotionInView } from "../animate";

const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(12, 0),
}));

export default function NFTBottomLink() {
  const theme = useTheme();

  return (
    <RootStyle>
      <Container maxWidth="xlg">
        <Grid container spacing={5} justifyContent="center">
          <Grid item xs={12} md={6} dir="ltr">
            <MotionInView variants={varFadeInUp}>
              <Link
                target="_blank"
                href="https://creativecommons.org/licenses/by/4.0/"
                key="https://creativecommons.org/licenses/by/4.0/"
              >
                <Typography
                  variant="subtitle1"
                  color="black"
                  sx={{
                    fontStyle: "normal",
                    fontWeight: 300,
                    "&:hover": {
                      color: (theme) => theme.palette.GREEN,
                    },
                  }}
                  textAlign="center"
                >
                  Images taken from indicated publications are under the
                  Creative Common Attribution License (Attribution
                  <span
                    style={{
                      fontFamily: theme.typography.numberFontFamily,
                      fontStyle: "normal",
                    }}
                  >
                    {` 4.0 `}
                  </span>
                  International (CC BY
                  <span
                    style={{
                      fontFamily: theme.typography.numberFontFamily,
                      fontStyle: "normal",
                    }}
                  >
                    {` 4.0`}
                  </span>
                  ))
                </Typography>
              </Link>
            </MotionInView>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
