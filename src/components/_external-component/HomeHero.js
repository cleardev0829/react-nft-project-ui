import { experimentalStyled as styled } from "@material-ui/core/styles";
import VideoPlayer from "../VideoPlayer";
// import Video from "../src/demo/App";

// ----------------------------------------------------------------------

const DesktopStyle = styled("div")(({ theme }) => ({
  position: "relative",
  width: "100%",
  display: "flex",
  alignItems: "center",
  // [theme.breakpoints.up("sm")]: {
  //   visibility: "visible",
  // },
  // [theme.breakpoints.down("sm")]: {
  //   visibility: "hidden",
  //   height: 0,
  // },
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
        <VideoPlayer src="https://firebasestorage.googleapis.com/v0/b/desci-5b3ec.appspot.com/o/001_V2.mp4?alt=media&token=8f1f3db8-0aef-4db9-8760-5a48c9e76874" />
      </DesktopStyle>

      {/* <MobileStyle>
        <img width="100%" src="/static/nft/net-000.gif" alt="" />
      </MobileStyle> */}
    </>
  );
}
