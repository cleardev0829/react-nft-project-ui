import PropTypes from "prop-types";
import {
  // useTheme,
  experimentalStyled as styled,
} from "@material-ui/core/styles";
import {
  Grid,
  Container,
  Typography,
  Button,
  Link,
  Stack,
  Box,
  ListItem,
} from "@material-ui/core";
import { varFadeInUp, MotionInView } from "../../animate";
import VideoPlayer from "../../VideoPlayer";
import {
  MDImageVideoSection,
  CarouselImg,
  Countdown,
} from "../../_external-component";
import ImageMagnifier from "src/components/ImageMagnifier";
import { Link as ScrollLink } from "react-scroll";
import Bubbles from "src/components/bubbles";

const RootStyle = styled("div")(({ theme }) => ({
  paddingBottom: theme.spacing(12, 0),
}));

const ContentStyle = styled("div")(({ theme }) => ({
  width: "100%",
  textAlign: "center",
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
    marginBottom: 0,
  },
}));

const Section = (props) => {
  const { children, title, images, direction, magnifier } = props;

  return (
    <ContentStyle sx={{ backgroundColor: "black" }}>
      <Container sx={{ p: 10 }}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item xs={12} md={6} dir="ltr" sx={{ pr: 5, pb: 15 }}>
            <MotionInView variants={varFadeInUp}>
              <Typography
                variant="h5"
                sx={{
                  mb: 5,
                  fontStyle: "italic",
                  fontWeight: "normal",
                  color: (theme) => theme.palette.success.main,
                }}
              >
                {title}
              </Typography>
            </MotionInView>

            <MotionInView variants={varFadeInUp}>
              <Typography
                variant="h5"
                sx={{
                  fontStyle: "normal",
                  fontWeight: "normal",
                }}
                color="white"
              >
                {children}
              </Typography>
            </MotionInView>
          </Grid>

          <Grid item xs={12} md={6} dir="ltr">
            <MotionInView variants={varFadeInUp}>
              <Stack
                direction={direction}
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                {images.map((img, index) => {
                  if (magnifier && index === images.length - 1)
                    return (
                      <ImageMagnifier
                        src="https://drive.google.com/uc?id=1VBrOZ2tn94tg4zs_dWsWimpxLk0A5fcQ"
                        underSrc="https://drive.google.com/uc?id=1Qjtfb2MV3f98zBDZr1LTCWWkRn_RnxV9"
                      />
                    );
                  return <img src={`/static/nft/nfts/${img}.png`} />;
                })}
              </Stack>
            </MotionInView>
          </Grid>
        </Grid>

        <Grid
          container
          xs={12}
          md={12}
          dir="ltr"
          justifyContent="center"
          alignItems="center"
        >
          <img
            width={41.5}
            height={41.5}
            src="https://drive.google.com/uc?id=1MVLZWavVAZsEv2cIcDA50BqxfhxLMziD"
            data-src="https://drive.google.com/uc?id=1MVLZWavVAZsEv2cIcDA50BqxfhxLMziD"
            alt=""
          />
        </Grid>
      </Container>
    </ContentStyle>
  );
};

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

export default function NFTContent() {
  // const theme = useTheme();

  return (
    <RootStyle>
      <Grid container spacing={5} justifyContent="center">
        <Grid
          item
          xs={12}
          md={12}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <ContentStyle>
            <Container maxWidth="lg" sx={{ my: 10 }}>
              <Grid
                container
                spacing={5}
                flexDirection="column"
                justifyContent="spece-between"
                alignItems="center"
              >
                <Grid item xs={12} md={12} dir="ltr" textAlign="center">
                  <Typography
                    sx={{
                      fontSize: 90,
                      fontWeight: 400,
                    }}
                  >
                    microbes
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4} dir="ltr">
                  <MotionInView variants={varFadeInUp}>
                    <Countdown />
                  </MotionInView>
                </Grid>
                <Grid item xs={12} md={4} dir="ltr">
                  <MotionInView variants={varFadeInUp}>
                    <CarouselImg />
                  </MotionInView>
                </Grid>
                <Grid item xs={12} md={4} dir="ltr" textAlign="center">
                  <Stack direction="column" spacing={2}>
                    <Button variant="contained" size="large">
                      Mint
                    </Button>
                    <Typography variant="h5">minting cost</Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Container>

            <ImageMagnifier
              src="https://drive.google.com/uc?id=1G2y3gKN4yjm-mUt85Hm7ApzIzeHmYMlB"
              underSrc="https://drive.google.com/uc?id=1krcD9CVpw5qykYFGC9Fv6CELyNOMqiEi"
            />

            <ContentStyle sx={{ py: 10, backgroundColor: "black" }}>
              <Container maxWidth="lg" justifyContent="space-between">
                <MotionInView variants={varFadeInUp}>
                  <Typography
                    variant="h3"
                    sx={{
                      mb: 5,
                      fontFamily: (theme) =>
                        `${theme.typography.headingFontFamily}`,
                    }}
                    color="white"
                  >
                    Three categories of organism: bacteria; fungi and virus.
                  </Typography>
                </MotionInView>

                <Grid container justifyContent="center" alignItems="center">
                  <Grid item xs={12} md={5} dir="ltr" sx={{ px: 1 }}>
                    <Stack direction="column" spacing={3}>
                      <MotionInView variants={varFadeInUp}>
                        <ScrollLink to="virus" spy smooth>
                          <Button variant="contained" size="large">
                            virus
                          </Button>
                        </ScrollLink>
                      </MotionInView>
                      <MotionInView variants={varFadeInUp}>
                        <ScrollLink to="fungi" spy smooth>
                          <Button variant="contained" size="large">
                            fungi
                          </Button>
                        </ScrollLink>
                      </MotionInView>
                      <MotionInView variants={varFadeInUp}>
                        <ScrollLink to="bacteria" spy smooth>
                          <Button variant="contained" size="large">
                            bacteria
                          </Button>
                        </ScrollLink>
                      </MotionInView>
                    </Stack>
                  </Grid>

                  <Grid item xs={12} md={7} dir="ltr" sx={{ pl: 5 }}>
                    <MotionInView variants={varFadeInUp}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontStyle: "normal",
                          fontWeight: "normal",
                        }}
                        color="white"
                      >
                        999 unique, selected works, chosen for their beautiful
                        appearance, interesting and unexpected qualities, or
                        perhaps their relevance to the time.
                      </Typography>
                    </MotionInView>
                  </Grid>
                </Grid>
              </Container>
            </ContentStyle>

            <Container maxWidth="lg" sx={{ mt: 10 }}>
              <MotionInView variants={varFadeInUp}>
                <Typography
                  variant="h3"
                  sx={{
                    mb: 3,
                    fontFamily: (theme) =>
                      `${theme.typography.headingFontFamily}`,
                  }}
                >
                  Rarity and Traits
                </Typography>
              </MotionInView>

              <Grid
                container
                spacing={0}
                justifyContent="center"
                alignItems="flex-start"
                sx={{ mb: 10 }}
              >
                <Grid item xs={12} md={6} dir="ltr" sx={{ pr: 5 }}>
                  <MotionInView variants={varFadeInUp}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontStyle: "normal",
                        fontWeight: "normal",
                      }}
                    >
                      The three principle categories: Virus; Fungi and Bacteria
                      are further divided into traits. Traits are predefined
                      qualities that help to differentiate and identify each
                      unique NFT. Each NFT will have its traits defined on
                      OpenSea, the world’s largest NFT marketplace.
                    </Typography>
                  </MotionInView>
                </Grid>

                <Grid item xs={12} md={6} dir="ltr">
                  <MotionInView variants={varFadeInUp}>
                    <VideoPlayer url="https://drive.google.com/uc?export=download&id=1AuF1oSVJ74hOK8X88FWLf7UzWQhUzYPo" />
                  </MotionInView>
                </Grid>

                <Grid item xs={12} md={12} dir="ltr" sx={{ mt: 10 }}>
                  <MotionInView variants={varFadeInUp}>
                    <Typography
                      sx={{
                        fontStyle: "italic",
                        fontSize: 40,
                        fontWeight: 400,
                        color: (theme) => theme.palette.warning.main,
                      }}
                    >
                      This gives each NFT a unique rarity and thus
                      collectability
                    </Typography>
                  </MotionInView>
                </Grid>
              </Grid>
            </Container>

            <Grid
              container
              spacing={0}
              justifyContent="center"
              alignItems="flex-start"
            >
              <Grid item xs={12} md={6} dir="ltr">
                <MotionInView variants={varFadeInUp}>
                  <Bubbles
                    name="bubbles1"
                    title="biological traits"
                    style={{ backgroundColor: "black" }}
                  />
                </MotionInView>
              </Grid>

              <Grid item xs={12} md={6} dir="ltr">
                <MotionInView variants={varFadeInUp}>
                  <Bubbles name="bubbles2" title="visual traits" />
                </MotionInView>
              </Grid>
            </Grid>

            <Container id="virus" sx={{ py: 10 }}>
              <MotionInView variants={varFadeInUp}>
                <Typography
                  variant="h3"
                  sx={{
                    mb: 5,
                    fontFamily: (theme) =>
                      `${theme.typography.headingFontFamily}`,
                  }}
                >
                  Virus (NFTs: 222)
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography
                  sx={{
                    fontStyle: "italic",
                    fontSize: 40,
                    fontWeight: 400,
                    color: (theme) => theme.palette.error.main,
                  }}
                >
                  The most peculiar microbe of the three categories. Viruses are
                  microscopic parasites responsible for a range of familiar (and
                  often fatal) diseases, including the flu, Ebola, measles, HIV
                  and its latest adition SARS-CoV-2. Made up of genetic material
                  (DNA or RNA) encapsulated in a shell made of protein, they are
                  only able to survive and replicate inside a living host, which
                  could be any organism on earth, even other microbes like
                  bacteria. This means no life form is safe from infection by a
                  virus. The question wether viruses are alive is tricky to
                  answer, as they do not possess the hallmark of living things,
                  they don’t carry out metabolic processes.
                </Typography>
              </MotionInView>
            </Container>
          </ContentStyle>
        </Grid>
      </Grid>

      <Section
        title="1 Herpes Simplex Virus - Hidden Passenger"
        images={["2F6DFACB-D867-4DA7-BCF9-E14B730A7D43_1_105_c 1"]}
        direction="row"
      >
        <span>
          More than half of the human population are infected with Herpes
          simplex virus (HSV-1 or -2). Many of the carriers of the virus never
          develop symptoms, as the virus hides from the patroling immune system
          in the body of our nerve cells. In certain cases HSV-1 infection can
          lead to the inflamation of the brain (Encephalitis).Studying very
          early events in viral infections by looking inside our cells is of
          great importance to understand how we can prevent infection from this
          hidden passenger. Laser fluoerescent microspcopy coupled with state of
          the art fluorescent labeling of viral genetic material, allows
          tracking the infection in real time.
          <br />
          <br />
          Based on work by Catherine Cherry at Imperial College London
        </span>
      </Section>

      <Section
        title="2 Virus particles and structures - Molecules"
        images={["polio_rainbow", "2m6x_rainbow1 2"]}
        direction="column"
        magnifier
      >
        <span>
          Looking deep inside the molecular structure of some of the deadliest
          viruses on earth. Whole viral particles as well as essential
          components were visualised using scientific open source software
          srcipt pymol based on experimentally acquired data from x-ray
          crystallography, Nuclear Magnetic Resonance and
          cryo-Electronmicroscopy experiments available publically in the RSCB
          protein data bank. This included animated artwork from :
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
          Includes 19 ultrarare
          <br /> interactive SARS-COV-2
          <br /> (COVID-19 diesease) strucures.
          <br />
          <br /> https://www.rcsb.org/
        </span>
      </Section>

      <Container id="fungi" sx={{ py: 10 }}>
        <MotionInView variants={varFadeInUp}>
          <Typography
            variant="h3"
            sx={{
              mb: 5,
              fontFamily: (theme) => `${theme.typography.headingFontFamily}`,
            }}
          >
            Fungi (NFTs: 333)
          </Typography>
        </MotionInView>

        <MotionInView variants={varFadeInUp}>
          <Typography
            sx={{
              fontStyle: "italic",
              fontSize: 40,
              fontWeight: 400,
              color: "#D82E32",
            }}
          >
            Encompassing a whole diverse kingdom , fungi include microorganisms
            like yeasts and mold as well as the more familiar toadstool, the
            fruiting body of a fungus. Microorganisms are mainly used in cell
            biology and biotechnology, whereas mushrooms are mainly comsumed as
            food or psychoactive agengts. Fungi respresnt a hetergenous group of
            organisms that are capable to infect and poison humans but are used
            by human civilasations for fermentation purposes for thousands of
            years.
          </Typography>
        </MotionInView>
      </Container>

      <Section
        title="1 Lichtheimia Corymbifera - Hyphae"
        images={[
          "chromeoshroom_01_0047 1",
          "chromeoshroom_01_0030 1",
          "chromeoshroom_01_0022 1",
        ]}
        direction="column"
      >
        <span>
          A beautiful microscopic view at Lichtheimia corymbifera, athermophilic
          fungus, growing in multicellular filaments called hyphae. Lichtheimia
          corymbifer normally grows as a fuzzy mold that under certain
          circumstances can infect umans and cause cause pulmonary. Microscpic
          images were colellected by Yuri, Medical Laboratory Technician, who
          has an artistic eye when it comes to capturing snaps of photogenic
          microorganisms isolated from human patient samples from different
          hospitals.
        </span>
      </Section>

      <Section
        title=" 2 Aspergillus Niger - Mould Nebula"
        images={[
          "mouldy galaxies_18_0033 1",
          "mouldy galaxies_18_0039 1",
          "mouldy galaxies_18_0049 1",
        ]}
        direction="row"
      >
        <span>
          Macroscopic look at different mould species including Aspergillus
          flavus, Aspergillus calidoustus, Aspergillus glaucus and Aspergillus
          niger. Isolated from hospital patients and cultured and captured by
          Yuri. Beautiful filamentous, fuzzy structures grown on SAB agar plates
          serve as the template for .... (Cara)
        </span>
      </Section>

      <Section
        title="3 Psilocybe Sensu Lato - Magic"
        images={[
          "86520C26-BCB3-493B-B22B-28DA2B35BF07 1",
          "Screenshot 2021-09-28 at 19.53 1",
        ]}
        direction="column"
      >
        <span>
          Mushrooms The genus Psilocybe comprises an iconic group of
          mushroom-forming fungi, which are famous for its neurotropic use,
          especially in sacred religious ceremonies and more recently in
          phsychodelic experiences in western culture. Hallucinogenic effects
          are evoked by the psychedelic compounds psilocybin, psilocin and
          baeocystin produced by the mushroom. The psychodelic compounds act as
          agonists for several serotonin receptors and induce euphoria, visual
          and mental hallucinations, changes in perception, a distorted sense of
          time, and perceived spiritual experiences.
          <br />
          <br />
          Based on phylogenetic studies publishes in open access journal Botany:
          <br />
          <br />
          Ramírez-CruzVirginia, GuzmánGastón, Villalobos-ArámbulaAlma Rosa,
          RodríguezAarón, MathenyP. Brandon, Sánchez-GarcíaMarisol, and
          Guzmán-DávalosLaura. Phylogenetic inference and trait evolution of the
          psychedelic mushroom genus Psilocybe sensu lato (Agaricales). Botany.
          91(9): 573-591. https://doi.org/10.1139/cjb-2013-0070.
        </span>
      </Section>

      <Container id="bacteria" sx={{ py: 10 }}>
        <MotionInView variants={varFadeInUp}>
          <Typography
            variant="h3"
            sx={{
              mb: 5,
              fontFamily: (theme) => `${theme.typography.headingFontFamily}`,
            }}
          >
            Bacteria (NFTs: 444)
          </Typography>
        </MotionInView>

        <MotionInView variants={varFadeInUp}>
          <Typography
            sx={{
              fontStyle: "italic",
              fontSize: 40,
              fontWeight: 400,
              color: "#FD8F36",
            }}
          >
            Ancient small single-celled organisms residing in and all around us.
            Tiny molecular factories that are found almost everywhere on earth,
            even under the most extreme condiotions, and are essential for the
            planet’s ecosystem. Bacteria play an essential role in the
            homeatasis of our body. The human body carries millions of bacteria
            and, in fact, is estimated to contain more bacterial cells than
            human cells. While most bacteria are beneficial livinf in symbiosis
            with the human system, some can cause fatal diseases that are
            becoming harder to treat with the rise of antibiotic resistence.
          </Typography>
        </MotionInView>
      </Container>

      <Section
        title="1 Vibrio Cholerae - Mechanomorphogenesis"
        images={["IMG_5954 1", "IMG_5955 1", "IMG_5956 1"]}
        direction="column"
      >
        <span>
          Bacteria are able to move around by propelling themself forward in
          liquid environments but can also settle down on surfaces and form
          biofilms. Biofilms are surface-associated bacterial communities
          containing bacteria that adhere to each other embedded in a
          self-manufactured matrix. Biofilms can develop spectacular patterns
          driven by forces od mechanical instability and interfacial energy that
          builds up within the organic structure if one layer grows faster than
          an adjacent layer. This stress is released by the formation of
          wrinkling, folding or creasing and even lead to small parts to detach
          from the substrate to form blisters. A fantastic interplay of
          mechanical forces and organic growth leads to mesmerising
          biostructures that form surprising concentric and symetric patterns.
          <br />
          <br />
          Based on groundbreaking research by Yan, Fei, Mao et al published in
          the open accces journal eLife.
          <br />
          <br /> Yan J, Fei C, Mao S, Moreau A, Wingreen NS, Košmrlj A, Stone
          HA, Bassler BL. Mechanical instability and interfacial energy drive
          biofilm morphogenesis. Elife. 2019 Mar 8;8:e43920. doi:
          10.7554/eLife.43920. PMID: 30848725; PMCID: PMC6453567.
        </span>
      </Section>

      <Section
        title="2 E. coli Atomic Structures - Blobology"
        images={[
          "Screenshot 2021-10-05 at 00.04 1",
          "Screenshot 2021-10-05 at 00.04 2",
        ]}
        direction="column"
      >
        <span>
          State-of-the-art cryo-electron microscopy (cryo-EM) enables us to
          resolve the structue of biomolecules at near-atomic resolution. The
          technique involves flash-freezing solutions of biomolecules and then
          bombarding them with electrons to produce microscopic images of
          individual molecules, allowing us to look at the tiniest units of
          life. Using near atomic resolution images of essential components of
          microbiology’s lab rat equivilent: Escherichia coli (E. coli) and
          combining them with the eyes of an artistic mind and the power of a
          neural network creates genreative new views into the atomic matter of
          the internal clockwork of bacteria.
        </span>
      </Section>

      <Section
        title="3 Pseudomonas Aeruginosa - Resistent"
        images={["gfp wbpx 100x no3_c1 1"]}
        direction="row"
      >
        <span>
          Pseudomonas aeruginosa is one of the most adaptable bacteria eqiupped
          with an arsenal of nanomaschines to avoid antibiotic treatments. Using
          sophisticated molecular signalling networks they are able to respond
          to external stressors and threats like molecular computers. The
          bacteria were manipulated to produce flueoresent biomolecules, that
          allowed the tracing of data transfer within single bacterias. Further,
          mixing of different genetically manipulated bacteria led to unique
          fluorescent patterns that were captured by laser fluorescent
          microscopy.
          <br />
          <br />
          Based on research by fellow Imperial College London PhD students Kira
          Eilers and Marta Rudzite.
        </span>
      </Section>

      <Section
        title="4 EPEC Fluorescent Diarrhoea"
        images={[
          "SNU-C5_EPEC-1_2 1",
          "SNU-81_EPEC_2 1",
          "SNU-81_EPEC-0_2 1",
          "SNU-C5_EPEC_1 1",
        ]}
        direction="column"
      >
        <span>
          EPEC, enteropathogenic Escherichia coli, is the cousin of EHEC,
          causing persistent diarrhoea usually in infants and young children but
          can also infect the gut of adult colorectal cancer patients. During
          infection EPEC bacteria use syringe-like maschines mounted on their
          surface to inject toxins into human cells lining our intestines.
          Studying the arsenal of toxins, one of these toxins injected by EPEC
          leads to specific death of colorectal cancer, presenting a unique
          oportunity to harness the the manipulating properties of virulence
          factors for cancer therapeutic purposes.
          <br />
          <br /> Based on research by Qiyun Zhong, conducted at Imperial College
          London, published in open access journal Plos Biology:
          <br />
          <br /> Zhong Q, Roumeliotis TI, Kozik Z, Cepeda-Molero M, Fernández
          LÁ, Shenoy AR, Bakal C, Frankel G, Choudhary JS. Clustering of Tir
          during enteropathogenic E. coli infection triggers calcium
          influx-dependent pyroptosis in intestinal epithelial cells. PLoS Biol.
          2020 Dec 30;18(12):e3000986. doi: 10.1371/journal.pbio.3000986. PMID:
          33378358; PMCID: PMC7773185
        </span>
      </Section>

      <Container sx={{ my: 10 }}>
        <Grid container spacing={5} justifyContent="center">
          <Grid item xs={12} md={6} dir="ltr">
            <MotionInView variants={varFadeInUp}>
              <Link
                target="_blank"
                href="https://creativecommons.org/licenses/by/4.0/"
                key="https://creativecommons.org/licenses/by/4.0/"
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontStyle: "normal",
                    fontSize: 18,
                    fontWeight: 300,
                  }}
                  textAlign="center"
                >
                  Images taken from indicated publications are under the
                  Creative Common Attribution 4.0 License (Attribution 4.0
                  International (CC BY 4.0))
                </Typography>
              </Link>
            </MotionInView>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
