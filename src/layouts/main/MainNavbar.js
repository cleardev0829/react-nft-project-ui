import { NavLink as RouterLink, useLocation } from "react-router-dom";
import {
  Box,
  AppBar,
  // Toolbar,
  Container,
  Typography,
} from "@material-ui/core";
// hooks
import useOffSetTop from "../../hooks/useOffSetTop";
// components
import Logo from "../../components/Logo";
import { MHidden } from "../../components/@material-extend";
import navConfig from "./MenuConfig";
import VerticalMenuDesktop, { LinkStyle } from "./VerticalMenuDesktop";
import { varFadeInUp, MotionInView } from "../../components/animate";
import { useSelector } from "react-redux";
export default function MainNavbar() {
  const isOffset = useOffSetTop(100);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  const isActive = useSelector(({ active }) => active.isActive);

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
          <>
            <RouterLink to="/">
              <MotionInView variants={varFadeInUp}>
                <Logo
                  sx={{
                    boxShadow: (theme) => theme.customShadows.z24,
                  }}
                />
              </MotionInView>
            </RouterLink>

            <Box sx={{ flexGrow: 1 }} />

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
          </>
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
                    fontWeight: 400,
                    fontSize: 30,
                    lineHeight: "30.8px",
                    fontStyle: "normal",
                    cursor: "pointer",
                    color: isActive ? "white" : "",
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
