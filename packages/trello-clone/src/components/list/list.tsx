import { Add, DeleteOutline } from "@material-ui/icons";
import React, { FC, useRef, useState } from "react";
import { useClickAway } from "react-use";
import {
  ListButton,
  ListCards,
  ListFooter,
  ListHeader,
  ListRoot,
} from "./list.styled";

export interface ListProps {
  name: string;
  onNameUpdate?: (name: string) => void;
  onDelete?: () => void;
  onCardAdd?: (text: string) => void;
}

export const List: FC<ListProps> = (props) => {
  const { name, children, onNameUpdate, onDelete, onCardAdd } = props;
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [editingName, setEditingName] = useState(false);
  const [addingCard, setAddingCard] = useState(false);
  const [newName, setNewName] = useState(name);

  useClickAway(textAreaRef, () => setEditingName(false));

  const handleNameUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onNameUpdate) onNameUpdate(newName);
  };

  const handleCardAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onCardAdd) onCardAdd(e.currentTarget.querySelector("textarea")!.value);
  };

  return (
    <ListRoot>
      <ListHeader>
        {editingName ? (
          <form onSubmit={handleNameUpdate}>
            <textarea
              ref={textAreaRef}
              value={newName}
              onChange={(e) => setNewName(e.currentTarget.value)}
            />
          </form>
        ) : (
          <button
            type="button"
            onClick={() => {
              setNewName(name);
              setEditingName(true);
            }}
          >
            {name}
          </button>
        )}
      </ListHeader>
      <ListCards>
        {children}
        {addingCard && (
          <form onSubmit={handleCardAdd}>
            <textarea />
          </form>
        )}
      </ListCards>
      <ListFooter>
        <ListButton startIcon={<Add />} onClick={() => setAddingCard(true)}>
          add card
        </ListButton>
        <ListButton
          startIcon={<DeleteOutline />}
          onClick={() => onDelete && onDelete()}
        >
          delete list
        </ListButton>
      </ListFooter>
    </ListRoot>
  );
};
