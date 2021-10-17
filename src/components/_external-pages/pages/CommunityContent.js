import {
  // useTheme,
  experimentalStyled as styled,
} from "@material-ui/core/styles";
import { Grid, Container, Typography } from "@material-ui/core";
import { varFadeInUp, MotionInView } from "../../animate";

const RootStyle = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(12),
  [theme.breakpoints.down("md")]: {
    paddingTop: theme.spacing(24),
    paddingBottom: theme.spacing(4),
  },
}));

const ContentStyle = styled("div")(({ theme }) => ({
  width: "100%",
  textAlign: "left",
  marginBottom: theme.spacing(0),
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
    marginBottom: 0,
  },
}));

export default function CommunityContent() {
  // const theme = useTheme();

  return (
    <RootStyle>
      <Container maxWidth="xlg">
        <Grid container spacing={5} justifyContent="center">
          <Grid
            item
            xs={12}
            md={12}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <ContentStyle>
              <MotionInView variants={varFadeInUp}>
                <Typography
                  variant="h2"
                  sx={{
                    mb: 5,
                    fontStyle: "italic",
                    fontWeight: "normal",
                    color: (theme) => theme.palette.primary.main,
                  }}
                >
                  DeSci is a community.
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography
                  variant="h2"
                  sx={{
                    // mb: 3,
                    fontWeight: "normal",
                  }}
                >
                  DeSci is a community. A community of researchers, artists,
                  builders, visionaries; friends. Growing a community is a
                  continuous process and we are thankful to our partners for
                  their support and contributions.
                </Typography>
              </MotionInView>
            </ContentStyle>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
