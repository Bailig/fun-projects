import { defaultTheme } from "@fun-projects/ui";
import { mergeDeepRight } from "ramda";
import React, { FC } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

const theme = mergeDeepRight(defaultTheme.systemUI, {
  colors: {
    blue: "#8ce1fc",
    yellow: "#fcca1d",
    purple: "#8C44FD",
    white: "#ffffff",
  },
  fontSizes: [18, 22, 28, 30, 36],
  shadows: [
    "1px 1px 4px rgba(0, 0, 0, 0.25)",
    "4px 4px 4px rgba(0, 0, 0, 0.25)",
  ],
});

export type Theme = typeof theme;

export const ThemeProvider: FC = ({ children }) => {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};
