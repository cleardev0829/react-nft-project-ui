import { experimentalStyled as styled } from "@material-ui/core/styles";
import { Container, Grid, Typography, Box } from "@material-ui/core";
import { varFadeInUp, MotionInView } from "../animate";
import ImageMagnifier from "src/components/ImageMagnifier";
import VideoPlayer from "../VideoPlayer";
// import Video from "../src/demo/App";
import { MHidden } from "../@material-extend";

const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(12, 0),
  backgroundColor: "black",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(4, 0),
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

export default function HomeDeScientists() {
  return (
    <RootStyle id="overlay">
      <ContentStyle>
        <Container maxWidth="xlg">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <MotionInView variants={varFadeInUp}>
              <MHidden width="smDown">
                <ImageMagnifier
                  src="https://firebasestorage.googleapis.com/v0/b/desci-5b3ec.appspot.com/o/005.png?alt=media&token=3638c5a0-ff76-44d7-ac17-1ce32d6550f5"
                  underSrc="https://firebasestorage.googleapis.com/v0/b/desci-5b3ec.appspot.com/o/006%20(1).png?alt=media&token=ce38f17b-39c1-443b-8650-14b98009dea2"
                />
              </MHidden>
              <MHidden width="smUp">
                <ImageMagnifier
                  src="https://firebasestorage.googleapis.com/v0/b/desci-5b3ec.appspot.com/o/006%20(1).png?alt=media&token=ce38f17b-39c1-443b-8650-14b98009dea2"
                  underSrc=""
                />
              </MHidden>
            </MotionInView>
          </Box>

          <MotionInView variants={varFadeInUp}>
            <Typography
              variant="h4"
              sx={{
                mb: 4,
                fontStyle: "normal",
                fontWeight: "bold",
                fontFamily: (theme) => `${theme.typography.headingFontFamily}`,
              }}
              color="white"
            >
              How will DeScientists collaborate?
            </Typography>
          </MotionInView>

          <MotionInView variants={varFadeInUp}>
            <Typography
              variant="h2"
              sx={{
                fontStyle: "italic",
                fontWeight: "normal",
                color: "white",
                mb: 4,
              }}
            >
              The advent of DAOs (Decentralised Autonomous Organisation) has
              changed the way people and organisations interact.
              <br />
            </Typography>
          </MotionInView>

          <Grid
            container
            spacing={4}
            justifyContent="center"
            alignItems="flex-start"
            sx={{ mb: 4 }}
          >
            <Grid item xs={12} md={8} dir="ltr">
              <MotionInView variants={varFadeInUp}>
                <VideoPlayer src="https://drive.google.com/uc?export=download&id=1BLJwyxDV-ubBcIs04yl5lIqkvWZYqaiK" />
              </MotionInView>
            </Grid>

            <Grid item xs={12} md={4} dir="ltr" sx={{ pl: 4 }}>
              <MotionInView variants={varFadeInUp}>
                <Typography
                  variant="subtitle1"
                  color="white"
                  sx={{ fontStyle: "normal", fontWeight: "normal" }}
                >
                  Traditionally, communities communicated through a centralised
                  platform, conforming to the parameters set by the platform
                  provider, and fitting their working style around the tools
                  that are given to them. With Ethereum and DAOs, interested
                  members can take control of the community’s future through
                  open-source codebases, decentralised community governance and
                  democratic decision-making.
                </Typography>
              </MotionInView>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={4}
            justifyContent="center"
            alignItems="flex-start"
          >
            <Grid item xs={12} md={4} dir="ltr">
              <MotionInView variants={varFadeInUp}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/desci-5b3ec.appspot.com/o/007.jpeg?alt=media&token=8daa9de0-8c24-4556-9260-8ba5e700cf2c"
                  data-src="https://firebasestorage.googleapis.com/v0/b/desci-5b3ec.appspot.com/o/007.jpeg?alt=media&token=8daa9de0-8c24-4556-9260-8ba5e700cf2c"
                  alt=""
                />
              </MotionInView>
            </Grid>

            <Grid item xs={12} md={4} dir="ltr">
              <MotionInView variants={varFadeInUp}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/desci-5b3ec.appspot.com/o/008.jpeg?alt=media&token=236c9c62-5071-4af8-a3b8-0321d81541f3"
                  data-src="https://firebasestorage.googleapis.com/v0/b/desci-5b3ec.appspot.com/o/008.jpeg?alt=media&token=236c9c62-5071-4af8-a3b8-0321d81541f3"
                  alt=""
                />
              </MotionInView>
            </Grid>
            <Grid item xs={12} md={4} dir="ltr" sx={{ pl: 4 }}>
              <MotionInView variants={varFadeInUp}>
                <Typography
                  variant="subtitle1"
                  color="white"
                  sx={{ fontStyle: "normal", fontWeight: "normal" }}
                >
                  DeSci aims to attract not just researchers, but talented
                  people from all walks of life - this includes Ethereum
                  builders and NFT visionaries. As DeSci begins to absorb talent
                  from all sectors, it is hoped that Ethereum developers will be
                  inspired by the quality of the contributions in other fields
                  and eventually help to build dApps or a DAO structure to help
                  guide the DeSci community to become a flagship member of the
                  Ethereum ecosystem.
                </Typography>
              </MotionInView>
            </Grid>
          </Grid>
        </Container>
      </ContentStyle>
    </RootStyle>
  );
}
