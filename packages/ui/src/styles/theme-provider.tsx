import { ThemeProvider as MuiThemeProvider } from "@material-ui/core";
import React, { FC } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import "./css/index.css";
import { defaultTheme } from "./theme";

interface ThemeProviderProps {
  theme?: {
    mui: Record<string, any>;
    systemUI: Record<string, any>;
  };
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
  theme = defaultTheme,
  children,
}) => {
  return (
    <MuiThemeProvider theme={theme.mui}>
      <StyledThemeProvider theme={theme.systemUI as any}>
        {children}
      </StyledThemeProvider>
    </MuiThemeProvider>
  );
};
