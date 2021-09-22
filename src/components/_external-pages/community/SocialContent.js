import {
  alpha,
  useTheme,
  experimentalStyled as styled,
} from "@material-ui/core/styles";
import { Grid, Container, Typography } from "@material-ui/core";
import { varFadeInUp, MotionInView } from "../../animate";

const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(24, 0),
  backgroundImage:
    theme.palette.mode === "light"
      ? `linear-gradient(180deg, ${alpha(theme.palette.grey[300], 0)} 0%, ${
          theme.palette.grey[300]
        } 100%)`
      : "none",
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

export default function SocialContent() {
  const theme = useTheme();
  const isLight = theme.palette.mode === "light";

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
                <Typography variant="h2" sx={{ mb: 3 }}>
                  Social
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography
                  sx={{
                    mb: 5,
                    color: isLight ? "text.secondary" : "common.white",
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
