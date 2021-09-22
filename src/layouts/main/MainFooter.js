import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
// material
import { experimentalStyled as styled } from "@material-ui/core/styles";
import {
  Grid,
  Link,
  Divider,
  Container,
  Typography,
  Stack,
} from "@material-ui/core";
// routes
import { PATH_PAGE } from "../../routes/paths";
//
import Logo from "../../components/Logo";

const LINKS = [
  {
    headline: "Home",
    children: [
      { name: "Item1", href: PATH_PAGE.page404 },
      { name: "Item2", href: PATH_PAGE.page404 },
    ],
  },
  {
    headline: "Contact Us",
    children: [
      { name: "hello@Demo.com", href: "#" },
      {
        name: "your address",
        href: "#",
      },
    ],
  },
];

const RootStyle = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: theme.palette.background.default,
}));

export default function MainFooter() {
  return (
    <RootStyle>
      <Divider />
      <Container maxWidth="lg" sx={{ pt: 10 }}>
        <Grid
          container
          justifyContent={{ xs: "center", md: "space-between" }}
          sx={{ textAlign: { xs: "center", md: "left" } }}
        >
          <Grid item xs={12} sx={{ mb: 3 }}>
            <ScrollLink to="move_top" spy smooth>
              <Logo sx={{ mx: { xs: "auto", md: "inherit" } }} />
            </ScrollLink>
          </Grid>
          <Grid item xs={8} md={3}>
            <Typography variant="body2" sx={{ pr: { md: 5 } }}>
              Your description Your description Your description Your
              description Your description Your description Your description
              Your description
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Stack
              spacing={5}
              direction={{ xs: "column", md: "row" }}
              justifyContent="space-between"
            >
              {LINKS.map((list) => {
                const { headline, children } = list;
                return (
                  <Stack key={headline} spacing={2}>
                    <Typography
                      sx={{ mt: { xs: 2, md: 0 } }}
                      component="p"
                      variant="overline"
                    >
                      {headline}
                    </Typography>
                    {children.map((link) => (
                      <Link
                        to={link.href}
                        key={link.name}
                        color="inherit"
                        variant="body2"
                        component={RouterLink}
                        sx={{ display: "block" }}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </Stack>
                );
              })}
            </Stack>
          </Grid>
        </Grid>
        <Typography
          component="p"
          variant="body2"
          sx={{
            mt: 10,
            pb: 5,
            fontSize: 13,
            textAlign: { xs: "center", md: "left" },
          }}
        >
          © 2021. All rights reserved
        </Typography>
      </Container>
    </RootStyle>
  );
}
