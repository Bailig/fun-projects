import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
} from "@material-ui/core";
import React, { FC } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import "./css/index.css";

const theme = createMuiTheme();

export type Theme = typeof theme;

export const ThemeProvider: FC = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </MuiThemeProvider>
  );
};
