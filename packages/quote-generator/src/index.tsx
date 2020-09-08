import React, { FC } from "react";

export interface QuoteProps {
  text: string;
  author: string;
  onNew?: () => void;
}

export const Quote: FC<QuoteProps> = ({ text, author, onNew = () => {} }) => {
  return (
    <>
      <>{text}</>
      <>{author}</>
      <button type="button" onClick={onNew}>
        New Quote
      </button>
    </>
  );
};

export default Quote;
