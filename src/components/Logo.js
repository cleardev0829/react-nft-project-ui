import PropTypes from "prop-types";
// material
import { useTheme } from "@material-ui/core/styles";
import { Box, Paper } from "@material-ui/core";

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object,
};

export default function Logo({ sx }) {
  const theme = useTheme();
  const PRIMARY_LIGHT = theme.palette.primary.light;
  const PRIMARY_MAIN = theme.palette.primary.main;
  const PRIMARY_DARK = theme.palette.primary.dark;

  return (
    <Paper sx={{ mt: 5, ...sx }} color={PRIMARY_LIGHT}>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="196.000000pt"
        height="196.000000pt"
        viewBox="0 0 196.000000 196.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="BG1" x1="100%" x2="50%" y1="9.946%" y2="50%">
            <stop offset="0%" stopColor={PRIMARY_DARK} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>
          <linearGradient id="BG2" x1="50%" x2="50%" y1="0%" y2="100%">
            <stop offset="0%" stopColor={PRIMARY_LIGHT} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>
          <linearGradient id="BG3" x1="50%" x2="50%" y1="0%" y2="100%">
            <stop offset="0%" stopColor={PRIMARY_LIGHT} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>
        </defs>
        <g
          transform="translate(0.000000,196.000000) scale(0.100000,-0.100000)"
          fill="#000000"
          stroke="none"
        >
          <path
            d="M330 980 l0 -750 650 0 650 0 0 750 0 750 -650 0 -650 0 0 -750z
m1270 0 l0 -720 -620 0 -620 0 0 720 0 720 620 0 620 0 0 -720z"
          />
          <path
            d="M500 1475 l0 -105 48 0 c67 0 82 18 82 101 0 35 -4 69 -8 75 -13 19
-50 34 -86 34 l-36 0 0 -105z m98 63 c7 -7 12 -37 12 -68 0 -65 -11 -80 -57
-80 l-33 0 0 80 0 80 33 0 c18 0 38 -5 45 -12z"
          />
          <path
            d="M702 1508 c-49 -62 -4 -163 62 -138 27 10 44 35 32 47 -3 4 -12 -1
-19 -11 -19 -25 -61 -18 -65 12 -3 20 0 22 48 22 52 0 52 0 45 27 -4 16 -11
34 -17 40 -13 17 -73 17 -86 1z m76 -30 c3 -15 -4 -18 -32 -18 -34 0 -47 15
-29 34 13 13 58 1 61 -16z"
          />
          <path
            d="M725 1176 c-59 -26 -83 -75 -65 -131 13 -41 29 -51 124 -80 78 -24
105 -49 83 -79 -7 -9 -31 -20 -52 -23 -31 -4 -46 0 -67 17 -16 12 -28 28 -28
36 0 10 -12 14 -40 14 -47 0 -52 -16 -21 -66 25 -41 77 -64 143 -64 70 0 118
25 141 72 16 32 17 43 7 73 -15 44 -42 63 -128 86 -78 22 -102 41 -86 67 8 12
25 17 60 17 41 0 51 -4 59 -22 8 -18 18 -23 47 -23 32 0 38 3 38 20 0 74 -127
125 -215 86z"
          />
          <path
            d="M1300 1150 c0 -28 3 -30 35 -30 32 0 35 2 35 30 0 28 -3 30 -35 30
-32 0 -35 -2 -35 -30z"
          />
          <path
            d="M1033 1047 c-31 -29 -37 -41 -41 -89 -5 -66 14 -110 61 -138 58 -36
145 -20 181 32 27 38 21 58 -17 58 -26 0 -36 -6 -45 -25 -9 -20 -19 -25 -46
-25 -44 0 -61 22 -61 80 0 81 61 119 103 65 23 -29 82 -36 82 -9 0 49 -54 84
-130 84 -43 0 -55 -5 -87 -33z"
          />
          <path d="M1300 945 l0 -135 35 0 35 0 0 135 0 135 -35 0 -35 0 0 -135z" />
          <path
            d="M930 580 c-25 -47 20 -85 66 -55 24 16 27 15 45 -1 15 -14 25 -16 47
-8 22 8 27 15 27 44 0 31 -3 35 -28 38 -16 2 -36 -3 -46 -13 -16 -14 -19 -14
-31 0 -18 22 -67 19 -80 -5z m69 -12 c12 -19 11 -23 -5 -35 -29 -21 -49 -12
-52 25 -3 28 0 32 20 32 13 0 29 -10 37 -22z m106 2 c7 -21 -9 -50 -26 -50 -5
0 -18 9 -30 21 -16 16 -18 23 -8 35 18 21 57 18 64 -6z"
          />
        </g>
      </svg>
    </Paper>
  );
}
