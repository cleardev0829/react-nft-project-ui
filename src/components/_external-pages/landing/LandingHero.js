import { motion } from "framer-motion";
import { experimentalStyled as styled } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import { varWrapEnter } from "../../animate";

// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  // position: "relative",
  backgroundColor: theme.palette.grey[400],
  top: 0,
  left: 0,
  width: "100%",
  height: "100vh",
  display: "flex",
  position: "fixed",
  alignItems: "center",
}));

// ----------------------------------------------------------------------

export default function LandingHero() {
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <video
          preload="auto"
          data-src="https://373437-1168568-raikfcquaxqncofqfm.stackpathdns.com/files/landing-hero-001.mp4#t=16"
          data-lazyload=""
          data-behavior="softVideo"
          data-pagetransition-wait-load-desktop=""
          src="https://373437-1168568-raikfcquaxqncofqfm.stackpathdns.com/files/landing-hero-001.mp4#t=16"
        ></video>
      </RootStyle>
      <Box sx={{ height: "100vh", zIndex: 100 }} />
    </>
  );
}
