import React from "react";
import { ThemeProvider } from "../../styles";
import { Slider } from "./slider";

export const Default = () => <Slider />;

export default {
  title: "sorting-visualizer/Slider",
  component: Slider,
  decorators: [
    (Story: any) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};
