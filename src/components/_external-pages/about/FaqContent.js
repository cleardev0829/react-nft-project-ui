import {
  alpha,
  useTheme,
  experimentalStyled as styled,
} from "@material-ui/core/styles";
import { Grid, Container, Typography } from "@material-ui/core";
import { varFadeInUp, MotionInView } from "../../animate";

const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(24, 0),
  backgroundImage:
    theme.palette.mode === "light"
      ? `linear-gradient(180deg, ${alpha(theme.palette.grey[300], 0)} 0%, ${
          theme.palette.grey[300]
        } 100%)`
      : "none",
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

export default function FaqContent() {
  const theme = useTheme();
  const isLight = theme.palette.mode === "light";

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
                <Typography variant="h2" sx={{ mb: 3 }}>
                  What is the purpose of DeSci?
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography
                  sx={{
                    mb: 5,
                    color: isLight ? "text.secondary" : "common.white",
                  }}
                >
                  To faciliate open, free and fair collaboration with as many
                  people as possible within the fields of research, art and
                  cryptocurrency.
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography variant="h2" sx={{ mb: 3 }}>
                  Who are DeSci?
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography
                  sx={{
                    mb: 5,
                    color: isLight ? "text.secondary" : "common.white",
                  }}
                >
                  DeSci has no identity, it is a concept. What began as an idea
                  to combine two friend’s artistic and scientific talents soon
                  evolved into something much larger.
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography variant="h2" sx={{ mb: 3 }}>
                  Who are the two friends?
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography
                  sx={{
                    mb: 5,
                    color: isLight ? "text.secondary" : "common.white",
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
                <Typography variant="h2" sx={{ mb: 3 }}>
                  Why is the intersection of art and science so important?
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography
                  sx={{
                    mb: 5,
                    color: isLight ? "text.secondary" : "common.white",
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
                <Typography variant="h2" sx={{ mb: 3 }}>
                  Why release NFTs?
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography
                  sx={{
                    mb: 5,
                    color: isLight ? "text.secondary" : "common.white",
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
                <Typography variant="h2" sx={{ mb: 3 }}>
                  What is DeSci’s connection to Imperial College?
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography
                  sx={{
                    mb: 5,
                    color: isLight ? "text.secondary" : "common.white",
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
