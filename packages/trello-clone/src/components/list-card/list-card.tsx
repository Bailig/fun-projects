import React, { FC, useEffect, useRef, useState } from "react";
import { useMeasure } from "react-use";
import { Textarea } from "../textarea/textarea";
import { ListCardRoot, PopoverRoot } from "./list-card.styled";

export interface ItemCardProps {
  text?: string;
  onUpdate?: (text: string) => void;
  onDelete?: () => void;
}

export const ListCard: FC<ItemCardProps> = (props) => {
  const { text = "", onUpdate, onDelete } = props;
  const rootRef = useRef<HTMLDivElement>(null);
  const [editing, setEditing] = useState(false);
  const [newText, setNewText] = useState(text);
  const [setRef, { width }] = useMeasure();

  useEffect(() => {
    if (!rootRef.current) return;
    setRef(rootRef.current as any);
  });

  const handleUpdate = () => {
    if (onUpdate) onUpdate(newText);
    setEditing(false);
  };

  return (
    <>
      <ListCardRoot
        ref={rootRef}
        onClick={() => {
          setNewText(text);
          setEditing(true);
        }}
      >
        {text}
      </ListCardRoot>
      <PopoverRoot
        open={editing}
        anchorEl={rootRef.current}
        onClose={() => setEditing(false)}
      >
        <div style={{ width }}>
          <Textarea
            value={newText}
            style={{ width: "100%" }}
            onChange={(e) => setNewText(e.currentTarget.value)}
            onEnter={handleUpdate}
          />
          <button type="button" onClick={handleUpdate}>
            save
          </button>
          <button type="button" onClick={() => setEditing(false)}>
            cancel
          </button>
          <button
            type="button"
            onClick={() => {
              if (onDelete) onDelete();
              setEditing(false);
            }}
          >
            delete
          </button>
        </div>
      </PopoverRoot>
    </>
  );
};
