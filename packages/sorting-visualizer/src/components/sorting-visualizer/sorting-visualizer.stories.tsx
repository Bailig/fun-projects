import React from "react";
import { ThemeProvider } from "../../styles";
import { BarChart } from "../bar-chart/bar-chart";
import { SortingVisualizer } from "./sorting-visualizer";

export const Default = () => {
  return (
    <SortingVisualizer chart={<BarChart numbers={[5, 3, 2, 7, 2, 6]} />} />
  );
};

export default {
  title: "sorting-visualizer/SortingVisualizer",
  component: SortingVisualizer,
  decorators: [
    (Story: any) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};
