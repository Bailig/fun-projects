import { defaultTheme } from "@fun-projects/ui";
import { mergeDeepRight } from "ramda";
import React, { FC } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

const theme = mergeDeepRight(defaultTheme.systemUI, {
  colors: {
    blue: ["#F2F4F8", "#9DACC9", "#1A3263"],
    yellow: ["#ffffff", "#FDE3AB", "#FAB92B"],
    white: "#ffffff",
  },
  fontSizes: [14, 16, 24, 36, 48],
  fontWeights: [400, 800],
  shadows: [
    "0px 1px 1px rgba(0, 0, 0, 0.25)",
    "0px 4px 4px rgba(0, 0, 0, 0.25)",
  ],
  radii: 6,
});

export type Theme = typeof theme;

export const ThemeProvider: FC = ({ children }) => {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};
