import React from "react";
import { Textarea } from "./textarea";

export const Default = () => <Textarea rows={4} rowsMax={6} />;

export default {
  title: "trello-clone/Textarea",
  component: Textarea,
  decorators: [
    (Story: any) => (
      <div style={{ padding: 32, background: "lightblue" }}>
        <Story />
      </div>
    ),
  ],
};
