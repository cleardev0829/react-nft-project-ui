// material
import { experimentalStyled as styled } from "@material-ui/core/styles";
// components
import Page from "../components/Page";
import { CommunityContent } from "../components/_external-pages/community";

const RootStyle = styled(Page)({
  height: "100%",
});

const ContentStyle = styled("div")(({ theme }) => ({
  overflow: "hidden",
  position: "relative",
  backgroundColor: theme.palette.background.default,
}));

export default function Community() {
  return (
    <RootStyle title="This is Demo website | Minimal-UI" id="move_top">
      <ContentStyle>
        <CommunityContent />
      </ContentStyle>
    </RootStyle>
  );
}
