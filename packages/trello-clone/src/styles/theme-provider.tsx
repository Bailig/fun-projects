import { defaultTheme } from "@fun-projects/ui";
import { mergeDeepRight } from "ramda";
import React, { FC } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

const theme = mergeDeepRight(defaultTheme.systemUI, {
  colors: {
    white: "#ffffff",
  },
});

export type Theme = typeof theme;

export const ThemeProvider: FC = ({ children }) => {
  return (
    <StyledThemeProvider theme={theme as any}>{children}</StyledThemeProvider>
  );
};
