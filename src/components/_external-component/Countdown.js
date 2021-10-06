// material
import { experimentalStyled as styled } from "@material-ui/core/styles";
import { Box, Container, Typography } from "@material-ui/core";
// hooks
import useCountdown from "../../hooks/useCountdown";
// components
import Page from "../Page";
import { MaintenanceIllustration } from "../../assets";

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  minHeight: "100%",
  display: "flex",
  alignItems: "center",
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));

const CountdownStyle = styled("div")({
  display: "flex",
  justifyContent: "center",
});

const SeparatorStyle = styled(Typography)(({ theme }) => ({
  margin: theme.spacing(0, 1),
  [theme.breakpoints.up("sm")]: {
    margin: theme.spacing(0, 2.5),
  },
}));

// ----------------------------------------------------------------------

export default function Countdown() {
  const countdown = useCountdown(new Date("07/07/2022 21:30"));

  return (
    <Container>
      <Box sx={{ maxWidth: 480, margin: "auto", textAlign: "center" }}>
        <CountdownStyle>
          <div>
            <Typography variant="h2">{countdown.hours}</Typography>
            <Typography sx={{ color: "text.secondary" }}>Hours</Typography>
          </div>

          <SeparatorStyle variant="h2">:</SeparatorStyle>

          <div>
            <Typography variant="h2">{countdown.minutes}</Typography>
            <Typography sx={{ color: "text.secondary" }}>Minutes</Typography>
          </div>

          <SeparatorStyle variant="h2">:</SeparatorStyle>

          <div>
            <Typography variant="h2">{countdown.seconds}</Typography>
            <Typography sx={{ color: "text.secondary" }}>Seconds</Typography>
          </div>
        </CountdownStyle>
      </Box>
    </Container>
  );
}
