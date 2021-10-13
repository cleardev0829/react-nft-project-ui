import { experimentalStyled as styled } from "@material-ui/core/styles";
import { Container, Grid, Typography, Box, Stack } from "@material-ui/core";
import { varFadeInUp, MotionInView } from "../animate";

const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(12, 0),
}));

const ContentStyle = styled("div")(({ theme }) => ({
  width: "100%",
  textAlign: "center",
  marginBottom: theme.spacing(0),
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
    marginBottom: 0,
  },
}));

export default function HomeDesci() {
  return (
    <RootStyle>
      <ContentStyle>
        <Container maxWidth="xlg">
          <MotionInView variants={varFadeInUp}>
            <Typography
              variant="h4"
              sx={{
                mb: 3,
                fontWeight: "bold",
                fontFamily: (theme) => `${theme.typography.headingFontFamily}`,
              }}
            >
              What is DeSci?
            </Typography>
          </MotionInView>

          <MotionInView variants={varFadeInUp}>
            <Typography
              variant="h2"
              color="primary"
              sx={{
                fontStyle: "italic",
                fontWeight: "normal",
                mb: 5,
              }}
            >
              Decentralised Science. In a time where information transfer is
              besieged by controversy, ideology and manipulation, free and open
              sharing of knowledge is more important than ever.
            </Typography>
          </MotionInView>

          <MotionInView variants={varFadeInUp}>
            <Stack
              direction={{ xs: "column", sm: "column", md: "row", lg: "row" }}
              justifyContent="space-between"
              alignItems="flex-start"
              width="100%"
              spacing={10}
            >
              <Box>
                <img
                  data-src="https://drive.google.com/uc?id=1z4xBqkMOOt344WcqLuf30jHSBrs07ekZ"
                  alt=""
                  src="https://drive.google.com/uc?id=1z4xBqkMOOt344WcqLuf30jHSBrs07ekZ"
                  style={{ height: "350px" }}
                />
              </Box>
              <Box>
                <video
                  width="100%"
                  muted={false}
                  loop={true}
                  playsInline=""
                  autoPlay={true}
                  preload="none"
                  data-src="https://drive.google.com/uc?export=download&id=14KJiNw11qwa5CZsnzhP7H0XL6Z-0rtAQ"
                  data-lazyload=""
                  data-behavior="softVideo"
                  src="https://drive.google.com/uc?export=download&id=14KJiNw11qwa5CZsnzhP7H0XL6Z-0rtAQ"
                  poster="/static/nft/net-011.png"
                  style={{ height: "350px", width: "350px" }}
                />
              </Box>
            </Stack>
          </MotionInView>

          <Grid
            container
            spacing={10}
            justifyContent="center"
            alignItems="flex-start"
            sx={{
              pt: 10,
            }}
          >
            <Grid item xs={12} md={4} dir="ltr">
              <MotionInView variants={varFadeInUp}>
                <img
                  src="https://drive.google.com/uc?id=1X_CwL4h1l6iVLHq4m98bdagXyr3VrPNE"
                  data-src="https://drive.google.com/uc?id=1X_CwL4h1l6iVLHq4m98bdagXyr3VrPNE"
                  alt=""
                />
              </MotionInView>
            </Grid>

            <Grid item xs={12} md={4} dir="ltr">
              <MotionInView variants={varFadeInUp}>
                <Typography
                  variant="subtitle1"
                  sx={{ fontStyle: "normal", fontWeight: "normal" }}
                >
                  DeSci’s vision is to create a vibrant ecosystem that supports
                  scientific communities from around the world by utilizing
                  decentralised and uncensorable blockchain technology. The
                  transfer of ideas, information, data, methodology, contacts
                  and resources can be revolutionised through the Ethereum
                  Mainnet. Combined with the talent and innovation that is seen
                  every day in the Ethereum community, DeSci hopes to see new
                  life flourish across the world of Science.
                </Typography>
              </MotionInView>
            </Grid>

            <Grid item xs={12} md={4} dir="ltr">
              <MotionInView variants={varFadeInUp}>
                <Typography
                  variant="subtitle1"
                  sx={{ fontStyle: "normal", fontWeight: "normal" }}
                >
                  Alongside facilitating free and fair information exchange,
                  DeSci hopes to bring research to life through the amalgamation
                  of art and science. By reinterpreting the visual data produced
                  from scientific research, information from each discipline is
                  viewed anew and exploration is encouraged as a result of the
                  exchange. Through its deep connections to the non-tangible
                  aspects of humanity and nature, creative expression generates
                  new perspectives and reveals unseen possibilities in new
                  worlds.
                </Typography>
              </MotionInView>
            </Grid>
          </Grid>
        </Container>
      </ContentStyle>
    </RootStyle>
  );
}
