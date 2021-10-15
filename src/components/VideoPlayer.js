import { motion } from "framer-motion";
import { varWrapEnter } from "./animate";
// material
import { experimentalStyled as styled } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core";

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
}));

export default function VideoPlayer(props) {
  const theme = useTheme();
  const { url, poster } = props;

  return (
    <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
      <video
        width="100%"
        // height="100%"
        muted={false}
        loop={true}
        playsInline=""
        autoPlay={true}
        preload="none"
        data-src={url}
        data-lazyload=""
        data-behavior="softVideo"
        src={url}
        poster={poster}
      />
    </RootStyle>
  );
}
