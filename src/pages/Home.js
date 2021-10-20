// material
import { experimentalStyled as styled } from "@material-ui/core/styles";
// components
import Page from "../components/Page";
import { HomeContent } from "../components/_external-pages/pages";

const RootStyle = styled(Page)({
  height: "100%",
});

const ContentStyle = styled("div")(({ theme }) => ({
  overflow: "hidden",
  position: "relative",
  backgroundColor: theme.palette.background.default,
}));

export default function Home() {
  return (
    <RootStyle title="DeSci World" id="move_top">
      <ContentStyle>
        <HomeContent />
      </ContentStyle>
    </RootStyle>
  );
}
