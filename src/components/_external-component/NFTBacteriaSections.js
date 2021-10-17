import React from "react";
import { experimentalStyled as styled } from "@material-ui/core/styles";
import VideoPlayer from "src/components/VideoPlayer";
import { Section } from "./";
import { Typography, useTheme } from "@material-ui/core";

const RootStyle = styled("div")(({ theme }) => ({
  backgroundColor: "black",
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(8),
  [theme.breakpoints.down("sm")]: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(0),
  },
}));

export default function NFTBacteriaSections() {
  const theme = useTheme();

  return (
    <RootStyle>
      <div id="bacteria-description">
        <Section
          title="1 Vibrio Cholerae - Mechanomorphogenesis"
          components={[
            <img
              src="https://drive.google.com/uc?id=1LzpisNPKHkSRgLTVeBe5nrkjWgj7NEC5"
              data-src="https://drive.google.com/uc?id=1LzpisNPKHkSRgLTVeBe5nrkjWgj7NEC5"
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
            Vibrio Cholerae - Mechanomorphogenesis
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
              Bacteria are able to move around by propelling themselves forward
              in liquid environments but can also settle down on surfaces and
              form biofilms. Biofilms are surface-associated bacterial
              communities containing bacteria that adhere to each other embedded
              in a self-manufactured matrix. Biofilms can develop spectacular
              patterns driven by forces of mechanical instability and
              interfacial energy that builds up within the organic structure if
              one layer grows faster than an adjacent layer. This stress is
              released by the formation of wrinkling, folding or creasing and
              even lead to small parts to detach from the substrate to form
              blisters. A fantastic interplay of mechanical forces and organic
              growth leads to mesmerising biostructures that form surprising
              concentric and symetric patterns.
              <br />
              <br />
              Based on groundbreaking research by Yan, Fei, Mao et al published
              in the open accces journal eLife.
              <br />
              <br /> Yan J, Fei C, Mao S, Moreau A, Wingreen NS, Košmrlj A,
              Stone HA, Bassler BL. Mechanical instability and interfacial
              energy drive biofilm morphogenesis. Elife
              <span
                style={{
                  fontFamily: theme.typography.numberFontFamily,
                  fontStyle: "normal",
                }}
              >
                {` 2019`}
              </span>
            </span>
          </Typography>
        </Section>

        <Section
          title="2 E. coli Atomic Structures - Blobology"
          components={[
            <VideoPlayer
              url="https://drive.google.com/uc?export=download&id=1IM3UN3uIH_pQPBajJxKWXe4a0ZGpIkoN"
              poster="/static/nft/net-008.png"
            />,
            <VideoPlayer
              url="https://drive.google.com/uc?export=download&id=1Se7sU11zwEXTmumv7Jf4AE1kZJyJzbB3"
              poster="/static/nft/net-009.png"
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
              {`2 `}
            </span>
            E. coli Atomic Structures - Blobology
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
              State-of-the-art cryo-electron microscopy (cryo-EM) enables us to
              resolve the structue of biomolecules at near-atomic resolution.
              The technique involves flash-freezing solutions of biomolecules
              and then bombarding them with electrons to produce microscopic
              images of individual molecules, allowing us to look at the tiniest
              units of life. Using near atomic resolution images of essential
              components of microbiology’s lab rat equivilent: Escherichia coli
              (E. coli) and combining them with the eyes of an artistic mind and
              the power of a neural network creates genreative new views into
              the atomic matter of the internal clockwork of bacteria.
            </span>
          </Typography>
        </Section>

        <Section
          title="3 "
          components={[
            <img
              src="https://drive.google.com/uc?id=1vPXgnath2n_1HfD5Hw7oDpifLyel1fTd"
              data-src="https://drive.google.com/uc?id=1vPXgnath2n_1HfD5Hw7oDpifLyel1fTd"
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
            Pseudomonas Aeruginosa - Resistent
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
              Pseudomonas aeruginosa is one of the most adaptable bacteria
              eqiupped with an arsenal of nanomachines to avoid antibiotic
              treatments. Using sophisticated molecular signalling networks they
              are able to respond to external stressors and threats like
              molecular computers. The bacteria were manipulated to produce
              fluorescent biomolecules, that allowed the tracing of data
              transfer within single bacterias. Further, mixing of different
              genetically manipulated bacteria led to unique fluorescent
              patterns that were captured by laser fluorescent microscopy.
              <br />
              <br />
            </span>
            <span style={{ fontSize: 14 }}>
              Based on research by fellow Imperial College London PhD students
              Kira Eilers and Marta Rudzite.
            </span>
          </Typography>
        </Section>
        <Section
          title="4 EPEC Fluorescent Diarrhoea"
          components={[
            <img
              src="https://drive.google.com/uc?id=1-rVpUcdv2yCuRXL8EXsfdfHZJLBWhLGz"
              data-src="https://drive.google.com/uc?id=1-rVpUcdv2yCuRXL8EXsfdfHZJLBWhLGz"
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
              {`4 `}
            </span>
            EPEC - Fluorescent Diarrhoea
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
              EPEC, enteropathogenic Escherichia coli, is the cousin of EHEC,
              causing persistent diarrhoea usually in infants and young children
              but can also infect the gut of adult colorectal cancer patients.
              During infection EPEC bacteria use syringe-like machines mounted
              on their surface to inject toxins into human cells lining our
              intestines. Studying the arsenal of toxins, one of these toxins
              injected by EPEC leads to specific death of colorectal cancer,
              presenting a unique oportunity to harness the the manipulating
              properties of virulence factors for cancer therapeutic purposes.
            </span>
          </Typography>
          <span>
            EPEC, enteropathogenic Escherichia coli, is the cousin of EHEC,
            causing persistent diarrhoea usually in infants and young children
            but can also infect the gut of adult colorectal cancer patients.
            During infection EPEC bacteria use syringe-like maschines mounted on
            their surface to inject toxins into human cells lining our
            incomponentsines. Studying the arsenal of toxins, one of these
            toxins injected by EPEC leads to specific death of colorectal
            cancer, presenting a unique oportunity to harness the the
            manipulating properties of virulence factors for cancer therapeutic
            purposes.
            <br />
            <br />
          </span>
          <span style={{ fontSize: 14 }}>
            Based on research by Qiyun Zhong, conducted at Imperial College
            London, published in open access journal Plos Biology:
            <br />
            <br /> Zhong Q, Roumeliotis TI, Kozik Z, Cepeda-Molero M, Fernández
            LÁ, Shenoy AR, Bakal C, Frankel G, Choudhary JS. Clustering of Tir
            during enteropathogenic E. coli infection triggers calcium
            influx-dependent pyroptosis in intestinal epithelial cells. PLoS
            Biol
            <span
              style={{
                fontFamily: theme.typography.numberFontFamily,
                fontStyle: "normal",
              }}
            >
              {` 2020`}
            </span>
          </span>
        </Section>
      </div>
    </RootStyle>
  );
}
