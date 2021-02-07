import React from "react";
import { ThemeProvider } from "../../styles";
import { Button } from "./button";

export const States = () => (
  <>
    default:
    <Button>Click</Button>
    active:
    <Button active>Click</Button>
    disabled:
    <Button disabled>Click</Button>
    white:
    <Button color="white">Click</Button>
    white and active:
    <Button active color="white">
      Click
    </Button>
    white and disabled:
    <Button disabled color="white">
      Click
    </Button>
    outlined white:
    <Button variant="outlined" color="white">
      Click
    </Button>
    outlined white and active:
    <Button variant="outlined" active color="white">
      Click
    </Button>
    outlined white and disabled:
    <Button variant="outlined" disabled color="white">
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
