import PropTypes from "prop-types";
// material
import { useTheme } from "@material-ui/core/styles";
import { Paper, Box } from "@material-ui/core";

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object,
};

export default function Logo({ sx }) {
  const theme = useTheme();
  const PRIMARY_LIGHT = theme.palette.primary.light;
  // const PRIMARY_MAIN = theme.palette.primary.main;
  // const PRIMARY_DARK = theme.palette.primary.dark;

  return (
    <Paper sx={{ mt: 5, ...sx }} color={PRIMARY_LIGHT}>
      <img
        width="130.23"
        height="150"
        src="https://drive.google.com/uc?id=1I0B7kXyQrqeScfCoAsmycuQKI3a4egZ_"
        data-src="https://drive.google.com/uc?id=1I0B7kXyQrqeScfCoAsmycuQKI3a4egZ_"
      />
    </Paper>
  );
}
