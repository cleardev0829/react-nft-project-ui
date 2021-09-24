import { experimentalStyled as styled } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";
import { varFadeInUp, MotionInView } from "../../animate";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(12, 0),
}));

export default function MDImageSection(props) {
  return (
    <RootStyle>
      <Grid
        container
        spacing={1}
        justifyContent="center"
        alignItems="flex-start"
        sx={{ pb: 2 }}
      >
        <Grid item xs={12} md={6} dir="ltr" sx={{ px: 0 }}>
          <Box>
            <MotionInView variants={varFadeInUp}>
              <img data-src={props.url1} alt="" src={props.url1} />
            </MotionInView>
          </Box>
        </Grid>

        <Grid item xs={12} md={6} dir="ltr" sx={{ px: 0 }}>
          <Box>
            <MotionInView variants={varFadeInUp}>
              <img data-src={props.url2} alt="" src={props.url2} />
            </MotionInView>
          </Box>
        </Grid>
      </Grid>
    </RootStyle>
  );
}
