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

export default function NFTContent() {
  // const theme = useTheme();

  // https://drive.google.com/uc?id=1nc4L4LXMffvg31ll3svMCsSAwJTNm-3-
  // https://drive.google.com/uc?id=1DOgd7R2Gk0p6fuhUc9YrX0g51nPPDAtd
  // https://drive.google.com/uc?id=1V7vxFRj-T7N5-8er0NEVLR5iB0TrG2lM
  // https://drive.google.com/uc?id=1uvWnjBv0vE6UnnoPaMWmUvZM6VByIfXw
  // https://drive.google.com/uc?id=1uvWnjBv0vE6UnnoPaMWmUvZM6VByIfXw

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
                  NFT Drop #1 - Microbes
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    mb: 5,
                  }}
                >
                  The last 18 months have shown us all the power found in the
                  hidden world; the microscopic universe that exists within all
                  of us is alive, adaptive and, at times, alien. Whilst most are
                  aware of the microbial world found on and in us all, few know
                  of the true beauty, diversity and chaos present.
                  <br />
                  <br /> Microbes is a collection that combines the work of
                  multiple budding young scientists in the field of
                  microbiology. Alongside the research of DeSci founder, Kira,
                  and contributors from the Imperial College London, the
                  wonderful work showcased in prestigious medical journals such
                  as “xxx”, “xxx” and “xxx” are included in this NFT project.
                  <br />
                  <br />
                  Data and images collected from experts in the field are given
                  a new life through Cara’s artistic rendering. Gathering her
                  inspiration from the intersection of art and science, the
                  beauty and mystique of the microscopic world and the paralells
                  between us, the cosmos and this unseen universe, the two
                  friends hope to spark the interest of all that participate in
                  the project.
                  <br />
                  <br /> Three categories of organism: bacteria; fungi and
                  virus. Within these lie most of the microorganisms we’ve come
                  to recognise. Animals, plants, mushrooms, insects, infections
                  and all the other things we know contain these organisms. 999
                  unique selected works, chosen for their beautiful appearance,
                  interesting and unexpected qualities, or perhaps their
                  relevance to the time.
                  <br />
                  <br /> Rarity
                  <br />
                  <br /> Bacteria - 444 <br /> Funghi - 333 <br />
                  Virus - 222
                  <br />
                  <br /> The above categories, distinct and diverse, also
                  contain subdivisions, or traits, that help identify and more
                  deeply understand what they are and how they function. Traits
                  add an additional layer of rarity to the NFTs, providing value
                  through scarcity.
                  <br />
                  <br /> Alongside the physical properties shown in these
                  traits, the artistic design features of each NFT are also
                  listed as another unique identifier and rarity mechanic.
                  Lighting, magnification, edit type, interactability all factor
                  into creating the most unique and special NFTs possible.
                </Typography>
              </MotionInView>
            </ContentStyle>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
