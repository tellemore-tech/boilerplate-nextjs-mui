import { ThemeOptions } from '@mui/material/styles';
import { themeTypography } from './typographyOptions';
import { commonThemeOptions } from './commonOptions';
import { lightTheme } from './palette/lightThemePalette';
import { darkTheme } from './palette/darkThemePalette';

//add function for dark-mode
const currentThemeOptions = lightTheme;

const themeOptions: ThemeOptions = {
  palette: currentThemeOptions.palette,
  breakpoints: {
    values: commonThemeOptions.breakpoints?.values
  },
  shape: {
    borderRadius: commonThemeOptions.shape?.borderRadius,
  },
  typography: themeTypography.typography
};

export default themeOptions;