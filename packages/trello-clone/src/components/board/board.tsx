import React, { FC, ReactNode } from "react";
import { BoardRoot, ListWrapper } from "./board.styled";

export interface BoardProps {
  lists: ReactNode[];
  onListAdd?: () => void;
}

export const Board: FC<BoardProps> = (props) => {
  const { lists } = props;
  return (
    <BoardRoot>
      {lists.map((list) => (
        <ListWrapper>{list}</ListWrapper>
      ))}
    </BoardRoot>
  );
};
