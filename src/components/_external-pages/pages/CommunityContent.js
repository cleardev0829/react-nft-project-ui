import {
  // useTheme,
  experimentalStyled as styled,
} from "@material-ui/core/styles";
import { Grid, Container, Typography } from "@material-ui/core";
import { varFadeInUp, MotionInView } from "../../animate";

const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(12, 0),
}));

const ContentStyle = styled("div")(({ theme }) => ({
  width: "100%",
  textAlign: "center",
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
    marginBottom: 0,
  },
}));

export default function CommunityContent() {
  // const theme = useTheme();

  return (
    <RootStyle>
      <Container maxWidth="lg">
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
                  sx={{
                    mb: 5,
                    fontSize: 40,
                    fontWeight: 400,
                    fontStyle: "italic",
                    color: (theme) => theme.palette.error.main,
                  }}
                >
                  DeSci is a community.
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography
                  sx={{
                    mb: 3,
                    fontSize: 40,
                    fontWeight: 400,
                    fontStyle: "normal",
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
