import React from "react";
import { Container, Grid, Typography, Box, useTheme } from "@material-ui/core";
import { experimentalStyled as styled } from "@material-ui/core/styles";
import { varFadeInUp, MotionInView } from "../animate";
import VideoPlayer from "../VideoPlayer";

const RootStyle = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(12),
  [theme.breakpoints.down("sm")]: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(8),
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

export default function NFTRarityAndTraits() {
  const theme = useTheme();

  return (
    <RootStyle>
      <ContentStyle id="buttons">
        <Container maxWidth="xlg" justifyContent="space-between" spacing={4}>
          <Grid
            container
            justifyContent="space-between"
            alignItems="flex-start"
            spacing={4}
          >
            <Grid item xs={12} md={6} dir="ltr">
              <MotionInView variants={varFadeInUp}>
                <Typography
                  variant="h4"
                  sx={{
                    mb: 3,
                    fontWeight: "bold",
                    fontFamily: (theme) =>
                      `${theme.typography.headingFontFamily}`,
                  }}
                >
                  Rarity & Traits
                </Typography>
              </MotionInView>
              <MotionInView variants={varFadeInUp}>
                <Typography
                  variant="h5"
                  sx={{
                    fontStyle: "normal",
                    fontWeight: 400,
                  }}
                >
                  The three principle categories: Virus; Fungi and Bacteria are
                  further divided into <b>traits</b>. Traits are predefined
                  qualities that help to differentiate and identify each unique
                  NFT. Each NFT will have its traits defined on OpenSea, the
                  world???s largest NFT marketplace.
                </Typography>
              </MotionInView>
            </Grid>

            <Grid item xs={12} md={6}>
              <MotionInView variants={varFadeInUp}>
                <Box>
                  <VideoPlayer
                    url="https://firebasestorage.googleapis.com/v0/b/desci-5b3ec.appspot.com/o/004-Large%20540p.mov?alt=media&token=a0e6fd4f-1086-4cd4-8205-99f56d21b225"
                    poster="/static/nft/net-002.png"
                  />
                </Box>
              </MotionInView>
            </Grid>

            <Grid item xs={12} md={12} dir="ltr">
              <MotionInView variants={varFadeInUp}>
                <Typography
                  sx={{
                    fontStyle: "italic",
                    fontWeight: "normal",
                    fontSize: 50,
                    [theme.breakpoints.down("lg")]: {
                      fontSize: 50,
                    },
                    [theme.breakpoints.down("md")]: {
                      fontSize: 40,
                    },
                    [theme.breakpoints.down("sm")]: {
                      fontSize: 30,
                    },

                    color: (theme) => theme.palette.warning.main,
                  }}
                >
                  This gives each NFT a unique <b>rarity</b> and thus
                  collectability.
                </Typography>
              </MotionInView>
            </Grid>
          </Grid>
        </Container>
      </ContentStyle>
    </RootStyle>
  );
}
