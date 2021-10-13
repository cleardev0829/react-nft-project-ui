import { experimentalStyled as styled } from "@material-ui/core/styles";
import { Box, Grid, useTheme } from "@material-ui/core";
import { varFadeInUp, MotionInView } from "../animate";
// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 0),
}));

export default function MDImageVideoSection(props) {
  const theme = useTheme();
  const { url1, url2, videoUrl1, videoUrl2, poster } = props;
  return <RootStyle></RootStyle>;
}
