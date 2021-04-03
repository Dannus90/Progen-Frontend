/**
 * Material UI theming and overrides.
 *
 * @author Daniel Persson
 * @version 1.0.0
 */

import { createMuiTheme } from "@material-ui/core";

const defaultColors = {
  colorPrimary: "#26A69A",
  colorPrimaryLight: "#26C0B2",
  colorSecondary: "#445E93",
  colorSecondaryLight: "#102927"
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
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          WebkitFontSmoothing: "auto"
        },
        body: {
          letterSpacing: "0.075rem"
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
    }
  }
});
