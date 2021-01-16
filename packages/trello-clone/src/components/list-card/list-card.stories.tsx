import React from "react";
import { ListCard } from "./list-card";

export const Default = () => <ListCard text="This is a todo" />;

export default {
  title: "trello-clone/ListCard",
  component: ListCard,
  decorators: [
    (Story: any) => (
      <div style={{ padding: 100, background: "lightblue" }}>
        <Story />
      </div>
    ),
  ],
};
