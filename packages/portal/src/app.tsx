import React, { FC } from "react";
import { SWRConfig } from "swr";
import "./global-styles.css";
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
      <Routes />
    </SWRConfig>
  </ThemeProvider>
);
