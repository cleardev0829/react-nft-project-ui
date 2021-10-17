import { motion } from "framer-motion";
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
        <VideoPlayer
          url="https://drive.google.com/uc?export=download&id=1FPCs94HEZabQEXq3ATafz_5Jea68lmrq"
          poster="/static/nft/poster.png"
        />
      </DesktopStyle>

      <MobileStyle>
        <img
          width="100%"
          data-src="/static/nft/net-00${index}.gif"
          alt=""
          src="/static/nft/net-000.gif"
        />
      </MobileStyle>
    </>
  );
}
