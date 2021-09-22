// material
import { experimentalStyled as styled } from "@material-ui/core/styles";
// components
import Page from "../../components/Page";
import {
  LandingHero,
  LandingContent,
} from "../../components/_external-pages/landing";

const RootStyle = styled(Page)({
  height: "100%",
});

const ContentStyle = styled("div")(({ theme }) => ({
  overflow: "hidden",
  position: "relative",
  backgroundColor: theme.palette.background.default,
}));

export default function Desci() {
  return (
    <RootStyle title="This is IRekommend website | Minimal-UI" id="move_top">
      <LandingHero />
      <ContentStyle>
        <LandingContent />
      </ContentStyle>
    </RootStyle>
  );
}
