import { varFadeInUp, MotionInView } from "../../components/animate";
import { useLocation } from "react-router-dom";
// material
import { experimentalStyled as styled } from "@material-ui/core/styles";
import { Grid, Link, Container, Typography, Stack } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

const RootStyle = styled("div")(({ theme, bgColor }) => ({
  position: "relative",
  backgroundColor: theme.palette.common[bgColor],
  paddingBottom: theme.spacing(2),
}));

export default function MainFooter() {
  const theme = useTheme();
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <RootStyle bgColor={isHome ? "black" : "white"}>
      <Container
        maxWidth="xlg"
        sx={{
          pt: 10,
          [theme.breakpoints.down("sm")]: {
            pt: 4,
          },
        }}
      >
        {!isHome && pathname === "/nft" && (
          <>
            <MotionInView variants={varFadeInUp}>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: (theme) =>
                    `${theme.typography.headingFontFamily}`,
                }}
                color={isHome ? "white" : ""}
              >
                Supported by
              </Typography>
            </MotionInView>

            <Grid
              container
              spacing={0}
              justifyContent="center"
              alignItems="flex-start"
            >
              <Grid item xs={12} md={8} dir="ltr" sx={{ px: 1 }}>
                <MotionInView variants={varFadeInUp}>
                  <img
                    src="https://drive.google.com/uc?id=1CWGnnT6Fqf-DUcThnsGfrQuDoYq_yKZM"
                    data-src="https://drive.google.com/uc?id=1CWGnnT6Fqf-DUcThnsGfrQuDoYq_yKZM"
                    alt=""
                  />
                </MotionInView>
              </Grid>
            </Grid>
          </>
        )}

        {pathname !== "/community" && (
          <MotionInView variants={varFadeInUp}>
            <Typography
              variant="h3"
              sx={{
                mb: 5,
                fontFamily: (theme) => `${theme.typography.headingFontFamily}`,
              }}
              color={isHome ? "white" : ""}
            >
              Socials & Contact
            </Typography>
          </MotionInView>
        )}

        <Grid
          container
          spacing={0}
          justifyContent="center"
          alignItems="flex-start"
        >
          <Grid item xs={12} md={6} dir="ltr" sx={{ mb: 5 }}>
            <Stack
              direction="row"
              spacing={{ lg: 30, md: 20, sm: 10 }}
              justifyContent="space-around"
            >
              <MotionInView variants={varFadeInUp}>
                <Stack
                  direction="column"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  {pathname === "/community" && (
                    <Typography variant="h6" sx={{ fontWeight: "normal" }}>
                      Join our&nbsp;
                      <span
                        style={{
                          textDecoration: "underline",
                          cursor: "pointer",
                          "&:hover": {
                            color: theme.palette.GREEN,
                          },
                        }}
                      >
                        discord
                      </span>
                      &nbsp;to get involved.
                    </Typography>
                  )}
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/desci-5b3ec.appspot.com/o/DESCI_social_logos-01.png?alt=media&token=7094ea50-3d1a-4032-945e-9865607cf3d0"
                    data-src="https://firebasestorage.googleapis.com/v0/b/desci-5b3ec.appspot.com/o/DESCI_social_logos-01.png?alt=media&token=7094ea50-3d1a-4032-945e-9865607cf3d0"
                    alt=""
                  />
                  <Link
                    target="_blank"
                    href="https://discord.gg/xyKWH6gSKp"
                    key="https://discord.gg/xyKWH6gSKp"
                    color="inherit"
                    variant="body2"
                    sx={{ display: "block" }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "normal",
                        textDecoration: "underline",
                        "&:hover": {
                          color: (theme) => theme.palette.GREEN,
                        },
                      }}
                      color={isHome ? "white" : ""}
                    >
                      discord
                    </Typography>
                  </Link>
                </Stack>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Stack
                  direction="column"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  {pathname === "/community" && (
                    <Typography variant="h6" sx={{ fontWeight: "normal" }}>
                      Follow our&nbsp;
                      <span
                        style={{
                          textDecoration: "underline",
                          cursor: "pointer",
                          "&:hover": {
                            color: theme.palette.GREEN,
                          },
                        }}
                      >
                        twitter
                      </span>
                      &nbsp;to stay up to date.
                    </Typography>
                  )}

                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/desci-5b3ec.appspot.com/o/DESCI_social_logos-02.png?alt=media&token=2878332d-37a2-4108-9946-e4647b5caf24"
                    data-src="https://firebasestorage.googleapis.com/v0/b/desci-5b3ec.appspot.com/o/DESCI_social_logos-02.png?alt=media&token=2878332d-37a2-4108-9946-e4647b5caf24"
                    alt=""
                  />
                  <Link
                    target="_blank"
                    href="https://twitter.com/DeSciWorld"
                    key="https://twitter.com/DeSciWorld"
                    color="inherit"
                    variant="body2"
                    sx={{
                      display: "block",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "normal",
                        textDecoration: "underline",
                        "&:hover": {
                          color: (theme) => theme.palette.GREEN,
                        },
                      }}
                      color={isHome ? "white" : "black"}
                    >
                      twitter
                    </Typography>
                  </Link>
                </Stack>
              </MotionInView>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
