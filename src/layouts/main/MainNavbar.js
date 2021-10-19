import { NavLink as RouterLink, useLocation } from "react-router-dom";
import { Box, AppBar, Container, Grid, Typography } from "@material-ui/core";
// hooks
import useOffSetTop from "../../hooks/useOffSetTop";
// components
import Logo from "../../components/Logo";
import { MHidden } from "../../components/@material-extend";
import navConfig from "./MenuConfig";
import VerticalMenuDesktop, { LinkStyle } from "./VerticalMenuDesktop";
import { varFadeInUp, MotionInView } from "../../components/animate";

export default function MainNavbar() {
  const isOffset = useOffSetTop(100);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <AppBar id="Top" color="transparent" sx={{ boxShadow: 0 }}>
      <Container
        maxWidth="100%"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {!isOffset ? (
          <Grid container spacing={(theme) => theme.spacing(5)}>
            <Grid item xs="6">
              <RouterLink to="/">
                <MotionInView variants={varFadeInUp}>
                  <Logo />
                </MotionInView>
              </RouterLink>
            </Grid>

            <Grid
              item
              xs="6"
              sx={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <MHidden width="mdDown">
                <VerticalMenuDesktop
                  isOffset={isOffset}
                  isHome={isHome}
                  navConfig={navConfig}
                />
              </MHidden>
              <MHidden width="mdUp">
                <VerticalMenuDesktop
                  isOffset={isOffset}
                  isHome={isHome}
                  navConfig={navConfig}
                />
              </MHidden>
            </Grid>
          </Grid>
        ) : (
          <LinkStyle
            to="/"
            component={RouterLink}
            sx={{
              cursor: "pointer",
            }}
          >
            <MotionInView variants={varFadeInUp}>
              <Box sx={{ mt: 5 }}>
                <Typography
                  variant="inherit"
                  sx={{
                    fontStyle: "normal",
                    cursor: "pointer",
                    color: (theme) => theme.palette.secondary.main,
                  }}
                >
                  DeSci
                </Typography>
              </Box>
            </MotionInView>
          </LinkStyle>
        )}
      </Container>
    </AppBar>
  );
}
