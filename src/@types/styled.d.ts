import "styled-components";
import { defaultTheme } from "../styles/Themes/default";

type ThemeType = typeof defaultTheme;

declare module 'styles-components' {
    export interface DefaultTheme extends ThemeType {}
}