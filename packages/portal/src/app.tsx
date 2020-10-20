import React, { FC } from "react";
import { SWRConfig } from "swr";
import { GlobalStyle } from "./global-styles";
import { Routes } from "./routes";
import { ThemeProvider } from "./theme-provider";

export const App: FC = () => (
  <ThemeProvider>
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        fetcher: (...args: Parameters<typeof fetch>) =>
          fetch(...args).then((res) => res.json()),
      }}
    >
      <GlobalStyle />
      <Routes />
    </SWRConfig>
  </ThemeProvider>
);
