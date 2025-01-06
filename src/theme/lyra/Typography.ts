import { Theme } from '@mui/material';
import { FontWeight } from './FontWeight';
import { TypographyOptions } from '@mui/material/styles/createTypography';

const FONT_FAMILY = 'Unify Sans, Arial, Helvetica, sans-serif';
const HTML_FONT_SIZE = 16; // px
const FONT_SIZE = 14; // px

export const LyraTypography = (theme: Theme): TypographyOptions => ({
  fontFamily: FONT_FAMILY,
  fontWeightLight: FontWeight.Light,
  fontWeightRegular: FontWeight.Regular,
  fontWeightMedium: FontWeight.SemiBold,
  fontWeightBold: FontWeight.Bold,
  htmlFontSize: HTML_FONT_SIZE,
  fontSize: FONT_SIZE,
  body1: {
    fontSize: 16,
    fontWeight: FontWeight.Regular,
    lineHeight: '24px',
  },
  body2: {
    fontSize: 14,
    fontWeight: FontWeight.Regular,
    lineHeight: '20px',
  },
  h1: {
    fontSize: 36,
    lineHeight: '44px',
    fontWeight: FontWeight.SemiBold,
    [theme.breakpoints.up('lg')]: {
      fontSize: 44,
      lineHeight: '56px',
      fontWeight: FontWeight.SemiBold,
    },
  },
  h2: {
    fontSize: 28,
    lineHeight: '36px',
    fontWeight: FontWeight.SemiBold,
    [theme.breakpoints.up('lg')]: {
      fontSize: 40,
      lineHeight: '52px',
      fontWeight: FontWeight.SemiBold,
    },
  },
  h3: {
    fontSize: 24,
    lineHeight: '32px',
    fontWeight: FontWeight.SemiBold,
    [theme.breakpoints.up('lg')]: {
      fontSize: 32,
      lineHeight: '40px',
      fontWeight: FontWeight.SemiBold,
    },
  },
  h4: {
    fontSize: 20,
    lineHeight: '28px',
    fontWeight: FontWeight.SemiBold,
    [theme.breakpoints.up('lg')]: {
      fontSize: 24,
      lineHeight: '32px',
      fontWeight: FontWeight.SemiBold,
    },
  },
  h5: {
    fontSize: 18,
    lineHeight: '24px',
    fontWeight: FontWeight.SemiBold,
    [theme.breakpoints.up('lg')]: {
      fontSize: 20,
      lineHeight: '28px',
      fontWeight: FontWeight.SemiBold,
    },
  },
  h6: {
    fontSize: 16,
    lineHeight: '20px',
    fontWeight: FontWeight.SemiBold,
  },
  button: {
    fontSize: 14,
    fontWeight: FontWeight.SemiBold,
    lineHeight: '20px',
  },
  caption: {
    fontSize: 12,
    fontWeight: FontWeight.Regular,
    lineHeight: '20px',
  },
  overline: {
    fontSize: 12,
    fontWeight: FontWeight.SemiBold,
    lineHeight: '16px',
  },
});
