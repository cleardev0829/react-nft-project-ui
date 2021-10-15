import PropTypes from "prop-types";
// material
import { useTheme } from "@material-ui/core/styles";
import { useLocation } from "react-router-dom";
import { Box } from "@material-ui/core";

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object,
};

export default function Logo({ sx }) {
  const theme = useTheme();
  const { pathname } = useLocation();

  const PRIMARY_LIGHT = theme.palette.primary.light;
  // const PRIMARY_MAIN = theme.palette.primary.main;
  // const PRIMARY_DARK = theme.palette.primary.dark;

  const logo =
    pathname === "/"
      ? "https://drive.google.com/uc?id=19UtXMdXrovzqRQa0RLKjenk1mJC_Jgmm"
      : "https://drive.google.com/uc?id=19UtXMdXrovzqRQa0RLKjenk1mJC_Jgmm";

  return (
    <Box sx={{ mt: 5, ...sx }} color={PRIMARY_LIGHT}>
      <Box
        component="img"
        src={logo}
        alt="logo"
        sx={{
          width: 130.23,
          height: 150,
          [theme.breakpoints.down("sm")]: {
            width: 90,
            height: 120,
          },
        }}
      />
    </Box>
  );
}
