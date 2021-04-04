import { mainTheme } from "./index";
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
  textColorDarkLight: "#505050",
  textColorGreyPrimary: "#909090",
  textColorGreyLight: "#888",
  lightBackgroundPrimary: "#fff"
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
        light: defaultColors.textColorDarkLight
      },
      textVariantGrey: {
        main: defaultColors.textColorGreyPrimary,
        light: defaultColors.textColorGreyLight
      }
    }
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          WebkitFontSmoothing: "auto"
        },
        body: {
          letterSpacing: "0.075rem",
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
