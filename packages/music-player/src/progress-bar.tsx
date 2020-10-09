import React, { FC } from "react";
import { ProgressBarProgress, ProgressBarRoot } from "./progress-bar.styled";

interface ProgressBarProps {
  value: number;
  onClick?: (value: number) => void;
}

export const ProgressBar: FC<ProgressBarProps> = (props) => {
  const { value, onClick } = props;

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!onClick) return;
    const width = e.currentTarget.offsetWidth;
    const clickX = e.nativeEvent.offsetX;
    onClick(clickX / width);
  };

  return (
    <ProgressBarRoot onClick={handleClick} role="progressbar">
      <ProgressBarProgress
        style={{
          width: `${value * 100}%`,
        }}
      />
    </ProgressBarRoot>
  );
};
