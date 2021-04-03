import { theme } from "./Theme";
import { themeColors } from "./ThemeColors";

export const mainTheme = Object.assign(theme, themeColors);

export type MainTheme = typeof mainTheme;
