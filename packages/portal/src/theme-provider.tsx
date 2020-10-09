import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
} from "@material-ui/core";
import React, { FC } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

const defaultTheme = createMuiTheme();

interface ThemeProviderProps {
  theme?: Record<string, any>;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
  theme = defaultTheme,
  children,
}) => {
  return (
    <MuiThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </MuiThemeProvider>
  );
};
