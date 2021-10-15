// ----------------------------------------------------------------------
// import palette from "./palette";

function pxToRem(value) {
  return `${value / 16}rem`;
}

function responsiveFontSizes({ sm, md, lg }) {
  return {
    "@media (min-width:600px)": {
      fontSize: pxToRem(sm),
    },
    "@media (min-width:960px)": {
      fontSize: pxToRem(md),
    },
    "@media (min-width:1280px)": {
      fontSize: pxToRem(lg),
    },
  };
}

const FONT_PRIMARY = "SimplonMonoWebTrialRegular, serif";
const FONT_HEADING = "HelveticaNeueBold, serif";
const FONT_SPECIAL = "CaslonBeckerNo540SwashItalic, sans-serif";
const FONT_NUMBER = "NetKanzl, serif";

const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  headingFontFamily: FONT_HEADING,
  specialFontFamily: FONT_SPECIAL,
  numberFontFamily: FONT_NUMBER,
  h1: {
    fontWeight: 400,
    lineHeight: 80 / 64,
    fontSize: pxToRem(40),
    ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
  },
  h2: {
    fontWeight: 400,
    lineHeight: 64 / 48,
    fontSize: pxToRem(26),
    ...responsiveFontSizes({ sm: 26, md: 32, lg: 40 }),
  },
  h3: {
    fontWeight: 400,
    lineHeight: 1.2,
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ sm: 24, md: 30, lg: 35 }),
  },
  h4: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: pxToRem(22),
    ...responsiveFontSizes({ sm: 22, md: 26, lg: 30 }),
  },
  h5: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: pxToRem(20),
    ...responsiveFontSizes({ sm: 20, md: 22, lg: 24 }),
  },
  h6: {
    fontWeight: 400,
    lineHeight: 28 / 18,
    fontSize: pxToRem(16),
    ...responsiveFontSizes({ sm: 16, md: 18, lg: 20 }),
  },
  subtitle1: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: pxToRem(18),
    ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 }),
  },
  subtitle2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  body1: {
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  body2: {
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  caption: {
    lineHeight: 1.5,
    fontSize: pxToRem(12),
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    letterSpacing: 1.1,
    textTransform: "uppercase",
  },
  button: {
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: "capitalize",
  },
  inherit: {
    fontWeight: 400,
    lineHeight: 1.2,
    fontSize: pxToRem(26),
    ...responsiveFontSizes({ sm: 26, md: 30, lg: 34 }),
  },
  gutterBottom: {
    fontWeight: 400,
    lineHeight: 1.2,
    fontSize: pxToRem(18),
    ...responsiveFontSizes({ sm: 26, md: 30, lg: 34 }),
  },
};

export default typography;
