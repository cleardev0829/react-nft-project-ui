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
                  variant="h3"
                  sx={{
                    mb: 3,
                    fontFamily: (theme) =>
                      `${theme.typography.headingFontFamily}`,
                  }}
                >
                  Social
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    mb: 5,
                  }}
                >
                  Decentralisation is not an easy goal. It requires the
                  collective minds and efforts of a wide community. Achieveing
                  the vision of DeSci is predicated on our ability to cooperate
                  and innovate... together!
                  <br />
                  <br />
                  Join the following channels to participate in the DeSci World:{" "}
                  <br />
                  <br />
                  Discord
                  <br />
                  Telegram
                  <br />
                  Twitter
                  <br />
                  Instagram
                  <br />
                  <br />
                  Follow the creators of DeSci here:
                  <br />
                  Kira Twitter
                  <br />
                  Cara Twitter
                  <br />
                  Tiktok?
                  <br />
                  <br />
                </Typography>
              </MotionInView>
            </ContentStyle>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
