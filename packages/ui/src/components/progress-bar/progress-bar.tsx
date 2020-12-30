import React, { FC } from "react";
import { ProgressBarProgress, ProgressBarRoot } from "./progress-bar.styled";

export interface ProgressBarProps {
  value: number;
  className?: string;
  onClick?: (value: number) => void;
}

export const ProgressBar: FC<ProgressBarProps> = (props) => {
  const { value, className, onClick } = props;

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!onClick) return;
    const width = e.currentTarget.offsetWidth;
    const clickX = e.nativeEvent.offsetX;
    onClick(clickX / width);
  };

  return (
    <ProgressBarRoot
      onClick={handleClick}
      role="progressbar"
      className={className}
    >
      <ProgressBarProgress
        style={{
          width: `${value * 100}%`,
        }}
      />
    </ProgressBarRoot>
  );
};
