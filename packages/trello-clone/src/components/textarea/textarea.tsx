import { TextareaAutosizeProps } from "@material-ui/core";
import React, { forwardRef } from "react";
import { TextareaRoot } from "./textarea.styled";

export interface TextareaProps
  extends Pick<
    TextareaAutosizeProps,
    | "rowsMax"
    | "rowsMin"
    | "defaultValue"
    | "onChange"
    | "rows"
    | "value"
    | "style"
  > {
  onEnter?: () => void;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    const {
      rows,
      rowsMax,
      rowsMin,
      value,
      defaultValue,
      style,
      onEnter,
      onChange,
    } = props;

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter") {
        e.preventDefault();
        if (onEnter) onEnter();
      }
    };

    return (
      <TextareaRoot
        ref={ref}
        autoFocus
        style={style}
        rows={rows}
        rowsMax={rowsMax}
        rowsMin={rowsMin}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        onFocus={(e) => e.currentTarget.select()}
        onKeyDown={handleKeyDown}
      />
    );
  },
);
