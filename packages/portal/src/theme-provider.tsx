import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
} from "@material-ui/core";
import React, { FC } from "react";

const defaultTheme = createMuiTheme();

interface ThemeProviderProps {
  theme?: Record<string, any>;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ theme, children }) => {
  return (
    <MuiThemeProvider theme={theme || defaultTheme}>
      {children}
    </MuiThemeProvider>
  );
};
