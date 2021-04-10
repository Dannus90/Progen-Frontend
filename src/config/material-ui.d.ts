// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Theme, ThemeOptions } from "@material-ui/core/styles/createMuiTheme";

declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme {
    custom: {
      palette: {
        lightBackground: {
          main: string;
        };
        textVariantDark: {
          main: string;
          medium?: string;
          light: string;
        };
        textVariantGrey: {
          main: string;
          light: string;
        };
      };
    };
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    custom?: {
      palette?: {
        lightBackground?: {
          main?: string;
        };
        textVariantDark?: {
          main?: string;
          medium?: string;
          light?: string;
        };
        textVariantGrey?: {
          main?: string;
          light?: string;
        };
      };
      borderColors: {
        subtleGreyMain?: string;
      };
    };
  }
}
