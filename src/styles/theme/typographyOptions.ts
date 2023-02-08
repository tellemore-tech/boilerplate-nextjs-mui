import { ThemeOptions } from '@mui/material/styles';
import { createTheme } from "@mui/material";

const fontFamily = [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(',');

const defaultTheme = createTheme();

export const themeTypography : ThemeOptions = {
    typography: {
        fontFamily: fontFamily,
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        h1: {
          fontFamily: fontFamily,
          fontSize: 'clamp(2.625rem, 1.2857rem + 3.5714vw, 4rem)',
          fontWeight: 800,
          lineHeight: 78 / 70,
        },
        h2: {
          fontFamily: fontFamily,
          fontSize: 'clamp(1.5rem, 0.9643rem + 1.4286vw, 2.25rem)',
          fontWeight: 800,
          lineHeight: 44 / 36,
        },
        h3: {
          fontFamily: fontFamily,
          fontSize: defaultTheme.typography.pxToRem(36),
          lineHeight: 44 / 36,
          letterSpacing: 0.2,
        },
        h4: {
          fontFamily: fontFamily,
          fontSize: defaultTheme.typography.pxToRem(28),
          lineHeight: 42 / 28,
          letterSpacing: 0.2,
        },
        h5: {
          fontFamily: fontFamily,
          fontSize: defaultTheme.typography.pxToRem(24),
          lineHeight: 36 / 24,
          letterSpacing: 0.1,
        },
        h6: {
          fontSize: defaultTheme.typography.pxToRem(20),
          lineHeight: 30 / 20,
        },
        button: {
          textTransform: 'initial',
          fontWeight: 700,
          letterSpacing: 0,
        },
        subtitle1: {
          fontSize: defaultTheme.typography.pxToRem(18),
          lineHeight: 24 / 18,
          letterSpacing: 0,
          fontWeight: 500,
        },
        body1: {
          fontSize: defaultTheme.typography.pxToRem(16),
          lineHeight: 24 / 16,
          letterSpacing: 0,
        },
        body2: {
          fontSize: defaultTheme.typography.pxToRem(14),
          lineHeight: 21 / 14,
          letterSpacing: 0,
        },
        caption: {
          display: 'inline-block',
          fontSize: defaultTheme.typography.pxToRem(12),
          lineHeight: 18 / 12,
          letterSpacing: 0,
          fontWeight: 700,
        },
    }      
}