import React from "react";
import { ThemeProvider } from "../../styles";
import { BarChart } from "../bar-chart/bar-chart";
import { Button } from "../button/button";
import { SortingVisualizer } from "./sorting-visualizer";

const buttons = ["bubble", "selection", "merge", "quick"];

export const Default = () => {
  return (
    <SortingVisualizer
      chart={<BarChart numbers={[5, 3, 2, 7, 2, 6, 2, 6, 3, 8, 3]} />}
      buttons={buttons.map((b) => (
        <Button key={b}>{b}</Button>
      ))}
    />
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
