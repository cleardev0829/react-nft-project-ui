import React from "react";
import { Container, Grid, Typography, useTheme } from "@material-ui/core";
import {
  experimentalStyled as styled,
  makeStyles,
} from "@material-ui/core/styles";
import { varFadeInUp, MotionInView } from "../animate";
import VideoPlayer from "../VideoPlayer";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("lg")]: {
      paddingLeft: 150,
      paddingRight: 150,
    },
    [theme.breakpoints.down("lg")]: {
      paddingLeft: 100,
      paddingRight: 100,
    },
  },
}));

const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(20, 0),
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
  const classes = useStyles();

  return (
    <RootStyle>
      <ContentStyle id="buttons">
        <Container maxWidth="xlg" justifyContent="space-between">
          <Grid
            container
            justifyContent="space-between"
            alignItems="flex-start"
            spacing={15}
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
                  world’s largest NFT marketplace.
                </Typography>
              </MotionInView>
            </Grid>

            <Grid item xs={12} md={6} dir="ltr">
              <MotionInView variants={varFadeInUp}>
                <VideoPlayer
                  url="https://drive.google.com/uc?export=download&id=1WAo2OU5wWj4NNcf2bmpMugcc_P4crWPh"
                  poster="/static/nft/net-002.png"
                />
              </MotionInView>
            </Grid>

            <Grid item xs={12} md={12} dir="ltr" sx={{ mt: 10 }}>
              <MotionInView variants={varFadeInUp}>
                <Typography
                  sx={{
                    fontStyle: "italic",
                    fontWeight: "normal",
                    [theme.breakpoints.down("md")]: {
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
