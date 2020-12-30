import { ThemeProvider } from "@fun-projects/ui";
import React, { FC } from "react";
import { SWRConfig } from "swr";
import { Routes } from "./routes";

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
