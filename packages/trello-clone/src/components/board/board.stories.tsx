import React from "react";
import { ListCard } from "../list-card/list-card";
import { List } from "../list/list";
import { Board } from "./board";

const CARDS = ["buy bread", "pay bill", "see doctor", "see doctor"];

const LIST = {
  name: "todo",
  cards: CARDS,
};
const LIST2 = {
  name: "todo2",
  cards: [...CARDS, ...CARDS, ...CARDS],
};
const LISTS = [LIST2, LIST, LIST, LIST2, LIST, LIST, LIST2, LIST, LIST2, LIST];

export const Default = () => (
  <Board
    lists={LISTS.map((l) => (
      <List name={l.name}>
        {l.cards.map((t) => (
          <ListCard key={t} text={t} />
        ))}
      </List>
    ))}
  />
);

export default {
  title: "trello-clone/Board",
  component: Board,
  decorators: [
    (Story: any) => (
      <div
        style={{
          background: "lightblue",
          position: "relative",
          height: "80vh",
        }}
      >
        <Story />
      </div>
    ),
  ],
};
