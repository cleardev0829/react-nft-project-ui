import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  // useTheme,
  experimentalStyled as styled,
} from "@material-ui/core/styles";
import { Grid, Container, Typography, Box, Link } from "@material-ui/core";
import { varFadeInUp, MotionInView } from "../../animate";
import VideoPlayer from "../../VideoPlayer";
import { MDImageVideoSection } from "../../_external-component";
import ImageMagnifier from "src/components/ImageMagnifier";
import { Link as ScrollLink } from "react-scroll";
import { setActive } from "src/redux/slices/active";

const RootStyle = styled("div")(({ theme }) => ({
  paddingBottom: theme.spacing(12, 0),
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

export default function HomeContent() {
  const dispatch = useDispatch();
  window.scrollTo({
    top: 100,
    left: 100,
    behavior: "smooth",
  });

  return (
    <RootStyle>
      <Grid container spacing={5} justifyContent="center">
        <Grid
          item
          xs={12}
          md={12}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <ContentStyle>
            <VideoPlayer
              url="https://drive.google.com/uc?export=download&id=1W45sOjVCXIxp4aAOkO23jeFaOwVjSiFm"
              poster="/static/nft/poster.png"
            />
            <Container maxWidth="xlg" sx={{ mt: 10 }}>
              <MotionInView variants={varFadeInUp}>
                <Typography
                  variant="h3"
                  sx={{
                    mb: 3,
                    fontFamily: (theme) =>
                      `${theme.typography.headingFontFamily}`,
                  }}
                >
                  What is DeSci?
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography
                  sx={{
                    fontStyle: "italic",
                    fontSize: 40,
                    fontWeight: 400,
                    color: (theme) => theme.palette.error.main,
                    mb: 5,
                  }}
                >
                  In a time where information transfer is besieged by
                  controversy, ideology and manipulation, free and open sharing
                  of knowledge is more important than ever.
                </Typography>
              </MotionInView>

              <MDImageVideoSection
                url1="https://drive.google.com/uc?id=18gZjWC6zqIdztpatfrpRNbLxHg61Lt_M"
                videoUrl2="https://drive.google.com/uc?export=download&id=1qD475YBwZilt6YSxmpWW139FlJzjv2M1"
              />

              <Grid
                container
                spacing={10}
                justifyContent="center"
                alignItems="flex-start"
                sx={{
                  pt: 10,
                }}
              >
                <Grid item xs={12} md={4} dir="ltr" sx={{ px: 1 }}>
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
                      variant="h5"
                      sx={{
                        fontStyle: "normal",
                        fontWeight: "normal",
                      }}
                    >
                      DeSci’s vision is to create a vibrant ecosystem that
                      supports scientific communities from around the world by
                      utilizing decentralised and uncensorable blockchain
                      technology. The transfer of ideas, information, data,
                      methodology, contacts and resources can be revolutionised
                      through the Ethereum Mainnet. Combined with the talent and
                      innovation that is seen every day in the Ethereum
                      community, DeSci hopes to see new life flourish across the
                      world of Science.
                    </Typography>
                  </MotionInView>
                </Grid>

                <Grid item xs={12} md={4} dir="ltr">
                  <MotionInView variants={varFadeInUp}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontStyle: "normal",
                        fontWeight: "normal",
                      }}
                    >
                      Alongside facilitating free and fair information exchange,
                      DeSci hopes to bring research to life through the
                      amalgamation of art and science. Art provides a link to
                      the soul that is rarely found in the field of science.
                      Through its deep connections to the non-tangible aspects
                      of humanity, Art can open the esoteric up to everyone.
                    </Typography>
                  </MotionInView>
                </Grid>
              </Grid>
            </Container>

            <ContentStyle
              id="overlay"
              sx={{ mt: 10, pb: 20, backgroundColor: "black" }}
            >
              <Container maxWidth="xlg">
                <Grid item xs={12} md={12} dir="ltr" sx={{ px: 1 }}>
                  <MotionInView variants={varFadeInUp}>
                    <ImageMagnifier
                      src="https://drive.google.com/uc?id=1VBrOZ2tn94tg4zs_dWsWimpxLk0A5fcQ"
                      underSrc="https://drive.google.com/uc?id=1Qjtfb2MV3f98zBDZr1LTCWWkRn_RnxV9"
                    />
                  </MotionInView>
                </Grid>

                <MotionInView variants={varFadeInUp}>
                  <Typography
                    variant="h3"
                    sx={{
                      mb: 3,
                      fontFamily: (theme) =>
                        `${theme.typography.headingFontFamily}`,
                    }}
                    color="white"
                  >
                    How will DeScientists collaborate?
                  </Typography>
                </MotionInView>

                <MotionInView variants={varFadeInUp}>
                  <Typography
                    sx={{
                      fontStyle: "italic",
                      fontSize: 40,
                      fontWeight: 400,
                      color: (theme) => "white",
                      mb: 5,
                    }}
                  >
                    The advent of DAOs (Decentralised Autonomous Organisation)
                    has changed the way people and organisations interact.
                    <br />
                  </Typography>
                </MotionInView>

                <Grid
                  container
                  spacing={0}
                  justifyContent="center"
                  alignItems="flex-start"
                  sx={{ mb: 10 }}
                >
                  <Grid item xs={12} md={8} dir="ltr" sx={{ px: 1 }}>
                    <MotionInView variants={varFadeInUp}>
                      <VideoPlayer url="https://drive.google.com/uc?export=download&id=1BLJwyxDV-ubBcIs04yl5lIqkvWZYqaiK" />
                    </MotionInView>
                  </Grid>

                  <Grid item xs={12} md={4} dir="ltr" sx={{ pl: 5 }}>
                    <MotionInView variants={varFadeInUp}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontStyle: "normal",
                          fontWeight: "normal",
                        }}
                        color="white"
                      >
                        Traditionally, communities communicated through a
                        centralised platform, conforming to the parameters set
                        by the platform provider, and fitting their working
                        style around the tools that are given to them. With
                        Ethereum and DAOs, interested members can take control
                        of the community’s future through open-source codebases,
                        decentralised community governance and democratic
                        decision-making.
                      </Typography>
                    </MotionInView>
                  </Grid>
                </Grid>

                <Grid
                  container
                  spacing={0}
                  justifyContent="center"
                  alignItems="flex-start"
                >
                  <Grid item xs={12} md={4} dir="ltr" sx={{ px: 1 }}>
                    <MotionInView variants={varFadeInUp}>
                      <img
                        src="https://drive.google.com/uc?id=1pat5-LC82KDP9OC0sxru7hXtpGJNtKy4"
                        data-src="https://drive.google.com/uc?id=1pat5-LC82KDP9OC0sxru7hXtpGJNtKy4"
                        alt=""
                      />
                    </MotionInView>
                  </Grid>

                  <Grid item xs={12} md={4} dir="ltr" sx={{ px: 1 }}>
                    <MotionInView variants={varFadeInUp}>
                      <img
                        src="https://drive.google.com/uc?id=1jeG_DSRl1HFqXeziiClkMpTg5u4u32MF"
                        data-src="https://drive.google.com/uc?id=1jeG_DSRl1HFqXeziiClkMpTg5u4u32MF"
                        alt=""
                      />
                    </MotionInView>
                  </Grid>
                  <Grid item xs={12} md={4} dir="ltr" sx={{ pl: 5 }}>
                    <MotionInView variants={varFadeInUp}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontStyle: "normal",
                          fontWeight: "normal",
                        }}
                        color="white"
                      >
                        DeSci aims to attract not just researchers, but talented
                        people from all walks of life - this includes Ethereum
                        builders and NFT visionaries. As DeSci begins to absorb
                        talent from all sectors, it is hoped that Ethereum
                        developers will be inspired by the quality of the
                        contributions in other fields and eventually help to
                        build dApps or a DAO structure to help guide the DeSci
                        community to become a flagship member of the Ethereum
                        ecosystem.
                      </Typography>
                    </MotionInView>
                  </Grid>
                </Grid>
              </Container>
            </ContentStyle>

            <Container maxWidth="xlg" sx={{ mt: 16 }}>
              <MotionInView variants={varFadeInUp}>
                <Typography
                  variant="h3"
                  sx={{
                    mb: 5,
                    fontFamily: (theme) =>
                      `${theme.typography.headingFontFamily}`,
                  }}
                >
                  Why Ethereum?
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography
                  sx={{
                    fontStyle: "italic",
                    fontSize: 40,
                    fontWeight: 400,
                    mb: 5,
                    color: (theme) => theme.palette.warning.main,
                  }}
                >
                  Ethereum embodies all that DeSci wants to achieve: innovation,
                  community and collaboration.
                  <br />
                </Typography>
              </MotionInView>

              <Grid
                container
                spacing={10}
                justifyContent="center"
                alignItems="space-between"
                sx={{ mb: 10 }}
              >
                <Grid item xs={12} md={7} dir="ltr">
                  <MotionInView variants={varFadeInUp}>
                    <Box sx={{ position: "relative" }}>
                      <img
                        src="https://drive.google.com/uc?id=1nN2knnG7R6QTkA7CJBq8BGoTYcIpJ6jW"
                        data-src="https://drive.google.com/uc?id=1nN2knnG7R6QTkA7CJBq8BGoTYcIpJ6jW"
                        alt=""
                      />
                      <Box
                        sx={{
                          width: "100%",
                          height: "100%",
                          position: "absolute",
                          top: 0,
                          left: 0,
                        }}
                      >
                        <Box
                          sx={{
                            width: "100%",
                            height: "37.5%",
                          }}
                        ></Box>
                        <Box
                          sx={{
                            width: "100%",
                            height: "62.5%",
                          }}
                        >
                          <Grid container spacing={2} sx={{ height: "55%" }}>
                            <Grid
                              item
                              xs={6}
                              md={6}
                              textAlign="right"
                              sx={{
                                height: "100%",
                                alignItems: "center",
                              }}
                            >
                              <Box
                                sx={{
                                  height: "100%",
                                  display: "flex",
                                  justifyContent: "flex-end",
                                  alignItems: "center",
                                }}
                              >
                                <Link
                                  target="_blank"
                                  href={
                                    "https://ethereum.org/en/what-is-ethereum/"
                                  }
                                >
                                  <Typography color="text.primary">
                                    What is
                                    <br />
                                    Ethereum
                                  </Typography>
                                </Link>
                              </Box>
                            </Grid>
                            <Grid item xs={6} md={6} textAlign="left">
                              <Box
                                sx={{
                                  height: "100%",
                                  display: "flex",
                                  justifyContent: "flex-start",
                                  alignItems: "center",
                                }}
                              >
                                <Link
                                  target="_blank"
                                  href="https://ethereum.org/en/community/"
                                >
                                  <Typography color="text.primary">
                                    Ethereum
                                    <br />
                                    Community
                                  </Typography>
                                </Link>
                              </Box>
                            </Grid>
                          </Grid>
                          <Grid container spacing={2} sx={{ height: "45%" }}>
                            <Grid
                              item
                              xs={6}
                              md={6}
                              textAlign="right"
                              sx={{
                                height: "100%",
                                alignItems: "center",
                              }}
                            >
                              <Box
                                sx={{
                                  height: "100%",
                                  display: "flex",
                                  justifyContent: "flex-end",
                                  alignItems: "center",
                                }}
                              >
                                <Link
                                  target="_blank"
                                  href="https://ethereum.org/en/nft/"
                                >
                                  <Typography color="text.primary">
                                    NFTs
                                  </Typography>
                                </Link>
                              </Box>
                            </Grid>
                            <Grid item xs={6} md={6} textAlign="left">
                              <Box
                                sx={{
                                  height: "100%",
                                  display: "flex",
                                  justifyContent: "flex-start",
                                  alignItems: "center",
                                }}
                              >
                                <Link
                                  target="_blank"
                                  href="https://ethereum.org/en/dao/"
                                >
                                  <Typography color="text.primary">
                                    DAOs
                                  </Typography>
                                </Link>
                              </Box>
                            </Grid>
                          </Grid>
                        </Box>
                      </Box>
                    </Box>
                  </MotionInView>
                </Grid>

                <Grid item xs={12} md={5} dir="ltr">
                  <MotionInView variants={varFadeInUp}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontStyle: "normal",
                        fontWeight: 400,
                        mb: 10,
                      }}
                    >
                      The advent of the Ethereum blockchain created an ecosystem
                      designed to help humans regain trust in interactions.
                      Trusting words, sometimes risky, has been replaced by
                      trust-less blockchain; the resulting uncensorable and
                      immutable transcational economy paves the way for thriving
                      scientific communities and discoveries, free of
                      manipulation.
                      <br />
                    </Typography>
                    <Typography
                      sx={{
                        fontStyle: "italic",
                        fontWeight: 400,
                        fontSize: 30,
                      }}
                    >
                      The Ethereum community is the strongest and most
                      technically gifted of all blockchains and it is a
                      no-brainer for DeSci to function there.
                    </Typography>
                  </MotionInView>
                </Grid>
              </Grid>
            </Container>
          </ContentStyle>
        </Grid>
      </Grid>
      <ScrollLink
        to="overlay"
        spy
        onSetActive={(e) => dispatch(setActive(true))}
        onSetInactive={(e) => dispatch(setActive(false))}
      />
    </RootStyle>
  );
}
