import React from "react";
import { Container, Typography } from "@material-ui/core";
import { experimentalStyled as styled } from "@material-ui/core/styles";
import { varFadeInUp, MotionInView } from "../animate";
import { useTheme } from "@material-ui/core";

const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(12, 0),
}));

const ContentStyle = styled("div")(({ theme }) => ({
  width: "100%",
  textAlign: "left",
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
    marginBottom: 0,
  },
}));

export default function NFTVFBDescription({ id, color }) {
  const theme = useTheme();

  return (
    <RootStyle id={id}>
      <ContentStyle id="buttons">
        <Container maxWidth="xlg" justifyContent="space-between">
          <MotionInView variants={varFadeInUp}>
            <Typography
              variant="h4"
              sx={{
                mb: 5,
                fontWeight: "bold",
                fontFamily: (theme) => `${theme.typography.headingFontFamily}`,
              }}
            >
              {id === "virus" && (
                <>
                  <span>Virus (NFTs: </span>
                  <span
                    style={{ fontFamily: theme.typography.numberFontFamily }}
                  >
                    222
                  </span>
                  <span>)</span>
                </>
              )}
              {id === "fungi" && (
                <>
                  <span>Fungi (NFTs: </span>
                  <span
                    style={{ fontFamily: theme.typography.numberFontFamily }}
                  >
                    333
                  </span>
                  <span>)</span>
                </>
              )}
              {id === "bacteria" && (
                <>
                  <span>Bacteria (NFTs: </span>
                  <span
                    style={{ fontFamily: theme.typography.numberFontFamily }}
                  >
                    444
                  </span>
                  <span>)</span>
                </>
              )}
            </Typography>
          </MotionInView>

          <MotionInView variants={varFadeInUp}>
            <Typography
              variant="h4"
              color={color}
              sx={{
                fontStyle: "italic",
                fontWeight: "normal",
              }}
            >
              {id === "virus" && (
                <span>
                  The most peculiar microbe of the three categories. Viruses are
                  microscopic parasites responsible for a range of familiar (and
                  often fatal) diseases, including the flu, Ebola, measles, HIV
                  and its latest adition SARS-CoV-
                  <span
                    style={{ fontFamily: theme.typography.numberFontFamily }}
                  >
                    2
                  </span>
                  . Made up of genetic material (DNA or RNA) encapsulated in a
                  shell made of protein, they are only able to survive and
                  replicate inside a living host, which could be any organism on
                  earth, even other microbes like bacteria. This means no life
                  form is safe from infection by a virus. The question whether
                  viruses are alive is tricky to answer, as they do not possess
                  the hallmark of living things, they don’t carry out metabolic
                  processes.
                </span>
              )}
              {id === "fungi" && (
                <span>
                  Encompassing a whole diverse kingdom , fungi include
                  microorganisms like yeasts and mold as well as the more
                  familiar toadstool, the fruiting body of a fungus.
                  Microorganisms are mainly used in cell biology and
                  biotechnology, whereas mushrooms are mainly comsumed as food
                  or psychoactive agents. Fungi respresnt a heterogenous group
                  of organisms that are capable to infect and poison humans but
                  are used by human civilisations for fermentation purposes for
                  thousands of years.
                </span>
              )}
              {id === "bacteria" && (
                <span>
                  Ancient small single-celled organisms residing in and all
                  around us. Tiny molecular factories that are found almost
                  everywhere on earth, even under the most extreme conditions,
                  and are essential for the planet’s ecosystem. Bacteria play an
                  essential role in the homeostasis of our body. The human body
                  carries millions of bacteria and infact, is estimated to
                  contain more bacterial cells than human cells. While most
                  bacteria are beneficial, living in symbiosis with the human
                  system, some can cause fatal diseases that are becoming harder
                  to treat with the rise of antibiotic resistence.
                </span>
              )}
            </Typography>
          </MotionInView>
        </Container>
      </ContentStyle>
    </RootStyle>
  );
}
