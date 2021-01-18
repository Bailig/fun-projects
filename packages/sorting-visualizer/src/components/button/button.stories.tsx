import React from "react";
import { ThemeProvider } from "../../styles";
import { Button } from "./button";

export const States = () => (
  <>
    <Button>Click</Button>
    <Button active>Click</Button>
    <Button disabled>Click</Button>
    <Button color="yellow">Click</Button>
    <Button active color="yellow">
      Click
    </Button>
    <Button disabled color="yellow">
      Click
    </Button>
  </>
);

export default {
  title: "sorting-visualizer/Button",
  component: Button,
  decorators: [
    (Story: any) => (
      <ThemeProvider>
        <div style={{ display: "grid", gap: 8, justifyContent: "start" }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};
