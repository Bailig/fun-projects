import React from "react";
import { ListCard } from "../list-card/list-card";
import { List } from "./list";

const TODOS = [
  "buy bread",
  "pay bill",
  "see doctor",
  "see doctor",
  "see doctor",
  "see doctor",
  "see doctor",
  "see doctor",
];

export const Default = () => (
  <List name="todo">
    {TODOS.map((t) => (
      <ListCard key={t} text={t} />
    ))}
  </List>
);

export default {
  title: "trello-clone/List",
  component: List,
  decorators: [
    (Story: any) => (
      <div
        style={{
          height: "80vh",
          padding: 32,
          background: "lightblue",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <Story />
      </div>
    ),
  ],
};
