import React from "react";
import { ThemeProvider } from "../../styles";
import { Base } from "../../styles/base.styled";
import { Button } from "./button";

export const Default = () => <Button>Click</Button>;
export const Active = () => <Button active>Click</Button>;

export default {
  title: "sorting-visualizer/Button",
  component: Button,
  decorators: [
    (Story: any) => (
      <ThemeProvider>
        <Base>
          <Story />
        </Base>
      </ThemeProvider>
    ),
  ],
};
