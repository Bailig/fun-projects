import React, { FC } from "react";
import { GlobalStyle } from "./global-styles";
import { Routes } from "./routes";

export const App: FC = () => (
  <>
    <GlobalStyle />
    <Routes />
  </>
);
