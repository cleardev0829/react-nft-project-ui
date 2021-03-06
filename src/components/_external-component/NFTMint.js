import React from "react";
import { Grid, Typography, Button, Stack, useTheme } from "@material-ui/core";
import { varFadeInUp, MotionInView } from "../animate";
import { CarouselImg, Countdown } from ".";
import { experimentalStyled as styled } from "@material-ui/core/styles";

const RootStyle = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(12),
  [theme.breakpoints.down("md")]: {
    paddingTop: theme.spacing(24),
    paddingBottom: theme.spacing(4),
  },
}));

export default function NFTMint() {
  const theme = useTheme();

  return (
    <RootStyle>
      <Grid
        container
        spacing={0}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} md={12} dir="ltr" textAlign="center">
          <Typography
            sx={{
              fontSize: 90,
              [theme.breakpoints.down("lg")]: { fontSize: 80 },
              [theme.breakpoints.down("md")]: { fontSize: 70 },
              [theme.breakpoints.down("sm")]: { fontSize: 60 },
              fontWeight: "normal",
            }}
          >
            microbes
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} dir="ltr">
          <MotionInView variants={varFadeInUp}>
            <Countdown />
          </MotionInView>
        </Grid>
        <Grid item xs={12} md={6} dir="ltr" sx={{ py: 5 }}>
          <MotionInView variants={varFadeInUp}>
            <CarouselImg />
          </MotionInView>
        </Grid>
        <Grid item xs={12} md={4} dir="ltr" textAlign="center">
          <Stack direction="column" alignItems="center" spacing={2}>
            <Button
              sx={{
                width: 242,
                height: 75,
                textTransform: "lowercase",
              }}
              variant="contained"
              color="inherit"
            >
              <Typography variant="h5">
                <b>mint</b>
              </Typography>
            </Button>
            <Typography variant="h5">
              minting cost:&nbsp;
              <span style={{ fontFamily: theme.typography.numberFontFamily }}>
                0.088
              </span>
              ETH
            </Typography>
            <Typography variant="h5">
              xxx/
              <span style={{ fontFamily: theme.typography.numberFontFamily }}>
                999
              </span>
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </RootStyle>
  );
}
