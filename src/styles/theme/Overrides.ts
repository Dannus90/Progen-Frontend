/**
 * Material UI theming and overrides.
 *
 * @author Daniel Persson
 * @version 1.0.0
 */

import { createMuiTheme, ThemeOptions } from "@material-ui/core";

const defaultColors = {
  colorPrimary: "#26A69A",
  colorPrimaryLight: "#26C0B2",
  colorSecondary: "#445E93",
  colorSecondaryLight: "#102927",
  textColorDarkPrimary: "#212529",
  textColorDarkDark: "#000",
  textColorDarkLight: "#505050",
  textColorDarkMedium: "#3A3B3F",
  textColorGreyPrimary: "#909090",
  textColorGreyLight: "#9EA0A5",
  textColorGreyDark: "#4c4e4f",
  lightBackgroundPrimary: "#fff",
  subtleBorderColorGrey: "#E4E7EB",
  listItemStyleMain: "#66788A",
  lightPurple: "#425A70"
};

// Incase we want to override some material ui theme styles it is done here.
export const overrides = createMuiTheme({
  palette: {
    primary: {
      main: defaultColors.colorPrimary,
      light: defaultColors.colorPrimaryLight
    },
    secondary: {
      main: defaultColors.colorSecondary,
      light: defaultColors.colorSecondaryLight
    }
  },
  custom: {
    palette: {
      lightBackground: {
        main: defaultColors.lightBackgroundPrimary
      },
      textVariantDark: {
        main: defaultColors.textColorDarkPrimary,
        dark: defaultColors.textColorDarkDark,
        medium: defaultColors.textColorDarkMedium,
        light: defaultColors.textColorDarkLight
      },
      textVariantGrey: {
        main: defaultColors.textColorGreyPrimary,
        light: defaultColors.textColorGreyLight,
        dark: defaultColors.textColorGreyDark
      },
      listItemStyle: {
        main: defaultColors.listItemStyleMain
      },
      textVariantCustom: {
        lightPurple: defaultColors.lightPurple
      }
    },
    borderColors: {
      subtleGreyMain: `1px solid ${defaultColors.subtleBorderColorGrey}`,
      subtleGreyMedium: `2px solid ${defaultColors.subtleBorderColorGrey}`,
      subtleGreyFat: `3px solid ${defaultColors.subtleBorderColorGrey}`
    }
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          WebkitFontSmoothing: "auto"
        },
        body: {
          letterSpacing: "0.1rem",
          color: "#212529"
        },
        a: {
          textDecoration: "none"
        }
      }
    },
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        color: "#fff"
      }
    },
    MuiPaper: {
      root: {
        color: "#212529"
      }
    }
  }
} as ThemeOptions);
