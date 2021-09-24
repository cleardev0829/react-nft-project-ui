import { experimentalStyled as styled } from "@material-ui/core/styles";
import { Box, Grid, Typography } from "@material-ui/core";
import { varFadeInUp, MotionInView } from "../../animate";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(1, 0),
  marginBottom: theme.spacing(4),
}));

const ContentStyle = styled("div")(({ theme }) => ({
  width: "100%",
  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
    marginBottom: 0,
  },
}));

export default function LandingPrivacyPolicy(props) {
  return (
    <RootStyle>
      <Grid
        container
        spacing={0}
        justifyContent="center"
        alignItems="flex-start"
      >
        <Grid item xs={12} md={3} dir="ltr" sx={{ px: 1 }}>
          <Box>
            <MotionInView variants={varFadeInUp}>
              <Typography>
                <span id={props.text} style={{ fontWeight: "bold" }}></span>
              </Typography>
            </MotionInView>
          </Box>
        </Grid>

        <Grid item xs={12} md={3} dir="ltr" sx={{ px: 1 }}>
          <Box>
            <MotionInView variants={varFadeInUp}></MotionInView>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={3}
          sx={{ display: "flex", alignItems: "center", px: 1 }}
        >
          <ContentStyle>
            <MotionInView variants={varFadeInUp}>
              <Typography>
                <span style={{ fontWeight: "bold" }}>
                  <a href="/">Privacy policy</a>
                  <br />
                  All images and videos courtesy Neri Oxman and The Mediated
                  Matter Group.
                </span>
              </Typography>
            </MotionInView>
          </ContentStyle>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          sx={{ display: "flex", alignItems: "center", px: 1 }}
        >
          <ContentStyle>
            <MotionInView variants={varFadeInUp}>
              <Typography>
                <span style={{ fontWeight: "bold" }}>
                  <a href="/">Site by AREA 17</a>
                </span>
              </Typography>
            </MotionInView>
          </ContentStyle>
        </Grid>
      </Grid>
    </RootStyle>
  );
}
