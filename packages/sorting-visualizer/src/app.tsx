import React, { FC } from "react";
import { SortingVisualizerContainer } from "./containers/sorting-visualizer";
import { ThemeProvider } from "./styles";

export const App: FC = () => {
  return (
    <ThemeProvider>
      <SortingVisualizerContainer />
    </ThemeProvider>
  );
};
