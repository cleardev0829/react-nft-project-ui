import React from "react";
import PropTypes from "prop-types";
import { experimentalStyled as styled } from "@material-ui/core/styles";
import { Box, ListItem, Typography } from "@material-ui/core";
import ImageMagnifier from "src/components/ImageMagnifier";
import VideoPlayer from "src/components/VideoPlayer";
import { Section } from "./";
import { useTheme } from "@material-ui/core";
import { MHidden } from "../@material-extend";

const RootStyle = styled("div")(({ theme }) => ({
  backgroundColor: "black",
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(8),
  [theme.breakpoints.down("sm")]: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(0),
  },
}));

IconBullet.propTypes = {
  type: PropTypes.oneOf(["subheader", "item"]),
};

function IconBullet({ type = "item" }) {
  return (
    <Box sx={{ width: 24, height: 16, display: "flex", alignItems: "center" }}>
      <Box
        component="span"
        sx={{
          ml: "2px",
          width: 4,
          height: 4,
          borderRadius: "50%",
          bgcolor: "currentColor",
          ...(type !== "item" && {
            ml: 0,
            width: 8,
            height: 2,
            borderRadius: 2,
          }),
        }}
      />
    </Box>
  );
}

export default function NFTVirusSections() {
  const theme = useTheme();

  return (
    <RootStyle id="virus-description">
      <Section
        components={[
          <VideoPlayer
            url="https://drive.google.com/uc?export=download&id=1syOF43Nlx3hjZ9bMU97fiQ2nnVejojV4"
            poster="/static/nft/net-004.png"
          />,
          <>
            <MHidden width="smDown">
              <ImageMagnifier
                maxWidth={340}
                src="https://drive.google.com/uc?id=1f4KtgrHaVO68jKvtVmRYVAdzwoNCL7CO"
                underSrc="https://drive.google.com/uc?id=1wynSxn8NUtkId3-7e5srMZZ74AKOa5YE"
              />
            </MHidden>
            <MHidden width="smUp">
              <ImageMagnifier
                maxWidth={340}
                src="https://drive.google.com/uc?id=1wynSxn8NUtkId3-7e5srMZZ74AKOa5YE"
                // src="https://drive.google.com/uc?id=1f4KtgrHaVO68jKvtVmRYVAdzwoNCL7CO"
              />
            </MHidden>
          </>,
        ]}
      >
        <Typography
          variant="h6"
          color="secondary"
          sx={{
            mb: 4,
            fontStyle: "italic",
            fontWeight: "300",
          }}
        >
          <span
            style={{
              fontFamily: theme.typography.numberFontFamily,
              fontStyle: "normal",
            }}
          >
            {`1 `}
          </span>
          Virus particles and structures - Molecules
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontStyle: "normal",
            fontWeight: "normal",
          }}
          color="white"
        >
          <span>
            Looking deep inside the molecular structure of some of the deadliest
            viruses on earth. Whole viral particles as well as essential
            components were visualised using scientific open source software
            script Pymol, based on experimentally acquired data from x-ray
            crystallography, Nuclear Magnetic Resonance and
            cryo-electronmicroscopy experiments available publically in the RSCB
            protein data bank. This included animated artwork from:
            <br />
            <br />
            <ListItem>
              <IconBullet />
              Influenza virus
            </ListItem>
            <ListItem>
              <IconBullet />
              Hepatitis virus
            </ListItem>
            <ListItem>
              <IconBullet />
              Dengue virus
            </ListItem>
            <ListItem>
              <IconBullet />
              Rabies virus
            </ListItem>
            <ListItem>
              <IconBullet />
              Ebola virus
            </ListItem>
            <ListItem>
              <IconBullet />
              Papilloma virus
            </ListItem>
            <ListItem>
              <IconBullet />
              Poliovirus
            </ListItem>
            <ListItem>
              <IconBullet />
              Rotavirus
            </ListItem>
            <ListItem>
              <IconBullet />
              Smallpox
            </ListItem>
            <ListItem>
              <IconBullet />
              HIV
            </ListItem>
            <br />
            Includes
            <span style={{ fontFamily: theme.typography.numberFontFamily }}>
              {` 19 `}
            </span>
            ultrarare
            <br />
            SARS-COV-
            <span style={{ fontFamily: theme.typography.numberFontFamily }}>
              {`2 `}
            </span>
            <br /> (COVID-
            <span style={{ fontFamily: theme.typography.numberFontFamily }}>
              {`19 `}
            </span>
            disease) structures.
            <br />
            <br /> <span style={{ fontSize: 14 }}>https://www.rcsb.org/</span>
          </span>
        </Typography>
      </Section>
      <Section
        title=" Herpes Simplex Virus - Hidden Passenger"
        components={[
          <VideoPlayer
            url="https://drive.google.com/uc?export=download&id=12z0bfNeNFyUqyWxlR_wfqgOf0jrxcWwX"
            poster="/static/nft/net-010.png"
          />,
        ]}
      >
        <Typography
          variant="h6"
          color="secondary"
          sx={{
            mb: 4,
            fontStyle: "italic",
            fontWeight: "300",
          }}
        >
          <span
            style={{
              fontFamily: theme.typography.numberFontFamily,
              fontStyle: "normal",
            }}
          >
            {`2 `}
          </span>
          Herpes Simplex Virus - Hidden Passenger
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontStyle: "normal",
            fontWeight: "normal",
          }}
          color="white"
        >
          <span>
            More than half of the human population are infected with Herpes
            simplex virus (HSV-
            <span style={{ fontFamily: theme.typography.numberFontFamily }}>
              {`1 `}
            </span>
            or -
          </span>
          <span style={{ fontFamily: theme.typography.numberFontFamily }}>
            {`2`}
          </span>
          <span>
            ). Many of the carriers of the virus never develop symptoms, as the
            virus hides from the patroling immune system in the body of our
            nerve cells. In certain cases HSV-
            <span style={{ fontFamily: theme.typography.numberFontFamily }}>
              {`1 `}
            </span>
            infection can lead to the inflamation of the brain
            (Encephalitis).Studying very early events in viral infections by
            looking inside our cells is of great importance to understand how we
            can prevent infection from this hidden passenger. Laser fluoerescent
            microspcopy coupled with state of the art fluorescent labeling of
            viral genetic material, allows tracking the infection in real time.
            <br />
            <br />
          </span>
          <span style={{ fontSize: 14 }}>
            Based on work by Catherine Cherry at Imperial College London.
          </span>
        </Typography>
      </Section>
    </RootStyle>
  );
}
