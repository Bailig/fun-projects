import React, { FC } from "react";

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
    <div
      style={{
        height: 20,
        cursor: "pointer",
        border: "1px solid black",
      }}
      onClick={handleClick}
      role="progressbar"
    >
      <div
        style={{
          width: `${value * 100}%`,
          height: "100%",
          backgroundColor: "black",
        }}
      />
    </div>
  );
};
