import { defaultTheme } from "@fun-projects/ui";
import { mergeDeepRight } from "ramda";
import React, { FC } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { Base } from "./base.styled";

const theme = mergeDeepRight(defaultTheme.systemUI, {
  colors: {
    primary: "#FFB79F",
    white: "#F6F5F5",
    black: "#333333",
  },
  fontSizes: [14, 16, 24, 36, 48],
  fontWeights: [400, 800],
  shadows: [
    "0px 0px 25px rgba(0, 0, 0, 0.12), -3px -3px 10px rgba(255, 255, 255, 0.9), 3px 3px 10px rgba(136, 160, 183, 0.25)",
  ],
  radii: 12,
  button: {
    shadows: {
      default:
        "0px 0px 10px rgba(0, 0, 0, 0.12), -3px -3px 10px rgba(255, 255, 255, 0.9), 3px 3px 8px rgba(136, 160, 183, 0.25)",
      hover:
        "0px 0px 10px rgba(0, 0, 0, 0.3), -3px -3px 10px rgba(255, 255, 255, 0.9), 3px 3px 8px rgba(136, 160, 183, 0.25)",
      active:
        "inset 0px 0px 4px rgba(0, 0, 0, 0.06), inset -5px -5px 15px rgba(255, 255, 255, 0.5), inset 5px 5px 15px rgba(136, 160, 183, 0.25)",
    },
  },
});

export type Theme = typeof theme;

export const ThemeProvider: FC = ({ children }) => {
  return (
    <StyledThemeProvider theme={theme}>
      <Base>{children}</Base>
    </StyledThemeProvider>
  );
};
