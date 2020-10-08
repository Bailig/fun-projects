import React, { FC } from "react";
import { GlobalStyle } from "./global-styles";
import { Routes } from "./routes";
import { ThemeProvider } from "./theme-provider";

export const App: FC = () => (
  <ThemeProvider>
    <GlobalStyle />
    <Routes />
  </ThemeProvider>
);
