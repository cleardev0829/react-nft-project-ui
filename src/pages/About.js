// material
import { experimentalStyled as styled } from "@material-ui/core/styles";
// components
import Page from "../components/Page";
import { AboutContent } from "../components/_external-pages/about";

const RootStyle = styled(Page)({
  height: "100%",
});

const ContentStyle = styled("div")(({ theme }) => ({
  overflow: "hidden",
  position: "relative",
  backgroundColor: theme.palette.background.default,
}));

export default function About() {
  return (
    <RootStyle title="This is Demo website | Minimal-UI" id="move_top">
      <ContentStyle>
        <AboutContent />
      </ContentStyle>
    </RootStyle>
  );
}
