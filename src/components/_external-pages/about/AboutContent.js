import {
  // useTheme,
  experimentalStyled as styled,
} from "@material-ui/core/styles";
import { Grid, Container, Typography } from "@material-ui/core";
import { varFadeInUp, MotionInView } from "../../animate";

const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(12, 0),
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

export default function AboutContent() {
  // const theme = useTheme();

  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Grid container spacing={5} justifyContent="center">
          <Grid
            item
            xs={12}
            md={12}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <ContentStyle>
              <MotionInView variants={varFadeInUp}>
                <Typography
                  variant="h3"
                  sx={{
                    mb: 3,
                    fontFamily: (theme) =>
                      `${theme.typography.headingFontFamily}`,
                  }}
                >
                  What is DeSci?
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    mb: 5,
                  }}
                >
                  In a time where information transfer is besieged by
                  controversy, ideology and manipulation, free and open sharing
                  of knowledge is more important than ever. Science remains the
                  central cog to progress, the principle guiding light during
                  increasingly murky times. Yet, whilst the scientific method
                  remains infallible, experiments essential and data itself
                  undeniable, the exchange of such information has fallen foul
                  of ideology and emotion. <br />
                  <br />
                  DeSci’s vision is to create a vibrant ecosystem that supports
                  scientific communities from around the world by utilizing
                  decentralised and uncensorable blockchain technology. The
                  transfer of ideas, information, data, methodology, contacts
                  and resources can be revolutionised through the Ethereum
                  Mainnet. Combined with the talent and innovation that is seen
                  every day in the Ethereum community, DeSci hopes to see new
                  life flourish across the world of Science. <br />
                  <br />
                  Alongside facilitating free and fair information exchange,
                  DeSci hopes to bring research to life through the amalgamation
                  of art and science. Papers dense with esoteric information may
                  appeal to some with a passion in the field of science, but for
                  most it serves as a gatekeeper to accessing the most
                  foundational information of our existence. Art provides a link
                  to the soul through its deep connections to the non-tangible
                  aspects of humanity: emotion, psyche and the unknown. Through
                  the minting of NFTs, art and science can be combined forever;
                  two essential worlds collide encapsulated for eternity on the
                  blockchain.
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography
                  variant="h3"
                  sx={{
                    mb: 3,
                    fontFamily: (theme) =>
                      `${theme.typography.headingFontFamily}`,
                  }}
                >
                  How will DeScientists collaborate?
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography
                  sx={{
                    mb: 5,
                  }}
                >
                  As shown through the cambrian explosion of DeFi protocols over
                  the last 2 years, the Ethereum community is innovating at an
                  exponential rate. The advent of DAOs (Decentralised Autonomous
                  Organisation) has changed the way people and organisations
                  interact. Traditionally, communities must communicated through
                  a centralised platform, confrom to the parameters set by the
                  platform provider, and fit their working style around the
                  tools that are given to them. With Ethereum and DAOs,
                  interested members can take control of the community’s future
                  through open-source codebases, decentralised community
                  governance and democratic decision-making. <br />
                  <br />
                  The initial launch of DeSci aims to attract not just
                  researchers, but talented people from all walks of life - this
                  includes Ethereum builders and visionaries. Whilst
                  inexperienced in the technical implementation of DAOs and
                  Smart Contract-based solutions to issues such as data storage,
                  on-chain analysis and creating a sustainable community with,
                  if required, a functional economy, the creators of DeSci
                  understand that these tasks are the bread and butter of the
                  Ethereum community. As DeSci begins to absorb talent from all
                  sectors, it is hoped that Ethereum developers will become
                  inspired by the quality of the contributions in other fields
                  and eventually help to build dApps or a DAO structure to help
                  guide the DeSci community to become a flagship member of the
                  Ethereum hall of fame.
                </Typography>
              </MotionInView>

              {/* FaqContent */}
              <MotionInView variants={varFadeInUp}>
                <Typography
                  variant="h3"
                  sx={{
                    mb: 3,
                    fontFamily: (theme) =>
                      `${theme.typography.headingFontFamily}`,
                  }}
                >
                  What is the purpose of DeSci?
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography
                  sx={{
                    mb: 5,
                  }}
                >
                  To faciliate open, free and fair collaboration with as many
                  people as possible within the fields of research, art and
                  cryptocurrency.
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography
                  variant="h3"
                  sx={{
                    mb: 3,
                    fontFamily: (theme) =>
                      `${theme.typography.headingFontFamily}`,
                  }}
                >
                  Who are DeSci?
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography
                  sx={{
                    mb: 5,
                  }}
                >
                  DeSci has no identity, it is a concept. What began as an idea
                  to combine two friend’s artistic and scientific talents soon
                  evolved into something much larger.
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography
                  variant="h3"
                  sx={{
                    mb: 3,
                    fontFamily: (theme) =>
                      `${theme.typography.headingFontFamily}`,
                  }}
                >
                  Who are the two friends?
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography
                  sx={{
                    mb: 5,
                  }}
                >
                  Two best friends, Kira and Cara.
                  <br />
                  <br /> After becoming interested in the crypto space through
                  DeFi and NFTs, Kira, nearing the end of her PhD in
                  Microbiology, saw an opportunity to create something
                  meaningful for her field; to bring the scientific community
                  together through decentralised operations. Thus DeSci was
                  born. <br />
                  <br />
                  Kira wanted to contribute to this project herself, though.
                  After accumulating countless images of microbes through her
                  work at The MRC Centre for Molecular Bacteriology and
                  Infection at Imperial College London, Kira felt the desire to
                  show the world how beautiful the hidden microbial universe
                  truly is. Thousands of hours in the lab observing life in its
                  most base form gave Kira the idea to generate images inspired
                  by the reality of the microscopic.
                  <br />
                  <br />
                  Cara, a digital artist passionate about the unseen and unknown
                  forces that influence our existence, saw the vision of DeSci
                  and the opportunity for expression and education. Working with
                  new technology to further her artistic experience and
                  remaining on the forefront of the digital art space excites
                  Cara, opening doors that many artists dont yet know exist.
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography
                  variant="h3"
                  sx={{
                    mb: 3,
                    fontFamily: (theme) =>
                      `${theme.typography.headingFontFamily}`,
                  }}
                >
                  Why is the intersection of art and science so important?
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography
                  sx={{
                    mb: 5,
                  }}
                >
                  The dichotomy: left and right side brain; reason and abstract;
                  science and art.
                  <br />
                  <br /> These two essential and foundational parts of our
                  existence that rarely coalesce can benefit from each other in
                  a hard-to-overstate manner. Some brains are wired for concrete
                  results, others to delve into the abstract. Combining the two
                  worlds can unveil pathways forward that are yet to be
                  considered.
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography
                  variant="h3"
                  sx={{
                    mb: 3,
                    fontFamily: (theme) =>
                      `${theme.typography.headingFontFamily}`,
                  }}
                >
                  Why release NFTs?
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography
                  sx={{
                    mb: 5,
                  }}
                >
                  The Microbe NFT project was the originally conceived idea.
                  After speaking with people in the DeFi space, the wider idea
                  of DeSci was born. Whilst the scope of the project has grown,
                  Kira and Cara still want to make a meaningful contribution;
                  Microbes is that contribution. <br />
                  <br />
                  The NFTs are a wonderful way to express the beauty in the
                  hidden world and bring attention to an otherwise unseen part
                  of life.
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography
                  variant="h3"
                  sx={{
                    mb: 3,
                    fontFamily: (theme) =>
                      `${theme.typography.headingFontFamily}`,
                  }}
                >
                  What is DeSci’s connection to Imperial College?
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography
                  sx={{
                    mb: 5,
                  }}
                >
                  Imperial College London is where Kira is studying her PhD in
                  Microbiolgy. After consulting professors and colleagues in the
                  university, the faculty decided they would love to help
                  further the vision. DeSci will be featured in the ICL
                  newsletter and shared amongst research circles by the
                  interested professors.
                </Typography>
              </MotionInView>
            </ContentStyle>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
