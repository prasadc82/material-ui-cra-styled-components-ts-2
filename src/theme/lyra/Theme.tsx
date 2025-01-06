import { createTheme } from '@mui/material';
import { LyraTypography } from './Typography';
import { MuiButtonStyleOverrides } from './overrides/Button';

export const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
};

const rawThemeWithPallete = createTheme({
  breakpoints: { values: { ...breakpoints.values } },
  palette: {
    primary: { main: '#0046FE', light: '#DAE4FF' },
    grey: {
      50: '#F2F3F5', // extra light gray
      100: '#D7DAE0', // light gray
      400: '#A1A5B2', // neutral gray
      500: '#5E6373', // mid gray
      900: '#1E2129', // dark gray
    },
    common: {
      black: '#000000',
      white: '#FFFFFF',
    },
    success: {
      main: '#009E84',
    },
    error: {
      main: '#D7004B',
    },
    info: {
      main: '#7826EC',
    },
    warning: {
      main: '#FA6323',
    },
    background: {
      default: 'white',
      paper: 'white',
    },
    action: {
      active: '#0046FE',
      hover: '#0046FE',
      hoverOpacity: 0.12,
      selected: '#0046FE',
      selectedOpacity: 0.16,
      // disabled: 'string',
      // disabledOpacity: 0,
      // disabledBackground: 'string',
      focus: '#0046FE',
      focusOpacity: 0.16,
      activatedOpacity: 0.2,
    },
  },

});

export const LyraTheme = createTheme({
  breakpoints: { values: { ...breakpoints.values } },
  typography: { ...LyraTypography(createTheme({ breakpoints })) },
  palette: {
    primary: { main: '#0046FE', light: '#DAE4FF' },
    grey: {
      50: '#F2F3F5', // extra light gray
      100: '#D7DAE0', // light gray
      400: '#A1A5B2', // neutral gray
      500: '#5E6373', // mid gray
      900: '#1E2129', // dark gray
    },
    common: {
      black: '#000000',
      white: '#FFFFFF',
    },
    success: {
      main: '#009E84',
    },
    error: {
      main: '#D7004B',
    },
    info: {
      main: '#7826EC',
    },
    warning: {
      main: '#FA6323',
    },
    background: {
      default: 'white',
      paper: 'white',
    },
    action: {
      active: '#0046FE',
      hover: '#0046FE',
      hoverOpacity: 0.12,
      selected: '#0046FE',
      selectedOpacity: 0.16,
      // disabled: 'string',
      // disabledOpacity: 0,
      // disabledBackground: 'string',
      focus: '#0046FE',
      focusOpacity: 0.16,
      activatedOpacity: 0.2,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        ...MuiButtonStyleOverrides(rawThemeWithPallete),
      },
    },
  }
});
