import { experimentalStyled as styled } from "@material-ui/core/styles";
import { Box, Grid, Typography, Link } from "@material-ui/core";
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

export default function LandingContact(props) {
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
                <span id={props.text} style={{ fontWeight: "bold" }}>
                  Contact
                </span>
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
                  Material Ecology
                  <br />
                  02.22.20
                  <br />
                  10.18.20
                  <br />
                  MoMA, Floor 1, 1 North
                  <br />
                  MoMA, Floor 1, 1 South
                  <br />
                  Visit moma.org
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
              <Typography variant="subtitle1">
                <span style={{ fontWeight: "bold" }}>
                  General inquiries:
                  <Link
                    href="contact@oxman.com"
                    sx={{ color: (theme) => theme.palette.text.secondary }}
                  >
                    contact@oxman.com
                  </Link>
                  <br />
                  Press:{" "}
                  <Link
                    href="press@oxman.com"
                    sx={{ color: (theme) => theme.palette.text.secondary }}
                  >
                    press@oxman.com
                  </Link>
                  <br />
                  Careers:{" "}
                  <Link
                    href="future@oxman.com"
                    sx={{ color: (theme) => theme.palette.text.secondary }}
                  >
                    future@oxman.com
                  </Link>
                  <br />
                  <Link
                    href="Instagram.com"
                    sx={{ color: (theme) => theme.palette.text.secondary }}
                  >
                    Instagram
                  </Link>
                </span>
              </Typography>
            </MotionInView>
          </ContentStyle>
        </Grid>
      </Grid>
    </RootStyle>
  );
}
