import { motion } from "framer-motion";
// material
import { experimentalStyled as styled } from "@material-ui/core/styles";

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
}));

export default function VideoPlayer(props) {
  const { url } = props;

  return (
    <video
      width="100%"
      muted="muted"
      autoPlay={true}
      loop={true}
      playsInline={true}
      src={url}
      {...props}
    />
  );
}
