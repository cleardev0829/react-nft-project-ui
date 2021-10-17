import React from "react";
import { experimentalStyled as styled } from "@material-ui/core/styles";
import VideoPlayer from "src/components/VideoPlayer";
import { Section } from "./";
import { Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core";

const RootStyle = styled("div")(({ theme }) => ({
  backgroundColor: "black",
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(8),
  [theme.breakpoints.down("sm")]: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(0),
  },
}));

export default function NFTFungiSections() {
  const theme = useTheme();

  return (
    <RootStyle>
      <div id="fungi-description">
        <Section
          components={[
            <img
              width={340}
              src="https://drive.google.com/uc?id=12IqaOirecME1Z8_dBVXndyt_QTlbquG-"
              data-src="https://drive.google.com/uc?id=12IqaOirecME1Z8_dBVXndyt_QTlbquG-"
              alt=""
            />,
          ]}
        >
          <Typography
            variant="h6"
            color="secondary"
            sx={{
              mb: 5,
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
            Lichtheimia Corymbifera - Hyphae
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
              A beautiful microscopic view at Lichtheimia Corymbifera,
              athermophilic fungus, growing in multicellular filaments called
              hyphae. Lichtheimia Corymbifer normally grows as a fuzzy mold that
              under certain circumstances can infect humans and cause pulmonary
              infections. Microscpic images were collected by Yuri a Medical
              Laboratory Technician, who has an artistic eye when it comes to
              capturing snaps of photogenic microorganisms isolated from human
              patient samples from different hospitals.
            </span>
          </Typography>
        </Section>
        <Section
          title=" 2 Aspergillus Niger - Mould Nebula"
          components={[
            <img
              src="https://drive.google.com/uc?id=1xTMm-xLaT77qhn468a7IyCA_3e-i-3_O"
              data-src="https://drive.google.com/uc?id=1xTMm-xLaT77qhn468a7IyCA_3e-i-3_O"
              alt=""
            />,
          ]}
        >
          <Typography
            variant="h6"
            color="secondary"
            sx={{
              mb: 5,
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
              {`3 `}
            </span>
            Aspergillus Niger - Mould Nebula
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
              Macroscopic look at different mould species including Aspergillus
              Flavus, Aspergillus Calidoustus, Aspergillus Glaucus and
              Aspergillus Niger. Isolated from hospital patients and cultured
              and captured by Yuri. Beautiful filamentous, fuzzy structures
              grown on SAB agar plates serve as the template for alternate
              universes.
            </span>
          </Typography>
        </Section>

        <Section
          title="3 Psilocybe Sensu Lato - Magic Mushrooms"
          components={[
            <img
              src="https://drive.google.com/uc?id=125ycQZAy0n6aZ9QCLEq1xuRjrfXbrO7L"
              data-src="https://drive.google.com/uc?id=125ycQZAy0n6aZ9QCLEq1xuRjrfXbrO7L"
              alt=""
            />,
            <VideoPlayer
              url="https://drive.google.com/uc?export=download&id=1xb3oRdX8eoX1lySdV1X-j-zz4DRCaFE3"
              poster="/static/nft/net-006.png"
            />,
          ]}
        >
          <Typography
            variant="h6"
            color="secondary"
            sx={{
              mb: 5,
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
              {`3 `}
            </span>
            Psilocybe Sensu Lato - Magic Mushrooms
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
              The genus Psilocybe comprises an iconic group of mushroom-forming
              fungi, which are famous for its neurotropic use, especially in
              sacred religious ceremonies and more recently in psychedelic
              experiences in western culture. Hallucinogenic effects are evoked
              by the psychedelic compounds psilocybin, psilocin and baeocystin
              produced by the mushroom. The psychedelic compounds act as
              agonists for several serotonin receptors and induce euphoria,
              visual and mental hallucinations, changes in perception, a
              distorted sense of time and spiritual experiences.
              <br />
              <br />
              <span style={{ fontSize: 14 }}>
                Based on phylogenetic studies published in open access journal
                Botany:
                <br />
                <br />
                Ramírez-CruzVirginia, GuzmánGastón, Villalobos-ArámbulaAlma
                Rosa, RodríguezAarón, MathenyP. Brandon, Sánchez-GarcíaMarisol,
                and Guzmán-DávalosLaura. Phylogenetic inference and trait
                evolution of the psychedelic mushroom genus Psilocybe sensu lato
                (Agaricales).
                <br />
                Botany.
                <span
                  style={{
                    fontFamily: theme.typography.numberFontFamily,
                    fontStyle: "normal",
                  }}
                >
                  91(9): 573-591.
                </span>
                <br /> https://doi.org/
              </span>
            </span>
          </Typography>
        </Section>
      </div>
    </RootStyle>
  );
}
