import React, { FC } from "react";
import { SLider as SliderStyled } from "./slider.styled";

export interface SliderProps {
  value?: number;
  max?: number;
  min?: number;
  onChange?: (value: number) => void;
  onChangeCommitted?: (value: number) => void;
}

export const Slider: FC<SliderProps> = (props) => {
  const { min, max, value, onChange, onChangeCommitted } = props;

  return (
    <SliderStyled
      min={min}
      max={max}
      value={value}
      onChange={(_, newValue) => onChange && onChange(newValue as number)}
      onChangeCommitted={(_, newValue) =>
        onChangeCommitted && onChangeCommitted(newValue as number)
      }
    />
  );
};
