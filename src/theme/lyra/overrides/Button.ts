import { ButtonClasses, Theme, buttonClasses } from '@mui/material';
import { OverridesStyleRules } from '@mui/material/styles/overrides';
import { FontWeight } from './FontWeight';

interface ButtonClassesLocal extends ButtonClasses {
  containedBlack: string;
  containedWhite: string;
  outlinedWhite: string;
  outlinedBlack: string;
  containedDestructive: string;
}

type ReturnType = Partial<OverridesStyleRules<keyof ButtonClassesLocal, 'MuiButton'>>;

export const MuiButtonStyleOverrides = (theme: Theme): ReturnType => ({
  root: ({ ownerState }) => {
    return {
      textTransform: 'none',
      fontWeight: FontWeight.SemiBold,
      border:
        ownerState.color &&
        ['primary', 'black', 'white', 'destructive'].includes(ownerState.color) &&
        ownerState.variant &&
        ['contained', 'outlined'].includes(ownerState.variant)
          ? `${theme.spacing(0.125)} solid ${theme.palette[ownerState.color as 'primary']['main']}`
          : undefined,
      [`&.${buttonClasses.disabled}`]: {
        opacity: 0.38,
      },
      '&:hover': {
        boxShadow: ownerState.color && ['black', 'white'].includes(ownerState.color) ? 'none' : undefined,
      },
      '&:focus': {
        boxShadow: '0px 0px 0px 3px #6982C8',
      },
    };
  },
  containedBlack: {
    '&:hover': {
      border: `${theme.spacing(0.125)} solid ${theme.palette.common.black}`,
    },
  },
  containedDestructive: {
    '&:hover': {
      border: `${theme.spacing(0.125)} solid #930B17`,
      boxShadow: 'none',
    },
    '&:focus': {
      backgroundColor: '#AB0D1A',
    },
  },
  outlinedWhite: {
    '&:hover': {
      backgroundColor: '#FFFFFF1F',
    },
  },
  outlinedBlack: {
    '&:hover': {
      backgroundColor: '#0000001F',
    },
    '&:focus': {
      backgroundColor: '#0000000A',
    },
  },
  containedWhite: {
    '&:hover': {
      border: `${theme.spacing(0.125)} solid ${theme.palette.common.black}`,
    },
  },
  containedPrimary: {
    '&:hover': {
      backgroundColor: `${theme.palette.primary.dark}`,
      border: `${theme.spacing(0.125)} solid ${theme.palette.primary.dark}`,
      boxShadow: `0px ${theme.spacing(0.125)} ${theme.spacing(0.375)} 0px #00000033`,
    },
  },
  outlinedPrimary: {
    boxShadow: '0px 1px 3px 0px #00000033',
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
    '&:focus': {
      backgroundColor: theme.palette.primary.light,
    },
  },
  contained: ({ ownerState }) => ({
    boxShadow: '0px 1px 3px 0px #00000033',
    '&:focus': {
      border: `${theme.spacing(0.125)} solid ${theme.palette.common.black}`,
    },
  }),
  text: {
    textDecoration: 'underline',
  },
  sizeLarge: {
    height: theme.spacing(7.5),
    fontSize: 20,
    borderRadius: theme.spacing(3.75),
    padding: `${theme.spacing(2.5)} ${theme.spacing(4)}`,
    lineHeight: '20px',
  },
  sizeMedium: {
    height: theme.spacing(5),
    fontSize: 14,
    borderRadius: theme.spacing(2.5),
    padding: `${theme.spacing(1.375)} ${theme.spacing(2.5)}`,
    lineHeight: '18px',
  },
  iconSizeMedium: {
    width: 18,
    height: 18,
  },
  iconSizeLarge: {
    width: 20,
    height: 20,
  },
});
