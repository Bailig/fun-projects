import React, { FC, useState } from "react";
import { Board, List, ListCard } from "../components";
import * as modules from "../modules";

const CARDS: modules.ListCard[] = [
  { id: "1", text: "buy bread" },
  { id: "2", text: "buy bread" },
  { id: "3", text: "buy bread" },
  { id: "4", text: "buy bread" },
];

const LIST: modules.List = {
  id: "1",
  name: "todo",
  cards: CARDS,
};
const LIST2: modules.List = {
  id: "1",
  name: "todo2",
  cards: [...CARDS, ...CARDS, ...CARDS],
};
const LISTS = [LIST2, LIST, LIST, LIST2, LIST, LIST, LIST2, LIST, LIST2, LIST];

export const TrelloClone: FC = () => {
  const [lists, setLists] = useState<modules.List[]>(LISTS);

  return (
    <Board
      lists={lists.map((list) => (
        <List name={list.name}>
          {list.cards.map((card) => (
            <ListCard text={card.text} />
          ))}
        </List>
      ))}
    />
  );
};
