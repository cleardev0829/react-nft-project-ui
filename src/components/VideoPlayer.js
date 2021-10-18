import { motion } from "framer-motion";
import { varWrapEnter } from "./animate";
// material
import { experimentalStyled as styled } from "@material-ui/core/styles";
import ReactPlayer from "react-player";

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
}));

export default function VideoPlayer(props) {
  return (
    <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
      <ReactPlayer
        playing={true}
        loop={true}
        width="100%"
        height="100%"
        {...props}
      />
    </RootStyle>
  );
}
