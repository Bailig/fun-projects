import React, { FC, useState } from "react";
import { SliderRoot } from "./slider.styled";

export interface SliderProps {
  value?: number;
  defaultValue?: number;
  max?: number;
  min?: number;
  onChange?: (value: number) => void;
  onChangeCommitted?: (value: number) => void;
}

export const Slider: FC<SliderProps> = (props) => {
  const { min, max, value, onChange, onChangeCommitted } = props;
  const [defaultValue] = useState(() => props.defaultValue);

  return (
    <SliderRoot
      min={min}
      max={max}
      value={value}
      defaultValue={defaultValue}
      onChange={(_, newValue) => onChange && onChange(newValue as number)}
      onChangeCommitted={(_, newValue) =>
        onChangeCommitted && onChangeCommitted(newValue as number)
      }
    />
  );
};
