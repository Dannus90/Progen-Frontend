/**
 * Merging theme.
 *
 * @author Daniel Persson
 * @version 1.0.0
 */

import { theme } from "./Theme";
import { overrides } from "./Overrides";

export const mainTheme = Object.assign(theme, overrides);

export type MainTheme = typeof mainTheme;
