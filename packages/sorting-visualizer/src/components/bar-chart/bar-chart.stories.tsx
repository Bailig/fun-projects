import React from "react";
import { ThemeProvider } from "../../styles";
import { BarChart } from "./bar-chart";

export const Default = () => <BarChart numbers={[12, 65, 2, 45, 53]} />;

export default {
  title: "sorting-visualizer/BarChart",
  component: BarChart,
  decorators: [
    (Story: any) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};
