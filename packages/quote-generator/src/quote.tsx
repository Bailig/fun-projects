import React, { FC } from "react";

export interface QuoteProps {
  text: string;
  author: string;
  onNew?: () => void;
}

export const Quote: FC<QuoteProps> = ({ text, author, onNew = () => {} }) => {
  return (
    <>
      <div>{text}</div>
      <div>{author}</div>
      <button type="button" onClick={onNew}>
        New Quote
      </button>
    </>
  );
};
