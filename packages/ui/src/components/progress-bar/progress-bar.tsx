import React, { FC } from "react";
import { ProgressBarProgress, ProgressBarRoot } from "./progress-bar.styled";

export interface ProgressBarProps {
  value: number;
  disabled?: boolean;
  max?: number;
  className?: string;
  onClick?: (value: number) => void;
}

export const ProgressBar: FC<ProgressBarProps> = (props) => {
  const { value, disabled = false, max = 100, className, onClick } = props;

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (disabled || !onClick) return;
    const width = e.currentTarget.offsetWidth;
    const clickX = e.nativeEvent.offsetX;
    onClick((clickX / width) * max);
  };

  return (
    <ProgressBarRoot
      onClick={handleClick}
      role="progressbar"
      disabled={disabled}
      className={className}
    >
      <ProgressBarProgress
        style={{
          width: `${(value / max) * 100}%`,
        }}
      />
    </ProgressBarRoot>
  );
};
