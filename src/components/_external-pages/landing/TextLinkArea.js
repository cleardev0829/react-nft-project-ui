import { experimentalStyled as styled } from "@material-ui/core/styles";
import { Box, Grid, Typography } from "@material-ui/core";
import { varFadeInUp, MotionInView } from "../../animate";
import { Link } from "react-scroll";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  position: "absolute",
  top: 20,
  left: 0,
  width: "100%",
  zIndex: 100,
  padding: theme.spacing(12, 1),
  marginBottom: theme.spacing(16),
}));

export default function TextLinkArea(props) {
  return (
    <RootStyle>
      <Grid
        container
        spacing={1}
        justifyContent="center"
        alignItems="flex-start"
        sx={{ pb: 2 }}
      >
        <Grid item xs={12} md={6} dir="ltr" sx={{ px: 0 }}>
          <MotionInView variants={varFadeInUp}>
            <Typography
              variant="h5"
              sx={{ cursor: "pointer", color: "text.secondary" }}
            >
              Neri Oxman
            </Typography>
          </MotionInView>
        </Grid>

        <Grid item xs={12} md={6} dir="ltr" sx={{ px: 0 }}>
          <MotionInView variants={varFadeInUp}>
            <Link
              activeClass="active"
              to="Exhibition"
              spy={true}
              smooth={true}
              duration={1000}
              sx={{ cursor: "pointer" }}
            >
              <Typography
                variant="h5"
                sx={{ cursor: "pointer", color: "text.secondary" }}
              >
                Exhibition
              </Typography>
            </Link>
          </MotionInView>
          <MotionInView variants={varFadeInUp}>
            <Link
              activeClass="active"
              to="Projects"
              spy={true}
              smooth={true}
              duration={1200}
            >
              <Typography
                variant="h5"
                sx={{ cursor: "pointer", color: "text.secondary" }}
              >
                Projects
              </Typography>
            </Link>
          </MotionInView>
          <MotionInView variants={varFadeInUp}>
            <Link
              activeClass="active"
              to="Platforms"
              spy={true}
              smooth={true}
              duration={1400}
              sx={{ cursor: "pointer" }}
            >
              <Typography
                variant="h5"
                sx={{ cursor: "pointer", color: "text.secondary" }}
              >
                Platforms
              </Typography>
            </Link>
          </MotionInView>
          <MotionInView variants={varFadeInUp}>
            <Link
              activeClass="active"
              to="About Neri Oxman"
              spy={true}
              smooth={true}
              duration={1600}
            >
              <Typography
                variant="h5"
                sx={{ cursor: "pointer", color: "text.secondary" }}
              >
                About Neri Oxman
              </Typography>
            </Link>
          </MotionInView>
        </Grid>
      </Grid>
    </RootStyle>
  );
}
