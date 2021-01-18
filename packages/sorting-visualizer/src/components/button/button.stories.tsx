import React from "react";
import { ThemeProvider } from "../../styles";
import { Button } from "./button";

export const Default = () => <Button>Click</Button>;
export const Active = () => <Button active>Click</Button>;

export default {
  title: "sorting-visualizer/Button",
  component: Button,
  decorators: [
    (Story: any) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};