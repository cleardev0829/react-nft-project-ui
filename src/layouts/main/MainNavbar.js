import { NavLink as RouterLink, useLocation } from "react-router-dom";
// material
// import { experimentalStyled as styled } from "@material-ui/core/styles";
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
// import Label from "../../components/Label";
import { MHidden } from "../../components/@material-extend";
//
// import MenuDesktop from "./MenuDesktop";
// import MenuMobile from "./MenuMobile";
import navConfig from "./MenuConfig";
import VerticalMenuDesktop from "./VerticalMenuDesktop";

// const APP_BAR_MOBILE = 64;
// const APP_BAR_DESKTOP = 88;

// const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
//   height: APP_BAR_MOBILE,
//   transition: theme.transitions.create(["height", "background-color"], {
//     easing: theme.transitions.easing.easeInOut,
//     duration: theme.transitions.duration.shorter,
//   }),
//   [theme.breakpoints.up("md")]: {
//     height: APP_BAR_DESKTOP,
//   },
// }));

// const ToolbarShadowStyle = styled("div")(({ theme }) => ({
//   left: 0,
//   right: 0,
//   bottom: 0,
//   height: 24,
//   zIndex: -1,
//   margin: "auto",
//   borderRadius: "50%",
//   position: "absolute",
//   width: `calc(100% - 48px)`,
//   boxShadow: theme.customShadows.z8,
// }));

// ----------------------------------------------------------------------

export default function MainNavbar() {
  const isOffset = useOffSetTop(100);
  const { pathname } = useLocation();
  const isHome = pathname === "/" || pathname.includes("about");

  return (
    <AppBar color="transparent" sx={{ boxShadow: 0 }}>
      {/* <ToolbarStyle
        disableGutters
        sx={{
          bgcolor: "background.default",
          height: { md: APP_BAR_DESKTOP - 16 },
        }}
      > */}
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
                  boxShadow: (theme) => theme.customShadows.z8,
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
      {/* </ToolbarStyle> */}

      {/* {isOffset && <ToolbarShadowStyle />} */}
    </AppBar>
  );
}
