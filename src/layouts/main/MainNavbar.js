import { NavLink as RouterLink, useLocation } from "react-router-dom";
import {
  Box,
  AppBar,
  // Toolbar,
  Container,
} from "@material-ui/core";
// hooks
import useOffSetTop from "../../hooks/useOffSetTop";
// components
import Logo from "../../components/Logo";
import { MHidden } from "../../components/@material-extend";
import navConfig from "./MenuConfig";
import VerticalMenuDesktop from "./VerticalMenuDesktop";

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
          justifyContent: "flex-end",
        }}
      >
        {!isOffset && (
          <>
            <RouterLink to="/">
              <Logo
                sx={{
                  boxShadow: (theme) => theme.customShadows.z24,
                }}
              />
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
        )}
      </Container>
    </AppBar>
  );
}
