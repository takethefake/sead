import * as styledComponents from "styled-components";
import * as variables from "./variables";

type Theme = typeof variables;
export type SelectedTheme = Theme & { baseFontSize: number };
const theme: Theme = variables;

const {
    default: styled,
    createGlobalStyle,
    css,
    keyframes,
    ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
    SelectedTheme
>;

export { styled, css, keyframes, ThemeProvider, createGlobalStyle, theme };
