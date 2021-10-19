import { experimentalStyled as styled } from "@material-ui/core/styles";
import VideoPlayer from "../VideoPlayer";

// ----------------------------------------------------------------------

const DesktopStyle = styled("div")(({ theme }) => ({
  position: "relative",
  width: "100%",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    visibility: "visible",
  },
  [theme.breakpoints.down("sm")]: {
    visibility: "hidden",
    height: 0,
  },
}));

const MobileStyle = styled("div")(({ theme }) => ({
  position: "relative",
  width: "100%",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    visibility: "hidden",
    height: 0,
  },
  [theme.breakpoints.down("sm")]: {
    visibility: "visible",
  },
}));
// ----------------------------------------------------------------------

export default function HomeHero(props) {
  return (
    <>
      <DesktopStyle>
        <VideoPlayer url="https://drive.google.com/uc?export=download&id=1ibeyN2HurNSo-I2SH32p991A5cn6I2CG" />
      </DesktopStyle>

      <MobileStyle>
        <img width="100%" src="/static/nft/net-000.gif" alt="" />
      </MobileStyle>
    </>
  );
}
