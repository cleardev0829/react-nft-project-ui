import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { experimentalStyled as styled } from "@material-ui/core/styles";
import {
  NFTAnchor,
  NFTBubbles,
  NFTButtonGroup,
  NFTMint,
  NFTRarityAndTraits,
  NFTVFBDescription,
  NFTVirusSections,
  NFTFungiSections,
  NFTBacteriaSections,
  NFTBottomLink,
} from "../../_external-component";
import { Link as ScrollLink } from "react-scroll";
import ImageMagnifier from "src/components/ImageMagnifier";
import { setActive } from "src/redux/slices/active";
import { MHidden } from "../../@material-extend";

const RootStyle = styled("div")(({ theme }) => ({
  paddingBottom: theme.spacing(12, 0),
}));

export default function NFTContent() {
  const dispatch = useDispatch();

  const [anchor, setAnchor] = useState(false);

  return (
    <RootStyle>
      <NFTMint />

      <MHidden width="smDown">
        <ImageMagnifier
          src="/static/nft/nfts/DESCI_nft_overlay-02.jpg"
          underSrc="/static/nft/nfts/DESCI_nft_overlay-01.jpg"
        />
      </MHidden>
      <MHidden width="smUp">
        <ImageMagnifier src="/static/nft/nfts/DESCI_nft_overlay-01.jpg" />
      </MHidden>

      <NFTButtonGroup />
      <div id="anchor">
        <NFTRarityAndTraits />
        <NFTBubbles />
        <NFTVFBDescription id="virus" color="primary" />
        <NFTVirusSections />
        <NFTVFBDescription id="fungi" color={"#D82E32"} />
        <NFTFungiSections />
        <NFTVFBDescription id="bacteria" color={"#FD8F36"} />
        <NFTBacteriaSections />
        <NFTBottomLink />
      </div>

      <ScrollLink
        to="buttons"
        spy
        onSetActive={(e) => dispatch(setActive(true))}
        onSetInactive={(e) => dispatch(setActive(false))}
      />
      <ScrollLink
        to="bubbles"
        spy
        onSetActive={(e) => dispatch(setActive(true))}
        onSetInactive={(e) => dispatch(setActive(false))}
      />
      <ScrollLink
        to="virus-description"
        spy
        onSetActive={(e) => dispatch(setActive(true))}
        onSetInactive={(e) => dispatch(setActive(false))}
      />
      <ScrollLink
        to="fungi-description"
        spy
        onSetActive={(e) => dispatch(setActive(true))}
        onSetInactive={(e) => dispatch(setActive(false))}
      />
      <ScrollLink
        to="bacteria-description"
        spy
        onSetActive={(e) => dispatch(setActive(true))}
        onSetInactive={(e) => dispatch(setActive(false))}
      />
      <ScrollLink
        to="anchor"
        spy
        onSetActive={(e) => setAnchor(true)}
        onSetInactive={(e) => setAnchor(false)}
      />
      {anchor && <NFTAnchor />}
    </RootStyle>
  );
}
