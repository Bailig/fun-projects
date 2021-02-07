import React, { useState } from "react";
import { ThemeProvider } from "../../styles";
import { Slider } from "./slider";

export const Default = () => <Slider />;
export const WidthValue = () => {
  const [value, setValue] = useState(50);
  return (
    <Slider value={value} min={0} max={100} onChange={(v) => setValue(v)} />
  );
};

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
